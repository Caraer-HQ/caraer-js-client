# CMSV2EnvironmentsApi

All URIs are relative to *https://v2.api.caraer.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**create3**](#create3) | **POST** /api/v2/cms/environments | Create an environment|
|[**delete1**](#delete1) | **DELETE** /api/v2/cms/environments/{key} | Delete an environment except main|
|[**group**](#group) | **GET** /api/v2/cms/environments/translations/{recordUuid} | Translation group for a record|
|[**link**](#link) | **POST** /api/v2/cms/environments/translations/{fromUuid}/link/{toUuid} | Link two records as translations|
|[**list2**](#list2) | **GET** /api/v2/cms/environments | List company environments|
|[**unlink**](#unlink) | **DELETE** /api/v2/cms/environments/translations/{fromUuid}/link/{toUuid} | Unlink a translation edge|
|[**update1**](#update1) | **PUT** /api/v2/cms/environments/{key} | Update routing, auth or htmlLang. Keys are immutable.|

# **create3**
> ShowResponseCmsEnvironmentDTO create3(cmsEnvironmentDTO)


### Example

```typescript
import {
    CMSV2EnvironmentsApi,
    Configuration,
    CmsEnvironmentDTO
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new CMSV2EnvironmentsApi(configuration);

let cmsEnvironmentDTO: CmsEnvironmentDTO; //

const { status, data } = await apiInstance.create3(
    cmsEnvironmentDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cmsEnvironmentDTO** | **CmsEnvironmentDTO**|  | |


### Return type

**ShowResponseCmsEnvironmentDTO**

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

# **delete1**
> SuccessResponseString delete1()


### Example

```typescript
import {
    CMSV2EnvironmentsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new CMSV2EnvironmentsApi(configuration);

let key: string; // (default to undefined)

const { status, data } = await apiInstance.delete1(
    key
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **key** | [**string**] |  | defaults to undefined|


### Return type

**SuccessResponseString**

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

# **group**
> ShowResponseMapStringObject group()


### Example

```typescript
import {
    CMSV2EnvironmentsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new CMSV2EnvironmentsApi(configuration);

let recordUuid: string; // (default to undefined)

const { status, data } = await apiInstance.group(
    recordUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **recordUuid** | [**string**] |  | defaults to undefined|


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

# **link**
> SuccessResponseString link()


### Example

```typescript
import {
    CMSV2EnvironmentsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new CMSV2EnvironmentsApi(configuration);

let fromUuid: string; // (default to undefined)
let toUuid: string; // (default to undefined)

const { status, data } = await apiInstance.link(
    fromUuid,
    toUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fromUuid** | [**string**] |  | defaults to undefined|
| **toUuid** | [**string**] |  | defaults to undefined|


### Return type

**SuccessResponseString**

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

# **list2**
> ShowResponseListCmsEnvironmentDTO list2()


### Example

```typescript
import {
    CMSV2EnvironmentsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new CMSV2EnvironmentsApi(configuration);

const { status, data } = await apiInstance.list2();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ShowResponseListCmsEnvironmentDTO**

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

# **unlink**
> SuccessResponseString unlink()


### Example

```typescript
import {
    CMSV2EnvironmentsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new CMSV2EnvironmentsApi(configuration);

let fromUuid: string; // (default to undefined)
let toUuid: string; // (default to undefined)

const { status, data } = await apiInstance.unlink(
    fromUuid,
    toUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fromUuid** | [**string**] |  | defaults to undefined|
| **toUuid** | [**string**] |  | defaults to undefined|


### Return type

**SuccessResponseString**

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

# **update1**
> ShowResponseCmsEnvironmentDTO update1(cmsEnvironmentDTO)


### Example

```typescript
import {
    CMSV2EnvironmentsApi,
    Configuration,
    CmsEnvironmentDTO
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new CMSV2EnvironmentsApi(configuration);

let key: string; // (default to undefined)
let cmsEnvironmentDTO: CmsEnvironmentDTO; //

const { status, data } = await apiInstance.update1(
    key,
    cmsEnvironmentDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cmsEnvironmentDTO** | **CmsEnvironmentDTO**|  | |
| **key** | [**string**] |  | defaults to undefined|


### Return type

**ShowResponseCmsEnvironmentDTO**

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

