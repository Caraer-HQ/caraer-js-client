# FilterItem

DTO representing a filter used in querying records.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object** | **string** | The name of the object to which this pagination item belongs. | [optional] [default to undefined]
**relation** | **string** | The relationship between objects. | [optional] [default to undefined]
**relationDirection** | **string** | Optional relation direction: outgoing (related→main), incoming (main→related), or omit for undirected. | [optional] [default to undefined]
**property** | **string** | The name of the property within the object. | [optional] [default to undefined]
**relationIncluded** | **boolean** | Specifies whether the relation is included. | [optional] [default to undefined]
**operator** | **string** | Defines the operator used in the filter. Available operators are defined in the API documentation. | [optional] [default to undefined]
**value** | **any** | Represents the value to filter against. | [optional] [default to undefined]
**smartContent** | **boolean** | When true, filter fields contain smart content placeholders resolved at runtime. | [optional] [default to undefined]
**edgeProperty** | **boolean** | When true, propertyName refers to a property stored on the relation edge itself (declared on the relation schema, e.g. partstat on attendees) instead of a property of the related record. Requires relation and propertyName. | [optional] [default to undefined]

## Example

```typescript
import { FilterItem } from '@caraer/client';

const instance: FilterItem = {
    object,
    relation,
    relationDirection,
    property,
    relationIncluded,
    operator,
    value,
    smartContent,
    edgeProperty,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
