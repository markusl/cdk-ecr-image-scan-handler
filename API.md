# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### EcrImageScanResultHandler <a name="cdk-ecr-image-scan-handler.EcrImageScanResultHandler"></a>

A construct for handling ECR image scan complete events and for reporting found vulnerabilities.

#### Initializer <a name="cdk-ecr-image-scan-handler.EcrImageScanResultHandler.Initializer"></a>

```typescript
import { EcrImageScanResultHandler } from 'cdk-ecr-image-scan-handler'

new EcrImageScanResultHandler(scope: Construct, id: string, props: EcrImageScanResultHandlerProps)
```

##### `scope`<sup>Required</sup> <a name="cdk-ecr-image-scan-handler.EcrImageScanResultHandler.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="cdk-ecr-image-scan-handler.EcrImageScanResultHandler.parameter.id"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="cdk-ecr-image-scan-handler.EcrImageScanResultHandler.parameter.props"></a>

- *Type:* [`cdk-ecr-image-scan-handler.EcrImageScanResultHandlerProps`](#cdk-ecr-image-scan-handler.EcrImageScanResultHandlerProps)

---





### EcrImageScanTeamsWebhookHandler <a name="cdk-ecr-image-scan-handler.EcrImageScanTeamsWebhookHandler"></a>

A construct for handling ECR image scan complete events and for reporting found vulnerabilities in Microsoft Teams using a webhook.

#### Initializer <a name="cdk-ecr-image-scan-handler.EcrImageScanTeamsWebhookHandler.Initializer"></a>

```typescript
import { EcrImageScanTeamsWebhookHandler } from 'cdk-ecr-image-scan-handler'

new EcrImageScanTeamsWebhookHandler(scope: Construct, id: string, props: EcrImageScanTeamsWebhookHandlerProps)
```

##### `scope`<sup>Required</sup> <a name="cdk-ecr-image-scan-handler.EcrImageScanTeamsWebhookHandler.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="cdk-ecr-image-scan-handler.EcrImageScanTeamsWebhookHandler.parameter.id"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="cdk-ecr-image-scan-handler.EcrImageScanTeamsWebhookHandler.parameter.props"></a>

- *Type:* [`cdk-ecr-image-scan-handler.EcrImageScanTeamsWebhookHandlerProps`](#cdk-ecr-image-scan-handler.EcrImageScanTeamsWebhookHandlerProps)

---





## Structs <a name="Structs"></a>

### EcrImageScanResultHandlerProps <a name="cdk-ecr-image-scan-handler.EcrImageScanResultHandlerProps"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { EcrImageScanResultHandlerProps } from 'cdk-ecr-image-scan-handler'

const ecrImageScanResultHandlerProps: EcrImageScanResultHandlerProps = { ... }
```

##### `fromAddress`<sup>Required</sup> <a name="cdk-ecr-image-scan-handler.EcrImageScanResultHandlerProps.property.fromAddress"></a>

- *Type:* `string`

The sender address.

---

##### `notificationTopicArn`<sup>Required</sup> <a name="cdk-ecr-image-scan-handler.EcrImageScanResultHandlerProps.property.notificationTopicArn"></a>

- *Type:* `string`

The notification topic ARN that delivers the event when a scan is finished.

---

##### `toAddress`<sup>Required</sup> <a name="cdk-ecr-image-scan-handler.EcrImageScanResultHandlerProps.property.toAddress"></a>

- *Type:* `string`

The receiver address.

---

### EcrImageScanTeamsWebhookHandlerProps <a name="cdk-ecr-image-scan-handler.EcrImageScanTeamsWebhookHandlerProps"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { EcrImageScanTeamsWebhookHandlerProps } from 'cdk-ecr-image-scan-handler'

const ecrImageScanTeamsWebhookHandlerProps: EcrImageScanTeamsWebhookHandlerProps = { ... }
```

##### `notificationTopicArn`<sup>Required</sup> <a name="cdk-ecr-image-scan-handler.EcrImageScanTeamsWebhookHandlerProps.property.notificationTopicArn"></a>

- *Type:* `string`

The notification topic ARN that delivers the event when a scan is finished.

---

##### `webhookUrl`<sup>Required</sup> <a name="cdk-ecr-image-scan-handler.EcrImageScanTeamsWebhookHandlerProps.property.webhookUrl"></a>

- *Type:* `string`

The Teams webhook URL where to report the results to.

---



