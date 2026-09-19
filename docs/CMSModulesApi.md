# CMSModulesApi

All URIs are relative to *https://v2.api.caraer.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**list**](#list) | **GET** /api/v2/apps/{appUuid}/cms-modules | List an app\&#39;s CMS modules|
|[**publishPackage**](#publishpackage) | **POST** /api/v2/apps/{appUuid}/cms-modules/package | Publish an app\&#39;s CMS module package|
|[**upsert**](#upsert) | **PUT** /api/v2/apps/{appUuid}/cms-modules | Replace an app\&#39;s CMS module catalog|

# **list**
> ShowResponseListCmsModuleDTO list()

Includes retired modules, so a developer can see what a push removed.

### Example

```typescript
import {
    CMSModulesApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new CMSModulesApi(configuration);

let appUuid: string; // (default to undefined)

const { status, data } = await apiInstance.list(
    appUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appUuid** | [**string**] |  | defaults to undefined|


### Return type

**ShowResponseListCmsModuleDTO**

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

# **publishPackage**
> ShowResponseListCmsModuleDTO publishPackage(requestBody)

Accepts a staged npm tarball (base64) and module manifests. Publishes to the platform registry with the host token, then replaces the catalog.

### Example

```typescript
import {
    CMSModulesApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new CMSModulesApi(configuration);

let appUuid: string; // (default to undefined)
let requestBody: { [key: string]: any | null; }; //

const { status, data } = await apiInstance.publishPackage(
    appUuid,
    requestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **{ [key: string]: any | null; }**|  | |
| **appUuid** | [**string**] |  | defaults to undefined|


### Return type

**ShowResponseListCmsModuleDTO**

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

# **upsert**
> ShowResponseListCmsModuleDTO upsert(requestBody)

Registers the modules shipped by a published package version. Modules missing from the payload are retired rather than deleted, because pages may still reference them.

### Example

```typescript
import {
    CMSModulesApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new CMSModulesApi(configuration);

let appUuid: string; // (default to undefined)
let requestBody: { [key: string]: any | null; }; //

const { status, data } = await apiInstance.upsert(
    appUuid,
    requestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **{ [key: string]: any | null; }**|  | |
| **appUuid** | [**string**] |  | defaults to undefined|


### Return type

**ShowResponseListCmsModuleDTO**

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

