# SavePropertyDTO

DTO representing a property to be saved

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **string** | Unique identifier for the entity | [default to undefined]
**name** | **string** | The internal name of the property | [optional] [default to undefined]
**label** | **string** | The display label of the property | [optional] [default to undefined]
**createdAt** | **number** | Unix timestamp when the entity was created | [optional] [default to undefined]
**createdBy** | [**ModelRecord**](ModelRecord.md) | Identifier of the user who created the entity | [optional] [default to undefined]
**updatedAt** | **number** | Unix timestamp when the entity was last updated | [optional] [default to undefined]
**updatedBy** | [**ModelRecord**](ModelRecord.md) | Identifier of the user who last updated the entity | [optional] [default to undefined]
**deletedAt** | **number** | Unix timestamp when the entity was deleted (null if not deleted) | [optional] [default to undefined]
**deletedBy** | [**ModelRecord**](ModelRecord.md) | Identifier of the user who deleted the entity | [optional] [default to undefined]
**index** | **number** | Index number for ordering entities | [optional] [default to undefined]
**description** | **string** | A brief description of the property | [optional] [default to undefined]
**type** | **string** | The data type of the property | [optional] [default to undefined]
**_options** | [**Array&lt;PropertyOption&gt;**](PropertyOption.md) | List of available options for the property | [optional] [default to undefined]
**group** | **string** | The group to which this property belongs | [optional] [default to undefined]
**format** | **string** | Property format type | [optional] [default to undefined]
**rules** | **Array&lt;string&gt;** | Collection of rules applied to the property | [optional] [default to undefined]
**hidden** | **boolean** | Indicates if the property is hidden by default | [optional] [default to undefined]
**lifecycleActive** | **boolean** | When true, property value changes are tracked as lifecycle records | [optional] [default to undefined]
**nonPublic** | **boolean** | Indicates if the property is not accessible publicly | [optional] [default to undefined]
**indexed** | **boolean** | Indicates if the property is indexed | [optional] [default to undefined]
**formatSettings** | **{ [key: string]: any | null; }** | Settings to configure the format of the property | [optional] [default to undefined]
**immutable** | **boolean** | Indicates if the property is immutable | [optional] [default to undefined]
**editable** | **boolean** | Indicates if the property can be edited | [optional] [default to undefined]
**icon** | **string** | The icon associated with the property | [optional] [default to undefined]
**webpagePublic** | **boolean** | Indicates if the property is webpage public | [optional] [default to undefined]
**embeddable** | **boolean** | Indicates if the property is embeddable | [optional] [default to undefined]

## Example

```typescript
import { SavePropertyDTO } from '@caraer/client';

const instance: SavePropertyDTO = {
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
    type,
    _options,
    group,
    format,
    rules,
    hidden,
    lifecycleActive,
    nonPublic,
    indexed,
    formatSettings,
    immutable,
    editable,
    icon,
    webpagePublic,
    embeddable,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
