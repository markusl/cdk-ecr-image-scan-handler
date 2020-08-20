import * as fs from 'fs';
import * as path from 'path';
import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as iam from '@aws-cdk/aws-iam';
import * as sns from '@aws-cdk/aws-sns';
import * as sns_subs from '@aws-cdk/aws-sns-subscriptions';
import * as lambda_nodejs from '@aws-cdk/aws-lambda-nodejs';

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
export class EcrImageScanResultHandler extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, props: EcrImageScanResultHandlerProps) {
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
          }),
          ]}),
      },
    });
    lambdaRole.addManagedPolicy(basicLambdaPolicy);
    const entry = fs.existsSync(path.join(__dirname, 'index.handler.ts'))
      ? path.join(__dirname, 'index.handler.ts') // local development
      : path.join(__dirname, 'index.handler.js') // when published in npm

    const ecrScanResultHandlerLambda = new lambda_nodejs.NodejsFunction(this, 'handler', {
      entry,
      runtime: lambda.Runtime.NODEJS_12_X,
      minify: true,
      role: lambdaRole,
      functionName: componentName,
      description: 'Handler for ECR Image Scan results',
      environment: {
        FROM_ADDRESS: props.fromAddress,
        TO_ADDRESS: props.toAddress,
      },
      nodeModules: ['aws-sdk'],
    });

    const notificationTopic = sns.Topic.fromTopicArn(scope, `${componentName}-Topic`, props.notificationTopicArn);
    notificationTopic.addSubscription(new sns_subs.LambdaSubscription(ecrScanResultHandlerLambda));
  }
}
