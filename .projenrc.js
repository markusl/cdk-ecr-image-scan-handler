const {
  AwsCdkConstructLibrary,
} = require('projen');

const AWS_CDK_LATEST_RELEASE = '2.0.0-rc.19';

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
  docgen: true,
  cdkDependencies: [
    'aws-cdk-lib',
  ],
  devDeps: [
    '@types/aws-lambda',
    '@types/node-fetch',
    'esbuild',
  ],
  deps: [
    'aws-lambda',
    'node-fetch',
    'constructs@^10.0.5',
  ],
  peerDeps: [
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

const common_exclude = [
  'cdk.context.json',
  'cdk.out',
  'coverage',
  'doc',
];
project.gitignore.exclude(...common_exclude);
project.npmignore.exclude(...common_exclude);
project.synth();
