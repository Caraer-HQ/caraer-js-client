# PropertyDTOFormat

Format configuration for the property\'s display and validation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**icon** | **string** |  | [optional] [default to undefined]
**type** | **string** |  | [optional] [default to undefined]
**settings** | [**Array&lt;SettingField&gt;**](SettingField.md) |  | [optional] [default to undefined]
**filters** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**rules** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**linkedProperty** | [**PropertyDTO**](PropertyDTO.md) |  | [optional] [default to undefined]

## Example

```typescript
import { PropertyDTOFormat } from '@caraer/client';

const instance: PropertyDTOFormat = {
    label,
    name,
    icon,
    type,
    settings,
    filters,
    rules,
    linkedProperty,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
