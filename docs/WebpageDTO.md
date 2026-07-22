# WebpageDTO

Data transfer object representing a webpage with its various states, properties, and associated form/versions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**environment** | **string** | The environment of the webpage. | [optional] [default to undefined]
**uuid** | **string** | The UUID of the webpage. | [optional] [default to undefined]
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
**object** | [**CaraerObjectDTO**](CaraerObjectDTO.md) | The Object object associated with the webpage, representing application data. | [optional] [default to undefined]
**record** | [**WebpagePublicRecordDTO**](WebpagePublicRecordDTO.md) | Webpage-public backing record values (internal + parsed). Set only on public page responses. | [optional] [default to undefined]
**_options** | [**WebpageOptionsDTO**](WebpageOptionsDTO.md) | Custom options and configurations specific to the webpage. | [optional] [default to undefined]
**metaData** | **{ [key: string]: any | null; }** | Map of additional metadata and attributes for the webpage. | [optional] [default to undefined]
**publishedBy** | **string** | Identifier of the user or process that published the webpage | [optional] [default to undefined]
**publishedAt** | **number** | Timestamp representing when the webpage was published | [optional] [default to undefined]
**unpublishedBy** | **string** | Identifier of the user or process that unpublished the webpage | [optional] [default to undefined]
**unpublishedAt** | **number** | Timestamp representing when the webpage was unpublished | [optional] [default to undefined]
**publishAt** | **number** | Scheduled timestamp for when the webpage will be published | [optional] [default to undefined]
**unpublishAt** | **number** | Scheduled timestamp for when the webpage will be unpublished | [optional] [default to undefined]
**isPublished** | **boolean** | Flag indicating whether the webpage is currently published | [optional] [default to false]
**liveUrl** | **string** | Fully qualified public URL of the webpage, including the page trait root slug. | [optional] [default to undefined]

## Example

```typescript
import { WebpageDTO } from '@caraer/client';

const instance: WebpageDTO = {
    environment,
    uuid,
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
    object,
    record,
    _options,
    metaData,
    publishedBy,
    publishedAt,
    unpublishedBy,
    unpublishedAt,
    publishAt,
    unpublishAt,
    isPublished,
    liveUrl,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
