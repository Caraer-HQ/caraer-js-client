# FormItemDTO

Represents a section or group within a form, containing a grid of form elements

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aiprompt** | **string** |  | [optional] [default to undefined]
**title** | **string** | The title or heading of this form section | [optional] [default to undefined]
**description** | **string** | Additional descriptive text explaining the purpose or instructions for this section | [optional] [default to undefined]
**type** | **string** | The type of form section (e.g., \&#39;grid\&#39;, \&#39;section\&#39;, etc.) | [optional] [default to undefined]
**AIPrompt** | **string** | The AI prompt for the form section. Only applicable to steps. | [optional] [default to undefined]
**grid** | **Array&lt;Array&lt;GridItemDTO&gt;&gt;** | A two-dimensional array representing the layout of form elements. Each inner list represents a row of elements | [optional] [default to undefined]

## Example

```typescript
import { FormItemDTO } from '@caraer/client';

const instance: FormItemDTO = {
    aiprompt,
    title,
    description,
    type,
    AIPrompt,
    grid,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
