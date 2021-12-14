const {
  awscdk,
} = require('projen');

const PROJECT_NAME = 'cdk-ecr-image-scan-handler';
const PROJECT_DESCRIPTION = 'A JSII construct for ECR image scan results processing and reporting via Email or Microsoft Teams webhook';

const project = new awscdk.AwsCdkConstructLibrary({
  name: PROJECT_NAME,
  description: PROJECT_DESCRIPTION,
  repository: 'https://github.com/markusl/cdk-ecr-image-scan-handler.git',
  authorName: 'Markus Lindqvist',
  authorEmail: 'markus.lindqvist@iki.fi',
  stability: 'stable',
  defaultReleaseBranch: 'master',
  minNodeVersion: '14.17.0',
  tsconfig: {
    compilerOptions: {
      lib: ['ES2020', 'DOM'],
    },
  },
  cdkVersion: '2.1.0',
  docgen: true,
  devDeps: [
    '@aws-cdk/assert',
    '@types/aws-lambda',
    '@types/node-fetch',
    'esbuild@0.14.3',
  ],
  deps: [
    'aws-lambda',
    'node-fetch',
    'constructs',
  ],
  bundledDeps: [
    '@aws-sdk/client-ecr',
    '@aws-sdk/client-ses',
    'aws-lambda',
    'node-fetch@2.6.6',
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
