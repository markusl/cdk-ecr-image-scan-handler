import { EcrImageScanResultHandler } from '../lib/index';
import { App, Stack } from '@aws-cdk/core';

const mockApp = new App();

const env = {
  region: process.env.CDK_DEFAULT_REGION,
  account: process.env.CDK_DEFAULT_ACCOUNT,
};

const stack = new Stack(mockApp, 'ecr-scan-test-stack', { env });

new EcrImageScanResultHandler(stack, 'handler', {
  fromAddress: 'from@address.com',
  toAddress: 'to@address.com',
  notificationTopicArn: 'arn:aws:sns:eu-central-1:176250563161:ecr-repository-scan-completed-topic',
});
