import { App, Stack } from '@aws-cdk/core';
import { EcrImageScanTeamsWebhookHandler } from '../src/teams';
import '@aws-cdk/assert/jest';

test('Create EcrImageScanTeamsWebhookHandler', () => {
  const mockApp = new App();
  const stack = new Stack(mockApp, 'testing-stack');

  new EcrImageScanTeamsWebhookHandler(stack, 'ecr-scan-result-handler', {
    webhookUrl: 'https://outlook.office.com/webhook/xxxxx',
    notificationTopicArn: 'arn:aws:sns:eu-central-1:112233445566:ecr-repository-scan-completed-topic',
  });

  expect(stack).toHaveResource('AWS::SNS::Subscription', {
    Protocol: 'lambda',
    TopicArn: 'arn:aws:sns:eu-central-1:112233445566:ecr-repository-scan-completed-topic',
    Endpoint: {
      'Fn::GetAtt': [
        'ecrscanresulthandlerhandlerteams956A0AFA',
        'Arn',
      ],
    },
    Region: 'eu-central-1',
  });

  expect(stack).toHaveResource('AWS::Lambda::Function', {
    Handler: 'index.handler',
    Role: {
      'Fn::GetAtt': [
        'ecrscanresulthandlerhandlerteamsServiceRole3F9C7C1D',
        'Arn',
      ],
    },
    Runtime: 'nodejs12.x',
    Description: 'ECR Image Scan results handler with Teams Webhook integration',
    Environment: {
      Variables: {
        WEBHOOK_URL: 'https://outlook.office.com/webhook/xxxxx',
        AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      },
    },
  });

  expect(stack).toHaveResource('AWS::IAM::Role', {
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
  });
});


