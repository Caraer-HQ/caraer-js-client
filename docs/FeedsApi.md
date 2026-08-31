# FeedsApi

All URIs are relative to *https://v2.api.caraer.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**index1**](#index1) | **POST** /api/v2/feeds/index | List feeds|

# **index1**
> PaginationResponseFeedDTO index1(paginationRequest)


### Example

```typescript
import {
    FeedsApi,
    Configuration,
    PaginationRequest
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new FeedsApi(configuration);

let paginationRequest: PaginationRequest; //

const { status, data } = await apiInstance.index1(
    paginationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **paginationRequest** | **PaginationRequest**|  | |


### Return type

**PaginationResponseFeedDTO**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**401** | Authentication is required or the token is invalid. |  -  |
|**403** | The caller is missing a required role or scope. |  -  |
|**404** | The requested resource was not found. |  -  |
|**500** | An internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

