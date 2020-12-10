import * as iam from '@aws-cdk/aws-iam';
import * as lambda from '@aws-cdk/aws-lambda';
import * as lambda_nodejs from '@aws-cdk/aws-lambda-nodejs';
import * as sns from '@aws-cdk/aws-sns';
import * as sns_subs from '@aws-cdk/aws-sns-subscriptions';
import * as cdk from '@aws-cdk/core';

export interface EcrImageScanTeamsWebhookHandlerProps {
  /**
   * The notification topic ARN that delivers the event when a scan is finished.
   */
  readonly notificationTopicArn: string;

  /**
   * The Teams webhook URL where to report the results to.
   */
  readonly webhookUrl: string;
}

const componentName = 'EcrImageScanTeamsWebhookHandler';

/** A construct for handling ECR image scan complete events and for reporting found vulnerabilities in Microsoft Teams using a webhook. */
export class EcrImageScanTeamsWebhookHandler extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, props: EcrImageScanTeamsWebhookHandlerProps) {
    super(scope, id);

    const ecrScanResultHandlerLambda = new lambda_nodejs.NodejsFunction(this, 'TeamsHandler', {
      runtime: lambda.Runtime.NODEJS_12_X,
      description: 'ECR Image Scan results handler with Teams Webhook integration',
      environment: {
        WEBHOOK_URL: props.webhookUrl,
      },
    });

    ecrScanResultHandlerLambda.role?.addToPrincipalPolicy(new iam.PolicyStatement({
      actions: ['ecr:DescribeImageScanFindings'],
      resources: ['*'],
    }));

    const notificationTopic = sns.Topic.fromTopicArn(scope, `${componentName}-Topic`, props.notificationTopicArn);
    notificationTopic.addSubscription(new sns_subs.LambdaSubscription(ecrScanResultHandlerLambda));
  }
}
