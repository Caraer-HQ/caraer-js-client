# PaginationRequest

Pagination and filtering options for the request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filters** | **Array&lt;{ [key: string]: any | null; }&gt;** | A list of key-value pairs representing filter criteria for the request. Keys represent fields to filter by, operator can be any of the following: \&#39;&#x3D;\&#39;, \&#39;&gt;\&#39;, \&#39;&lt;\&#39;, \&#39;&gt;&#x3D;\&#39;, \&#39;&lt;&#x3D;\&#39;, (not) \&#39;in\&#39;, \&#39;(not) contains\&#39;, \&#39;(not) startswith\&#39;, \&#39;(not) endswith\&#39;, \&#39;(not) isnull\&#39;. | [optional] [default to undefined]
**sort** | **Array&lt;{ [key: string]: string; }&gt;** | A list of key-value pairs representing sorting criteria. Keys represent fields to sort by, and values define the sort direction (e.g., \&#39;asc\&#39; or \&#39;desc\&#39;). | [optional] [default to undefined]
**show** | **Array&lt;string&gt;** | A list of field names specifying which fields to include in the response. | [optional] [default to undefined]
**limit** | **number** | The maximum number of items to retrieve per page. | [optional] [default to undefined]
**page** | **number** | The page number to retrieve in the paginated response (1-based index). | [optional] [default to undefined]
**query** | **string** | Optional search query to filter results. This will apply to all properties on the entity. | [optional] [default to undefined]

## Example

```typescript
import { PaginationRequest } from '@caraer/client';

const instance: PaginationRequest = {
    filters,
    sort,
    show,
    limit,
    page,
    query,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
