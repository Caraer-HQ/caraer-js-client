# FlowPaginationRequest

Request DTO for paginated data flow with filters, sorting, displayed items, and related information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**crud** | [**CRUD**](CRUD.md) |  | [optional] [default to undefined]
**showItems** | [**Set&lt;ShowItem&gt;**](ShowItem.md) |  | [optional] [default to undefined]
**page** | **number** | The page index (one-based) to request. | [optional] [default to undefined]
**limit** | **number** | The number of records to retrieve per page. | [optional] [default to undefined]
**filter** | [**Filter**](Filter.md) | Filters applied to the query. | [optional] [default to undefined]
**sort** | [**Set&lt;SortItem&gt;**](SortItem.md) | Sorting options for the query. | [optional] [default to undefined]
**show** | [**Array&lt;ShowItem&gt;**](ShowItem.md) | Specifies what data to show in the response. | [optional] [default to undefined]
**query** | **string** | A free-text search query applied to the records. | [optional] [default to undefined]
**preview** | **string** | Preview information for the records, if supported. | [optional] [default to undefined]
**mainObject** | **string** | The main object for categorization or context. | [optional] [default to undefined]
**column** | **string** | Column name for sorting or filtering data | [optional] [default to undefined]
**property** | **string** | UUID of the property used in the request | [optional] [default to undefined]

## Example

```typescript
import { FlowPaginationRequest } from '@caraer/client';

const instance: FlowPaginationRequest = {
    crud,
    showItems,
    page,
    limit,
    filter,
    sort,
    show,
    query,
    preview,
    mainObject,
    column,
    property,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
