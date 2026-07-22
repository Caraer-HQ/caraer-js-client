# PreviewDTO

Data transfer object representing a preview entity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **string** | Description of the preview | [optional] [default to undefined]
**object** | [**CaraerObjectDTO**](CaraerObjectDTO.md) | The Caraer object associated with this preview | [optional] [default to undefined]
**recordUuid** | **string** | UUID of the associated record | [optional] [default to undefined]
**primary** | **boolean** | Indicates whether this preview is the primary one | [optional] [default to undefined]
**grid** | **Array&lt;Array&lt;PreviewItemDTO&gt;&gt;** | Rows of the preview grid | [optional] [default to undefined]
**previewType** | **string** | Preview type | [optional] [default to undefined]
**profileImage** | [**PropertyDTO**](PropertyDTO.md) | Profile image property | [optional] [default to undefined]
**profileImagePosition** | **string** | Profile image position (top, left, right, bottom, background) | [optional] [default to undefined]
**profileImageStyling** | [**PageContentStylingDTO**](PageContentStylingDTO.md) | Style set for the profile image | [optional] [default to undefined]
**firstInitialProperty** | [**PropertyDTO**](PropertyDTO.md) | First initial property | [optional] [default to undefined]
**secondInitialProperty** | [**PropertyDTO**](PropertyDTO.md) | Second initial property | [optional] [default to undefined]
**profileImageValue** | **string** | Value of the profile image | [optional] [default to undefined]
**firstInitialPropertyValue** | **string** | Value of the first initial property | [optional] [default to undefined]
**secondInitialPropertyValue** | **string** | Value of the second initial property | [optional] [default to undefined]
**customCss** | **string** | Custom CSS styles for the preview | [optional] [default to undefined]
**url** | **string** | URL of the preview | [optional] [default to undefined]
**styling** | [**PageContentStylingDTO**](PageContentStylingDTO.md) | The styling of the preview | [optional] [default to undefined]
**sortProperty** | **string** | Property name used for server-side list sorting | [optional] [default to undefined]
**sortValue** | **any** |  | [optional] [default to undefined]
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

## Example

```typescript
import { PreviewDTO } from '@caraer/client';

const instance: PreviewDTO = {
    description,
    object,
    recordUuid,
    primary,
    grid,
    previewType,
    profileImage,
    profileImagePosition,
    profileImageStyling,
    firstInitialProperty,
    secondInitialProperty,
    profileImageValue,
    firstInitialPropertyValue,
    secondInitialPropertyValue,
    customCss,
    url,
    styling,
    sortProperty,
    sortValue,
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
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
