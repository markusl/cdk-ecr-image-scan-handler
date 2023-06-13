[![NPM version](https://badge.fury.io/js/cdk-ecr-image-scan-handler.svg)](https://badge.fury.io/js/cdk-ecr-image-scan-handler)
![Release](https://github.com/markusl/cdk-ecr-image-scan-handler/workflows/Release/badge.svg)

# cdk-ecr-image-scan-handler

[Amazon ECR image scanning](https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-scanning.html) helps in identifying software vulnerabilities in your container images.

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

# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcrImageScanResultHandler <a name="EcrImageScanResultHandler" id="cdk-ecr-image-scan-handler.EcrImageScanResultHandler"></a>

A construct for handling ECR image scan complete events and for reporting found vulnerabilities.

#### Initializers <a name="Initializers" id="cdk-ecr-image-scan-handler.EcrImageScanResultHandler.Initializer"></a>

```typescript
import { EcrImageScanResultHandler } from 'cdk-ecr-image-scan-handler'

new EcrImageScanResultHandler(scope: Construct, id: string, props: EcrImageScanResultHandlerProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ecr-image-scan-handler.EcrImageScanResultHandler.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ecr-image-scan-handler.EcrImageScanResultHandler.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ecr-image-scan-handler.EcrImageScanResultHandler.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ecr-image-scan-handler.EcrImageScanResultHandlerProps">EcrImageScanResultHandlerProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ecr-image-scan-handler.EcrImageScanResultHandler.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-ecr-image-scan-handler.EcrImageScanResultHandler.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ecr-image-scan-handler.EcrImageScanResultHandler.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ecr-image-scan-handler.EcrImageScanResultHandlerProps">EcrImageScanResultHandlerProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ecr-image-scan-handler.EcrImageScanResultHandler.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-ecr-image-scan-handler.EcrImageScanResultHandler.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ecr-image-scan-handler.EcrImageScanResultHandler.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-ecr-image-scan-handler.EcrImageScanResultHandler.isConstruct"></a>

```typescript
import { EcrImageScanResultHandler } from 'cdk-ecr-image-scan-handler'

EcrImageScanResultHandler.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ecr-image-scan-handler.EcrImageScanResultHandler.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ecr-image-scan-handler.EcrImageScanResultHandler.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ecr-image-scan-handler.EcrImageScanResultHandler.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### EcrImageScanTeamsWebhookHandler <a name="EcrImageScanTeamsWebhookHandler" id="cdk-ecr-image-scan-handler.EcrImageScanTeamsWebhookHandler"></a>

A construct for handling ECR image scan complete events and for reporting found vulnerabilities in Microsoft Teams using a webhook.

#### Initializers <a name="Initializers" id="cdk-ecr-image-scan-handler.EcrImageScanTeamsWebhookHandler.Initializer"></a>

```typescript
import { EcrImageScanTeamsWebhookHandler } from 'cdk-ecr-image-scan-handler'

new EcrImageScanTeamsWebhookHandler(scope: Construct, id: string, props: EcrImageScanTeamsWebhookHandlerProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ecr-image-scan-handler.EcrImageScanTeamsWebhookHandler.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ecr-image-scan-handler.EcrImageScanTeamsWebhookHandler.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ecr-image-scan-handler.EcrImageScanTeamsWebhookHandler.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ecr-image-scan-handler.EcrImageScanTeamsWebhookHandlerProps">EcrImageScanTeamsWebhookHandlerProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ecr-image-scan-handler.EcrImageScanTeamsWebhookHandler.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-ecr-image-scan-handler.EcrImageScanTeamsWebhookHandler.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ecr-image-scan-handler.EcrImageScanTeamsWebhookHandler.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ecr-image-scan-handler.EcrImageScanTeamsWebhookHandlerProps">EcrImageScanTeamsWebhookHandlerProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ecr-image-scan-handler.EcrImageScanTeamsWebhookHandler.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-ecr-image-scan-handler.EcrImageScanTeamsWebhookHandler.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ecr-image-scan-handler.EcrImageScanTeamsWebhookHandler.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-ecr-image-scan-handler.EcrImageScanTeamsWebhookHandler.isConstruct"></a>

```typescript
import { EcrImageScanTeamsWebhookHandler } from 'cdk-ecr-image-scan-handler'

EcrImageScanTeamsWebhookHandler.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ecr-image-scan-handler.EcrImageScanTeamsWebhookHandler.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ecr-image-scan-handler.EcrImageScanTeamsWebhookHandler.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ecr-image-scan-handler.EcrImageScanTeamsWebhookHandler.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


## Structs <a name="Structs" id="Structs"></a>

### EcrImageScanResultHandlerProps <a name="EcrImageScanResultHandlerProps" id="cdk-ecr-image-scan-handler.EcrImageScanResultHandlerProps"></a>

#### Initializer <a name="Initializer" id="cdk-ecr-image-scan-handler.EcrImageScanResultHandlerProps.Initializer"></a>

```typescript
import { EcrImageScanResultHandlerProps } from 'cdk-ecr-image-scan-handler'

const ecrImageScanResultHandlerProps: EcrImageScanResultHandlerProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ecr-image-scan-handler.EcrImageScanResultHandlerProps.property.fromAddress">fromAddress</a></code> | <code>string</code> | The sender address. |
| <code><a href="#cdk-ecr-image-scan-handler.EcrImageScanResultHandlerProps.property.notificationTopicArn">notificationTopicArn</a></code> | <code>string</code> | The notification topic ARN that delivers the event when a scan is finished. |
| <code><a href="#cdk-ecr-image-scan-handler.EcrImageScanResultHandlerProps.property.toAddress">toAddress</a></code> | <code>string</code> | The receiver address. |

---

##### `fromAddress`<sup>Required</sup> <a name="fromAddress" id="cdk-ecr-image-scan-handler.EcrImageScanResultHandlerProps.property.fromAddress"></a>

```typescript
public readonly fromAddress: string;
```

- *Type:* string

The sender address.

---

##### `notificationTopicArn`<sup>Required</sup> <a name="notificationTopicArn" id="cdk-ecr-image-scan-handler.EcrImageScanResultHandlerProps.property.notificationTopicArn"></a>

```typescript
public readonly notificationTopicArn: string;
```

- *Type:* string

The notification topic ARN that delivers the event when a scan is finished.

---

##### `toAddress`<sup>Required</sup> <a name="toAddress" id="cdk-ecr-image-scan-handler.EcrImageScanResultHandlerProps.property.toAddress"></a>

```typescript
public readonly toAddress: string;
```

- *Type:* string

The receiver address.

---

### EcrImageScanTeamsWebhookHandlerProps <a name="EcrImageScanTeamsWebhookHandlerProps" id="cdk-ecr-image-scan-handler.EcrImageScanTeamsWebhookHandlerProps"></a>

#### Initializer <a name="Initializer" id="cdk-ecr-image-scan-handler.EcrImageScanTeamsWebhookHandlerProps.Initializer"></a>

```typescript
import { EcrImageScanTeamsWebhookHandlerProps } from 'cdk-ecr-image-scan-handler'

const ecrImageScanTeamsWebhookHandlerProps: EcrImageScanTeamsWebhookHandlerProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ecr-image-scan-handler.EcrImageScanTeamsWebhookHandlerProps.property.notificationTopicArn">notificationTopicArn</a></code> | <code>string</code> | The notification topic ARN that delivers the event when a scan is finished. |
| <code><a href="#cdk-ecr-image-scan-handler.EcrImageScanTeamsWebhookHandlerProps.property.webhookUrl">webhookUrl</a></code> | <code>string</code> | The Teams webhook URL where to report the results to. |

---

##### `notificationTopicArn`<sup>Required</sup> <a name="notificationTopicArn" id="cdk-ecr-image-scan-handler.EcrImageScanTeamsWebhookHandlerProps.property.notificationTopicArn"></a>

```typescript
public readonly notificationTopicArn: string;
```

- *Type:* string

The notification topic ARN that delivers the event when a scan is finished.

---

##### `webhookUrl`<sup>Required</sup> <a name="webhookUrl" id="cdk-ecr-image-scan-handler.EcrImageScanTeamsWebhookHandlerProps.property.webhookUrl"></a>

```typescript
public readonly webhookUrl: string;
```

- *Type:* string

The Teams webhook URL where to report the results to.

---



