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
  typescriptVersion: '~5.1.3',
  minNodeVersion: '16.20.0',
  tsconfig: {
    compilerOptions: {
      lib: ['ES2022', 'DOM'],
      target: 'ES2022',
    },
  },
  cdkVersion: '2.83.0',
  docgen: true,
  devDeps: [
    '@types/aws-lambda',
    '@types/node-fetch',
    'esbuild@0.18.2',
  ],
  deps: [
    'aws-lambda',
    'constructs',
  ],
  bundledDeps: [
    'aws-lambda',
    'node-fetch@2.6.6',
    '@aws-sdk/client-ecr',
    '@aws-sdk/client-ses',
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
