# SyncApi

All URIs are relative to *https://v2.api.caraer.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createSync**](#createsync) | **POST** /api/v2/sync/ | Create a sync|
|[**deleteSync**](#deletesync) | **DELETE** /api/v2/sync/{uuid} | Delete a sync|
|[**getSync**](#getsync) | **GET** /api/v2/sync/{uuid} | Get a sync|
|[**getSyncs**](#getsyncs) | **POST** /api/v2/sync/index | Fetch paginated syncs|
|[**restoreSync**](#restoresync) | **POST** /api/v2/sync/{uuid}/restore | Restore a deleted sync|
|[**updateSync**](#updatesync) | **PUT** /api/v2/sync/{uuid} | Update a sync|

# **createSync**
> CreateResponse createSync(syncDTO)

Creates a new sync. Returns a CreateResponse containing the created sync details.

### Example

```typescript
import {
    SyncApi,
    Configuration,
    SyncDTO
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new SyncApi(configuration);

let syncDTO: SyncDTO; //Sync data

const { status, data } = await apiInstance.createSync(
    syncDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **syncDTO** | **SyncDTO**| Sync data | |


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
|**200** | Sync created successfully |  -  |
|**400** | Invalid sync data |  -  |
|**500** | Internal server error |  -  |
|**401** | Authentication is required or the token is invalid. |  -  |
|**403** | The caller is missing a required role or scope. |  -  |
|**404** | The requested resource was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteSync**
> DeleteResponse deleteSync(syncDTO)

Deletes an existing sync. Returns a DeleteResponse containing the deleted sync details.

### Example

```typescript
import {
    SyncApi,
    Configuration,
    SyncDTO
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new SyncApi(configuration);

let uuid: string; // (default to undefined)
let syncDTO: SyncDTO; //Sync data

const { status, data } = await apiInstance.deleteSync(
    uuid,
    syncDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **syncDTO** | **SyncDTO**| Sync data | |
| **uuid** | [**string**] |  | defaults to undefined|


### Return type

**DeleteResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Sync deleted successfully |  -  |
|**400** | Invalid sync data |  -  |
|**500** | Internal server error |  -  |
|**401** | Authentication is required or the token is invalid. |  -  |
|**403** | The caller is missing a required role or scope. |  -  |
|**404** | The requested resource was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSync**
> SyncDTO getSync(syncDTO)

Retrieves a sync by its UUID. Returns a SyncDTO containing the sync details.

### Example

```typescript
import {
    SyncApi,
    Configuration,
    SyncDTO
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new SyncApi(configuration);

let uuid: string; // (default to undefined)
let syncDTO: SyncDTO; //Sync data

const { status, data } = await apiInstance.getSync(
    uuid,
    syncDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **syncDTO** | **SyncDTO**| Sync data | |
| **uuid** | [**string**] |  | defaults to undefined|


### Return type

**SyncDTO**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Sync fetched successfully |  -  |
|**400** | Invalid sync data |  -  |
|**500** | Internal server error |  -  |
|**401** | Authentication is required or the token is invalid. |  -  |
|**403** | The caller is missing a required role or scope. |  -  |
|**404** | The requested resource was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSyncs**
> PaginationResponseSyncDTO getSyncs(paginationRequest)

Retrieves a paginated list of syncs. Returns a PaginationResponse containing SyncDTO objects based on the provided pagination criteria.

### Example

```typescript
import {
    SyncApi,
    Configuration,
    PaginationRequest
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new SyncApi(configuration);

let paginationRequest: PaginationRequest; //Pagination request for syncs

const { status, data } = await apiInstance.getSyncs(
    paginationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **paginationRequest** | **PaginationRequest**| Pagination request for syncs | |


### Return type

**PaginationResponseSyncDTO**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Syncs fetched successfully |  -  |
|**400** | Invalid pagination request |  -  |
|**500** | Internal server error |  -  |
|**401** | Authentication is required or the token is invalid. |  -  |
|**403** | The caller is missing a required role or scope. |  -  |
|**404** | The requested resource was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **restoreSync**
> RestoreResponse restoreSync()

Restores a previously deleted sync by its UUID. Returns a RestoreResponse containing the restored sync details.

### Example

```typescript
import {
    SyncApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new SyncApi(configuration);

let uuid: string; // (default to undefined)

const { status, data } = await apiInstance.restoreSync(
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
|**200** | Sync restored successfully |  -  |
|**404** | The requested resource was not found. |  -  |
|**500** | An internal server error occurred. |  -  |
|**401** | Authentication is required or the token is invalid. |  -  |
|**403** | The caller is missing a required role or scope. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateSync**
> UpdateResponse updateSync(syncDTO)

Updates an existing sync. Returns a UpdateResponse containing the updated sync details.

### Example

```typescript
import {
    SyncApi,
    Configuration,
    SyncDTO
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new SyncApi(configuration);

let uuid: string; // (default to undefined)
let syncDTO: SyncDTO; //Sync data

const { status, data } = await apiInstance.updateSync(
    uuid,
    syncDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **syncDTO** | **SyncDTO**| Sync data | |
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
|**200** | Sync updated successfully |  -  |
|**400** | Invalid sync data |  -  |
|**500** | Internal server error |  -  |
|**401** | Authentication is required or the token is invalid. |  -  |
|**403** | The caller is missing a required role or scope. |  -  |
|**404** | The requested resource was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

