# PreviewItemDTO

Data Transfer Object for PreviewItem, used for transferring preview details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**property** | [**PropertyDTO**](PropertyDTO.md) | The property details associated with the preview item. | [optional] [default to undefined]
**text** | **string** | The text content associated with the preview item. | [optional] [default to undefined]
**value** | **any** |  | [optional] [default to undefined]
**relatedObject** | [**PreviewRelatedObjectDTO**](PreviewRelatedObjectDTO.md) | The related object information for the preview item. | [optional] [default to undefined]
**relatedObjectValue** | **any** |  | [optional] [default to undefined]
**divider** | **string** | Whether the preview item is a divider. (solid, dashed, dotted, spacer) | [optional] [default to undefined]
**buttonText** | **string** | The button text associated with the preview item. | [optional] [default to undefined]
**buttonUrl** | **string** | The button url associated with the preview item. | [optional] [default to undefined]
**buttonTextValue** | **any** |  | [optional] [default to undefined]
**buttonUrlValue** | **any** |  | [optional] [default to undefined]
**settings** | [**PreviewItemSettingsDTO**](PreviewItemSettingsDTO.md) | The settings associated with the preview item. | [optional] [default to undefined]
**styling** | [**PageContentStylingDTO**](PageContentStylingDTO.md) | The styling associated with the preview item. | [optional] [default to undefined]

## Example

```typescript
import { PreviewItemDTO } from '@caraer/client';

const instance: PreviewItemDTO = {
    property,
    text,
    value,
    relatedObject,
    relatedObjectValue,
    divider,
    buttonText,
    buttonUrl,
    buttonTextValue,
    buttonUrlValue,
    settings,
    styling,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
