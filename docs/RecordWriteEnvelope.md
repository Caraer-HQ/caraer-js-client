# RecordWriteEnvelope

Optional record-write envelope. objectName must match the URL\'s object context. Query parameters still control parse, ignoreErrors and recordReturnFormat.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**objectName** | **string** | Optional object name; when provided it must match the URL. | [optional] [default to undefined]
**record** | [**RecordDTO**](RecordDTO.md) | The record to create or update. | [default to undefined]

## Example

```typescript
import { RecordWriteEnvelope } from '@caraer/client';

const instance: RecordWriteEnvelope = {
    objectName,
    record,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
