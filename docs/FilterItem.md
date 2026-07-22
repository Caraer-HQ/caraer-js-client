# FilterItem

DTO representing a filter used in querying records.

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

## Example

```typescript
import { FilterItem } from '@caraer/client';

const instance: FilterItem = {
    object,
    relation,
    property,
    relationIncluded,
    operator,
    value,
    smartContent,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
