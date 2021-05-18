[![NPM version](https://badge.fury.io/js/cdk-ecr-image-scan-handler.svg)](https://badge.fury.io/js/cdk-ecr-image-scan-handler)
![Release](https://github.com/markusl/cdk-ecr-image-scan-handler/workflows/Release/badge.svg)

# cdk-ecr-image-scan-handler

With this CDK construct you can get automated notifications from ECR images that contain security findings when the AWS ECR image scan finishes.

## Usage

In your ECR repository setup, create a SNS topic:

```ts
  const onImageScanCompletedTopic = new sns.Topic(stack, 'RepositoryScanTopic', {
    topicName: 'ecr-repository-scan-completed-topic',
    displayName: 'Notifications about ECR Repository scans',
  });
```

Hook each ECR repository to report image scan results to the previously created topic:

```ts
  const ecrRepository = new ecr.Repository(stack, 'DemoEcrRepository', {
    repositoryName: name,
    imageScanOnPush: true,
  });
  ecrRepository.onImageScanCompleted('DemoScanCompleted', {
    target: new targets.SnsTopic(onImageScanCompletedTopic),
  });
```

### Microsoft Teams reporting for ECR Image scan

To get notifications using Microsoft Teams Webhook, set up the handler for the previously created topic:

```ts
import { EcrImageScanTeamsWebhookHandler } from 'cdk-ecr-image-scan-handler';

const mockApp = new App();
const stack = new Stack(mockApp, 'app-stack');

new EcrImageScanTeamsWebhookHandler(stack, 'ecr-scan-result-handler', {
  webhookUrl: 'https://outlook.office.com/webhook/xxxxx',
  notificationTopicArn: 'arn:aws:sns:eu-central-1:112233445566:ecr-repository-scan-completed-topic',
});
```

### Email results for ECR Image scan

To get reports via email, set up the handler for the previously created topic:

```ts
import { EcrImageScanResultHandler } from 'cdk-ecr-image-scan-handler';

const mockApp = new App();
const stack = new Stack(mockApp, 'app-stack');

new EcrImageScanResultHandler(stack, 'ecr-scan-result-handler', {
  fromAddress: 'from@address.com', // Use SES for validating the addresses
  toAddress: 'to@address.com',
  notificationTopicArn: 'arn:aws:sns:eu-central-1:112233445566:ecr-repository-scan-completed-topic',
});
```
