# RelationsApi

All URIs are relative to *https://v2.api.caraer.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addConnection**](#addconnection) | **PUT** /api/v2/relations/{relationUuid}/connection/{from}/{to} | Add a connection to a relation|
|[**createRelationOrUpdate**](#createrelationorupdate) | **POST** /api/v2/relations/{objectUuid} | Create or update a relation|
|[**deleteConnection**](#deleteconnection) | **DELETE** /api/v2/relations/{relationUuid}/connection/{from}/{to} | Delete a connection from a relation|
|[**deleteRelation1**](#deleterelation1) | **DELETE** /api/v2/relations/{relationUuid} | Delete a relation|
|[**getRelation**](#getrelation) | **GET** /api/v2/relations/{relationUuid} | Get relation details|
|[**getRelationForObject**](#getrelationforobject) | **GET** /api/v2/relations/{relationUuid}/{objectUuid} | Get relation details for a specific object|
|[**getRelations**](#getrelations) | **POST** /api/v2/relations/index | Fetch paginated relations|
|[**getRelationsBetweenObjects**](#getrelationsbetweenobjects) | **POST** /api/v2/relations/index/{fromObjectUuid}/{toObjectUuid} | Get all relations between two objects|
|[**getRelationsByObject**](#getrelationsbyobject) | **POST** /api/v2/relations/index/{objectUuid} | Fetch relations for a specific object|
|[**permanentlyDeleteArchivedRelation**](#permanentlydeletearchivedrelation) | **DELETE** /api/v2/relations/{relationUuid}/permanent | Permanently delete archived relation|
|[**restoreRelation**](#restorerelation) | **POST** /api/v2/relations/{relationUuid}/restore | Restore a deleted relation|
|[**updateIndices**](#updateindices) | **PUT** /api/v2/relations/updateIndices | Update relation indices|

# **addConnection**
> SuccessResponseString addConnection()

Creates a connection between two objects for a given relation. The \'from\' and \'to\' UUIDs identify the objects to connect.

### Example

```typescript
import {
    RelationsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new RelationsApi(configuration);

let relationUuid: string; // (default to undefined)
let from: string; // (default to undefined)
let to: string; // (default to undefined)

const { status, data } = await apiInstance.addConnection(
    relationUuid,
    from,
    to
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **relationUuid** | [**string**] |  | defaults to undefined|
| **from** | [**string**] |  | defaults to undefined|
| **to** | [**string**] |  | defaults to undefined|


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
|**200** | Connection created successfully |  -  |
|**404** | The requested resource was not found. |  -  |
|**500** | An internal server error occurred. |  -  |
|**401** | Authentication is required or the token is invalid. |  -  |
|**403** | The caller is missing a required role or scope. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createRelationOrUpdate**
> UpdateResponse createRelationOrUpdate(relationDTO)

Creates a new relation or updates an existing one for the specified object. If a relation with the same name exists, it is updated; otherwise, a new relation is created. Returns an UpdateResponse if updated or a CreateResponse if created.

### Example

```typescript
import {
    RelationsApi,
    Configuration,
    RelationDTO
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new RelationsApi(configuration);

let objectUuid: string; // (default to undefined)
let relationDTO: RelationDTO; //Relation data

const { status, data } = await apiInstance.createRelationOrUpdate(
    objectUuid,
    relationDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **relationDTO** | **RelationDTO**| Relation data | |
| **objectUuid** | [**string**] |  | defaults to undefined|


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
|**200** | Relation updated successfully |  -  |
|**201** | Relation created successfully |  -  |
|**400** | Invalid input data |  -  |
|**500** | An internal server error occurred. |  -  |
|**401** | Authentication is required or the token is invalid. |  -  |
|**403** | The caller is missing a required role or scope. |  -  |
|**404** | The requested resource was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteConnection**
> SuccessResponseString deleteConnection()

Deletes a connection between two objects for a given relation using the specified UUIDs.

### Example

```typescript
import {
    RelationsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new RelationsApi(configuration);

let relationUuid: string; // (default to undefined)
let from: string; // (default to undefined)
let to: string; // (default to undefined)

const { status, data } = await apiInstance.deleteConnection(
    relationUuid,
    from,
    to
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **relationUuid** | [**string**] |  | defaults to undefined|
| **from** | [**string**] |  | defaults to undefined|
| **to** | [**string**] |  | defaults to undefined|


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
|**200** | Connection deleted successfully |  -  |
|**404** | The requested resource was not found. |  -  |
|**500** | An internal server error occurred. |  -  |
|**401** | Authentication is required or the token is invalid. |  -  |
|**403** | The caller is missing a required role or scope. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteRelation1**
> DeleteResponse deleteRelation1()

Deletes a relation specified by its UUID. Returns a DeleteResponse with the deleted relation details.

### Example

```typescript
import {
    RelationsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new RelationsApi(configuration);

let relationUuid: string; // (default to undefined)

const { status, data } = await apiInstance.deleteRelation1(
    relationUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **relationUuid** | [**string**] |  | defaults to undefined|


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
|**200** | Relation deleted successfully |  -  |
|**404** | The requested resource was not found. |  -  |
|**500** | An internal server error occurred. |  -  |
|**401** | Authentication is required or the token is invalid. |  -  |
|**403** | The caller is missing a required role or scope. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getRelation**
> ShowResponseRelationDTO getRelation()

Retrieves the details of a relation by its UUID. Returns a ShowResponse containing a RelationDTO.

### Example

```typescript
import {
    RelationsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new RelationsApi(configuration);

let relationUuid: string; // (default to undefined)

const { status, data } = await apiInstance.getRelation(
    relationUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **relationUuid** | [**string**] |  | defaults to undefined|


### Return type

**ShowResponseRelationDTO**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Relation retrieved successfully |  -  |
|**404** | The requested resource was not found. |  -  |
|**401** | Authentication is required or the token is invalid. |  -  |
|**403** | The caller is missing a required role or scope. |  -  |
|**500** | An internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getRelationForObject**
> ShowResponseRelationDTO getRelationForObject()

Retrieves a relation by its UUID and associates it with the specified object, returning a RelationDTO that includes details from the related object.

### Example

```typescript
import {
    RelationsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new RelationsApi(configuration);

let relationUuid: string; // (default to undefined)
let objectUuid: string; // (default to undefined)

const { status, data } = await apiInstance.getRelationForObject(
    relationUuid,
    objectUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **relationUuid** | [**string**] |  | defaults to undefined|
| **objectUuid** | [**string**] |  | defaults to undefined|


### Return type

**ShowResponseRelationDTO**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Relation for object retrieved successfully |  -  |
|**404** | Relation or object not found |  -  |
|**401** | Authentication is required or the token is invalid. |  -  |
|**403** | The caller is missing a required role or scope. |  -  |
|**500** | An internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getRelations**
> PaginationResponseRelationDTO getRelations(paginationRequest)

Retrieves a paginated list of relations. Returns a PaginationResponse containing RelationDTO objects based on the provided pagination criteria.

### Example

```typescript
import {
    RelationsApi,
    Configuration,
    PaginationRequest
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new RelationsApi(configuration);

let paginationRequest: PaginationRequest; //Pagination request for relations

const { status, data } = await apiInstance.getRelations(
    paginationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **paginationRequest** | **PaginationRequest**| Pagination request for relations | |


### Return type

**PaginationResponseRelationDTO**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Relations fetched successfully |  -  |
|**400** | Invalid pagination request |  -  |
|**500** | Internal server error |  -  |
|**401** | Authentication is required or the token is invalid. |  -  |
|**403** | The caller is missing a required role or scope. |  -  |
|**404** | The requested resource was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getRelationsBetweenObjects**
> PaginationResponseRelationDTO getRelationsBetweenObjects(paginationRequest)

Retrieves all relations between two objects based on the provided object UUIDs.

### Example

```typescript
import {
    RelationsApi,
    Configuration,
    PaginationRequest
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new RelationsApi(configuration);

let fromObjectUuid: string; // (default to undefined)
let toObjectUuid: string; // (default to undefined)
let paginationRequest: PaginationRequest; //

const { status, data } = await apiInstance.getRelationsBetweenObjects(
    fromObjectUuid,
    toObjectUuid,
    paginationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **paginationRequest** | **PaginationRequest**|  | |
| **fromObjectUuid** | [**string**] |  | defaults to undefined|
| **toObjectUuid** | [**string**] |  | defaults to undefined|


### Return type

**PaginationResponseRelationDTO**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Relations retrieved successfully |  -  |
|**404** | One or more objects not found |  -  |
|**401** | Authentication is required or the token is invalid. |  -  |
|**403** | The caller is missing a required role or scope. |  -  |
|**500** | An internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getRelationsByObject**
> PaginationResponseRelationDTO getRelationsByObject(paginationRequest)

Returns relation definitions where this object participates in the **schema** graph for that relation name: either as origin `(thisObject)-[:relationName]->(:Object)` or as target `(:Object)-[:relationName]->(thisObject)`. Unrelated relations (same name elsewhere, or no typed edge touching this object) are excluded. Uses the object’s `name` to filter; request path uses object UUID.

### Example

```typescript
import {
    RelationsApi,
    Configuration,
    PaginationRequest
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new RelationsApi(configuration);

let objectUuid: string; // (default to undefined)
let paginationRequest: PaginationRequest; //Pagination request for relations

const { status, data } = await apiInstance.getRelationsByObject(
    objectUuid,
    paginationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **paginationRequest** | **PaginationRequest**| Pagination request for relations | |
| **objectUuid** | [**string**] |  | defaults to undefined|


### Return type

**PaginationResponseRelationDTO**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Relations fetched successfully |  -  |
|**404** | Object not found |  -  |
|**500** | Internal server error |  -  |
|**401** | Authentication is required or the token is invalid. |  -  |
|**403** | The caller is missing a required role or scope. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **permanentlyDeleteArchivedRelation**
> DeleteResponse permanentlyDeleteArchivedRelation()

Hard-deletes a soft-deleted relation. Only relations with deletedAt set can be removed.

### Example

```typescript
import {
    RelationsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new RelationsApi(configuration);

let relationUuid: string; // (default to undefined)

const { status, data } = await apiInstance.permanentlyDeleteArchivedRelation(
    relationUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **relationUuid** | [**string**] |  | defaults to undefined|


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
|**200** | Relation permanently deleted |  -  |
|**400** | Relation is not archived |  -  |
|**404** | The requested resource was not found. |  -  |
|**401** | Authentication is required or the token is invalid. |  -  |
|**403** | The caller is missing a required role or scope. |  -  |
|**500** | An internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **restoreRelation**
> RestoreResponse restoreRelation()

Restores a previously deleted relation by its UUID. Returns a RestoreResponse with the restored relation details.

### Example

```typescript
import {
    RelationsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new RelationsApi(configuration);

let relationUuid: string; // (default to undefined)

const { status, data } = await apiInstance.restoreRelation(
    relationUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **relationUuid** | [**string**] |  | defaults to undefined|


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
|**200** | Relation restored successfully |  -  |
|**404** | The requested resource was not found. |  -  |
|**500** | An internal server error occurred. |  -  |
|**401** | Authentication is required or the token is invalid. |  -  |
|**403** | The caller is missing a required role or scope. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateIndices**
> SuccessResponseCollectionRelation updateIndices(requestBody)

Updates the indices for relations. The request body should contain a mapping of relation UUIDs to their new index values. Returns a SuccessResponse containing the updated relation objects.

### Example

```typescript
import {
    RelationsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new RelationsApi(configuration);

let requestBody: { [key: string]: number; }; //Mapping of relation UUIDs to new index values

const { status, data } = await apiInstance.updateIndices(
    requestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **{ [key: string]: number; }**| Mapping of relation UUIDs to new index values | |


### Return type

**SuccessResponseCollectionRelation**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Indices updated successfully |  -  |
|**400** | Invalid input provided |  -  |
|**500** | An internal server error occurred. |  -  |
|**401** | Authentication is required or the token is invalid. |  -  |
|**403** | The caller is missing a required role or scope. |  -  |
|**404** | The requested resource was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

