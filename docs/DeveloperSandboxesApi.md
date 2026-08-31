# DeveloperSandboxesApi

All URIs are relative to *https://v2.api.caraer.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**create1**](#create1) | **POST** /api/v2/developer-sandboxes | Create a developer sandbox|
|[**list**](#list) | **GET** /api/v2/developer-sandboxes | List developer sandboxes|
|[**show2**](#show2) | **GET** /api/v2/developer-sandboxes/{uuid} | Get a developer sandbox|

# **create1**
> CreateResponse create1(createDeveloperSandboxRequest)

Clones the selected company\'s Neo4j database (no new Company node). Activate with X-Caraer-Sandbox-Uuid; company identity stays the owner.

### Example

```typescript
import {
    DeveloperSandboxesApi,
    Configuration,
    CreateDeveloperSandboxRequest
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new DeveloperSandboxesApi(configuration);

let createDeveloperSandboxRequest: CreateDeveloperSandboxRequest; //

const { status, data } = await apiInstance.create1(
    createDeveloperSandboxRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createDeveloperSandboxRequest** | **CreateDeveloperSandboxRequest**|  | |


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
|**200** | Sandbox created |  -  |
|**400** | name is required |  -  |
|**401** | Authentication is required or the token is invalid. |  -  |
|**403** | The caller is missing a required role or scope. |  -  |
|**404** | The requested resource was not found. |  -  |
|**500** | An internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list**
> SuccessResponseListDeveloperSandboxDTO list()

Lists sandboxes owned by the caller\'s selected company.

### Example

```typescript
import {
    DeveloperSandboxesApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new DeveloperSandboxesApi(configuration);

const { status, data } = await apiInstance.list();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**SuccessResponseListDeveloperSandboxDTO**

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

# **show2**
> show2()


### Example

```typescript
import {
    DeveloperSandboxesApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new DeveloperSandboxesApi(configuration);

let uuid: string; //UUID of the sandbox (default to undefined)

const { status, data } = await apiInstance.show2(
    uuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uuid** | [**string**] | UUID of the sandbox | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**403** | Caller does not own this sandbox |  -  |
|**404** | Sandbox not found |  -  |
|**401** | Authentication is required or the token is invalid. |  -  |
|**500** | An internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

