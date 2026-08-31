# SearchRequest

Request DTO for searching records.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query** | **string** | The query to search for. | [optional] [default to undefined]
**objectUuid** | **string** | The UUID of the object to search in. | [optional] [default to undefined]
**limit** | **number** | The limit of the search. | [optional] [default to undefined]
**page** | **number** | The page of the search. | [optional] [default to undefined]
**preview** | **string** | The preview of the search. | [optional] [default to undefined]

## Example

```typescript
import { SearchRequest } from '@caraer/client';

const instance: SearchRequest = {
    query,
    objectUuid,
    limit,
    page,
    preview,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
