const {
  AwsCdkConstructLibrary,
} = require('projen');

const AWS_CDK_LATEST_RELEASE = '1.104.0';

const PROJECT_NAME = 'cdk-ecr-image-scan-handler';
const PROJECT_DESCRIPTION = 'A JSII construct for ECR image scan results processing and reporting via Email or Microsoft Teams webhook';

const project = new AwsCdkConstructLibrary({
  name: PROJECT_NAME,
  description: PROJECT_DESCRIPTION,
  repository: 'https://github.com/markusl/cdk-ecr-image-scan-handler.git',
  authorName: 'Markus Lindqvist',
  authorEmail: 'markus.lindqvist@iki.fi',
  stability: 'stable',
  defaultReleaseBranch: 'master',
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
    '@types/aws-lambda@^8.10.76',
    '@types/jest@^26.0.23',
    '@types/node@^15.3.0',
    '@types/node-fetch@^2.5.10',
    'esbuild@0.12.0',
    'typescript@4.2.4',
  ],
  deps: [
    'aws-lambda@^1.0.6',
    'node-fetch@^2.6.1',
  ],
  peerDeps: [
  ],
  bundledDeps: [
    'aws-sdk',
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

const common_exclude = [
  '.cdk.staging',
  'cdk.context.json',
  'cdk.out',
  'coverage',
  'doc',
];
project.gitignore.exclude(...common_exclude);
project.npmignore.exclude(...common_exclude);
project.synth();
