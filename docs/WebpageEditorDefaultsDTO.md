# WebpageEditorDefaultsDTO

Read-only style, color and font defaults for an authorized webpage editor. Contains no company administration or executable script configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**componentStyles** | [**{ [key: string]: PageContentStylingDTO; }**](PageContentStylingDTO.md) |  | [optional] [default to undefined]
**palette** | [**Palette**](Palette.md) |  | [optional] [default to undefined]
**fonts** | [**Array&lt;CustomFontDTO&gt;**](CustomFontDTO.md) |  | [optional] [default to undefined]

## Example

```typescript
import { WebpageEditorDefaultsDTO } from '@caraer/client';

const instance: WebpageEditorDefaultsDTO = {
    componentStyles,
    palette,
    fonts,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
