

import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as iam from '@aws-cdk/aws-iam';
import * as sns from '@aws-cdk/aws-sns';
import * as sns_subs from '@aws-cdk/aws-sns-subscriptions';
import * as path from 'path';

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

export class EcrImageScanResultHandler extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, props: EcrImageScanResultHandlerProps) {
    super(scope, id);    
    const lambdaLayerCode = lambda.Code.fromAsset(path.join(__dirname, './lambda-runtime-layer'));
    const lambdaCode = lambda.Code.fromAsset(path.join(__dirname, './lambda-handler/'));

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
          }),
          ]}),
      },
    });
    lambdaRole.addManagedPolicy(basicLambdaPolicy);

    const lambdaLibLayer = new lambda.LayerVersion(scope, `${componentName}-AwsSdkLayer`, {
      code: lambdaLayerCode,
      compatibleRuntimes: [lambda.Runtime.NODEJS_12_X],
      description: 'A layer to include AWS SDK for Lambda',
    });

    const ecrScanResultHandlerLambda = new lambda.Function(scope, componentName, {
      functionName: componentName,
      description: 'Handler for ECR Image Scan results',
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: 'handler.handler',
      role: lambdaRole,
      code: lambdaCode,
      layers: [lambdaLibLayer],
      environment: {
        FROM_ADDRESS: props.fromAddress,
        TO_ADDRESS: props.toAddress,
      },
    });

    const notificationTopic = sns.Topic.fromTopicArn(scope, `${componentName}-Topic`, props.notificationTopicArn);
    notificationTopic.addSubscription(new sns_subs.LambdaSubscription(ecrScanResultHandlerLambda));
  }
}
