# ObjectsApi

All URIs are relative to *https://v2.api.caraer.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createObject**](#createobject) | **POST** /api/v2/objects/ | Create new object|
|[**deleteObject**](#deleteobject) | **DELETE** /api/v2/objects/{uuid} | Delete object by UUID|
|[**getAccessGrantCandidates**](#getaccessgrantcandidates) | **GET** /api/v2/objects/access-grant/candidates | List access grant candidates|
|[**getObject**](#getobject) | **GET** /api/v2/objects/{uuid} | Get object by UUID|
|[**getObjects**](#getobjects) | **POST** /api/v2/objects/index | Fetch paginated objects|
|[**getPreview**](#getpreview) | **GET** /api/v2/objects/{uuid}/previews/{name} | Get specific preview by name|
|[**getPreviews**](#getpreviews) | **POST** /api/v2/objects/previews | Get all previews over all objects|
|[**getPreviews1**](#getpreviews1) | **GET** /api/v2/objects/{uuid}/previews | Get all previews of an object|
|[**grantObjectAccess**](#grantobjectaccess) | **POST** /api/v2/objects/{objectUuid}/access-grant | Grant object record access|
|[**permanentlyDeleteArchivedObject**](#permanentlydeletearchivedobject) | **DELETE** /api/v2/objects/{uuid}/permanent | Permanently delete archived object|
|[**savePreview**](#savepreview) | **POST** /api/v2/objects/{uuid}/previews/{name} | Save object preview|
|[**syncMorphObjects**](#syncmorphobjects) | **POST** /api/v2/objects/{uuid}/syncMorphObjects | Sync morph objects for existing records|
|[**updateIndices3**](#updateindices3) | **PUT** /api/v2/objects/updateIndices | Update object indices|
|[**updateLifecycleProperties**](#updatelifecycleproperties) | **PUT** /api/v2/objects/{objectUuid}/lifecycle-properties | Configure lifecycle property tracking|
|[**updateObject**](#updateobject) | **PUT** /api/v2/objects/{uuid} | Update object by UUID|

# **createObject**
> CreateResponse createObject(caraerObjectDTO)

Creates a new Caraer object using the provided details. Optional request parameters specify whether to include views, properties, and relations in the response. Validation rules: label (required, must be a string, maximum 32 characters), plural (required, must be a string, maximum 32 characters), name (required, must be a string, must be lowercase, must be unique, must match name pattern (lowercase letters, numbers, underscores)), description (optional, maximum 255 characters), groups (required, must be an array of string, no duplicate values allowed), showInMenu (required, must be a boolean).

### Example

```typescript
import {
    ObjectsApi,
    Configuration,
    CaraerObjectDTO
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new ObjectsApi(configuration);

let caraerObjectDTO: CaraerObjectDTO; //Details of the object to create
let views: string; // (optional) (default to 'false')
let properties: string; // (optional) (default to 'false')
let relations: string; // (optional) (default to 'false')

const { status, data } = await apiInstance.createObject(
    caraerObjectDTO,
    views,
    properties,
    relations
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **caraerObjectDTO** | **CaraerObjectDTO**| Details of the object to create | |
| **views** | [**string**] |  | (optional) defaults to 'false'|
| **properties** | [**string**] |  | (optional) defaults to 'false'|
| **relations** | [**string**] |  | (optional) defaults to 'false'|


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
|**201** | Object successfully created |  -  |
|**400** | Invalid input |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteObject**
> DeleteResponse deleteObject()

Deletes a specific object identified by its UUID.

### Example

```typescript
import {
    ObjectsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new ObjectsApi(configuration);

let uuid: string; // (default to undefined)

const { status, data } = await apiInstance.deleteObject(
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
|**200** | Object deleted successfully |  -  |
|**404** | Object not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAccessGrantCandidates**
> ShowResponseObjectAccessGrantCandidatesDTO getAccessGrantCandidates()

Returns all company users, teams, and installed apps that can receive record access on an object.

### Example

```typescript
import {
    ObjectsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new ObjectsApi(configuration);

const { status, data } = await apiInstance.getAccessGrantCandidates();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ShowResponseObjectAccessGrantCandidatesDTO**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getObject**
> ShowResponse getObject()

Fetches a single object by its UUID. Optional parameters determine whether to include views, properties, and relations in the response.

### Example

```typescript
import {
    ObjectsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new ObjectsApi(configuration);

let uuid: string; // (default to undefined)
let views: string; // (optional) (default to 'false')
let properties: string; // (optional) (default to 'false')
let relations: string; // (optional) (default to 'false')

const { status, data } = await apiInstance.getObject(
    uuid,
    views,
    properties,
    relations
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uuid** | [**string**] |  | defaults to undefined|
| **views** | [**string**] |  | (optional) defaults to 'false'|
| **properties** | [**string**] |  | (optional) defaults to 'false'|
| **relations** | [**string**] |  | (optional) defaults to 'false'|


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
|**200** | Object fetched successfully |  -  |
|**404** | Object not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getObjects**
> PaginationResponse getObjects(body)

Fetches a paginated list of objects, optionally including views, properties, and/or relations. The request body should contain pagination details such as limit, page, filters, sort, and query.

### Example

```typescript
import {
    ObjectsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new ObjectsApi(configuration);

let body: any; //Pagination request details
let views: string; // (optional) (default to 'false')
let properties: string; // (optional) (default to 'false')
let relations: string; // (optional) (default to 'false')

const { status, data } = await apiInstance.getObjects(
    body,
    views,
    properties,
    relations
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **any**| Pagination request details | |
| **views** | [**string**] |  | (optional) defaults to 'false'|
| **properties** | [**string**] |  | (optional) defaults to 'false'|
| **relations** | [**string**] |  | (optional) defaults to 'false'|


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
|**200** | Objects fetched successfully |  -  |
|**400** | Bad request |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPreview**
> ShowResponse getPreview()

Fetches a preview for an object by the object\'s UUID and the preview name. Returns the preview data wrapped in a ShowResponse.

### Example

```typescript
import {
    ObjectsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new ObjectsApi(configuration);

let uuid: string; // (default to undefined)
let name: string; // (default to undefined)

const { status, data } = await apiInstance.getPreview(
    uuid,
    name
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uuid** | [**string**] |  | defaults to undefined|
| **name** | [**string**] |  | defaults to undefined|


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
|**200** | Successfully fetched preview |  -  |
|**404** | Object or preview not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPreviews**
> PaginationResponse getPreviews(body)

Fetches all previews over all objects. Returns a PaginationResponse containing a list of preview DTOs.

### Example

```typescript
import {
    ObjectsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new ObjectsApi(configuration);

let body: any; //

const { status, data } = await apiInstance.getPreviews(
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
|**200** | Successfully fetched previews |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPreviews1**
> PaginationResponse getPreviews1()

Fetches all previews associated with a specific object. Returns a PaginationResponse containing a list of preview DTOs.

### Example

```typescript
import {
    ObjectsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new ObjectsApi(configuration);

let uuid: string; // (default to undefined)
let search: string; // (optional) (default to '')

const { status, data } = await apiInstance.getPreviews1(
    uuid,
    search
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uuid** | [**string**] |  | defaults to undefined|
| **search** | [**string**] |  | (optional) defaults to ''|


### Return type

**PaginationResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully fetched previews |  -  |
|**404** | Object not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **grantObjectAccess**
> SuccessResponseVoid grantObjectAccess(objectAccessGrantRequestDTO)

Accepts a request to grant record-level scopes on the object to selected users, teams, and installed apps. Validation runs synchronously; grants are applied asynchronously. Returns 202 Accepted on success.

### Example

```typescript
import {
    ObjectsApi,
    Configuration,
    ObjectAccessGrantRequestDTO
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new ObjectsApi(configuration);

let objectUuid: string; // (default to undefined)
let objectAccessGrantRequestDTO: ObjectAccessGrantRequestDTO; //

const { status, data } = await apiInstance.grantObjectAccess(
    objectUuid,
    objectAccessGrantRequestDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **objectAccessGrantRequestDTO** | **ObjectAccessGrantRequestDTO**|  | |
| **objectUuid** | [**string**] |  | defaults to undefined|


### Return type

**SuccessResponseVoid**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** | Grant accepted and processing in the background |  -  |
|**400** | Invalid request |  -  |
|**404** | Object not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **permanentlyDeleteArchivedObject**
> DeleteResponse permanentlyDeleteArchivedObject()

Hard-deletes a soft-deleted object. Only objects with deletedAt set can be removed.

### Example

```typescript
import {
    ObjectsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new ObjectsApi(configuration);

let uuid: string; // (default to undefined)

const { status, data } = await apiInstance.permanentlyDeleteArchivedObject(
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
|**200** | Object permanently deleted |  -  |
|**400** | Object is not archived |  -  |
|**404** | Object not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **savePreview**
> CreateResponse savePreview(previewDTO)

Creates or updates a preview for a specific object. The preview type is determined by the \'name\' path variable. Depending on the preview type (e.g., \'detail\', \'flow\', \'pill\', or \'page\'), the request body will be mapped to the corresponding PreviewDTO and converted to the appropriate Preview model.

### Example

```typescript
import {
    ObjectsApi,
    Configuration,
    PreviewDTO
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new ObjectsApi(configuration);

let uuid: string; // (default to undefined)
let name: string; // (default to undefined)
let previewDTO: PreviewDTO; //Preview data

const { status, data } = await apiInstance.savePreview(
    uuid,
    name,
    previewDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **previewDTO** | **PreviewDTO**| Preview data | |
| **uuid** | [**string**] |  | defaults to undefined|
| **name** | [**string**] |  | defaults to undefined|


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
|**201** | Successfully created or updated preview |  -  |
|**404** | Object or preview not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **syncMorphObjects**
> SuccessResponse syncMorphObjects()

Synchronizes existing records for an object after morph configuration changes. The object path variable accepts UUID or object name. Records that reference the object as primary object, morph object, or label are re-morphed.

### Example

```typescript
import {
    ObjectsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new ObjectsApi(configuration);

let uuid: string; // (default to undefined)

const { status, data } = await apiInstance.syncMorphObjects(
    uuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uuid** | [**string**] |  | defaults to undefined|


### Return type

**SuccessResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Morph objects synchronized successfully |  -  |
|**404** | Object not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateIndices3**
> updateIndices3(body)

Updates indices of objects based on the provided mapping. The request body should contain a mapping of object UUIDs to index values. Optional request parameters determine if views, properties, and relations should be included in the response.

### Example

```typescript
import {
    ObjectsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new ObjectsApi(configuration);

let body: string; //Mapping of object indices
let views: string; // (optional) (default to 'false')
let properties: string; // (optional) (default to 'false')
let relations: string; // (optional) (default to 'false')

const { status, data } = await apiInstance.updateIndices3(
    body,
    views,
    properties,
    relations
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**| Mapping of object indices | |
| **views** | [**string**] |  | (optional) defaults to 'false'|
| **properties** | [**string**] |  | (optional) defaults to 'false'|
| **relations** | [**string**] |  | (optional) defaults to 'false'|


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Indices updated successfully |  -  |
|**400** | Bad request |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateLifecycleProperties**
> UpdateResponse updateLifecycleProperties(updateLifecyclePropertiesDTO)

Sets which properties on this object should generate lifecycle history records when their values change.

### Example

```typescript
import {
    ObjectsApi,
    Configuration,
    UpdateLifecyclePropertiesDTO
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new ObjectsApi(configuration);

let objectUuid: string; // (default to undefined)
let updateLifecyclePropertiesDTO: UpdateLifecyclePropertiesDTO; //

const { status, data } = await apiInstance.updateLifecycleProperties(
    objectUuid,
    updateLifecyclePropertiesDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateLifecyclePropertiesDTO** | **UpdateLifecyclePropertiesDTO**|  | |
| **objectUuid** | [**string**] |  | defaults to undefined|


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
|**200** | Lifecycle properties updated |  -  |
|**404** | Object not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateObject**
> UpdateResponse updateObject(caraerObjectDTO)

Updates an existing object identified by its UUID with new details. Optional parameters determine if views, properties, and relations should be included in the response. Validation rules: label (required, must be a string, maximum 32 characters), plural (required, must be a string, maximum 32 characters), name (required, must be a string, must be lowercase, must be unique, must match name pattern (lowercase letters, numbers, underscores), cannot be changed after creation), description (optional, maximum 255 characters), groups (required, must be an array of string, no duplicate values allowed), showInMenu (required, must be a boolean).

### Example

```typescript
import {
    ObjectsApi,
    Configuration,
    CaraerObjectDTO
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new ObjectsApi(configuration);

let uuid: string; // (default to undefined)
let caraerObjectDTO: CaraerObjectDTO; //Updated details of the object
let views: string; // (optional) (default to 'false')
let properties: string; // (optional) (default to 'false')
let relations: string; // (optional) (default to 'false')

const { status, data } = await apiInstance.updateObject(
    uuid,
    caraerObjectDTO,
    views,
    properties,
    relations
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **caraerObjectDTO** | **CaraerObjectDTO**| Updated details of the object | |
| **uuid** | [**string**] |  | defaults to undefined|
| **views** | [**string**] |  | (optional) defaults to 'false'|
| **properties** | [**string**] |  | (optional) defaults to 'false'|
| **relations** | [**string**] |  | (optional) defaults to 'false'|


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
|**200** | Object updated successfully |  -  |
|**400** | Invalid input |  -  |
|**404** | Object not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

