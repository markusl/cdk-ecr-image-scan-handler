const {
  AwsCdkConstructLibrary,
} = require('projen');

const AWS_CDK_LATEST_RELEASE = '1.85.0';

const PROJECT_NAME = 'cdk-ecr-image-scan-handler';
const PROJECT_DESCRIPTION = 'A JSII construct for ECR image scan results processing and reporting via Email or Microsoft Teams webhook';

const project = new AwsCdkConstructLibrary({
  name: PROJECT_NAME,
  description: PROJECT_DESCRIPTION,
  repository: 'https://github.com/markusl/cdk-ecr-image-scan-handler.git',
  authorName: 'Markus Lindqvist',
  authorEmail: 'markus.lindqvist@iki.fi',
  stability: 'stable',
  cdkVersion: AWS_CDK_LATEST_RELEASE,
  cdkDependencies: [
    '@aws-cdk/core',
    '@aws-cdk/aws-lambda',
    '@aws-cdk/aws-lambda-nodejs',
    '@aws-cdk/aws-iam',
    '@aws-cdk/aws-sns',
    '@aws-cdk/aws-sns-subscriptions',
  ],
  devDeps: [
    '@aws-cdk/assert@^1.74.0',
    '@types/aws-lambda@^8.10.68',
    '@types/jest@^26.0.14',
    '@types/node@^14.11.10',
    '@types/node-fetch@^2.5.7',
    'esbuild@0.8.31',
  ],
  deps: [
    '@aws-sdk/client-ecr@^3.3.0',
    '@aws-sdk/client-ses@^3.3.0',
    'aws-lambda@^1.0.6',
    'node-fetch@^2.6.1',
  ],
  bundledDeps: [
    '@aws-sdk/client-ecr',
    '@aws-sdk/client-ses',
    'aws-lambda',
    'node-fetch',
  ],
});

project.addFields({
  keywords: [
    'aws',
    'ecr',
    'imagescan',
  ],
});

project.gitignore.exclude(
  '.cdk.staging',
  'cdk.context.json',
  'cdk.out',
  '.parcel-cache',
  'package.json',
);

project.npmignore.exclude(
  '.cdk.staging',
  'cdk.context.json',
  'cdk.out',
  '.parcel-cache',
  'coverage',
  'doc',
);

project.synth();
