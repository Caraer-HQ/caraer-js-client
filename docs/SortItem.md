# SortItem

Represents a sortable item, including object, relation, property, and sort direction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object** | **string** | The name of the object to which this pagination item belongs. | [optional] [default to undefined]
**relation** | **string** | The relationship between objects. | [optional] [default to undefined]
**property** | **string** | The name of the property within the object. | [optional] [default to undefined]
**direction** | **string** | The direction for sorting. Can be ASC (ascending) or DESC (descending). | [optional] [default to undefined]

## Example

```typescript
import { SortItem } from '@caraer/client';

const instance: SortItem = {
    object,
    relation,
    property,
    direction,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
