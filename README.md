[![NPM version](https://badge.fury.io/js/cdk-ecr-image-scan-handler.svg)](https://badge.fury.io/js/cdk-ecr-image-scan-handler)
![Release](https://github.com/markusl/cdk-ecr-image-scan-handler/workflows/Release/badge.svg)

# cdk-ecr-image-scan-handler

Get automated email notifications from vulnerable ECR images.

## Usage

On deployment, AWS CDK executs `docker build` with your Express code assets at `express.d`

For example:

```ts
import { EcrImageScanResultHandler } from 'cdk-ecr-image-scan-handler';

const mockApp = new App();
const stack = new Stack(mockApp, 'app-stack');

new EcrImageScanResultHandler(stack, 'ecr-scan-result-handler', {
  fromAddress: 'from@address.com', // Use SES for validating the addresses
  toAddress: 'to@address.com',
  notificationTopicArn: 'arn:aws:sns:eu-central-1:176250563161:ecr-repository-scan-completed-topic',
});
```
