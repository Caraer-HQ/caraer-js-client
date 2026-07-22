# PaginationResponsePreviewDTO

Response object for paginated data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **string** | A message detailing the result of the operation. | [optional] [default to undefined]
**data** | [**Array&lt;PreviewDTO&gt;**](PreviewDTO.md) | The data returned in the current page of the pagination. | [optional] [default to undefined]
**total** | **number** | The total number of items available. | [optional] [default to undefined]
**page** | **number** | The current page number (starts from 1). | [optional] [default to undefined]
**perPage** | **number** | The number of items displayed per page. | [optional] [default to undefined]
**lastPage** | **number** | The last page number available for the pagination. | [optional] [default to undefined]

## Example

```typescript
import { PaginationResponsePreviewDTO } from '@caraer/client';

const instance: PaginationResponsePreviewDTO = {
    message,
    data,
    total,
    page,
    perPage,
    lastPage,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
