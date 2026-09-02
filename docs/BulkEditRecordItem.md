# BulkEditRecordItem

A single record to create or update in a bulk edit request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **string** | UUID of an existing record to update. Omit to create a new record. | [optional] [default to undefined]
**clientRef** | **string** | Client-side reference for matching the item back after create (e.g. row-3). | [optional] [default to undefined]
**properties** | **{ [key: string]: any | null; }** | Property values to set on the record. | [optional] [default to undefined]
**relations** | [**Array&lt;RecordRelationRequestDTO&gt;**](RecordRelationRequestDTO.md) | Relations to create or merge after the record is saved. Same shape as createOrUpdate. | [optional] [default to undefined]

## Example

```typescript
import { BulkEditRecordItem } from '@caraer/client';

const instance: BulkEditRecordItem = {
    uuid,
    clientRef,
    properties,
    relations,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
