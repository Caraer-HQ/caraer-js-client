# PropertyDTO

Data transfer object representing a property with its configuration and metadata

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **string** | Unique identifier for the entity | [default to undefined]
**name** | **string** | The name identifier of the property | [optional] [default to undefined]
**label** | **string** | Display label for the property | [optional] [default to undefined]
**createdAt** | **number** | Unix timestamp when the entity was created | [optional] [default to undefined]
**createdBy** | [**ModelRecord**](ModelRecord.md) | Identifier of the user who created the entity | [optional] [default to undefined]
**updatedAt** | **number** | Unix timestamp when the entity was last updated | [optional] [default to undefined]
**updatedBy** | [**ModelRecord**](ModelRecord.md) | Identifier of the user who last updated the entity | [optional] [default to undefined]
**deletedAt** | **number** | Unix timestamp when the entity was deleted (null if not deleted) | [optional] [default to undefined]
**deletedBy** | [**ModelRecord**](ModelRecord.md) | Identifier of the user who deleted the entity | [optional] [default to undefined]
**index** | **number** | Index number for ordering entities | [optional] [default to undefined]
**description** | **string** | Detailed description of the property\&#39;s purpose and usage | [optional] [default to undefined]
**type** | **string** | The data type of the property (e.g., \&#39;string\&#39;, \&#39;number\&#39;, \&#39;date\&#39;, etc.) | [optional] [default to undefined]
**_options** | [**Array&lt;PropertyOption&gt;**](PropertyOption.md) | List of predefined options for properties that support selection | [optional] [default to undefined]
**group** | **string** | Group name for organizing related properties | [optional] [default to undefined]
**format** | [**PropertyDTOFormat**](PropertyDTOFormat.md) |  | [optional] [default to undefined]
**rules** | **Array&lt;string&gt;** | Collection of validation rules applied to the property | [optional] [default to undefined]
**immutable** | **boolean** | Indicates if the property value cannot be modified after initial creation | [optional] [default to undefined]
**hidden** | **boolean** | Indicates if the property should be hidden from view | [optional] [default to undefined]
**lifecycleActive** | **boolean** | When true, property value changes are tracked as lifecycle records | [optional] [default to undefined]
**nonPublic** | **boolean** | Indicates if the property should be excluded from public APIs | [optional] [default to undefined]
**indexed** | **boolean** | Indicates if the property should be indexed for searching | [optional] [default to undefined]
**editable** | **boolean** | Indicates if the property value can be modified | [optional] [default to undefined]
**formatSettings** | **{ [key: string]: any | null; }** | Additional format-specific settings for the property | [optional] [default to undefined]
**usedIn** | [**UsedInResult**](UsedInResult.md) | Information about where this property is used in the system | [optional] [default to undefined]
**icon** | **string** | Icon identifier for visual representation of the property | [optional] [default to undefined]
**webpagePublic** | **boolean** | Indicates if the property can be used in webpages | [optional] [default to undefined]
**embeddable** | **boolean** | Indicates if the property can be embedded in other properties | [optional] [default to undefined]
**minAndMaxValue** | [**Tuple2LongLong**](Tuple2LongLong.md) | The minimum and maximum value of the property | [optional] [default to undefined]
**pinned** | **boolean** | Indicates if the property is pinned by the logged-in user | [optional] [default to undefined]

## Example

```typescript
import { PropertyDTO } from '@caraer/client';

const instance: PropertyDTO = {
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
    immutable,
    hidden,
    lifecycleActive,
    nonPublic,
    indexed,
    editable,
    formatSettings,
    usedIn,
    icon,
    webpagePublic,
    embeddable,
    minAndMaxValue,
    pinned,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
