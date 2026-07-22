# AppBarTriggerRequest

Request body for triggering an action-based app bar

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recordUuid** | **string** | UUID of the record in context | [optional] [default to undefined]
**object** | **string** | Object name in context | [optional] [default to undefined]
**viewId** | **string** | View ID in context | [optional] [default to undefined]
**trait** | **string** | Trait name in context | [optional] [default to undefined]
**viewData** | **{ [key: string]: any | null; }** | Current view data for rebuilding the active index | [optional] [default to undefined]
**settingsValues** | **{ [key: string]: any | null; }** | Values for settingsSchema fields supplied at trigger time | [optional] [default to undefined]

## Example

```typescript
import { AppBarTriggerRequest } from '@caraer/client';

const instance: AppBarTriggerRequest = {
    recordUuid,
    object,
    viewId,
    trait,
    viewData,
    settingsValues,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
