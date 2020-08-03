const {
  JsiiProject,
  Semver
} = require('projen');

const AWS_CDK_LATEST_RELEASE = '1.56.0';
const PROJECT_NAME = 'cdk-ecr-image-scan-handler';
const PROJECT_DESCRIPTION = 'A JSII construct lib for ECR image scan results handling';

const project = new JsiiProject({
  name: PROJECT_NAME,
  jsiiVersion: Semver.caret('1.5.0'),
  description: PROJECT_DESCRIPTION,
  repository: 'https://github.com/markusl/cdk-ecr-image-scan-handler.git',
  authorName: 'Markus Lindqvist',
  authorEmail: 'markus.lindqvist@iki.fi',
  stability: 'experimental',
  devDependencies: {
    '@aws-cdk/assert': Semver.pinned(AWS_CDK_LATEST_RELEASE),
    '@types/jest': Semver.caret('25.2.3'),
    '@types/node': Semver.caret('14.0.11'),
  },
  dependencies: {
    constructs: Semver.pinned('3.0.3'),
    '@aws-cdk/core': Semver.pinned(AWS_CDK_LATEST_RELEASE),
    '@aws-cdk/aws-lambda': Semver.pinned(AWS_CDK_LATEST_RELEASE),
    '@aws-cdk/aws-iam': Semver.pinned(AWS_CDK_LATEST_RELEASE),
    '@aws-cdk/aws-sns': Semver.pinned(AWS_CDK_LATEST_RELEASE),
    '@aws-cdk/aws-sns-subscriptions': Semver.pinned(AWS_CDK_LATEST_RELEASE),
  },
  python: {
    distName: 'cdk-ecr-image-scan-handler',
    module: 'cdk_ecr_image_scan_handler'
  }
});

project.addFields({
  'keywords': [
    'aws',
    'ecr',
    'imagescan'
  ]
});

project.gitignore.exclude(
  'cdk.context.json',
  'cdk.out',
  'package.json'
);

project.npmignore.exclude(
  'cdk.out',
  'cdk.context.json',
  'coverage',
  'doc'
);

project.synth();
