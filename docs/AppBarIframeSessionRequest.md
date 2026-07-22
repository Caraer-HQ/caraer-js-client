# AppBarIframeSessionRequest

Request body for creating an iframe session token

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object** | **string** | Object name in context | [optional] [default to undefined]
**recordUuid** | **string** | UUID of the record in context | [optional] [default to undefined]
**viewId** | **string** | View ID in context | [optional] [default to undefined]
**trait** | **string** | Trait name in context | [optional] [default to undefined]
**viewData** | **{ [key: string]: any | null; }** | Current view data for rebuilding the active index | [optional] [default to undefined]

## Example

```typescript
import { AppBarIframeSessionRequest } from '@caraer/client';

const instance: AppBarIframeSessionRequest = {
    object,
    recordUuid,
    viewId,
    trait,
    viewData,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
