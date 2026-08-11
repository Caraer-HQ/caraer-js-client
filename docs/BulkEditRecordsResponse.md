# BulkEditRecordsResponse

Response for a bulk create/update records operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **string** | Result message. | [optional] [default to undefined]
**data** | [**BulkEditRecordsData**](BulkEditRecordsData.md) | Successfully saved records. | [optional] [default to undefined]
**errors** | [**Array&lt;BulkEditRecordErrorItem&gt;**](BulkEditRecordErrorItem.md) | Per-record errors when one or more items failed validation. | [optional] [default to undefined]

## Example

```typescript
import { BulkEditRecordsResponse } from '@caraer/client';

const instance: BulkEditRecordsResponse = {
    message,
    data,
    errors,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
