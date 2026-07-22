# ViewDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **string** | Unique identifier for the entity | [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**label** | **string** | Display label for the entity, can be different from name | [optional] [default to undefined]
**createdAt** | **number** | Unix timestamp when the entity was created | [optional] [default to undefined]
**createdBy** | [**ModelRecord**](ModelRecord.md) | Identifier of the user who created the entity | [optional] [default to undefined]
**updatedAt** | **number** | Unix timestamp when the entity was last updated | [optional] [default to undefined]
**updatedBy** | [**ModelRecord**](ModelRecord.md) | Identifier of the user who last updated the entity | [optional] [default to undefined]
**deletedAt** | **number** | Unix timestamp when the entity was deleted (null if not deleted) | [optional] [default to undefined]
**deletedBy** | [**ModelRecord**](ModelRecord.md) | Identifier of the user who deleted the entity | [optional] [default to undefined]
**index** | **number** | Index number for ordering entities | [optional] [default to undefined]
**favorite** | **boolean** |  | [optional] [default to undefined]
**team** | **boolean** |  | [optional] [default to undefined]
**shared** | **boolean** |  | [optional] [default to undefined]
**personal** | **boolean** |  | [optional] [default to undefined]
**trait** | **string** |  | [optional] [default to undefined]
**filters** | [**Filter**](Filter.md) |  | [optional] [default to undefined]
**shows** | [**Array&lt;ShowItem&gt;**](ShowItem.md) |  | [optional] [default to undefined]
**sorts** | [**Array&lt;SortItem&gt;**](SortItem.md) |  | [optional] [default to undefined]
**limit** | **number** |  | [optional] [default to undefined]
**showIcons** | **boolean** |  | [optional] [default to undefined]
**rowHeight** | **string** |  | [optional] [default to undefined]
**query** | **string** |  | [optional] [default to undefined]
**icon** | **string** |  | [optional] [default to undefined]
**flowProperty** | **string** |  | [optional] [default to undefined]
**flowPreview** | **string** |  | [optional] [default to undefined]
**defaultView** | **boolean** |  | [optional] [default to undefined]
**isInternallyPublic** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { ViewDTO } from '@caraer/client';

const instance: ViewDTO = {
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
    favorite,
    team,
    shared,
    personal,
    trait,
    filters,
    shows,
    sorts,
    limit,
    showIcons,
    rowHeight,
    query,
    icon,
    flowProperty,
    flowPreview,
    defaultView,
    isInternallyPublic,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
