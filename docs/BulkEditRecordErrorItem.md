# BulkEditRecordErrorItem

Validation or processing errors for a single record in a bulk edit operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **string** | UUID of the record that failed, if known. | [optional] [default to undefined]
**clientRef** | **string** | Client reference echoed from the request, if provided. | [optional] [default to undefined]
**message** | **string** | Summary message for this record\&#39;s failure. | [optional] [default to undefined]
**errors** | [**Array&lt;CaraerErrorType&gt;**](CaraerErrorType.md) | Field-level validation errors. | [optional] [default to undefined]

## Example

```typescript
import { BulkEditRecordErrorItem } from '@caraer/client';

const instance: BulkEditRecordErrorItem = {
    uuid,
    clientRef,
    message,
    errors,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
