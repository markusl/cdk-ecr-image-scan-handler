import * as AWS from 'aws-sdk';
import fetch from 'node-fetch';
const ecr = new AWS.ECR();

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

export const toTeamsSection = (finding: AWS.ECR.ImageScanFinding): TeamsSection => {
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
}

// See https://docs.microsoft.com/en-us/outlook/actionable-messages/send-via-connectors
export const getTeamsMessage = (sections: TeamsSection[], repositoryName: string) => {
  return {
    '@type': 'MessageCard',
    '@context': 'http://schema.org/extensions',
    'title': `${repositoryName} ECR image scan results`,
    'summary': `${repositoryName} ECR image scan results`,
    'themeColor': '0076D7',
    sections,
    'potentialAction': [{
      '@type': 'OpenUri',
      'name': 'See in ECR',
      'targets': [
        {
          os: 'default',
          uri: `https://eu-central-1.console.aws.amazon.com/ecr/repositories/${repositoryName}/?region=eu-central-1`,
        },
      ],
    }],
  };
}

export const getTeamsMessageFromFindings = (findings: AWS.ECR.ImageScanFindingList, repositoryName: string) => {
  const sections = findings.map(toTeamsSection);
  console.log(sections);
  return getTeamsMessage(sections, repositoryName);
}

exports.handler = async (event: any) => {
  console.log(JSON.stringify(event, undefined, 2));

  if (!process.env.WEBHOOK_URL) {
    throw new Error('WEBHOOK_URL must be provided');
  }

  const imageScanCompletedEvent = JSON.parse(event.Records[0].Sns.Message);
  const repositoryName = imageScanCompletedEvent.detail['repository-name'];
  const params = {
    imageId: {
      imageTag: 'latest',
    },
    repositoryName,
  };
  const findingsResult = await ecr.describeImageScanFindings(params).promise();
  if (findingsResult.$response.error || !findingsResult.imageScanFindings) {
    throw new Error(JSON.stringify(findingsResult.$response.error));
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
