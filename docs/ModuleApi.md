# ModuleApi

All URIs are relative to *https://v2.api.caraer.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createModule**](#createmodule) | **POST** /api/v2/modules/ | Create a new module|
|[**createPersonalModule**](#createpersonalmodule) | **POST** /api/v2/modules/personal/ | Create a personal module|
|[**deleteModule**](#deletemodule) | **DELETE** /api/v2/modules/{moduleId} | Delete a module|
|[**deletePersonalModule**](#deletepersonalmodule) | **DELETE** /api/v2/modules/personal/{moduleId} | Delete a personal module|
|[**getModule**](#getmodule) | **GET** /api/v2/modules/{moduleId} | Fetch a specific module|
|[**getModules**](#getmodules) | **POST** /api/v2/modules/index | Fetch paginated modules|
|[**getPersonalModule**](#getpersonalmodule) | **GET** /api/v2/modules/personal/{moduleId} | Fetch a personal module|
|[**getPersonalModules**](#getpersonalmodules) | **POST** /api/v2/modules/personal/index | Fetch paginated personal modules|
|[**updateModule**](#updatemodule) | **PUT** /api/v2/modules/{moduleId} | Update an existing module|
|[**updatePersonalModule**](#updatepersonalmodule) | **PUT** /api/v2/modules/personal/{moduleId} | Update a personal module|

# **createModule**
> CreateResponse createModule(pageContentDTO)

Creates a new module.

### Example

```typescript
import {
    ModuleApi,
    Configuration,
    PageContentDTO
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new ModuleApi(configuration);

let pageContentDTO: PageContentDTO; //Module details

const { status, data } = await apiInstance.createModule(
    pageContentDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pageContentDTO** | **PageContentDTO**| Module details | |


### Return type

**CreateResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Module created successfully |  -  |
|**400** | Invalid input data |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createPersonalModule**
> CreateResponse createPersonalModule(pageContentDTO)

Creates a module in the user\'s personal library.

### Example

```typescript
import {
    ModuleApi,
    Configuration,
    PageContentDTO
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new ModuleApi(configuration);

let pageContentDTO: PageContentDTO; //

const { status, data } = await apiInstance.createPersonalModule(
    pageContentDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pageContentDTO** | **PageContentDTO**|  | |


### Return type

**CreateResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Module created successfully |  -  |
|**400** | Invalid input data |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteModule**
> DeleteResponse deleteModule()

Deletes a module by its UUID.

### Example

```typescript
import {
    ModuleApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new ModuleApi(configuration);

let moduleId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteModule(
    moduleId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **moduleId** | [**string**] |  | defaults to undefined|


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
|**200** | Module deleted successfully |  -  |
|**404** | Module not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deletePersonalModule**
> DeleteResponse deletePersonalModule()

Deletes a personal module for the logged-in user.

### Example

```typescript
import {
    ModuleApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new ModuleApi(configuration);

let moduleId: string; // (default to undefined)

const { status, data } = await apiInstance.deletePersonalModule(
    moduleId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **moduleId** | [**string**] |  | defaults to undefined|


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
|**200** | Module deleted successfully |  -  |
|**403** | Not authorized |  -  |
|**404** | Module not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getModule**
> ShowResponse getModule()

Retrieves details of a module by its UUID.

### Example

```typescript
import {
    ModuleApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new ModuleApi(configuration);

let moduleId: string; // (default to undefined)

const { status, data } = await apiInstance.getModule(
    moduleId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **moduleId** | [**string**] |  | defaults to undefined|


### Return type

**ShowResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Module retrieved successfully |  -  |
|**404** | Module not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getModules**
> PaginationResponse getModules(body)

Retrieves a paginated list of modules.

### Example

```typescript
import {
    ModuleApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new ModuleApi(configuration);

let body: any; //Pagination details

const { status, data } = await apiInstance.getModules(
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **any**| Pagination details | |


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
|**200** | Modules fetched successfully |  -  |
|**400** | Invalid pagination request |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPersonalModule**
> ShowResponse getPersonalModule()

Retrieves a personal module by UUID for the logged-in user.

### Example

```typescript
import {
    ModuleApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new ModuleApi(configuration);

let moduleId: string; // (default to undefined)

const { status, data } = await apiInstance.getPersonalModule(
    moduleId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **moduleId** | [**string**] |  | defaults to undefined|


### Return type

**ShowResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Module retrieved successfully |  -  |
|**403** | Not authorized |  -  |
|**404** | Module not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPersonalModules**
> PaginationResponse getPersonalModules(body)

Retrieves personal modules for the logged-in user.

### Example

```typescript
import {
    ModuleApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new ModuleApi(configuration);

let body: any; //

const { status, data } = await apiInstance.getPersonalModules(
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **any**|  | |


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
|**200** | Modules fetched successfully |  -  |
|**400** | Invalid pagination request |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateModule**
> UpdateResponse updateModule(pageContentDTO)

Updates the details of an existing module.

### Example

```typescript
import {
    ModuleApi,
    Configuration,
    PageContentDTO
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new ModuleApi(configuration);

let moduleId: string; // (default to undefined)
let pageContentDTO: PageContentDTO; //Updated module details

const { status, data } = await apiInstance.updateModule(
    moduleId,
    pageContentDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pageContentDTO** | **PageContentDTO**| Updated module details | |
| **moduleId** | [**string**] |  | defaults to undefined|


### Return type

**UpdateResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Module updated successfully |  -  |
|**400** | Invalid input data |  -  |
|**404** | Module not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updatePersonalModule**
> UpdateResponse updatePersonalModule(pageContentDTO)

Updates a personal module for the logged-in user.

### Example

```typescript
import {
    ModuleApi,
    Configuration,
    PageContentDTO
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new ModuleApi(configuration);

let moduleId: string; // (default to undefined)
let pageContentDTO: PageContentDTO; //

const { status, data } = await apiInstance.updatePersonalModule(
    moduleId,
    pageContentDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pageContentDTO** | **PageContentDTO**|  | |
| **moduleId** | [**string**] |  | defaults to undefined|


### Return type

**UpdateResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Module updated successfully |  -  |
|**403** | Not authorized |  -  |
|**404** | Module not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

