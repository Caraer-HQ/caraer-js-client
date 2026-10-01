# AppSettingFieldSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [optional] [default to undefined]
**label** | **string** |  | [optional] [default to undefined]
**type** | **string** |  | [optional] [default to undefined]
**required** | **boolean** |  | [optional] [default to undefined]
**helpText** | **string** |  | [optional] [default to undefined]
**text** | **string** |  | [optional] [default to undefined]
**paragraph** | **string** |  | [optional] [default to undefined]
**_options** | [**Array&lt;SettingOption&gt;**](SettingOption.md) |  | [optional] [default to undefined]
**optionsSource** | [**AppSettingOptionsSource**](AppSettingOptionsSource.md) |  | [optional] [default to undefined]
**actionSource** | [**AppSettingActionSource**](AppSettingActionSource.md) |  | [optional] [default to undefined]
**defaultValue** | **any** |  | [optional] [default to undefined]
**hidden** | **boolean** |  | [optional] [default to undefined]
**advanced** | **boolean** |  | [optional] [default to undefined]
**group** | **string** |  | [optional] [default to undefined]
**fields** | [**Array&lt;AppSettingFieldSchema&gt;**](AppSettingFieldSchema.md) |  | [optional] [default to undefined]
**filterTraits** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**visibleWhen** | [**Array&lt;AppSettingCondition&gt;**](AppSettingCondition.md) |  | [optional] [default to undefined]
**itemFields** | [**Array&lt;AppSettingFieldSchema&gt;**](AppSettingFieldSchema.md) |  | [optional] [default to undefined]
**min** | **number** |  | [optional] [default to undefined]
**max** | **number** |  | [optional] [default to undefined]
**itemLabel** | **string** |  | [optional] [default to undefined]
**value** | **any** |  | [optional] [default to undefined]
**hasValue** | **boolean** |  | [optional] [default to undefined]
**mappingValue** | [**AppSettingFieldMappingStructure**](AppSettingFieldMappingStructure.md) |  | [optional] [default to undefined]
**valueScope** | **string** |  | [optional] [default to undefined]
**action** | **boolean** |  | [optional] [default to undefined]
**settingsGroup** | **boolean** |  | [optional] [default to undefined]
**filterPropertyTypes** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**filterPropertyFormats** | **Array&lt;string&gt;** |  | [optional] [default to undefined]

## Example

```typescript
import { AppSettingFieldSchema } from '@caraer/client';

const instance: AppSettingFieldSchema = {
    name,
    label,
    type,
    required,
    helpText,
    text,
    paragraph,
    _options,
    optionsSource,
    actionSource,
    defaultValue,
    hidden,
    advanced,
    group,
    fields,
    filterTraits,
    visibleWhen,
    itemFields,
    min,
    max,
    itemLabel,
    value,
    hasValue,
    mappingValue,
    valueScope,
    action,
    settingsGroup,
    filterPropertyTypes,
    filterPropertyFormats,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
