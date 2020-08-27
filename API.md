# API Reference

**Classes**

Name|Description
----|-----------
[EcrImageScanResultHandler](#cdk-ecr-image-scan-handler-ecrimagescanresulthandler)|A construct for handling ECR image scan complete events and for reporting found vulnerabilities.


**Structs**

Name|Description
----|-----------
[EcrImageScanResultHandlerProps](#cdk-ecr-image-scan-handler-ecrimagescanresulthandlerprops)|*No description*



## class EcrImageScanResultHandler 🔹 <a id="cdk-ecr-image-scan-handler-ecrimagescanresulthandler"></a>

A construct for handling ECR image scan complete events and for reporting found vulnerabilities.

__Implements__: [IConstruct](#constructs-iconstruct), [IConstruct](#aws-cdk-core-iconstruct), [IConstruct](#constructs-iconstruct), [IDependable](#aws-cdk-core-idependable)
__Extends__: [Construct](#aws-cdk-core-construct)

### Initializer




```ts
new EcrImageScanResultHandler(scope: Construct, id: string, props: EcrImageScanResultHandlerProps)
```

* **scope** (<code>[Construct](#aws-cdk-core-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[EcrImageScanResultHandlerProps](#cdk-ecr-image-scan-handler-ecrimagescanresulthandlerprops)</code>)  *No description*
  * **fromAddress** (<code>string</code>)  The sender address. 
  * **notificationTopicArn** (<code>string</code>)  The notification topic ARN that delivers the event when a scan is finished. 
  * **toAddress** (<code>string</code>)  The receiver address. 




## struct EcrImageScanResultHandlerProps 🔹 <a id="cdk-ecr-image-scan-handler-ecrimagescanresulthandlerprops"></a>






Name | Type | Description 
-----|------|-------------
**fromAddress**🔹 | <code>string</code> | The sender address.
**notificationTopicArn**🔹 | <code>string</code> | The notification topic ARN that delivers the event when a scan is finished.
**toAddress**🔹 | <code>string</code> | The receiver address.



