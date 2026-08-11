# BulkEditRecordResultItem

A successfully saved record from a bulk edit operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **string** | UUID of the saved record. | [optional] [default to undefined]
**clientRef** | **string** | Client reference echoed from the request, if provided. | [optional] [default to undefined]
**created** | **boolean** | True when the record was created; false when updated. | [optional] [default to undefined]

## Example

```typescript
import { BulkEditRecordResultItem } from '@caraer/client';

const instance: BulkEditRecordResultItem = {
    uuid,
    clientRef,
    created,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
