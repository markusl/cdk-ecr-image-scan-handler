import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { EcrImageScanResultHandler } from '../src/index';

test('Create EcrImageScanResultHandler', () => {
  const mockApp = new App();
  const stack = new Stack(mockApp, 'testing-stack');

  new EcrImageScanResultHandler(stack, 'ecr-scan-result-handler', {
    fromAddress: 'from@address.com',
    toAddress: 'to@address.com',
    notificationTopicArn: 'arn:aws:sns:eu-central-1:112233445566:ecr-repository-scan-completed-topic',
  });

  const template = Template.fromStack(stack);
  template.hasResource('AWS::SNS::Subscription', {
    Properties: {
      Protocol: 'lambda',
      TopicArn: 'arn:aws:sns:eu-central-1:112233445566:ecr-repository-scan-completed-topic',
      Endpoint: {
        'Fn::GetAtt': [
          'ecrscanresulthandlerEmailHandler46CCC244',
          'Arn',
        ],
      },
      Region: 'eu-central-1',
    },
  });

  template.hasResource('AWS::Lambda::Function', {
    Properties: {
      Handler: 'index.handler',
      Role: {
        'Fn::GetAtt': [
          'EcrImageScanResultHandlerrole5C736648',
          'Arn',
        ],
      },
      Runtime: 'nodejs18.x',
      Description: 'Handler for ECR Image Scan results',
      Environment: {
        Variables: {
          FROM_ADDRESS: 'from@address.com',
          TO_ADDRESS: 'to@address.com',
          AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
        },
      },
      FunctionName: 'EcrImageScanResultHandler',
    },
  });
});
