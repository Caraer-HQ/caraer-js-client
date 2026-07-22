# ShowItem

DTO representing an item with properties defined for displaying and handling in UI related operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object** | **string** | The name of the object to which this pagination item belongs. | [optional] [default to undefined]
**relation** | **string** | The relationship between objects. | [optional] [default to undefined]
**property** | **string** | The name of the property within the object. | [optional] [default to undefined]
**separator** | **string** | Separator string used to visually separate this item. | [optional] [default to undefined]
**sticky** | **boolean** | Flag indicating whether this item is sticky and will stay fixed in the list. | [optional] [default to false]
**width** | **number** | Width of the item in pixels. | [optional] [default to undefined]
**calculationFunction** | **string** | Calculation function used to calculate the value of the item. | [optional] [default to undefined]
**calculationResult** | **any** |  | [optional] [default to undefined]

## Example

```typescript
import { ShowItem } from '@caraer/client';

const instance: ShowItem = {
    object,
    relation,
    property,
    separator,
    sticky,
    width,
    calculationFunction,
    calculationResult,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
