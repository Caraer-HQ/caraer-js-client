# RecordRelationRequestDTO

Relation to create when saving a record

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**relationName** | **string** | Name of the relation type | [default to undefined]
**uuid** | **string** | UUID of an existing record to link to | [optional] [default to undefined]
**properties** | **{ [key: string]: any | null; }** | Properties to update on the existing record referenced by uuid before linking | [optional] [default to undefined]
**record** | [**RecordDTO**](RecordDTO.md) | Nested record to create before linking, or update first when record.uuid is provided | [optional] [default to undefined]
**objectName** | **string** | Object name for nested record create when relation allows multiple target types | [optional] [default to undefined]
**primary** | **boolean** | When true, marks this relation edge as primary | [optional] [default to undefined]
**merge** | **boolean** | When true, MERGE relation edge instead of CREATE | [optional] [default to undefined]

## Example

```typescript
import { RecordRelationRequestDTO } from '@caraer/client';

const instance: RecordRelationRequestDTO = {
    relationName,
    uuid,
    properties,
    record,
    objectName,
    primary,
    merge,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
