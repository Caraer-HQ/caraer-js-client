# GridItemSettingsDTO

Configuration settings for a grid item in a form, including property settings and form-related settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**relation** | [**RelationDTO**](RelationDTO.md) | Defines the relationship between this form field and other entities or forms | [optional] [default to undefined]
**record** | [**ModelRecord**](ModelRecord.md) | UUID of a record to be pre-filled in this form field | [optional] [default to undefined]
**aiprompt** | **string** |  | [optional] [default to undefined]
**label** | **string** | The display label for the form field | [optional] [default to undefined]
**defaultValue** | **string** | The default value to be pre-filled in the form field | [optional] [default to undefined]
**isRequired** | **boolean** | Indicates whether this field must be filled out before form submission | [optional] [default to undefined]
**hidden** | **boolean** | Indicates whether this field should be hidden from view | [optional] [default to undefined]
**placeholder** | **string** | The placeholder text for the form field | [optional] [default to undefined]
**helpText** | **string** | The help text for the form field | [optional] [default to undefined]
**AIPrompt** | **string** | The AI prompt for the form field. Only applicable to text fields. | [optional] [default to undefined]
**styling** | **string** | The styling for the form field. Can be \&#39;dropdown\&#39;, \&#39;grid\&#39; or \&#39;boxes\&#39; | [optional] [default to undefined]
**stretch** | **boolean** | Whether the form field should be stretched to the full width of the form | [optional] [default to undefined]
**align** | **string** | The alignment of the form field. Can be \&#39;left\&#39;, \&#39;center\&#39; or \&#39;right\&#39; | [optional] [default to undefined]
**rangeMin** | **number** | The minimum value for the slider field | [optional] [default to undefined]
**rangeMax** | **number** | The maximum value for the slider field | [optional] [default to undefined]

## Example

```typescript
import { GridItemSettingsDTO } from '@caraer/client';

const instance: GridItemSettingsDTO = {
    relation,
    record,
    aiprompt,
    label,
    defaultValue,
    isRequired,
    hidden,
    placeholder,
    helpText,
    AIPrompt,
    styling,
    stretch,
    align,
    rangeMin,
    rangeMax,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
