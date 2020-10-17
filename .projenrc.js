const {
  JsiiProject,
  Semver
} = require('projen');

const AWS_CDK_LATEST_RELEASE = '1.68.0';
const CONSTRUCTS_LATEST_RELEASE = '3.0.4';
const PROJECT_NAME = 'cdk-ecr-image-scan-handler';
const PROJECT_DESCRIPTION = 'A JSII construct for ECR image scan results processing and reporting via Email or Microsoft Teams webhook';

const project = new JsiiProject({
  name: PROJECT_NAME,
  jsiiVersion: Semver.caret('1.13.0'),
  description: PROJECT_DESCRIPTION,
  repository: 'https://github.com/markusl/cdk-ecr-image-scan-handler.git',
  authorName: 'Markus Lindqvist',
  authorEmail: 'markus.lindqvist@iki.fi',
  stability: 'stable',
  devDependencies: {
    '@aws-cdk/assert': Semver.caret(AWS_CDK_LATEST_RELEASE),
    '@types/jest': Semver.caret('26.0.14'),
    '@types/node': Semver.caret('14.11.10'),
    "@types/node-fetch": Semver.caret('2.5.7'),
    'parcel': Semver.pinned('2.0.0-beta.1'),
  },
  dependencies: {
    constructs: Semver.pinned(CONSTRUCTS_LATEST_RELEASE),
    '@aws-cdk/core': Semver.caret(AWS_CDK_LATEST_RELEASE),
    '@aws-cdk/aws-lambda': Semver.caret(AWS_CDK_LATEST_RELEASE),
    '@aws-cdk/aws-lambda-nodejs': Semver.caret(AWS_CDK_LATEST_RELEASE),
    '@aws-cdk/aws-iam': Semver.caret(AWS_CDK_LATEST_RELEASE),
    '@aws-cdk/aws-sns': Semver.caret(AWS_CDK_LATEST_RELEASE),
    '@aws-cdk/aws-sns-subscriptions': Semver.caret(AWS_CDK_LATEST_RELEASE),
    'aws-sdk': Semver.caret('2.751.0'),
    'node-fetch': Semver.caret('2.6.1')
  },
  peerDependencies: {
    constructs: Semver.pinned(CONSTRUCTS_LATEST_RELEASE),
    '@aws-cdk/core': Semver.caret(AWS_CDK_LATEST_RELEASE),
    '@aws-cdk/aws-lambda': Semver.caret(AWS_CDK_LATEST_RELEASE),
    '@aws-cdk/aws-lambda-nodejs': Semver.caret(AWS_CDK_LATEST_RELEASE),
    '@aws-cdk/aws-iam': Semver.caret(AWS_CDK_LATEST_RELEASE),
    '@aws-cdk/aws-sns': Semver.caret(AWS_CDK_LATEST_RELEASE),
    '@aws-cdk/aws-sns-subscriptions': Semver.caret(AWS_CDK_LATEST_RELEASE),
  },
  bundledDependencies: [
    'aws-sdk',
    'node-fetch',
  ]
});

project.addFields({
  'keywords': [
    'aws',
    'ecr',
    'imagescan'
  ]
});

project.gitignore.exclude(
  '.cdk.staging',
  'cdk.context.json',
  'cdk.out',
  '.parcel-cache',
  'package.json'
);

project.npmignore.exclude(
  '.cdk.staging',
  'cdk.context.json',
  'cdk.out',
  '.parcel-cache',
  'coverage',
  'doc'
);

project.synth();
