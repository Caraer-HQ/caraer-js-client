# AppBarIframeSessionRequest

Request body for creating an iframe session token

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**suite** | **string** | Selected suite for explicit SUITE tool requests; omitted legacy requests retain configured-suite behavior | [optional] [default to undefined]
**navigationPlacement** | **string** | Explicit TOOL_BAR placement; must match the stored descriptor | [optional] [default to undefined]
**object** | **string** | Object name in context | [optional] [default to undefined]
**recordUuid** | **string** | UUID of the record in context | [optional] [default to undefined]
**viewId** | **string** | View ID in context | [optional] [default to undefined]
**trait** | **string** | Trait name in context | [optional] [default to undefined]
**viewData** | **{ [key: string]: any | null; }** | Current view data for rebuilding the active index | [optional] [default to undefined]

## Example

```typescript
import { AppBarIframeSessionRequest } from '@caraer/client';

const instance: AppBarIframeSessionRequest = {
    suite,
    navigationPlacement,
    object,
    recordUuid,
    viewId,
    trait,
    viewData,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
