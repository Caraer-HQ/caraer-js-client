# BulkDeleteRecordsRequest

Request to archive, anonymize, or permanently delete multiple records.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuids** | **Array&lt;string&gt;** | Record UUIDs to delete. | [default to undefined]
**mode** | **string** | Deletion mode: \&#39;archive\&#39;, \&#39;anonymize\&#39;, or \&#39;delete\&#39;. | [default to undefined]

## Example

```typescript
import { BulkDeleteRecordsRequest } from '@caraer/client';

const instance: BulkDeleteRecordsRequest = {
    uuids,
    mode,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
