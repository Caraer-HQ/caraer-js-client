# WebMenuDTO

Data transfer object representing the structure of a web menu

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
**title** | **string** | The title of the web menu | [optional] [default to undefined]
**active** | **boolean** | Indicates whether the web menu is active | [optional] [default to undefined]
**environments** | **Array&lt;string&gt;** | The environments of the web menu | [optional] [default to undefined]
**location** | **string** | The location of the web menu in the UI, e.g., \&#39;footer_block_1\&#39; or \&#39;header\&#39; | [optional] [default to undefined]
**urls** | **Array&lt;{ [key: string]: string; }&gt;** |  | [optional] [default to undefined]
**items** | [**Array&lt;WebMenuItem&gt;**](WebMenuItem.md) |  | [optional] [default to undefined]
**text** | **string** | The text of the web menu | [optional] [default to undefined]

## Example

```typescript
import { WebMenuDTO } from '@caraer/client';

const instance: WebMenuDTO = {
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
    title,
    active,
    environments,
    location,
    urls,
    items,
    text,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
