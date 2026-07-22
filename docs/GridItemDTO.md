# GridItemDTO

Represents a single cell within a form grid, which can contain a property, text, nested form, or other form elements

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**property** | [**PropertyDTO**](PropertyDTO.md) | The property associated with this grid item, typically representing a form field or input | [optional] [default to undefined]
**text** | **string** | Static text content to be displayed in this grid cell | [optional] [default to undefined]
**form** | [**FormDTO**](FormDTO.md) | A nested form that can be embedded within this grid cell | [optional] [default to undefined]
**submitButton** | **string** | The text of the submit button for this grid item | [optional] [default to undefined]
**settings** | [**GridItemSettingsDTO**](GridItemSettingsDTO.md) | Configuration settings for this grid item, including display and validation rules | [optional] [default to undefined]
**value** | **string** | The value of this grid item, used for form submissions | [optional] [default to undefined]

## Example

```typescript
import { GridItemDTO } from '@caraer/client';

const instance: GridItemDTO = {
    property,
    text,
    form,
    submitButton,
    settings,
    value,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
