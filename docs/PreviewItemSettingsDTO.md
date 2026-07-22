# PreviewItemSettingsDTO

Data Transfer Object for PreviewItemSettings, used for transferring preview item settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**showIcon** | **boolean** | Whether the preview item should show the icon. | [optional] [default to undefined]
**iconPadding** | **number** | The padding of the icon. | [optional] [default to undefined]
**iconColor** | **string** | The color of the icon. | [optional] [default to undefined]
**iconSize** | **number** | The size of the icon. | [optional] [default to undefined]
**defaultValue** | **string** | The default value of the preview item. | [optional] [default to undefined]
**editable** | **boolean** | Whether this preview property is editable inline. | [optional] [default to undefined]
**helpText** | **string** | The help text of the preview item. | [optional] [default to undefined]
**paragraph** | **string** | The paragraph of the preview item p, h1, h2, h3, h4, h5, h6. | [optional] [default to undefined]
**showColor** | **boolean** | Whether the preview item should show the color of the select option. | [optional] [default to undefined]
**showBorder** | **boolean** | Whether the preview item should show the border around the select option. | [optional] [default to undefined]
**buttonType** | **string** | What type the button should be (primary, secondary or tertiary) | [optional] [default to undefined]
**showFavicon** | **boolean** | Whether to show the favicon of the button URL. | [optional] [default to undefined]

## Example

```typescript
import { PreviewItemSettingsDTO } from '@caraer/client';

const instance: PreviewItemSettingsDTO = {
    showIcon,
    iconPadding,
    iconColor,
    iconSize,
    defaultValue,
    editable,
    helpText,
    paragraph,
    showColor,
    showBorder,
    buttonType,
    showFavicon,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
