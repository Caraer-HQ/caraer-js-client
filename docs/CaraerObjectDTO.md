# CaraerObjectDTO

Data transfer object representing a Caraer object with its configuration, properties, relations, and views

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **string** | Unique identifier for the entity | [default to undefined]
**name** | **string** | Unique identifier name for the object | [optional] [default to undefined]
**label** | **string** | Display label for the object | [optional] [default to undefined]
**createdAt** | **number** | Unix timestamp when the entity was created | [optional] [default to undefined]
**createdBy** | [**ModelRecord**](ModelRecord.md) | Identifier of the user who created the entity | [optional] [default to undefined]
**updatedAt** | **number** | Unix timestamp when the entity was last updated | [optional] [default to undefined]
**updatedBy** | [**ModelRecord**](ModelRecord.md) | Identifier of the user who last updated the entity | [optional] [default to undefined]
**deletedAt** | **number** | Unix timestamp when the entity was deleted (null if not deleted) | [optional] [default to undefined]
**deletedBy** | [**ModelRecord**](ModelRecord.md) | Identifier of the user who deleted the entity | [optional] [default to undefined]
**index** | **number** | Index number for ordering objects | [optional] [default to undefined]
**plural** | **string** | Plural form of the object\&#39;s name, used for display purposes | [optional] [default to undefined]
**description** | **string** | Detailed description of the object\&#39;s purpose and usage | [optional] [default to undefined]
**groups** | **Array&lt;string&gt;** | Collection of group names this object belongs to | [optional] [default to undefined]
**icon** | **string** | Icon identifier for visual representation of the object | [optional] [default to undefined]
**showInMenu** | **boolean** | Indicates if this object should be displayed in navigation menus | [optional] [default to undefined]
**defaultTrait** | **string** | Name of the default trait applied to this object | [optional] [default to undefined]
**traits** | **Array&lt;string&gt;** | List of trait names associated with this object | [optional] [default to undefined]
**views** | [**Array&lt;ViewDTO&gt;**](ViewDTO.md) | List of view configurations for displaying this object | [optional] [default to undefined]
**properties** | [**Array&lt;PropertyDTO&gt;**](PropertyDTO.md) | List of properties defined for this object | [optional] [default to undefined]
**relations** | [**Array&lt;RelationDTO&gt;**](RelationDTO.md) | List of relations this object has with other objects | [optional] [default to undefined]
**suites** | **Array&lt;string&gt;** | List of suite names this object belongs to | [optional] [default to undefined]
**extendsTo** | [**Array&lt;CaraerObjectDTO&gt;**](CaraerObjectDTO.md) | List of objects this object extends to | [optional] [default to undefined]
**editable** | **boolean** | When false, the object schema cannot be updated or deleted via the API | [optional] [default to undefined]

## Example

```typescript
import { CaraerObjectDTO } from '@caraer/client';

const instance: CaraerObjectDTO = {
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
    plural,
    description,
    groups,
    icon,
    showInMenu,
    defaultTrait,
    traits,
    views,
    properties,
    relations,
    suites,
    extendsTo,
    editable,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
