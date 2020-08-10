import { EcrImageScanResultHandler } from '../src/index';
import { App, Stack } from '@aws-cdk/core';
import '@aws-cdk/assert/jest';

test('Create EcrImageScanResultHandler', () => {
  const mockApp = new App();
  const stack = new Stack(mockApp, 'testing-stack');

  new EcrImageScanResultHandler(stack, 'ecr-scan-result-handler', {
    fromAddress: 'from@address.com',
    toAddress: 'to@address.com',
    notificationTopicArn: 'arn:aws:sns:eu-central-1:176250563161:ecr-repository-scan-completed-topic',
  });

  expect(stack).toHaveResource('AWS::Lambda::Function', {
    Code: {
      S3Bucket: {
        Ref: 'AssetParameterscdaf69e61e04df580d34ef2c04ddfafa90363b5c7093c505477e9ff732e57b4dS3Bucket816FD4E6',
      },
      S3Key: {
        'Fn::Join': [
          '',
          [
            {
              'Fn::Select': [
                0,
                {
                  'Fn::Split': [
                    '||',
                    {
                      Ref: 'AssetParameterscdaf69e61e04df580d34ef2c04ddfafa90363b5c7093c505477e9ff732e57b4dS3VersionKey307081BF',
                    },
                  ],
                },
              ],
            },
            {
              'Fn::Select': [
                1,
                {
                  'Fn::Split': [
                    '||',
                    {
                      Ref: 'AssetParameterscdaf69e61e04df580d34ef2c04ddfafa90363b5c7093c505477e9ff732e57b4dS3VersionKey307081BF',
                    },
                  ],
                },
              ],
            },
          ],
        ],
      },
    },
    Handler: 'handler.handler',
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
      },
    },
    FunctionName: 'EcrImageScanResultHandler',
  })
});



