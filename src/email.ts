import {
  aws_iam as iam,
  aws_lambda as lambda,
  aws_lambda_nodejs as lambda_nodejs,
  aws_sns as sns,
  aws_sns_subscriptions as sns_subs,
} from 'aws-cdk-lib';
import { Construct } from 'constructs';

export interface EcrImageScanResultHandlerProps {
  /**
   * The notification topic ARN that delivers the event when a scan is finished.
   */
  readonly notificationTopicArn: string;

  /**
   * The sender address.
   */
  readonly fromAddress: string;

  /**
   * The receiver address.
   */
  readonly toAddress: string;
}

const basicLambdaPolicy = iam.ManagedPolicy.fromAwsManagedPolicyName('service-role/AWSLambdaBasicExecutionRole');
const componentName = 'EcrImageScanResultHandler';

/** A construct for handling ECR image scan complete events and for reporting found vulnerabilities. */
export class EcrImageScanResultHandler extends Construct {
  constructor(scope: Construct, id: string, props: EcrImageScanResultHandlerProps) {
    super(scope, id);

    const roleName = `${componentName}-role`;
    const lambdaRole = new iam.Role(scope, roleName, {
      roleName,
      assumedBy: new iam.ServicePrincipal('lambda.amazonaws.com'),
      inlinePolicies: {
        ecrPolicy: new iam.PolicyDocument({
          statements: [new iam.PolicyStatement({
            actions: ['ecr:DescribeImageScanFindings'],
            resources: ['*'],
          })],
        }),
        emailPolicy: new iam.PolicyDocument({
          statements: [new iam.PolicyStatement({
            actions: ['ses:SendEmail'],
            resources: ['*'],
            conditions: {
              StringEquals: {
                'ses:FromAddress': props.fromAddress,
              },
            },
          })],
        }),
      },
    });
    lambdaRole.addManagedPolicy(basicLambdaPolicy);

    const ecrScanResultHandlerLambda = new lambda_nodejs.NodejsFunction(this, 'EmailHandler', {
      runtime: lambda.Runtime.NODEJS_14_X,
      role: lambdaRole,
      functionName: componentName,
      description: 'Handler for ECR Image Scan results',
      environment: {
        FROM_ADDRESS: props.fromAddress,
        TO_ADDRESS: props.toAddress,
      },
    });

    const notificationTopic = sns.Topic.fromTopicArn(scope, `${componentName}-Topic`, props.notificationTopicArn);
    notificationTopic.addSubscription(new sns_subs.LambdaSubscription(ecrScanResultHandlerLambda));
  }
}
