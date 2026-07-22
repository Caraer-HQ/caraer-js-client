# RecordsApi

All URIs are relative to *https://v2.api.caraer.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**_delete**](#_delete) | **DELETE** /api/v2/records/{uuid} | Delete a record|
|[**create**](#create) | **POST** /api/v2/records/{objectName} | Create a new record|
|[**createOrUpdate**](#createorupdate) | **POST** /api/v2/records/{objectName}/createOrUpdate | Create or update a record|
|[**createRelation**](#createrelation) | **POST** /api/v2/records/relations/{fromUuid}/{relationName}/{toUuid} | Create a relation between records|
|[**deleteRelation**](#deleterelation) | **DELETE** /api/v2/records/relations/{fromUuid}/{relationName}/{toUuid} | Delete a relation between records|
|[**index**](#index) | **POST** /api/v2/records/index | Fetch paginated records|
|[**indexFlow**](#indexflow) | **POST** /api/v2/records/index/flow | Fetch records for flow view|
|[**indexPage**](#indexpage) | **POST** /api/v2/records/index/page | Fetch records for page view|
|[**indexTable**](#indextable) | **POST** /api/v2/records/index/table | Fetch records for table view|
|[**morph**](#morph) | **POST** /api/v2/records/{uuid}/morph | Morph a record|
|[**preview**](#preview) | **GET** /api/v2/records/{uuid}/previews/{name} | Get record preview|
|[**restore**](#restore) | **POST** /api/v2/records/{uuid}/restore | Restore a deleted record|
|[**search**](#search) | **POST** /api/v2/records/search | Search records|
|[**show1**](#show1) | **GET** /api/v2/records/{uuid} | Get record details|
|[**update**](#update) | **PUT** /api/v2/records/{objectName}/{uuid} | Update a record|

# **_delete**
> SuccessResponse _delete()

Deletes a record specified by its UUID.

### Example

```typescript
import {
    RecordsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new RecordsApi(configuration);

let uuid: string; // (default to undefined)
let mode: string; //Controls how the record is removed. Allowed values: \'archive\' (soft delete, keep all data), \'anonymize\' (remove data but keep relationships), \'delete\' (hard delete). Defaults to \'archive\'. (optional) (default to 'archive')

const { status, data } = await apiInstance._delete(
    uuid,
    mode
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uuid** | [**string**] |  | defaults to undefined|
| **mode** | [**string**] | Controls how the record is removed. Allowed values: \&#39;archive\&#39; (soft delete, keep all data), \&#39;anonymize\&#39; (remove data but keep relationships), \&#39;delete\&#39; (hard delete). Defaults to \&#39;archive\&#39;. | (optional) defaults to 'archive'|


### Return type

**SuccessResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Record deleted successfully |  -  |
|**404** | Record not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create**
> CreateResponse create(recordDTO)

Creates a new record for the specified object using the provided RecordDTO data. Returns a CreateResponse with the newly created record. Validation: Record properties are validated according to the property rules defined for the object. Each property may have validation rules such as required, type constraints, character limits, uniqueness, etc.

### Example

```typescript
import {
    RecordsApi,
    Configuration,
    RecordDTO
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new RecordsApi(configuration);

let objectName: string; // (default to undefined)
let recordDTO: RecordDTO; //Record data to create
let parse: boolean; //If \'true\', parses the created record to human-readable values before returning. (optional) (default to false)
let ignoreErrors: boolean; //If \'true\', allows the creation to proceed while ignoring certain non-critical validation errors, when supported. (optional) (default to false)
let recordReturnFormat: string; //Format of the record to return. LEGACY, USER_FRIENDLY, EXPANDED. (optional) (default to 'LEGACY')

const { status, data } = await apiInstance.create(
    objectName,
    recordDTO,
    parse,
    ignoreErrors,
    recordReturnFormat
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **recordDTO** | **RecordDTO**| Record data to create | |
| **objectName** | [**string**] |  | defaults to undefined|
| **parse** | [**boolean**] | If \&#39;true\&#39;, parses the created record to human-readable values before returning. | (optional) defaults to false|
| **ignoreErrors** | [**boolean**] | If \&#39;true\&#39;, allows the creation to proceed while ignoring certain non-critical validation errors, when supported. | (optional) defaults to false|
| **recordReturnFormat** | [**string**] | Format of the record to return. LEGACY, USER_FRIENDLY, EXPANDED. | (optional) defaults to 'LEGACY'|


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
|**201** | Record created successfully |  -  |
|**400** | Invalid input data |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createOrUpdate**
> createOrUpdate(recordDTO)

Creates a new record or updates an existing one based on uniqueness criteria for the given object. If a matching record exists, it is updated; otherwise, a new record is created. Returns a CreateResponse or UpdateResponse with the record details. Validation: Record properties are validated according to the property rules defined for the object. Each property may have validation rules such as required, type constraints, character limits, uniqueness, etc.

### Example

```typescript
import {
    RecordsApi,
    Configuration,
    RecordDTO
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new RecordsApi(configuration);

let objectName: string; // (default to undefined)
let recordDTO: RecordDTO; //Record data to create or update
let parse: boolean; // (optional) (default to false)
let ignoreErrors: boolean; // (optional) (default to false)
let recordReturnFormat: string; //Format of the record to return. LEGACY, USER_FRIENDLY, EXPANDED. (optional) (default to 'LEGACY')

const { status, data } = await apiInstance.createOrUpdate(
    objectName,
    recordDTO,
    parse,
    ignoreErrors,
    recordReturnFormat
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **recordDTO** | **RecordDTO**| Record data to create or update | |
| **objectName** | [**string**] |  | defaults to undefined|
| **parse** | [**boolean**] |  | (optional) defaults to false|
| **ignoreErrors** | [**boolean**] |  | (optional) defaults to false|
| **recordReturnFormat** | [**string**] | Format of the record to return. LEGACY, USER_FRIENDLY, EXPANDED. | (optional) defaults to 'LEGACY'|


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Record updated successfully |  -  |
|**201** | Record created successfully |  -  |
|**400** | Invalid input data |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createRelation**
> SuccessResponse createRelation()

Creates a relation between two records identified by their UUIDs using the provided relation name.

### Example

```typescript
import {
    RecordsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new RecordsApi(configuration);

let fromUuid: string; // (default to undefined)
let relationName: string; // (default to undefined)
let toUuid: string; // (default to undefined)
let primary: object; //When \'true\', marks the created relation as primary. Defaults to \'false\'. (optional) (default to undefined)

const { status, data } = await apiInstance.createRelation(
    fromUuid,
    relationName,
    toUuid,
    primary
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fromUuid** | [**string**] |  | defaults to undefined|
| **relationName** | [**string**] |  | defaults to undefined|
| **toUuid** | [**string**] |  | defaults to undefined|
| **primary** | **object** | When \&#39;true\&#39;, marks the created relation as primary. Defaults to \&#39;false\&#39;. | (optional) defaults to undefined|


### Return type

**SuccessResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Relation created successfully |  -  |
|**404** | One or more entities not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteRelation**
> SuccessResponse deleteRelation()

Deletes a relation between two records identified by their UUIDs and the relation name.

### Example

```typescript
import {
    RecordsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new RecordsApi(configuration);

let fromUuid: string; // (default to undefined)
let relationName: string; // (default to undefined)
let toUuid: string; // (default to undefined)

const { status, data } = await apiInstance.deleteRelation(
    fromUuid,
    relationName,
    toUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fromUuid** | [**string**] |  | defaults to undefined|
| **relationName** | [**string**] |  | defaults to undefined|
| **toUuid** | [**string**] |  | defaults to undefined|


### Return type

**SuccessResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Relation deleted successfully |  -  |
|**404** | One or more entities not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **index**
> PaginationResponse index(body)

Retrieves a paginated list of records. If a preview type is specified in the request, returns records formatted for preview; otherwise, returns full record details.

### Example

```typescript
import {
    RecordsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new RecordsApi(configuration);

let body: string; //Pagination request for records
let parse: boolean; //If set to \'true\', records are parsed to human-readable values (for example, unix timestamps are formatted as dates). (optional) (default to undefined)
let archived: boolean; //When \'true\', archived records are returned instead of active records. Defaults to \'false\'. (optional) (default to false)
let relatedRecordUuid: string; //UUID of a record used for relation-aware filtering. If supplied and the request body contains a filter, that filter will be smartened based on this related record. If no filter is supplied, a default filter will be applied that returns all records related in any way (any relation) to this record. (optional) (default to undefined)
let recordReturnFormat: string; //Format of the records to return. LEGACY, USER_FRIENDLY, EXPANDED. (optional) (default to 'LEGACY')

const { status, data } = await apiInstance.index(
    body,
    parse,
    archived,
    relatedRecordUuid,
    recordReturnFormat
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**| Pagination request for records | |
| **parse** | [**boolean**] | If set to \&#39;true\&#39;, records are parsed to human-readable values (for example, unix timestamps are formatted as dates). | (optional) defaults to undefined|
| **archived** | [**boolean**] | When \&#39;true\&#39;, archived records are returned instead of active records. Defaults to \&#39;false\&#39;. | (optional) defaults to false|
| **relatedRecordUuid** | [**string**] | UUID of a record used for relation-aware filtering. If supplied and the request body contains a filter, that filter will be smartened based on this related record. If no filter is supplied, a default filter will be applied that returns all records related in any way (any relation) to this record. | (optional) defaults to undefined|
| **recordReturnFormat** | [**string**] | Format of the records to return. LEGACY, USER_FRIENDLY, EXPANDED. | (optional) defaults to 'LEGACY'|


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
|**200** | Records fetched successfully |  -  |
|**400** | Invalid pagination request |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **indexFlow**
> SuccessResponse indexFlow(body)

Retrieves a list of records formatted for flow view based on a specific property. If the property is not provided in the request, defaults to the \'status\' property of the main object. Returns a SuccessResponse containing the flow records.

### Example

```typescript
import {
    RecordsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new RecordsApi(configuration);

let body: string; //Pagination request for flow view
let relatedRecordUuid: string; //UUID of a record used for relation-aware filtering. If supplied and the request body contains a filter, that filter will be smartened based on this related record. If no filter is supplied, a default filter will be applied that returns all records related in any way (any relation) to this record. (optional) (default to undefined)
let parse: boolean; //Whether to parse the record before returning it. (optional) (default to undefined)

const { status, data } = await apiInstance.indexFlow(
    body,
    relatedRecordUuid,
    parse
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**| Pagination request for flow view | |
| **relatedRecordUuid** | [**string**] | UUID of a record used for relation-aware filtering. If supplied and the request body contains a filter, that filter will be smartened based on this related record. If no filter is supplied, a default filter will be applied that returns all records related in any way (any relation) to this record. | (optional) defaults to undefined|
| **parse** | [**boolean**] | Whether to parse the record before returning it. | (optional) defaults to undefined|


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
|**200** | Records for flow view fetched successfully |  -  |
|**400** | Required property not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **indexPage**
> PaginationResponse indexPage(body)

Retrieves a paginated list of webpages for page view. The search query is temporarily removed from the pagination request and passed separately. Returns a PaginationResponse containing WebpageDTO objects.

### Example

```typescript
import {
    RecordsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new RecordsApi(configuration);

let body: string; //Pagination request for page view
let environment: string; //Target environment for resolving webpages (for example \'staging\' or \'production\'). Defaults to \'staging\'. (optional) (default to 'staging')
let relatedRecordUuid: string; //UUID of a record used for relation-aware filtering. If supplied and the request body contains a filter, that filter will be smartened based on this related record. If no filter is supplied, a default filter will be applied that returns all records related in any way (any relation) to this record. (optional) (default to undefined)
let fields: string; //Comma-separated WebpageDTO fields to return (for example: uuid,title). When omitted, the full WebpageDTO is returned. (optional) (default to undefined)
let publishedOnly: boolean; //When true, only returns pages published in the selected environment. (optional) (default to false)
let excludeTemplateRelated: boolean; //When true, excludes pages whose options mark them as related to a template. (optional) (default to false)

const { status, data } = await apiInstance.indexPage(
    body,
    environment,
    relatedRecordUuid,
    fields,
    publishedOnly,
    excludeTemplateRelated
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**| Pagination request for page view | |
| **environment** | [**string**] | Target environment for resolving webpages (for example \&#39;staging\&#39; or \&#39;production\&#39;). Defaults to \&#39;staging\&#39;. | (optional) defaults to 'staging'|
| **relatedRecordUuid** | [**string**] | UUID of a record used for relation-aware filtering. If supplied and the request body contains a filter, that filter will be smartened based on this related record. If no filter is supplied, a default filter will be applied that returns all records related in any way (any relation) to this record. | (optional) defaults to undefined|
| **fields** | [**string**] | Comma-separated WebpageDTO fields to return (for example: uuid,title). When omitted, the full WebpageDTO is returned. | (optional) defaults to undefined|
| **publishedOnly** | [**boolean**] | When true, only returns pages published in the selected environment. | (optional) defaults to false|
| **excludeTemplateRelated** | [**boolean**] | When true, excludes pages whose options mark them as related to a template. | (optional) defaults to false|


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
|**200** | Webpages fetched successfully |  -  |
|**400** | Invalid pagination request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **indexTable**
> PaginationResponse indexTable(body)

Retrieves records formatted for table display. Returns a PaginationResponse containing records formatted for table view.

### Example

```typescript
import {
    RecordsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new RecordsApi(configuration);

let body: string; //Pagination request for table view
let relatedRecordUuid: string; //UUID of a record used for relation-aware filtering. If supplied and the request body contains a filter, that filter will be smartened based on this related record. If no filter is supplied, a default filter will be applied that returns all records related in any way (any relation) to this record. (optional) (default to undefined)

const { status, data } = await apiInstance.indexTable(
    body,
    relatedRecordUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**| Pagination request for table view | |
| **relatedRecordUuid** | [**string**] | UUID of a record used for relation-aware filtering. If supplied and the request body contains a filter, that filter will be smartened based on this related record. If no filter is supplied, a default filter will be applied that returns all records related in any way (any relation) to this record. | (optional) defaults to undefined|


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
|**200** | Records for table view fetched successfully |  -  |
|**400** | Invalid request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **morph**
> SuccessResponse morph(morphRecordRequest)

Morphs a record identified by its UUID to one or more objects. You can use this to move a record or add it to another object so it\'ll be visible in the new object.Returns a SuccessResponse confirming that the record has been morphed.

### Example

```typescript
import {
    RecordsApi,
    Configuration,
    MorphRecordRequest
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new RecordsApi(configuration);

let uuid: string; // (default to undefined)
let morphRecordRequest: MorphRecordRequest; //
let recordReturnFormat: string; //Format of the record to return. LEGACY, USER_FRIENDLY, EXPANDED. (optional) (default to 'LEGACY')
let parse: boolean; //Whether to parse the record before returning it. (optional) (default to undefined)

const { status, data } = await apiInstance.morph(
    uuid,
    morphRecordRequest,
    recordReturnFormat,
    parse
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **morphRecordRequest** | **MorphRecordRequest**|  | |
| **uuid** | [**string**] |  | defaults to undefined|
| **recordReturnFormat** | [**string**] | Format of the record to return. LEGACY, USER_FRIENDLY, EXPANDED. | (optional) defaults to 'LEGACY'|
| **parse** | [**boolean**] | Whether to parse the record before returning it. | (optional) defaults to undefined|


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
|**200** | Record morphed successfully |  -  |
|**404** | Record not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **preview**
> ShowResponse preview()

Retrieves a preview for a record specified by its UUID and preview name. Returns a ShowResponse containing the preview data.

### Example

```typescript
import {
    RecordsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new RecordsApi(configuration);

let uuid: string; // (default to undefined)
let name: string; // (default to undefined)
let object: string; //Optional object name used to resolve the record before building the preview. (optional) (default to undefined)
let parse: boolean; //Whether to parse the record before returning it. (optional) (default to undefined)

const { status, data } = await apiInstance.preview(
    uuid,
    name,
    object,
    parse
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uuid** | [**string**] |  | defaults to undefined|
| **name** | [**string**] |  | defaults to undefined|
| **object** | [**string**] | Optional object name used to resolve the record before building the preview. | (optional) defaults to undefined|
| **parse** | [**boolean**] | Whether to parse the record before returning it. | (optional) defaults to undefined|


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
|**200** | Preview retrieved successfully |  -  |
|**404** | Record or preview not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **restore**
> SuccessResponse restore()

Restores a soft-deleted record identified by its UUID. Returns a SuccessResponse confirming that the record has been restored.

### Example

```typescript
import {
    RecordsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new RecordsApi(configuration);

let uuid: string; // (default to undefined)

const { status, data } = await apiInstance.restore(
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
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Record restored successfully |  -  |
|**404** | Record not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **search**
> PaginationResponse search(body)

Performs a search for records based on the specified criteria in the request body. Returns a PaginationResponse containing matching records.

### Example

```typescript
import {
    RecordsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new RecordsApi(configuration);

let body: string; //Search criteria
let archived: boolean; //When set to \'true\', includes soft-deleted records in the search results. (optional) (default to false)
let parse: boolean; //If \'true\', parses returned records to human-readable values. (optional) (default to false)
let recordReturnFormat: string; //Format of the records to return. LEGACY, USER_FRIENDLY, EXPANDED. (optional) (default to 'LEGACY')

const { status, data } = await apiInstance.search(
    body,
    archived,
    parse,
    recordReturnFormat
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**| Search criteria | |
| **archived** | [**boolean**] | When set to \&#39;true\&#39;, includes soft-deleted records in the search results. | (optional) defaults to false|
| **parse** | [**boolean**] | If \&#39;true\&#39;, parses returned records to human-readable values. | (optional) defaults to false|
| **recordReturnFormat** | [**string**] | Format of the records to return. LEGACY, USER_FRIENDLY, EXPANDED. | (optional) defaults to 'LEGACY'|


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
|**200** | Search completed successfully |  -  |
|**400** | Invalid search parameters |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **show1**
> ShowResponse show1()

Retrieves detailed information about a record by its UUID. Returns a ShowResponse containing the record details.

### Example

```typescript
import {
    RecordsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new RecordsApi(configuration);

let uuid: string; // (default to undefined)
let object: string; //Optional object name to resolve the record in a specific object context. (optional) (default to undefined)
let recordReturnFormat: string; //Format of the record to return. LEGACY, USER_FRIENDLY, EXPANDED. (optional) (default to 'LEGACY')
let parse: boolean; //Whether to parse the record before returning it. (optional) (default to undefined)

const { status, data } = await apiInstance.show1(
    uuid,
    object,
    recordReturnFormat,
    parse
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uuid** | [**string**] |  | defaults to undefined|
| **object** | [**string**] | Optional object name to resolve the record in a specific object context. | (optional) defaults to undefined|
| **recordReturnFormat** | [**string**] | Format of the record to return. LEGACY, USER_FRIENDLY, EXPANDED. | (optional) defaults to 'LEGACY'|
| **parse** | [**boolean**] | Whether to parse the record before returning it. | (optional) defaults to undefined|


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
|**200** | Record retrieved successfully |  -  |
|**404** | Record not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update**
> UpdateResponse update(recordDTO)

Updates a record\'s details identified by its UUID. The record data is provided as a RecordDTO. Returns an UpdateResponse with the updated record. Validation: Record properties are validated according to the property rules defined for the object. Each property may have validation rules such as required, type constraints, character limits, uniqueness, etc.

### Example

```typescript
import {
    RecordsApi,
    Configuration,
    RecordDTO
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new RecordsApi(configuration);

let uuid: string; // (default to undefined)
let objectName: string; // (default to undefined)
let recordDTO: RecordDTO; //Record data to update
let parse: boolean; //If \'true\', parses the updated record to human-readable values before returning. (optional) (default to false)
let ignoreErrors: boolean; //If \'true\', allows the update to proceed while ignoring certain non-critical validation errors, when supported. (optional) (default to false)
let recordReturnFormat: string; //Format of the record to return. LEGACY, USER_FRIENDLY, EXPANDED. (optional) (default to 'LEGACY')

const { status, data } = await apiInstance.update(
    uuid,
    objectName,
    recordDTO,
    parse,
    ignoreErrors,
    recordReturnFormat
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **recordDTO** | **RecordDTO**| Record data to update | |
| **uuid** | [**string**] |  | defaults to undefined|
| **objectName** | [**string**] |  | defaults to undefined|
| **parse** | [**boolean**] | If \&#39;true\&#39;, parses the updated record to human-readable values before returning. | (optional) defaults to false|
| **ignoreErrors** | [**boolean**] | If \&#39;true\&#39;, allows the update to proceed while ignoring certain non-critical validation errors, when supported. | (optional) defaults to false|
| **recordReturnFormat** | [**string**] | Format of the record to return. LEGACY, USER_FRIENDLY, EXPANDED. | (optional) defaults to 'LEGACY'|


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
|**200** | Record updated successfully |  -  |
|**400** | Invalid input data |  -  |
|**404** | Record not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

