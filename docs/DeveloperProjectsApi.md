# DeveloperProjectsApi

All URIs are relative to *https://v2.api.caraer.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**create2**](#create2) | **POST** /api/v2/developer-projects | Create or fetch a developer project|
|[**createBuild**](#createbuild) | **POST** /api/v2/developer-projects/{projectUuid}/builds | Upload a project build|
|[**deploy**](#deploy) | **POST** /api/v2/developer-projects/{projectUuid}/builds/{buildUuid}/deploy | Deploy a project build|
|[**getBuild**](#getbuild) | **GET** /api/v2/developer-projects/{projectUuid}/builds/{buildUuid} | Get a project build|
|[**listBuilds**](#listbuilds) | **GET** /api/v2/developer-projects/{projectUuid}/builds | List project builds|
|[**listDeploys**](#listdeploys) | **GET** /api/v2/developer-projects/{projectUuid}/deploys | List project deploys|
|[**show3**](#show3) | **GET** /api/v2/developer-projects/{uuid} | Get a developer project|

# **create2**
> CreateResponse create2(createDeveloperProjectRequest)

Creates a developer project linked to the given app, or returns the existing one if already linked. Creator company only.

### Example

```typescript
import {
    DeveloperProjectsApi,
    Configuration,
    CreateDeveloperProjectRequest
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new DeveloperProjectsApi(configuration);

let createDeveloperProjectRequest: CreateDeveloperProjectRequest; //

const { status, data } = await apiInstance.create2(
    createDeveloperProjectRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createDeveloperProjectRequest** | **CreateDeveloperProjectRequest**|  | |


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
|**200** | Project created or fetched |  -  |
|**400** | appUuid is required |  -  |
|**403** | Caller is not the app creator |  -  |
|**401** | Authentication is required or the token is invalid. |  -  |
|**404** | The requested resource was not found. |  -  |
|**500** | An internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createBuild**
> CreateResponse createBuild(createProjectBuildRequest)

Decodes a base64-encoded project archive, parses its manifest, uploads it to Cloud Storage, and records an immutable build.

### Example

```typescript
import {
    DeveloperProjectsApi,
    Configuration,
    CreateProjectBuildRequest
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new DeveloperProjectsApi(configuration);

let projectUuid: string; //UUID of the developer project (default to undefined)
let createProjectBuildRequest: CreateProjectBuildRequest; //

const { status, data } = await apiInstance.createBuild(
    projectUuid,
    createProjectBuildRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createProjectBuildRequest** | **CreateProjectBuildRequest**|  | |
| **projectUuid** | [**string**] | UUID of the developer project | defaults to undefined|


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
|**200** | Build recorded (may still have status FAILED if parsing/upload failed) |  -  |
|**400** | archiveBase64 is required |  -  |
|**401** | Authentication is required or the token is invalid. |  -  |
|**403** | The caller is missing a required role or scope. |  -  |
|**404** | The requested resource was not found. |  -  |
|**500** | An internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deploy**
> CreateResponse deploy()

Reconciles the build\'s manifest (app details, serverless functions, webhooks, schedules, inbound routes, external OAuth providers) against the linked app. Set prune=true to soft-delete remote resources absent from the archive.

### Example

```typescript
import {
    DeveloperProjectsApi,
    Configuration,
    DeployBuildRequest
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new DeveloperProjectsApi(configuration);

let projectUuid: string; //UUID of the developer project (default to undefined)
let buildUuid: string; //UUID of the build to deploy (default to undefined)
let deployBuildRequest: DeployBuildRequest; // (optional)

const { status, data } = await apiInstance.deploy(
    projectUuid,
    buildUuid,
    deployBuildRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deployBuildRequest** | **DeployBuildRequest**|  | |
| **projectUuid** | [**string**] | UUID of the developer project | defaults to undefined|
| **buildUuid** | [**string**] | UUID of the build to deploy | defaults to undefined|


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
|**200** | Deploy recorded |  -  |
|**400** | Build is not ready to deploy |  -  |
|**401** | Authentication is required or the token is invalid. |  -  |
|**403** | The caller is missing a required role or scope. |  -  |
|**404** | The requested resource was not found. |  -  |
|**500** | An internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getBuild**
> getBuild()


### Example

```typescript
import {
    DeveloperProjectsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new DeveloperProjectsApi(configuration);

let projectUuid: string; //UUID of the developer project (default to undefined)
let buildUuid: string; //UUID of the build (default to undefined)

const { status, data } = await apiInstance.getBuild(
    projectUuid,
    buildUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectUuid** | [**string**] | UUID of the developer project | defaults to undefined|
| **buildUuid** | [**string**] | UUID of the build | defaults to undefined|


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
|**404** | Build not found for this project |  -  |
|**401** | Authentication is required or the token is invalid. |  -  |
|**403** | The caller is missing a required role or scope. |  -  |
|**500** | An internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listBuilds**
> SuccessResponseListProjectBuildDTO listBuilds()


### Example

```typescript
import {
    DeveloperProjectsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new DeveloperProjectsApi(configuration);

let projectUuid: string; //UUID of the developer project (default to undefined)

const { status, data } = await apiInstance.listBuilds(
    projectUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectUuid** | [**string**] | UUID of the developer project | defaults to undefined|


### Return type

**SuccessResponseListProjectBuildDTO**

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

# **listDeploys**
> SuccessResponseListProjectDeployDTO listDeploys()


### Example

```typescript
import {
    DeveloperProjectsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new DeveloperProjectsApi(configuration);

let projectUuid: string; //UUID of the developer project (default to undefined)

const { status, data } = await apiInstance.listDeploys(
    projectUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectUuid** | [**string**] | UUID of the developer project | defaults to undefined|


### Return type

**SuccessResponseListProjectDeployDTO**

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

# **show3**
> ShowResponseDeveloperProjectDTO show3()


### Example

```typescript
import {
    DeveloperProjectsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new DeveloperProjectsApi(configuration);

let uuid: string; //UUID of the developer project (default to undefined)

const { status, data } = await apiInstance.show3(
    uuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uuid** | [**string**] | UUID of the developer project | defaults to undefined|


### Return type

**ShowResponseDeveloperProjectDTO**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Project retrieved |  -  |
|**404** | Project not found |  -  |
|**401** | Authentication is required or the token is invalid. |  -  |
|**403** | The caller is missing a required role or scope. |  -  |
|**500** | An internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

