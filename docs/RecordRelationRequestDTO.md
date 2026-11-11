# RecordRelationRequestDTO

Relation to create when saving a record

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**remove** | **boolean** | When true, remove this existing UUID relation atomically with the record mutation. Nested records and property writes are not allowed. | [optional] [default to undefined]
**relationName** | **string** | Name of the relation type | [default to undefined]
**uuid** | **string** | UUID of an existing record to link to | [optional] [default to undefined]
**properties** | **{ [key: string]: any | null; }** | With uuid: patch the existing target before linking. Without uuid or record: create-or-update the target using its unique properties, then link. Use objectName when ambiguous. | [optional] [default to undefined]
**edgeProperties** | **{ [key: string]: any | null; }** | Values for properties declared on the relation schema, stored on the relation edge itself (not on either record). Omit to leave existing edge values untouched; a null value clears a key. | [optional] [default to undefined]
**record** | [**RecordDTO**](RecordDTO.md) | Nested record to create or update (by uuid or unique properties) before linking | [optional] [default to undefined]
**objectName** | **string** | Object name for nested record create when relation allows multiple target types | [optional] [default to undefined]
**primary** | **boolean** | When true, marks this relation edge as primary | [optional] [default to undefined]
**merge** | **boolean** | When true, MERGE relation edge instead of CREATE | [optional] [default to undefined]

## Example

```typescript
import { RecordRelationRequestDTO } from '@caraer/client';

const instance: RecordRelationRequestDTO = {
    remove,
    relationName,
    uuid,
    properties,
    edgeProperties,
    record,
    objectName,
    primary,
    merge,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
