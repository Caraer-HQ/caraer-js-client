# UserRecordResponseDTO

Record response for user API endpoints, including linked user data.

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
**deleted** | **boolean** | Whether the record is soft-deleted. | [optional] [default to undefined]
**properties** | [**Array&lt;FilledProperty&gt;**](FilledProperty.md) | Record properties for display. | [optional] [default to undefined]
**objects** | **{ [key: string]: any | null; }** | Primary and morph object metadata for this record. | [optional] [default to undefined]
**user** | [**PublicUserDTO**](PublicUserDTO.md) | The user linked to this record when the user trait is enabled. | [optional] [default to undefined]

## Example

```typescript
import { UserRecordResponseDTO } from '@caraer/client';

const instance: UserRecordResponseDTO = {
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
    deleted,
    properties,
    objects,
    user,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
