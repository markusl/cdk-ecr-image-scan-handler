import {
  aws_iam as iam,
  aws_lambda as lambda,
  aws_lambda_nodejs as lambda_nodejs,
  aws_sns as sns,
  aws_sns_subscriptions as sns_subs,
} from 'aws-cdk-lib';
import { Construct } from 'constructs';

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
export class EcrImageScanTeamsWebhookHandler extends Construct {
  constructor(scope: Construct, id: string, props: EcrImageScanTeamsWebhookHandlerProps) {
    super(scope, id);

    const ecrScanResultHandlerLambda = new lambda_nodejs.NodejsFunction(this, 'TeamsHandler', {
      runtime: lambda.Runtime.NODEJS_18_X,
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
