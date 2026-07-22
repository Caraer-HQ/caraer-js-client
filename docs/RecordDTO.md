# RecordDTO

Data Transfer Object for representing a record with dynamic properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **string** | Unique identifier for the entity | [default to undefined]
**name** | **string** | The name of the entity | [default to undefined]
**label** | **string** | Display label for the entity, can be different from name | [optional] [default to undefined]
**createdAt** | **number** | Unix timestamp when the entity was created | [optional] [default to undefined]
**createdBy** | [**ModelRecord**](ModelRecord.md) | Identifier of the user who created the entity | [optional] [default to undefined]
**updatedAt** | **number** | Unix timestamp when the entity was last updated | [optional] [default to undefined]
**updatedBy** | [**ModelRecord**](ModelRecord.md) | Identifier of the user who last updated the entity | [optional] [default to undefined]
**deletedAt** | **number** | Unix timestamp when the entity was deleted (null if not deleted) | [optional] [default to undefined]
**deletedBy** | [**ModelRecord**](ModelRecord.md) | Identifier of the user who deleted the entity | [optional] [default to undefined]
**index** | **number** | Index number for ordering entities | [optional] [default to undefined]
**properties** | **{ [key: string]: any | null; }** | A map of property names to their corresponding values for this record. | [optional] [default to undefined]
**user** | [**PublicUserDTO**](PublicUserDTO.md) | The user of the record if the user trait is enabled. | [optional] [default to undefined]
**relations** | [**Array&lt;RecordRelationRequestDTO&gt;**](RecordRelationRequestDTO.md) | Relations to create or merge after the record is saved. Each item links to an existing record (uuid) or creates a nested record first. | [optional] [default to undefined]

## Example

```typescript
import { RecordDTO } from '@caraer/client';

const instance: RecordDTO = {
    uuid,
    name,
    label,
    createdAt,
    createdBy,
    updatedAt,
    updatedBy,
    deletedAt,
    deletedBy,
    index,
    properties,
    user,
    relations,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
