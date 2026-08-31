# RecordPaginationRequest

Contains pagination details and optional query parameters such as filter, sort, and show options.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page** | **number** | The page index (one-based) to request. | [optional] [default to undefined]
**limit** | **number** | The number of records to retrieve per page. | [optional] [default to undefined]
**filter** | **object** | Filters applied to the query. | [optional] [default to undefined]
**sort** | **Array&lt;object&gt;** | Sorting options for the query. | [optional] [default to undefined]
**show** | **Array&lt;object&gt;** | Specifies what data to show in the response. | [optional] [default to undefined]
**query** | **string** | A free-text search query applied to the records. | [optional] [default to undefined]
**preview** | **string** | Preview information for the records, if supported. | [optional] [default to undefined]
**mainObject** | **string** | The main object for categorization or context. | [optional] [default to undefined]
**column** | **string** | The column to group the records by. | [optional] [default to undefined]

## Example

```typescript
import { RecordPaginationRequest } from '@caraer/client';

const instance: RecordPaginationRequest = {
    page,
    limit,
    filter,
    sort,
    show,
    query,
    preview,
    mainObject,
    column,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
