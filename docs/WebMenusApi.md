# WebMenusApi

All URIs are relative to *https://v2.api.caraer.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createWebMenu**](#createwebmenu) | **POST** /api/v2/webmenus | Create web menu|
|[**deleteWebMenu**](#deletewebmenu) | **DELETE** /api/v2/webmenus/{uuid} | Delete web menu|
|[**getWebMenu**](#getwebmenu) | **GET** /api/v2/webmenus/{uuid} | Show web menu|
|[**indexWebMenus**](#indexwebmenus) | **POST** /api/v2/webmenus/index | Index web menus|
|[**restoreWebMenu**](#restorewebmenu) | **POST** /api/v2/webmenus/{uuid}/restore | Restore deleted web menu|
|[**updateWebMenu**](#updatewebmenu) | **PUT** /api/v2/webmenus/{uuid} | Update web menu|

# **createWebMenu**
> CreateResponse createWebMenu(webMenuDTO)

Create web menu

### Example

```typescript
import {
    WebMenusApi,
    Configuration,
    WebMenuDTO
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new WebMenusApi(configuration);

let webMenuDTO: WebMenuDTO; //

const { status, data } = await apiInstance.createWebMenu(
    webMenuDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webMenuDTO** | **WebMenuDTO**|  | |


### Return type

**CreateResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Web menu created successfully |  -  |
|**400** | Bad request |  -  |
|**500** | Internal server error |  -  |
|**401** | Authentication is required or the token is invalid. |  -  |
|**403** | The caller is missing a required role or scope. |  -  |
|**404** | The requested resource was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteWebMenu**
> DeleteResponse deleteWebMenu()

Delete web menu

### Example

```typescript
import {
    WebMenusApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new WebMenusApi(configuration);

let uuid: string; // (default to undefined)

const { status, data } = await apiInstance.deleteWebMenu(
    uuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uuid** | [**string**] |  | defaults to undefined|


### Return type

**DeleteResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Web menu deleted successfully |  -  |
|**400** | Bad request |  -  |
|**500** | An internal server error occurred. |  -  |
|**401** | Authentication is required or the token is invalid. |  -  |
|**403** | The caller is missing a required role or scope. |  -  |
|**404** | The requested resource was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getWebMenu**
> ShowResponseWebMenuDTO getWebMenu()

Show web menu

### Example

```typescript
import {
    WebMenusApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new WebMenusApi(configuration);

let uuid: string; // (default to undefined)

const { status, data } = await apiInstance.getWebMenu(
    uuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uuid** | [**string**] |  | defaults to undefined|


### Return type

**ShowResponseWebMenuDTO**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Web menu shown successfully |  -  |
|**400** | Bad request |  -  |
|**500** | Internal server error |  -  |
|**401** | Authentication is required or the token is invalid. |  -  |
|**403** | The caller is missing a required role or scope. |  -  |
|**404** | The requested resource was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **indexWebMenus**
> PaginationResponseWebMenuDTO indexWebMenus(paginationRequest)

Index web menus

### Example

```typescript
import {
    WebMenusApi,
    Configuration,
    PaginationRequest
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new WebMenusApi(configuration);

let paginationRequest: PaginationRequest; //

const { status, data } = await apiInstance.indexWebMenus(
    paginationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **paginationRequest** | **PaginationRequest**|  | |


### Return type

**PaginationResponseWebMenuDTO**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Web menus indexed successfully |  -  |
|**400** | Bad request |  -  |
|**500** | Internal server error |  -  |
|**401** | Authentication is required or the token is invalid. |  -  |
|**403** | The caller is missing a required role or scope. |  -  |
|**404** | The requested resource was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **restoreWebMenu**
> RestoreResponse restoreWebMenu()

Restore a deleted web menu by its UUID

### Example

```typescript
import {
    WebMenusApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new WebMenusApi(configuration);

let uuid: string; // (default to undefined)

const { status, data } = await apiInstance.restoreWebMenu(
    uuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uuid** | [**string**] |  | defaults to undefined|


### Return type

**RestoreResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Web menu restored successfully |  -  |
|**404** | The requested resource was not found. |  -  |
|**500** | An internal server error occurred. |  -  |
|**401** | Authentication is required or the token is invalid. |  -  |
|**403** | The caller is missing a required role or scope. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateWebMenu**
> UpdateResponse updateWebMenu(webMenuDTO)

Update web menu

### Example

```typescript
import {
    WebMenusApi,
    Configuration,
    WebMenuDTO
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new WebMenusApi(configuration);

let uuid: string; // (default to undefined)
let webMenuDTO: WebMenuDTO; //

const { status, data } = await apiInstance.updateWebMenu(
    uuid,
    webMenuDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webMenuDTO** | **WebMenuDTO**|  | |
| **uuid** | [**string**] |  | defaults to undefined|


### Return type

**UpdateResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Web menu updated successfully |  -  |
|**400** | Bad request |  -  |
|**500** | Internal server error |  -  |
|**401** | Authentication is required or the token is invalid. |  -  |
|**403** | The caller is missing a required role or scope. |  -  |
|**404** | The requested resource was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

