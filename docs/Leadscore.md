# Leadscore

DTO representing a lead score rule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object** | **string** | The name of the object to which this pagination item belongs. | [optional] [default to undefined]
**relation** | **string** | The relationship between objects. | [optional] [default to undefined]
**property** | **string** | The name of the property within the object. | [optional] [default to undefined]
**relationIncluded** | **boolean** | Specifies whether the relation is included. | [optional] [default to undefined]
**operator** | **string** | Defines the operator used in the filter. Available operators are defined in the API documentation. | [optional] [default to undefined]
**value** | **any** |  | [optional] [default to undefined]
**smartContent** | **boolean** | When true, filter fields contain smart content placeholders resolved at runtime. | [optional] [default to undefined]
**smart_value** | **boolean** | Whether the value is a smart value | [optional] [default to undefined]
**score** | **number** | The score to assign if the rule is met | [optional] [default to undefined]

## Example

```typescript
import { Leadscore } from '@caraer/client';

const instance: Leadscore = {
    object,
    relation,
    property,
    relationIncluded,
    operator,
    value,
    smartContent,
    smart_value,
    score,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
