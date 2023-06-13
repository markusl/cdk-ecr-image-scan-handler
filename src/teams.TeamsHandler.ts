import * as ECR from '@aws-sdk/client-ecr';
import type * as AWSLambda from 'aws-lambda';
import fetch from 'node-fetch';

const ecr = new ECR.ECRClient({});
const region = process.env.AWS_REGION ?? 'us-east-1';

interface TeamsSectionFact {
  name: string;
  value: string;
}

interface TeamsSection {
  activityTitle: string;
  activitySubtitle: string;
  facts: TeamsSectionFact[];
  markdown: boolean;
}

export const toTeamsSection = (finding: ECR.ImageScanFinding): TeamsSection => {
  const getPackageName = () => {
    const name = finding.attributes?.find((a) => a.key === 'package_name');
    const version = finding.attributes?.find((a) => a.key === 'package_version');
    if (name && version) {
      return `${name.value}-${version.value}`;
    }
    return finding.name;
  };
  return {
    activityTitle: `${getPackageName()} (${finding.severity})`,
    activitySubtitle: `[${finding.name}](${finding.uri})`,
    facts: [{
      name: 'Description',
      value: finding.description ?? '',
    }],
    markdown: true,
  };
};

// See https://docs.microsoft.com/en-us/outlook/actionable-messages/send-via-connectors
export const getTeamsMessage = (sections: TeamsSection[], findings: ECR.ImageScanFinding[], repositoryName: string) => {
  return {
    '@type': 'MessageCard',
    '@context': 'http://schema.org/extensions',
    'title': `${repositoryName} scan completed with ${findings.length} findings`,
    'summary': `${repositoryName} scan completed with ${findings.length} findings`,
    'themeColor': '0076D7',
    sections,
    'potentialAction': [{
      '@type': 'OpenUri',
      'name': `Inspect findings for ${repositoryName} in AWS Console`,
      'targets': [
        {
          os: 'default',
          uri: `https://${region}.console.aws.amazon.com/ecr/repositories/${repositoryName}/?region=${region}`,
        },
      ],
    }],
  };
};

export const getTeamsMessageFromFindings = (findings: ECR.ImageScanFinding[], repositoryName: string) => {
  const sections = findings.slice(0, 5).map(toTeamsSection);
  console.log(sections);
  return getTeamsMessage(sections, findings, repositoryName);
};

export const handler = async (event: AWSLambda.SNSEvent) => {
  console.log(JSON.stringify(event, undefined, 2));

  if (!process.env.WEBHOOK_URL) {
    throw new Error('WEBHOOK_URL must be provided');
  }

  const imageScanCompletedEvent = JSON.parse(event.Records[0].Sns.Message);
  const repositoryName = imageScanCompletedEvent.detail['repository-name'];
  const imageDigest = imageScanCompletedEvent.detail['image-digest'];

  const params = new ECR.DescribeImageScanFindingsCommand({
    imageId: {
      imageDigest,
    },
    repositoryName,
  });
  const findingsResult = await ecr.send(params);
  if (!findingsResult.imageScanFindings) {
    throw new Error(JSON.stringify('imageScanFindings was undefined'));
  }
  const findings = findingsResult.imageScanFindings.findings;
  if (!findings) {
    console.log(`No image scan findings for ${findingsResult.repositoryName}`);
    return;
  }

  const amountOfFindings = findings.length;
  if (amountOfFindings > 0) {
    const response = await fetch(process.env.WEBHOOK_URL, {
      method: 'POST',
      body: JSON.stringify(getTeamsMessageFromFindings(findings, repositoryName)),
    });
    console.log(await response.text());
  }
};
