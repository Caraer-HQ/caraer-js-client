# RelationDTO

Data transfer object representing a relation between Caraer objects

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **string** | Unique identifier for the entity | [default to undefined]
**name** | **string** | Unique identifier name for the relation | [optional] [default to undefined]
**label** | **string** | Display label for the relation | [optional] [default to undefined]
**createdAt** | **number** | Unix timestamp when the entity was created | [optional] [default to undefined]
**createdBy** | [**ModelRecord**](ModelRecord.md) | Identifier of the user who created the entity | [optional] [default to undefined]
**updatedAt** | **number** | Unix timestamp when the entity was last updated | [optional] [default to undefined]
**updatedBy** | [**ModelRecord**](ModelRecord.md) | Identifier of the user who last updated the entity | [optional] [default to undefined]
**deletedAt** | **number** | Unix timestamp when the entity was deleted (null if not deleted) | [optional] [default to undefined]
**deletedBy** | [**ModelRecord**](ModelRecord.md) | Identifier of the user who deleted the entity | [optional] [default to undefined]
**index** | **number** | Index number for ordering entities | [optional] [default to undefined]
**description** | **string** | Detailed description of the relation\&#39;s purpose and usage | [optional] [default to undefined]
**objects** | [**Set&lt;CaraerObjectDTO&gt;**](CaraerObjectDTO.md) | Set of Caraer objects that are part of this relation | [optional] [default to undefined]
**immutable** | **boolean** | Whether the relation is immutable | [optional] [default to undefined]
**editable** | **boolean** | Whether the relation is editable | [optional] [default to undefined]

## Example

```typescript
import { RelationDTO } from '@caraer/client';

const instance: RelationDTO = {
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
    description,
    objects,
    immutable,
    editable,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
