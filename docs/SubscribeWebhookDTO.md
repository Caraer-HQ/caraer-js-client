# SubscribeWebhookDTO

Data Transfer Object for subscribing to a webhook. This DTO represents the details required to configure a webhook subscription.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **string** | The URL of the webhook where requests will be sent. | [optional] [default to undefined]
**serverlessFunction** | [**ServerlessFunctionDTO**](ServerlessFunctionDTO.md) | UUID of the serverless function to invoke when the webhook is triggered (must belong to the same app). | [optional] [default to undefined]
**deliveryMode** | **string** | Delivery mode for this webhook: HTTP (use url) or SERVERLESS (use serverlessFunctionUuid). If omitted, legacy behavior applies based on presence of url/serverlessFunctionUuid. | [optional] [default to undefined]
**secret** | **string** | The secret used for webhook validation. | [optional] [default to undefined]
**topic** | **string** | The topic for which the webhook is subscribed. | [optional] [default to undefined]
**description** | **string** | Optional human-readable description for this webhook | [optional] [default to undefined]
**webhookFormat** | **string** | Webhook payload format (LEGACY, USER_FRIENDLY) | [optional] [default to undefined]
**parseRecord** | **boolean** | Whether to parse the record before returning it | [optional] [default to undefined]
**filter** | [**Filter**](Filter.md) | Filter criteria for webhook triggers | [optional] [default to undefined]
**includeRelations** | **Array&lt;string&gt;** | Records to include in webhook payload | [optional] [default to undefined]
**relationFilters** | [**{ [key: string]: Filter; }**](Filter.md) | Filter criteria for relations | [optional] [default to undefined]
**relationLimit** | **number** | Maximum number of relations to include | [optional] [default to undefined]
**retryEnabled** | **boolean** | Whether retry is enabled for failed deliveries (defaults to true if omitted) | [optional] [default to undefined]
**maxRetries** | **number** | Maximum number of retries | [optional] [default to undefined]
**retryBackoffMs** | **number** | Retry backoff in milliseconds | [optional] [default to undefined]
**triggerOffsetSeconds** | **number** | Offset from the target date in seconds (required for date_due webhooks) | [optional] [default to undefined]
**scheduleDirection** | **string** | Whether the webhook fires BEFORE or AFTER the target date | [optional] [default to undefined]
**scheduleRecurring** | **string** | Recurrence for date_due webhooks: NONE, DAILY, WEEKLY, MONTHLY, QUARTERLY, HALF_YEARLY, YEARLY, or CRON | [optional] [default to undefined]
**scheduleCronExpression** | **string** | Spring cron expression used when scheduleRecurring is CRON | [optional] [default to undefined]
**scheduleVersion** | **number** | Internal schedule version incremented when schedule config changes | [optional] [default to undefined]
**uuid** | **string** | Unique identifier for the entity | [default to undefined]
**name** | **string** | The name of the entity | [default to undefined]
**label** | **string** | Display label for the entity, can be different from name | [optional] [default to undefined]
**createdAt** | **number** | Unix timestamp when the entity was created | [optional] [default to undefined]
**createdBy** | [**ModelRecord**](ModelRecord.md) | Identifier of the user who created the entity | [optional] [default to undefined]
**updatedAt** | **number** | Unix timestamp when the entity was last updated | [optional] [default to undefined]
**updatedBy** | [**ModelRecord**](ModelRecord.md) | Identifier of the user who last updated the entity | [optional] [default to undefined]
**deletedAt** | **number** | Unix timestamp when the entity was deleted (null if not deleted) | [optional] [default to undefined]
**deletedBy** | [**ModelRecord**](ModelRecord.md) | Identifier of the user who deleted the entity | [optional] [default to undefined]
**index** | **number** | Index number for ordering entities | [optional] [default to undefined]

## Example

```typescript
import { SubscribeWebhookDTO } from '@caraer/client';

const instance: SubscribeWebhookDTO = {
    url,
    serverlessFunction,
    deliveryMode,
    secret,
    topic,
    description,
    webhookFormat,
    parseRecord,
    filter,
    includeRelations,
    relationFilters,
    relationLimit,
    retryEnabled,
    maxRetries,
    retryBackoffMs,
    triggerOffsetSeconds,
    scheduleDirection,
    scheduleRecurring,
    scheduleCronExpression,
    scheduleVersion,
    uuid,
    name,
    label,
    createdAt,
    createdBy,
    updatedAt,
    updatedBy,
    deletedAt,
    deletedBy,
    index,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
