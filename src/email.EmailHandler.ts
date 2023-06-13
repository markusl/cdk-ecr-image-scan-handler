import * as ECR from '@aws-sdk/client-ecr';
import type * as AWSLambda from 'aws-lambda';
import { sendEmail } from './lambda/sendEmail';

const ecr = new ECR.ECRClient({});

export const handler = async (event: AWSLambda.SNSEvent) => {
  console.log(JSON.stringify(event, undefined, 2));
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
    const summary = `Found ${amountOfFindings} security findings for ${repositoryName} at ${findingsResult.imageScanFindings.imageScanCompletedAt}`;
    const combinedDetails = findings.reduce((previous: any, current: any) => `${current.name} (${current.severity}): ${current.uri}\n\n${previous}`, '');
    console.log(summary);
    console.log(combinedDetails);
    await sendEmail(summary, combinedDetails);
  }
};
