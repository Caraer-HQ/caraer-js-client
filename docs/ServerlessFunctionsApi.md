# ServerlessFunctionsApi

All URIs are relative to *https://v2.api.caraer.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**create1**](#create1) | **POST** /api/v2/apps/{appUuid}/serverless-functions | Create a serverless function|
|[**index2**](#index2) | **POST** /api/v2/apps/{appUuid}/serverless-functions/index | List serverless functions for an app|
|[**show**](#show) | **GET** /api/v2/apps/{appUuid}/serverless-functions/{uuid} | Get a serverless function|
|[**testServerlessFunction**](#testserverlessfunction) | **POST** /api/v2/apps/{appUuid}/serverless-functions/{uuid}/test | Test a serverless function|
|[**update1**](#update1) | **PUT** /api/v2/apps/{appUuid}/serverless-functions/{uuid} | Update a serverless function|

# **create1**
> CreateResponse create1(serverlessFunctionDTO)

Creates a new serverless function attached to the specified app.

### Example

```typescript
import {
    ServerlessFunctionsApi,
    Configuration,
    ServerlessFunctionDTO
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new ServerlessFunctionsApi(configuration);

let appUuid: string; //UUID of the app to attach the serverless function to (default to undefined)
let serverlessFunctionDTO: ServerlessFunctionDTO; //Serverless function payload (runtime and code)

const { status, data } = await apiInstance.create1(
    appUuid,
    serverlessFunctionDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **serverlessFunctionDTO** | **ServerlessFunctionDTO**| Serverless function payload (runtime and code) | |
| **appUuid** | [**string**] | UUID of the app to attach the serverless function to | defaults to undefined|


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
|**200** | Successfully created serverless function |  -  |
|**400** | Invalid request or app not installed for company |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **index2**
> PaginationResponse index2(body)

Retrieves a paginated list of serverless functions that belong to the specified app.

### Example

```typescript
import {
    ServerlessFunctionsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new ServerlessFunctionsApi(configuration);

let appUuid: string; //UUID of the app whose serverless functions to list (default to undefined)
let body: any; //Pagination and filtering options for the request

const { status, data } = await apiInstance.index2(
    appUuid,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **any**| Pagination and filtering options for the request | |
| **appUuid** | [**string**] | UUID of the app whose serverless functions to list | defaults to undefined|


### Return type

**PaginationResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully retrieved serverless functions |  -  |
|**400** | Invalid request or app not installed for company |  -  |
|**401** | Unauthorized access |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **show**
> ShowResponse show()

Retrieves a serverless function by its UUID, ensuring it belongs to the specified app.

### Example

```typescript
import {
    ServerlessFunctionsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new ServerlessFunctionsApi(configuration);

let appUuid: string; //UUID of the app (default to undefined)
let uuid: string; //UUID of the serverless function (default to undefined)

const { status, data } = await apiInstance.show(
    appUuid,
    uuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appUuid** | [**string**] | UUID of the app | defaults to undefined|
| **uuid** | [**string**] | UUID of the serverless function | defaults to undefined|


### Return type

**ShowResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully retrieved serverless function |  -  |
|**404** | Serverless function not found for this app |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **testServerlessFunction**
> SuccessResponse testServerlessFunction(testServerlessFunctionRequest)

Provisions (if needed) and invokes a serverless function for a given record and event type, using the same payload shape as webhooks.

### Example

```typescript
import {
    ServerlessFunctionsApi,
    Configuration,
    TestServerlessFunctionRequest
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new ServerlessFunctionsApi(configuration);

let appUuid: string; //UUID of the app (default to undefined)
let uuid: string; //UUID of the serverless function to test (default to undefined)
let testServerlessFunctionRequest: TestServerlessFunctionRequest; //Test serverless function payload (recordUuid and eventType)

const { status, data } = await apiInstance.testServerlessFunction(
    appUuid,
    uuid,
    testServerlessFunctionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **testServerlessFunctionRequest** | **TestServerlessFunctionRequest**| Test serverless function payload (recordUuid and eventType) | |
| **appUuid** | [**string**] | UUID of the app | defaults to undefined|
| **uuid** | [**string**] | UUID of the serverless function to test | defaults to undefined|


### Return type

**SuccessResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Serverless function test executed |  -  |
|**400** | Invalid input provided |  -  |
|**404** | App, serverless function, or record not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update1**
> ShowResponse update1(serverlessFunctionDTO)

Updates an existing serverless function\'s runtime and code, keeping it attached to the same app.

### Example

```typescript
import {
    ServerlessFunctionsApi,
    Configuration,
    ServerlessFunctionDTO
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new ServerlessFunctionsApi(configuration);

let appUuid: string; //UUID of the app (default to undefined)
let uuid: string; //UUID of the serverless function to update (default to undefined)
let serverlessFunctionDTO: ServerlessFunctionDTO; //Updated serverless function payload (runtime and code)

const { status, data } = await apiInstance.update1(
    appUuid,
    uuid,
    serverlessFunctionDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **serverlessFunctionDTO** | **ServerlessFunctionDTO**| Updated serverless function payload (runtime and code) | |
| **appUuid** | [**string**] | UUID of the app | defaults to undefined|
| **uuid** | [**string**] | UUID of the serverless function to update | defaults to undefined|


### Return type

**ShowResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully updated serverless function |  -  |
|**404** | Serverless function not found for this app |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

