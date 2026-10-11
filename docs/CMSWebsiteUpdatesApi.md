# CMSWebsiteUpdatesApi

All URIs are relative to *https://v2.api.caraer.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**pending**](#pending) | **GET** /api/v2/webpages/v2/updates | Pending module updates for this website|
|[**preview**](#preview) | **POST** /api/v2/webpages/v2/updates/preview | Build a preview site with every pending module update|
|[**promote**](#promote) | **POST** /api/v2/webpages/v2/updates/promote | Promote a previewed module set to production|

# **pending**
> ShowResponseMapStringObject pending()


### Example

```typescript
import {
    CMSWebsiteUpdatesApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new CMSWebsiteUpdatesApi(configuration);

const { status, data } = await apiInstance.pending();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ShowResponseMapStringObject**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
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

# **preview**
> ShowResponseMapStringObject preview()


### Example

```typescript
import {
    CMSWebsiteUpdatesApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new CMSWebsiteUpdatesApi(configuration);

const { status, data } = await apiInstance.preview();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ShowResponseMapStringObject**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
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

# **promote**
> ShowResponseMapStringObject promote()

Rejected with 409 when the preview revision is no longer the current pending set.

### Example

```typescript
import {
    CMSWebsiteUpdatesApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new CMSWebsiteUpdatesApi(configuration);

let requestBody: { [key: string]: any | null; }; // (optional)

const { status, data } = await apiInstance.promote(
    requestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **{ [key: string]: any | null; }**|  | |


### Return type

**ShowResponseMapStringObject**

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

