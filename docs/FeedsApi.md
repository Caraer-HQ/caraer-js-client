# FeedsApi

All URIs are relative to *https://v2.api.caraer.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**index1**](#index1) | **POST** /api/v2/feeds/index | List feeds|

# **index1**
> any index1(body)


### Example

```typescript
import {
    FeedsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new FeedsApi(configuration);

let body: any; //

const { status, data } = await apiInstance.index1(
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **any**|  | |


### Return type

**any**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

