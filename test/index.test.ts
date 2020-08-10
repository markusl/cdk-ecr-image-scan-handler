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
        Ref: 'AssetParametersae641365ba1b0f4e4f4f70040d6d0fa59fef4c835ae0e867b06c81580e61460aS3BucketF7853DCF',
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
                      Ref: 'AssetParametersae641365ba1b0f4e4f4f70040d6d0fa59fef4c835ae0e867b06c81580e61460aS3VersionKeyEF328651',
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
                      Ref: 'AssetParametersae641365ba1b0f4e4f4f70040d6d0fa59fef4c835ae0e867b06c81580e61460aS3VersionKeyEF328651',
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



