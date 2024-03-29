import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { EcrImageScanTeamsWebhookHandler } from '../src/teams';

test('Create EcrImageScanTeamsWebhookHandler', () => {
  const mockApp = new App();
  const stack = new Stack(mockApp, 'testing-stack');

  new EcrImageScanTeamsWebhookHandler(stack, 'ecr-scan-result-handler', {
    webhookUrl: 'https://outlook.office.com/webhook/xxxxx',
    notificationTopicArn: 'arn:aws:sns:eu-central-1:112233445566:ecr-repository-scan-completed-topic',
  });

  const template = Template.fromStack(stack);
  template.hasResource('AWS::SNS::Subscription', {
    Properties: {
      Protocol: 'lambda',
      TopicArn: 'arn:aws:sns:eu-central-1:112233445566:ecr-repository-scan-completed-topic',
      Endpoint: {
        'Fn::GetAtt': [
          'ecrscanresulthandlerTeamsHandler4B51F183',
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
          'ecrscanresulthandlerTeamsHandlerServiceRoleC491FAD8',
          'Arn',
        ],
      },
      Runtime: 'nodejs18.x',
      Description: 'ECR Image Scan results handler with Teams Webhook integration',
      Environment: {
        Variables: {
          WEBHOOK_URL: 'https://outlook.office.com/webhook/xxxxx',
          AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
        },
      },
    },
  });

  template.hasResource('AWS::IAM::Role', {
    Properties: {
      AssumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'lambda.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
      ManagedPolicyArns: [
        {
          'Fn::Join': [
            '',
            [
              'arn:',
              {
                Ref: 'AWS::Partition',
              },
              ':iam::aws:policy/service-role/AWSLambdaBasicExecutionRole',
            ],
          ],
        },
      ],
    },
  });
});
