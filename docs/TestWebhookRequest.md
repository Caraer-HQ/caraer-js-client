# TestWebhookRequest

Webhook configuration and test parameters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**webhook** | [**SubscribeWebhookDTO**](SubscribeWebhookDTO.md) | Webhook configuration to test (not saved). | [default to undefined]
**recordUuid** | **string** | UUID of the record to base the event on. Omit to auto-resolve from webhook topic. | [optional] [default to undefined]
**eventType** | **string** | Event type to simulate (created, updated, deleted, etc.). | [optional] [default to undefined]
**propertyName** | **string** | Property name when simulating property_changed. | [optional] [default to undefined]

## Example

```typescript
import { TestWebhookRequest } from '@caraer/client';

const instance: TestWebhookRequest = {
    webhook,
    recordUuid,
    eventType,
    propertyName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
