# ShowResponseNotificationInboxDTO

Represents the response for viewing or showing a specific resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **string** | A message detailing the result of the operation. | [optional] [default to undefined]
**data** | [**NotificationInboxDTO**](NotificationInboxDTO.md) | The data payload of the response, if any. | [optional] [default to undefined]

## Example

```typescript
import { ShowResponseNotificationInboxDTO } from '@caraer/client';

const instance: ShowResponseNotificationInboxDTO = {
    message,
    data,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
