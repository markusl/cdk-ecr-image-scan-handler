# API Reference

**Classes**

Name|Description
----|-----------
[EcrImageScanResultHandler](#cdk-codepipeline-bitbucket-build-result-reporter-ecrimagescanresulthandler)|A construct for handling ECR image scan complete events and for reporting found vulnerabilities.
[EcrImageScanTeamsWebhookHandler](#cdk-codepipeline-bitbucket-build-result-reporter-ecrimagescanteamswebhookhandler)|A construct for handling ECR image scan complete events and for reporting found vulnerabilities in Microsoft Teams using a webhook.


**Structs**

Name|Description
----|-----------
[EcrImageScanResultHandlerProps](#cdk-codepipeline-bitbucket-build-result-reporter-ecrimagescanresulthandlerprops)|*No description*
[EcrImageScanTeamsWebhookHandlerProps](#cdk-codepipeline-bitbucket-build-result-reporter-ecrimagescanteamswebhookhandlerprops)|*No description*



## class EcrImageScanResultHandler  <a id="cdk-codepipeline-bitbucket-build-result-reporter-ecrimagescanresulthandler"></a>

A construct for handling ECR image scan complete events and for reporting found vulnerabilities.

__Implements__: [IConstruct](#constructs-iconstruct), [IConstruct](#aws-cdk-core-iconstruct), [IConstruct](#constructs-iconstruct), [IDependable](#aws-cdk-core-idependable)
__Extends__: [Construct](#aws-cdk-core-construct)

### Initializer




```ts
new EcrImageScanResultHandler(scope: Construct, id: string, props: EcrImageScanResultHandlerProps)
```

* **scope** (<code>[Construct](#aws-cdk-core-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[EcrImageScanResultHandlerProps](#cdk-codepipeline-bitbucket-build-result-reporter-ecrimagescanresulthandlerprops)</code>)  *No description*
  * **fromAddress** (<code>string</code>)  The sender address. 
  * **notificationTopicArn** (<code>string</code>)  The notification topic ARN that delivers the event when a scan is finished. 
  * **toAddress** (<code>string</code>)  The receiver address. 




## class EcrImageScanTeamsWebhookHandler  <a id="cdk-codepipeline-bitbucket-build-result-reporter-ecrimagescanteamswebhookhandler"></a>

A construct for handling ECR image scan complete events and for reporting found vulnerabilities in Microsoft Teams using a webhook.

__Implements__: [IConstruct](#constructs-iconstruct), [IConstruct](#aws-cdk-core-iconstruct), [IConstruct](#constructs-iconstruct), [IDependable](#aws-cdk-core-idependable)
__Extends__: [Construct](#aws-cdk-core-construct)

### Initializer




```ts
new EcrImageScanTeamsWebhookHandler(scope: Construct, id: string, props: EcrImageScanTeamsWebhookHandlerProps)
```

* **scope** (<code>[Construct](#aws-cdk-core-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[EcrImageScanTeamsWebhookHandlerProps](#cdk-codepipeline-bitbucket-build-result-reporter-ecrimagescanteamswebhookhandlerprops)</code>)  *No description*
  * **notificationTopicArn** (<code>string</code>)  The notification topic ARN that delivers the event when a scan is finished. 
  * **webhookUrl** (<code>string</code>)  The Teams webhook URL where to report the results to. 




## struct EcrImageScanResultHandlerProps  <a id="cdk-codepipeline-bitbucket-build-result-reporter-ecrimagescanresulthandlerprops"></a>






Name | Type | Description 
-----|------|-------------
**fromAddress** | <code>string</code> | The sender address.
**notificationTopicArn** | <code>string</code> | The notification topic ARN that delivers the event when a scan is finished.
**toAddress** | <code>string</code> | The receiver address.



## struct EcrImageScanTeamsWebhookHandlerProps  <a id="cdk-codepipeline-bitbucket-build-result-reporter-ecrimagescanteamswebhookhandlerprops"></a>






Name | Type | Description 
-----|------|-------------
**notificationTopicArn** | <code>string</code> | The notification topic ARN that delivers the event when a scan is finished.
**webhookUrl** | <code>string</code> | The Teams webhook URL where to report the results to.



