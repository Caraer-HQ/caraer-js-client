# FilterApi

All URIs are relative to *https://v2.api.caraer.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createFilter**](#createfilter) | **POST** /api/v2/filters | Create a new saved filter|
|[**deleteFilter**](#deletefilter) | **DELETE** /api/v2/filters/{filterUuid} | Delete a saved filter|
|[**getFilter**](#getfilter) | **GET** /api/v2/filters/{filterUuid} | Fetch a specific saved filter|
|[**getFilters**](#getfilters) | **POST** /api/v2/filters/index/{objectUuid} | Fetch paginated saved filters|
|[**updateFilter**](#updatefilter) | **PUT** /api/v2/filters/{filterUuid} | Update an existing saved filter|

# **createFilter**
> CreateResponse createFilter(savedFilterDTO)

Creates a new saved filter with the provided configuration.

### Example

```typescript
import {
    FilterApi,
    Configuration,
    SavedFilterDTO
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new FilterApi(configuration);

let savedFilterDTO: SavedFilterDTO; //Saved filter details for creation

const { status, data } = await apiInstance.createFilter(
    savedFilterDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **savedFilterDTO** | **SavedFilterDTO**| Saved filter details for creation | |


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
|**201** | Filter created successfully |  -  |
|**400** | Invalid input data |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteFilter**
> DeleteResponse deleteFilter()

Soft deletes a saved filter identified by its UUID.

### Example

```typescript
import {
    FilterApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new FilterApi(configuration);

let filterUuid: string; // (default to undefined)

const { status, data } = await apiInstance.deleteFilter(
    filterUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **filterUuid** | [**string**] |  | defaults to undefined|


### Return type

**DeleteResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Filter deleted successfully |  -  |
|**404** | Filter not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFilter**
> ShowResponse getFilter()

Retrieves details of a saved filter by its UUID.

### Example

```typescript
import {
    FilterApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new FilterApi(configuration);

let filterUuid: string; // (default to undefined)

const { status, data } = await apiInstance.getFilter(
    filterUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **filterUuid** | [**string**] |  | defaults to undefined|


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
|**200** | Filter retrieved successfully |  -  |
|**404** | Filter not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFilters**
> PaginationResponse getFilters(body)

Fetches a paginated list of saved filters. The request body should contain pagination details such as limit, page, filters, and sort.

### Example

```typescript
import {
    FilterApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new FilterApi(configuration);

let objectUuid: string; // (default to undefined)
let body: any; //Pagination request details

const { status, data } = await apiInstance.getFilters(
    objectUuid,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **any**| Pagination request details | |
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
|**200** | Filters fetched successfully |  -  |
|**400** | Bad request |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateFilter**
> UpdateResponse updateFilter(savedFilterDTO)

Updates an existing saved filter identified by its UUID.

### Example

```typescript
import {
    FilterApi,
    Configuration,
    SavedFilterDTO
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new FilterApi(configuration);

let filterUuid: string; // (default to undefined)
let savedFilterDTO: SavedFilterDTO; //Updated saved filter details

const { status, data } = await apiInstance.updateFilter(
    filterUuid,
    savedFilterDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **savedFilterDTO** | **SavedFilterDTO**| Updated saved filter details | |
| **filterUuid** | [**string**] |  | defaults to undefined|


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
|**200** | Filter updated successfully |  -  |
|**400** | Invalid input data |  -  |
|**404** | Filter not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

