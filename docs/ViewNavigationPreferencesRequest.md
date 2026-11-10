# ViewNavigationPreferencesRequest

Personal view navigation overrides. Omitted entries preserve their values; a null entry clears that override and restores the legacy sharing default. Does not change sharing or record access.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**indices** | **{ [key: string]: number; }** |  | [optional] [default to undefined]
**favorites** | **{ [key: string]: boolean; }** |  | [optional] [default to undefined]

## Example

```typescript
import { ViewNavigationPreferencesRequest } from '@caraer/client';

const instance: ViewNavigationPreferencesRequest = {
    indices,
    favorites,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
