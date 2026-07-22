# SendNotificationRequest

Request body for sending an in-app notification to a user

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**targetUserUuid** | **string** | UUID of the user who should receive the notification | [default to undefined]
**title** | **string** | Notification title | [default to undefined]
**body** | **string** | Notification body (supports Markdown for links) | [default to undefined]
**type** | **string** | Notification type identifier | [optional] [default to undefined]
**icon** | **string** | Optional icon identifier | [optional] [default to undefined]
**action** | **string** | Optional structured action identifier | [optional] [default to undefined]
**actionTitle** | **string** | Optional label for the action button | [optional] [default to undefined]
**data** | **{ [key: string]: any | null; }** | Optional action payload | [optional] [default to undefined]

## Example

```typescript
import { SendNotificationRequest } from '@caraer/client';

const instance: SendNotificationRequest = {
    targetUserUuid,
    title,
    body,
    type,
    icon,
    action,
    actionTitle,
    data,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
