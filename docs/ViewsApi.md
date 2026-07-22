# ViewsApi

All URIs are relative to *https://v2.api.caraer.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createView**](#createview) | **POST** /api/v2/objects/{objectUuid}/views/ | Create a new view|
|[**deleteView**](#deleteview) | **DELETE** /api/v2/objects/{objectUuid}/views/{viewUuid} | Delete a view|
|[**favoriteView**](#favoriteview) | **PUT** /api/v2/objects/{objectUuid}/views/{viewUuid}/favorite | Toggle view favorite status|
|[**getView**](#getview) | **GET** /api/v2/objects/{objectUuid}/views/{viewUuid} | Get view details|
|[**getViews**](#getviews) | **POST** /api/v2/objects/{objectUuid}/views/index | Fetch paginated views for an object|
|[**updateIndices1**](#updateindices1) | **PUT** /api/v2/objects/{objectUuid}/views/updateIndices | Update view indices|
|[**updateView**](#updateview) | **PUT** /api/v2/objects/{objectUuid}/views/{viewUuid} | Update an existing view|

# **createView**
> CreateResponse createView(viewDTO)

Creates a new view for the specified object. The request body must contain the view details as a ViewDTO. Returns a CreateResponse containing the newly created view as a ViewDTO.

### Example

```typescript
import {
    ViewsApi,
    Configuration,
    ViewDTO
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new ViewsApi(configuration);

let objectUuid: string; // (default to undefined)
let viewDTO: ViewDTO; //View details to create

const { status, data } = await apiInstance.createView(
    objectUuid,
    viewDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **viewDTO** | **ViewDTO**| View details to create | |
| **objectUuid** | [**string**] |  | defaults to undefined|


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
|**201** | View created successfully |  -  |
|**400** | Invalid input data |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteView**
> DeleteResponse deleteView()

Deletes the view identified by its UUID from the specified object. Returns a DeleteResponse confirming the deletion.

### Example

```typescript
import {
    ViewsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new ViewsApi(configuration);

let objectUuid: string; // (default to undefined)
let viewUuid: string; // (default to undefined)

const { status, data } = await apiInstance.deleteView(
    objectUuid,
    viewUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **objectUuid** | [**string**] |  | defaults to undefined|
| **viewUuid** | [**string**] |  | defaults to undefined|


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
|**200** | View deleted successfully |  -  |
|**404** | View not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **favoriteView**
> UpdateResponse favoriteView()

Toggles the favorite status of the specified view. Returns an UpdateResponse containing the updated view details.

### Example

```typescript
import {
    ViewsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new ViewsApi(configuration);

let objectUuid: string; // (default to undefined)
let viewUuid: string; // (default to undefined)

const { status, data } = await apiInstance.favoriteView(
    objectUuid,
    viewUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **objectUuid** | [**string**] |  | defaults to undefined|
| **viewUuid** | [**string**] |  | defaults to undefined|


### Return type

**UpdateResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | View favorite status updated successfully |  -  |
|**404** | View not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getView**
> ShowResponse getView()

Retrieves detailed information for a view identified by its UUID for the specified object. Returns a ShowResponse containing the ViewDTO.

### Example

```typescript
import {
    ViewsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new ViewsApi(configuration);

let objectUuid: string; // (default to undefined)
let viewUuid: string; // (default to undefined)

const { status, data } = await apiInstance.getView(
    objectUuid,
    viewUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **objectUuid** | [**string**] |  | defaults to undefined|
| **viewUuid** | [**string**] |  | defaults to undefined|


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
|**200** | View retrieved successfully |  -  |
|**404** | View not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getViews**
> PaginationResponse getViews(body)

Retrieves a paginated list of views for the specified object. A custom Cypher query is used to filter views based on the object\'s UUID. Returns a PaginationResponse containing ViewDTO objects.

### Example

```typescript
import {
    ViewsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new ViewsApi(configuration);

let objectUuid: string; // (default to undefined)
let body: any; //Pagination request details (limit, page, filters, sort, query)

const { status, data } = await apiInstance.getViews(
    objectUuid,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **any**| Pagination request details (limit, page, filters, sort, query) | |
| **objectUuid** | [**string**] |  | defaults to undefined|


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
|**200** | Views fetched successfully |  -  |
|**400** | Invalid pagination request |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateIndices1**
> SuccessResponse updateIndices1(body)

Updates the indices for views associated with the specified object. The request body must include a mapping of view UUIDs to their new index values. Returns a SuccessResponse with the updated view DTOs.

### Example

```typescript
import {
    ViewsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new ViewsApi(configuration);

let objectUuid: string; // (default to undefined)
let body: string; //Mapping of view UUIDs to new index values

const { status, data } = await apiInstance.updateIndices1(
    objectUuid,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**| Mapping of view UUIDs to new index values | |
| **objectUuid** | [**string**] |  | defaults to undefined|


### Return type

**SuccessResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | View indices updated successfully |  -  |
|**400** | Invalid input provided |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateView**
> UpdateResponse updateView(viewDTO)

Updates the details of an existing view identified by its UUID for the specified object. The request body must contain the updated view details as a ViewDTO. Returns an UpdateResponse with the updated view data.

### Example

```typescript
import {
    ViewsApi,
    Configuration,
    ViewDTO
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new ViewsApi(configuration);

let objectUuid: string; // (default to undefined)
let viewUuid: string; // (default to undefined)
let viewDTO: ViewDTO; //Updated view details

const { status, data } = await apiInstance.updateView(
    objectUuid,
    viewUuid,
    viewDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **viewDTO** | **ViewDTO**| Updated view details | |
| **objectUuid** | [**string**] |  | defaults to undefined|
| **viewUuid** | [**string**] |  | defaults to undefined|


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
|**200** | View updated successfully |  -  |
|**400** | Invalid input data |  -  |
|**404** | View not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

