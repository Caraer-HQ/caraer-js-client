# AppSettingFieldSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [optional] [default to undefined]
**label** | **string** |  | [optional] [default to undefined]
**type** | **string** |  | [optional] [default to undefined]
**required** | **boolean** |  | [optional] [default to undefined]
**helpText** | **string** |  | [optional] [default to undefined]
**_options** | [**Array&lt;SettingOption&gt;**](SettingOption.md) |  | [optional] [default to undefined]
**optionsSource** | [**AppSettingOptionsSource**](AppSettingOptionsSource.md) |  | [optional] [default to undefined]
**defaultValue** | **any** |  | [optional] [default to undefined]
**hidden** | **boolean** |  | [optional] [default to undefined]
**value** | **any** |  | [optional] [default to undefined]
**mappingValue** | [**AppSettingFieldMappingStructure**](AppSettingFieldMappingStructure.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AppSettingFieldSchema } from '@caraer/client';

const instance: AppSettingFieldSchema = {
    name,
    label,
    type,
    required,
    helpText,
    _options,
    optionsSource,
    defaultValue,
    hidden,
    value,
    mappingValue,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
