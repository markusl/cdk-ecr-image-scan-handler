import { EcrImageScanResultHandler } from '../src/index';
import { App, Stack } from '@aws-cdk/core';
import '@aws-cdk/assert/jest';

test('Create EcrImageScanResultHandler', () => {
  const mockApp = new App();
  const stack = new Stack(mockApp, 'testing-stack');

  new EcrImageScanResultHandler(stack, 'ecr-scan-result-handler', {
    fromAddress: 'from@address.com',
    toAddress: 'to@address.com',
    notificationTopicArn: 'arn:aws:sns:eu-central-1:112233445566:ecr-repository-scan-completed-topic',
  });

  expect(stack).toHaveResource('AWS::SNS::Subscription', {
    Protocol: 'lambda',
    TopicArn: 'arn:aws:sns:eu-central-1:112233445566:ecr-repository-scan-completed-topic',
    Endpoint: {
      'Fn::GetAtt': [
        'ecrscanresulthandler25F94C6E',
        'Arn',
      ],
    },
    Region: 'eu-central-1',
  });

  expect(stack).toHaveResource('AWS::Lambda::Function', {
    Handler: 'index.handler',
    Role: {
      'Fn::GetAtt': [
        'EcrImageScanResultHandlerrole5C736648',
        'Arn',
      ],
    },
    Runtime: 'nodejs12.x',
    Description: 'Handler for ECR Image Scan results',
    Environment: {
      Variables: {
        FROM_ADDRESS: 'from@address.com',
        TO_ADDRESS: 'to@address.com',
        AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      },
    },
    FunctionName: 'EcrImageScanResultHandler',
  });
});



