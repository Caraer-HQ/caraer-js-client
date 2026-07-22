# PageContentDTO

Data transfer object representing a webpage content

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
**category** | **string** | Category of the content | [optional] [default to undefined]
**parentUuid** | **string** | Unique identifier for the parent content | [optional] [default to undefined]
**type** | **string** | Type of the content (\&#39;box\&#39; or \&#39;component\&#39;) | [optional] [default to undefined]
**display** | **string** | Display of the content for box (\&#39;column\&#39;, \&#39;row\&#39; or \&#39;wrap\&#39;) and for component () | [optional] [default to undefined]
**text** | **string** | Text content of the content | [optional] [default to undefined]
**customCss** | **string** | Direct CSS for this content node, scoped to data-component-uuid at render time | [optional] [default to undefined]
**styling** | [**PageContentStylingDTO**](PageContentStylingDTO.md) | Styling of the content | [optional] [default to undefined]
**settings** | [**PageContentSettingsDTO**](PageContentSettingsDTO.md) | Settings for the content | [optional] [default to undefined]
**children** | [**Array&lt;PageContentDTO&gt;**](PageContentDTO.md) | Children of the content | [optional] [default to undefined]
**scope** | **string** | Module storage scope: company or personal | [optional] [default to undefined]
**moduleKind** | **string** | Module kind: content (section/component) or page (full page design) | [optional] [default to undefined]
**pageCustomCss** | **string** | Page-level custom CSS for page modules | [optional] [default to undefined]
**pageCustomJsHead** | **string** | Page-level custom JS for the head for page modules | [optional] [default to undefined]
**pageCustomJsBody** | **string** | Page-level custom JS for the body for page modules | [optional] [default to undefined]
**sidebarUuid** | **string** | Sidebar preview UUID for page modules | [optional] [default to undefined]
**sidebarRelationUuid** | **string** | Sidebar relation UUID for page modules | [optional] [default to undefined]
**sidebarObjectUuid** | **string** | Sidebar object UUID for page modules | [optional] [default to undefined]

## Example

```typescript
import { PageContentDTO } from '@caraer/client';

const instance: PageContentDTO = {
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
    category,
    parentUuid,
    type,
    display,
    text,
    customCss,
    styling,
    settings,
    children,
    scope,
    moduleKind,
    pageCustomCss,
    pageCustomJsHead,
    pageCustomJsBody,
    sidebarUuid,
    sidebarRelationUuid,
    sidebarObjectUuid,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
