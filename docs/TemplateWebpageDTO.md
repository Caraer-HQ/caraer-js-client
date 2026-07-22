# TemplateWebpageDTO

DTO for Template Webpage

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
**environment** | **string** | The environment of the webpage. | [optional] [default to undefined]
**title** | **string** | The title of the webpage. | [optional] [default to undefined]
**excerpt** | **string** | Short summary or excerpt displayed for the webpage. | [optional] [default to undefined]
**slug** | **string** | URL-friendly identifier for the webpage. | [optional] [default to undefined]
**image** | **string** | URL or identifier of the image associated with the webpage. | [optional] [default to undefined]
**customCss** | **string** | Custom CSS for the webpage. | [optional] [default to undefined]
**customJsHead** | **string** | Custom JS for the webpage. | [optional] [default to undefined]
**customJsBody** | **string** | Custom JS for the webpage. | [optional] [default to undefined]
**content** | [**PageContentDTO**](PageContentDTO.md) | Content of the webpage | [optional] [default to undefined]
**sidebar** | [**PreviewDTO**](PreviewDTO.md) | Preview of the sidebar | [optional] [default to undefined]
**sidebarRelation** | [**RelationDTO**](RelationDTO.md) | Relation of the sidebar | [optional] [default to undefined]
**sidebarObject** | [**CaraerObjectDTO**](CaraerObjectDTO.md) | Object of the sidebar | [optional] [default to undefined]
**_options** | [**WebpageOptionsDTO**](WebpageOptionsDTO.md) | Custom options and configurations specific to the webpage. | [optional] [default to undefined]
**metaData** | **{ [key: string]: any | null; }** | Map of additional metadata and attributes for the webpage. | [optional] [default to undefined]
**object** | [**CaraerObjectDTO**](CaraerObjectDTO.md) | Represents the associated Caraer object | [optional] [default to undefined]

## Example

```typescript
import { TemplateWebpageDTO } from '@caraer/client';

const instance: TemplateWebpageDTO = {
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
    environment,
    title,
    excerpt,
    slug,
    image,
    customCss,
    customJsHead,
    customJsBody,
    content,
    sidebar,
    sidebarRelation,
    sidebarObject,
    _options,
    metaData,
    object,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
