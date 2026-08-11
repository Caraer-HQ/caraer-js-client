# BulkDeleteRecordsResponse

Response for a bulk delete records operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **string** | Result message. | [optional] [default to undefined]
**data** | [**BulkDeleteRecordsData**](BulkDeleteRecordsData.md) | Successfully deleted record UUIDs. | [optional] [default to undefined]
**errors** | [**Array&lt;BulkEditRecordErrorItem&gt;**](BulkEditRecordErrorItem.md) | Per-record errors when one or more items failed. | [optional] [default to undefined]

## Example

```typescript
import { BulkDeleteRecordsResponse } from '@caraer/client';

const instance: BulkDeleteRecordsResponse = {
    message,
    data,
    errors,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
