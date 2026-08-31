# RecordsApi

All URIs are relative to *https://v2.api.caraer.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**_delete**](#_delete) | **DELETE** /api/v2/records/{uuid} | Delete a record|
|[**aggregate**](#aggregate) | **POST** /api/v2/records/aggregate | Aggregate records for analytics charts|
|[**aggregateBatch**](#aggregatebatch) | **POST** /api/v2/records/aggregate/batch | Batch aggregate records for analytics dashboards|
|[**bulkDelete**](#bulkdelete) | **POST** /api/v2/records/{objectName}/bulk-delete | Bulk delete records|
|[**bulkEdit**](#bulkedit) | **PUT** /api/v2/records/{objectName}/bulk | Bulk create or update records|
|[**create**](#create) | **POST** /api/v2/records/{objectName} | Create a new record|
|[**createOrUpdate**](#createorupdate) | **POST** /api/v2/records/{objectName}/createOrUpdate | Create or update a record|
|[**createRelation**](#createrelation) | **POST** /api/v2/records/relations/{fromUuid}/{relationName}/{toUuid} | Create a relation between records|
|[**deleteRelation**](#deleterelation) | **DELETE** /api/v2/records/relations/{fromUuid}/{relationName}/{toUuid} | Delete a relation between records|
|[**extend**](#extend) | **POST** /api/v2/records/{uuid}/extend | Extend a record|
|[**index**](#index) | **POST** /api/v2/records/index | Fetch paginated records|
|[**indexFlow**](#indexflow) | **POST** /api/v2/records/index/flow | Fetch records for flow view|
|[**indexPage**](#indexpage) | **POST** /api/v2/records/index/page | Fetch records for page view|
|[**indexTable**](#indextable) | **POST** /api/v2/records/index/table | Fetch records for table view|
|[**preview**](#preview) | **GET** /api/v2/records/{uuid}/previews/{name} | Get record preview|
|[**query**](#query) | **POST** /api/v2/records/query | Advanced graph-aware record query|
|[**restore**](#restore) | **POST** /api/v2/records/{uuid}/restore | Restore a deleted record|
|[**search**](#search) | **POST** /api/v2/records/search | Search records|
|[**searchCrossObject**](#searchcrossobject) | **POST** /api/v2/records/search/cross-object | Search records across objects|
|[**show**](#show) | **GET** /api/v2/records/{uuid} | Get record details|
|[**showByObject**](#showbyobject) | **GET** /api/v2/records/{objectName}/{uuid} | Get record details by object|
|[**suggestAnalyticsWidgets**](#suggestanalyticswidgets) | **POST** /api/v2/records/analytics/suggest-widgets | Suggest analytics widgets with AI|
|[**update**](#update) | **PUT** /api/v2/records/{objectName}/{uuid} | Update a record|
|[**updateByUuid**](#updatebyuuid) | **PUT** /api/v2/records/{uuid} | Update a record by UUID|
|[**updateRelationEdge**](#updaterelationedge) | **PATCH** /api/v2/records/relations/{fromUuid}/{relationName}/{toUuid} | Update relation edge properties|

# **_delete**
> SuccessResponseString _delete()

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

**SuccessResponseString**

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
|**401** | Authentication is required or the token is invalid. |  -  |
|**403** | The caller is missing a required role or scope. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aggregate**
> SuccessResponseAggregateResponse aggregate(aggregateRequest)

Groups Neo4j records by property or time bucket and returns series points with optional drilldown filters.

### Example

```typescript
import {
    RecordsApi,
    Configuration,
    AggregateRequest
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new RecordsApi(configuration);

let aggregateRequest: AggregateRequest; //

const { status, data } = await apiInstance.aggregate(
    aggregateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aggregateRequest** | **AggregateRequest**|  | |


### Return type

**SuccessResponseAggregateResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Aggregation completed |  -  |
|**400** | Invalid request |  -  |
|**401** | Authentication is required or the token is invalid. |  -  |
|**403** | The caller is missing a required role or scope. |  -  |
|**404** | The requested resource was not found. |  -  |
|**500** | An internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aggregateBatch**
> SuccessResponseListAggregateResponse aggregateBatch(aggregateBatchRequest)

Runs multiple aggregation requests for dashboard widgets.

### Example

```typescript
import {
    RecordsApi,
    Configuration,
    AggregateBatchRequest
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new RecordsApi(configuration);

let aggregateBatchRequest: AggregateBatchRequest; //

const { status, data } = await apiInstance.aggregateBatch(
    aggregateBatchRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aggregateBatchRequest** | **AggregateBatchRequest**|  | |


### Return type

**SuccessResponseListAggregateResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Batch aggregation completed |  -  |
|**400** | Invalid request |  -  |
|**401** | Authentication is required or the token is invalid. |  -  |
|**403** | The caller is missing a required role or scope. |  -  |
|**404** | The requested resource was not found. |  -  |
|**500** | An internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **bulkDelete**
> BulkDeleteRecordsResponse bulkDelete(bulkDeleteRecordsRequest)

Archives, anonymizes, or permanently deletes multiple records in one request. Returns HTTP 200 when every item succeeds. Returns HTTP 200 with per-record errors when one or more items fail; successful items are still applied and listed in data.uuids.

### Example

```typescript
import {
    RecordsApi,
    Configuration,
    BulkDeleteRecordsRequest
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new RecordsApi(configuration);

let objectName: string; // (default to undefined)
let bulkDeleteRecordsRequest: BulkDeleteRecordsRequest; //

const { status, data } = await apiInstance.bulkDelete(
    objectName,
    bulkDeleteRecordsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bulkDeleteRecordsRequest** | **BulkDeleteRecordsRequest**|  | |
| **objectName** | [**string**] |  | defaults to undefined|


### Return type

**BulkDeleteRecordsResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Bulk delete completed (possibly with per-record errors) |  -  |
|**400** | Invalid request |  -  |
|**401** | Authentication is required or the token is invalid. |  -  |
|**403** | The caller is missing a required role or scope. |  -  |
|**404** | The requested resource was not found. |  -  |
|**500** | An internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **bulkEdit**
> BulkEditRecordsResponse bulkEdit(bulkEditRecordsRequest)

Creates or updates multiple records in one request. Returns HTTP 201 when every item succeeds (no per-record errors). Returns HTTP 200 when one or more items fail validation; successful items are still persisted and listed in data.records, with failures in errors.

### Example

```typescript
import {
    RecordsApi,
    Configuration,
    BulkEditRecordsRequest
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new RecordsApi(configuration);

let objectName: string; // (default to undefined)
let bulkEditRecordsRequest: BulkEditRecordsRequest; //
let ignoreErrors: boolean; //If \'true\', allows each save to proceed while ignoring certain non-critical validation errors, when supported. (optional) (default to false)

const { status, data } = await apiInstance.bulkEdit(
    objectName,
    bulkEditRecordsRequest,
    ignoreErrors
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bulkEditRecordsRequest** | **BulkEditRecordsRequest**|  | |
| **objectName** | [**string**] |  | defaults to undefined|
| **ignoreErrors** | [**boolean**] | If \&#39;true\&#39;, allows each save to proceed while ignoring certain non-critical validation errors, when supported. | (optional) defaults to false|


### Return type

**BulkEditRecordsResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | All records saved successfully |  -  |
|**200** | Partial success with per-record validation errors |  -  |
|**400** | Invalid request |  -  |
|**401** | Authentication is required or the token is invalid. |  -  |
|**403** | The caller is missing a required role or scope. |  -  |
|**404** | The requested resource was not found. |  -  |
|**500** | An internal server error occurred. |  -  |

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
let parse: 'DB' | 'HUMAN_READABLE' | 'STRUCTURED'; //Value presentation mode: omit/false/db for raw stored values; true/human_readable for display strings; structured for rich JSON (e.g. PropertyOption arrays, related records). (optional) (default to undefined)
let ignoreErrors: boolean; //If \'true\', allows the creation to proceed while ignoring certain non-critical validation errors, when supported. (optional) (default to false)
let recordReturnFormat: 'LEGACY' | 'USER_FRIENDLY' | 'EXPANDED'; //Format of the record to return. LEGACY, USER_FRIENDLY, EXPANDED. (optional) (default to 'LEGACY')

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
| **parse** | [**&#39;DB&#39; | &#39;HUMAN_READABLE&#39; | &#39;STRUCTURED&#39;**]**Array<&#39;DB&#39; &#124; &#39;HUMAN_READABLE&#39; &#124; &#39;STRUCTURED&#39;>** | Value presentation mode: omit/false/db for raw stored values; true/human_readable for display strings; structured for rich JSON (e.g. PropertyOption arrays, related records). | (optional) defaults to undefined|
| **ignoreErrors** | [**boolean**] | If \&#39;true\&#39;, allows the creation to proceed while ignoring certain non-critical validation errors, when supported. | (optional) defaults to false|
| **recordReturnFormat** | [**&#39;LEGACY&#39; | &#39;USER_FRIENDLY&#39; | &#39;EXPANDED&#39;**]**Array<&#39;LEGACY&#39; &#124; &#39;USER_FRIENDLY&#39; &#124; &#39;EXPANDED&#39;>** | Format of the record to return. LEGACY, USER_FRIENDLY, EXPANDED. | (optional) defaults to 'LEGACY'|


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
|**401** | Authentication is required or the token is invalid. |  -  |
|**403** | The caller is missing a required role or scope. |  -  |
|**404** | The requested resource was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createOrUpdate**
> UpdateResponse createOrUpdate(recordDTO)

Creates a new record or updates an existing one. Match order: body/path uuid already in the graph, then unique property values. If a matching record exists, it is updated; otherwise, a new record is created. Returns a CreateResponse or UpdateResponse with the record details. Validation: Record properties are validated according to the property rules defined for the object. Each property may have validation rules such as required, type constraints, character limits, uniqueness, etc.

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
let recordDTO: RecordDTO; //Record data to create or update. Top-level uuid updates that record when it already exists.
let parse: 'DB' | 'HUMAN_READABLE' | 'STRUCTURED'; //Value presentation mode: omit/false/db for raw stored values; true/human_readable for display strings; structured for rich JSON (e.g. PropertyOption arrays, related records). (optional) (default to undefined)
let ignoreErrors: boolean; // (optional) (default to false)
let recordReturnFormat: 'LEGACY' | 'USER_FRIENDLY' | 'EXPANDED'; //Format of the record to return. LEGACY, USER_FRIENDLY, EXPANDED. (optional) (default to 'LEGACY')

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
| **recordDTO** | **RecordDTO**| Record data to create or update. Top-level uuid updates that record when it already exists. | |
| **objectName** | [**string**] |  | defaults to undefined|
| **parse** | [**&#39;DB&#39; | &#39;HUMAN_READABLE&#39; | &#39;STRUCTURED&#39;**]**Array<&#39;DB&#39; &#124; &#39;HUMAN_READABLE&#39; &#124; &#39;STRUCTURED&#39;>** | Value presentation mode: omit/false/db for raw stored values; true/human_readable for display strings; structured for rich JSON (e.g. PropertyOption arrays, related records). | (optional) defaults to undefined|
| **ignoreErrors** | [**boolean**] |  | (optional) defaults to false|
| **recordReturnFormat** | [**&#39;LEGACY&#39; | &#39;USER_FRIENDLY&#39; | &#39;EXPANDED&#39;**]**Array<&#39;LEGACY&#39; &#124; &#39;USER_FRIENDLY&#39; &#124; &#39;EXPANDED&#39;>** | Format of the record to return. LEGACY, USER_FRIENDLY, EXPANDED. | (optional) defaults to 'LEGACY'|


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
|**201** | Record created successfully |  -  |
|**400** | Invalid input data |  -  |
|**500** | Internal server error |  -  |
|**401** | Authentication is required or the token is invalid. |  -  |
|**403** | The caller is missing a required role or scope. |  -  |
|**404** | The requested resource was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createRelation**
> SuccessResponseString createRelation()

Creates a relation between two records identified by their UUIDs using the provided relation name.

### Example

```typescript
import {
    RecordsApi,
    Configuration,
    RelationEdgeRequestDTO
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new RecordsApi(configuration);

let fromUuid: string; // (default to undefined)
let relationName: string; // (default to undefined)
let toUuid: string; // (default to undefined)
let primary: object; //When \'true\', marks the created relation as primary. Defaults to \'false\'. (optional) (default to undefined)
let relationEdgeRequestDTO: RelationEdgeRequestDTO; // (optional)

const { status, data } = await apiInstance.createRelation(
    fromUuid,
    relationName,
    toUuid,
    primary,
    relationEdgeRequestDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **relationEdgeRequestDTO** | **RelationEdgeRequestDTO**|  | |
| **fromUuid** | [**string**] |  | defaults to undefined|
| **relationName** | [**string**] |  | defaults to undefined|
| **toUuid** | [**string**] |  | defaults to undefined|
| **primary** | **object** | When \&#39;true\&#39;, marks the created relation as primary. Defaults to \&#39;false\&#39;. | (optional) defaults to undefined|


### Return type

**SuccessResponseString**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Relation created successfully |  -  |
|**404** | One or more entities not found |  -  |
|**500** | Internal server error |  -  |
|**401** | Authentication is required or the token is invalid. |  -  |
|**403** | The caller is missing a required role or scope. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteRelation**
> SuccessResponseString deleteRelation()

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

**SuccessResponseString**

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
|**401** | Authentication is required or the token is invalid. |  -  |
|**403** | The caller is missing a required role or scope. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **extend**
> SuccessResponseObject extend(extendRecordRequest)

Extends a record identified by its UUID to one or more objects. You can use this to move a record or add it to another object so it\'ll be visible in the new object.Returns a SuccessResponse confirming that the record has been extended.

### Example

```typescript
import {
    RecordsApi,
    Configuration,
    ExtendRecordRequest
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new RecordsApi(configuration);

let uuid: string; // (default to undefined)
let extendRecordRequest: ExtendRecordRequest; //
let recordReturnFormat: 'LEGACY' | 'USER_FRIENDLY' | 'EXPANDED'; //Format of the record to return. LEGACY, USER_FRIENDLY, EXPANDED. (optional) (default to 'LEGACY')
let parse: 'DB' | 'HUMAN_READABLE' | 'STRUCTURED'; //Value presentation mode: omit/false/db for raw stored values; true/human_readable for display strings; structured for rich JSON (e.g. PropertyOption arrays, related records). (optional) (default to undefined)

const { status, data } = await apiInstance.extend(
    uuid,
    extendRecordRequest,
    recordReturnFormat,
    parse
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **extendRecordRequest** | **ExtendRecordRequest**|  | |
| **uuid** | [**string**] |  | defaults to undefined|
| **recordReturnFormat** | [**&#39;LEGACY&#39; | &#39;USER_FRIENDLY&#39; | &#39;EXPANDED&#39;**]**Array<&#39;LEGACY&#39; &#124; &#39;USER_FRIENDLY&#39; &#124; &#39;EXPANDED&#39;>** | Format of the record to return. LEGACY, USER_FRIENDLY, EXPANDED. | (optional) defaults to 'LEGACY'|
| **parse** | [**&#39;DB&#39; | &#39;HUMAN_READABLE&#39; | &#39;STRUCTURED&#39;**]**Array<&#39;DB&#39; &#124; &#39;HUMAN_READABLE&#39; &#124; &#39;STRUCTURED&#39;>** | Value presentation mode: omit/false/db for raw stored values; true/human_readable for display strings; structured for rich JSON (e.g. PropertyOption arrays, related records). | (optional) defaults to undefined|


### Return type

**SuccessResponseObject**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Record extended successfully |  -  |
|**404** | Record not found |  -  |
|**500** | Internal server error |  -  |
|**401** | Authentication is required or the token is invalid. |  -  |
|**403** | The caller is missing a required role or scope. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **index**
> PaginationResponseObject index(recordPaginationRequest)

Retrieves a paginated list of records. If a preview type is specified in the request, returns records formatted for preview; otherwise, returns full record details.

### Example

```typescript
import {
    RecordsApi,
    Configuration,
    RecordPaginationRequest
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new RecordsApi(configuration);

let recordPaginationRequest: RecordPaginationRequest; //Pagination request for records
let parse: 'DB' | 'HUMAN_READABLE' | 'STRUCTURED'; //Value presentation mode: omit/false/db for raw stored values; true/human_readable for display strings; structured for rich JSON (e.g. PropertyOption arrays, related records). (optional) (default to undefined)
let archived: boolean; //When \'true\', archived records are returned instead of active records. Defaults to \'false\'. (optional) (default to false)
let relatedRecordUuid: string; //UUID of a record used for relation-aware filtering. If supplied and the request body contains a filter, that filter will be smartened based on this related record. If no filter is supplied, a default filter will be applied that returns all records related in any way (any relation) to this record. (optional) (default to undefined)
let recordReturnFormat: 'LEGACY' | 'USER_FRIENDLY' | 'EXPANDED'; //Format of the records to return. LEGACY, USER_FRIENDLY, EXPANDED. (optional) (default to 'LEGACY')

const { status, data } = await apiInstance.index(
    recordPaginationRequest,
    parse,
    archived,
    relatedRecordUuid,
    recordReturnFormat
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **recordPaginationRequest** | **RecordPaginationRequest**| Pagination request for records | |
| **parse** | [**&#39;DB&#39; | &#39;HUMAN_READABLE&#39; | &#39;STRUCTURED&#39;**]**Array<&#39;DB&#39; &#124; &#39;HUMAN_READABLE&#39; &#124; &#39;STRUCTURED&#39;>** | Value presentation mode: omit/false/db for raw stored values; true/human_readable for display strings; structured for rich JSON (e.g. PropertyOption arrays, related records). | (optional) defaults to undefined|
| **archived** | [**boolean**] | When \&#39;true\&#39;, archived records are returned instead of active records. Defaults to \&#39;false\&#39;. | (optional) defaults to false|
| **relatedRecordUuid** | [**string**] | UUID of a record used for relation-aware filtering. If supplied and the request body contains a filter, that filter will be smartened based on this related record. If no filter is supplied, a default filter will be applied that returns all records related in any way (any relation) to this record. | (optional) defaults to undefined|
| **recordReturnFormat** | [**&#39;LEGACY&#39; | &#39;USER_FRIENDLY&#39; | &#39;EXPANDED&#39;**]**Array<&#39;LEGACY&#39; &#124; &#39;USER_FRIENDLY&#39; &#124; &#39;EXPANDED&#39;>** | Format of the records to return. LEGACY, USER_FRIENDLY, EXPANDED. | (optional) defaults to 'LEGACY'|


### Return type

**PaginationResponseObject**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Records fetched successfully. data items are preview objects when preview is set, otherwise record payloads shaped by recordReturnFormat. |  -  |
|**400** | Invalid pagination request |  -  |
|**500** | Internal server error |  -  |
|**401** | Authentication is required or the token is invalid. |  -  |
|**403** | The caller is missing a required role or scope. |  -  |
|**404** | The requested resource was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **indexFlow**
> SuccessResponseFlow indexFlow(flowPaginationRequest)

Retrieves a list of records formatted for flow view based on a specific property. If the property is not provided in the request, defaults to the \'status\' property of the main object. Returns a SuccessResponse containing the flow records.

### Example

```typescript
import {
    RecordsApi,
    Configuration,
    FlowPaginationRequest
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new RecordsApi(configuration);

let flowPaginationRequest: FlowPaginationRequest; //Pagination request for flow view
let relatedRecordUuid: string; //UUID of a record used for relation-aware filtering. If supplied and the request body contains a filter, that filter will be smartened based on this related record. If no filter is supplied, a default filter will be applied that returns all records related in any way (any relation) to this record. (optional) (default to undefined)
let parse: 'DB' | 'HUMAN_READABLE' | 'STRUCTURED'; //Value presentation mode: omit/false/db for raw stored values; true/human_readable for display strings; structured for rich JSON (e.g. PropertyOption arrays, related records). (optional) (default to undefined)

const { status, data } = await apiInstance.indexFlow(
    flowPaginationRequest,
    relatedRecordUuid,
    parse
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **flowPaginationRequest** | **FlowPaginationRequest**| Pagination request for flow view | |
| **relatedRecordUuid** | [**string**] | UUID of a record used for relation-aware filtering. If supplied and the request body contains a filter, that filter will be smartened based on this related record. If no filter is supplied, a default filter will be applied that returns all records related in any way (any relation) to this record. | (optional) defaults to undefined|
| **parse** | [**&#39;DB&#39; | &#39;HUMAN_READABLE&#39; | &#39;STRUCTURED&#39;**]**Array<&#39;DB&#39; &#124; &#39;HUMAN_READABLE&#39; &#124; &#39;STRUCTURED&#39;>** | Value presentation mode: omit/false/db for raw stored values; true/human_readable for display strings; structured for rich JSON (e.g. PropertyOption arrays, related records). | (optional) defaults to undefined|


### Return type

**SuccessResponseFlow**

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
|**401** | Authentication is required or the token is invalid. |  -  |
|**403** | The caller is missing a required role or scope. |  -  |
|**404** | The requested resource was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **indexPage**
> PaginationResponseObject indexPage(recordPaginationRequest)

Retrieves a paginated list of webpages for page view. The search query is temporarily removed from the pagination request and passed separately. Returns a PaginationResponse containing WebpageDTO objects.

### Example

```typescript
import {
    RecordsApi,
    Configuration,
    RecordPaginationRequest
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new RecordsApi(configuration);

let recordPaginationRequest: RecordPaginationRequest; //Pagination request for page view
let environment: string; //Target environment for resolving webpages (for example \'staging\' or \'production\'). Defaults to \'staging\'. (optional) (default to 'staging')
let relatedRecordUuid: string; //UUID of a record used for relation-aware filtering. If supplied and the request body contains a filter, that filter will be smartened based on this related record. If no filter is supplied, a default filter will be applied that returns all records related in any way (any relation) to this record. (optional) (default to undefined)
let fields: string; //Comma-separated WebpageDTO fields to return (for example: uuid,title). When omitted, the full WebpageDTO is returned. (optional) (default to undefined)
let publishedOnly: boolean; //When true, only returns pages published in the selected environment. (optional) (default to false)
let excludeTemplateRelated: boolean; //When true, excludes pages whose options mark them as related to a template. (optional) (default to false)

const { status, data } = await apiInstance.indexPage(
    recordPaginationRequest,
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
| **recordPaginationRequest** | **RecordPaginationRequest**| Pagination request for page view | |
| **environment** | [**string**] | Target environment for resolving webpages (for example \&#39;staging\&#39; or \&#39;production\&#39;). Defaults to \&#39;staging\&#39;. | (optional) defaults to 'staging'|
| **relatedRecordUuid** | [**string**] | UUID of a record used for relation-aware filtering. If supplied and the request body contains a filter, that filter will be smartened based on this related record. If no filter is supplied, a default filter will be applied that returns all records related in any way (any relation) to this record. | (optional) defaults to undefined|
| **fields** | [**string**] | Comma-separated WebpageDTO fields to return (for example: uuid,title). When omitted, the full WebpageDTO is returned. | (optional) defaults to undefined|
| **publishedOnly** | [**boolean**] | When true, only returns pages published in the selected environment. | (optional) defaults to false|
| **excludeTemplateRelated** | [**boolean**] | When true, excludes pages whose options mark them as related to a template. | (optional) defaults to false|


### Return type

**PaginationResponseObject**

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
|**401** | Authentication is required or the token is invalid. |  -  |
|**403** | The caller is missing a required role or scope. |  -  |
|**404** | The requested resource was not found. |  -  |
|**500** | An internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **indexTable**
> SuccessResponseTable indexTable(recordPaginationRequest)

Retrieves records formatted for table display. Returns a PaginationResponse containing records formatted for table view.

### Example

```typescript
import {
    RecordsApi,
    Configuration,
    RecordPaginationRequest
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new RecordsApi(configuration);

let recordPaginationRequest: RecordPaginationRequest; //Pagination request for table view
let relatedRecordUuid: string; //UUID of a record used for relation-aware filtering. If supplied and the request body contains a filter, that filter will be smartened based on this related record. If no filter is supplied, a default filter will be applied that returns all records related in any way (any relation) to this record. (optional) (default to undefined)

const { status, data } = await apiInstance.indexTable(
    recordPaginationRequest,
    relatedRecordUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **recordPaginationRequest** | **RecordPaginationRequest**| Pagination request for table view | |
| **relatedRecordUuid** | [**string**] | UUID of a record used for relation-aware filtering. If supplied and the request body contains a filter, that filter will be smartened based on this related record. If no filter is supplied, a default filter will be applied that returns all records related in any way (any relation) to this record. | (optional) defaults to undefined|


### Return type

**SuccessResponseTable**

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
|**401** | Authentication is required or the token is invalid. |  -  |
|**403** | The caller is missing a required role or scope. |  -  |
|**404** | The requested resource was not found. |  -  |
|**500** | An internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **preview**
> ShowResponsePreviewDTO preview()

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
let parse: 'DB' | 'HUMAN_READABLE' | 'STRUCTURED'; //Value presentation mode: omit/false/db for raw stored values; true/human_readable for display strings; structured for rich JSON (e.g. PropertyOption arrays, related records). (optional) (default to undefined)

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
| **parse** | [**&#39;DB&#39; | &#39;HUMAN_READABLE&#39; | &#39;STRUCTURED&#39;**]**Array<&#39;DB&#39; &#124; &#39;HUMAN_READABLE&#39; &#124; &#39;STRUCTURED&#39;>** | Value presentation mode: omit/false/db for raw stored values; true/human_readable for display strings; structured for rich JSON (e.g. PropertyOption arrays, related records). | (optional) defaults to undefined|


### Return type

**ShowResponsePreviewDTO**

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
|**401** | Authentication is required or the token is invalid. |  -  |
|**403** | The caller is missing a required role or scope. |  -  |
|**500** | An internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **query**
> AdvancedRecordQueryResponse query(advancedRecordQueryRequest)

Executes a two-pass GraphRAG query using natural language or a declarative plan. Returns records with scores and graph evidence.

### Example

```typescript
import {
    RecordsApi,
    Configuration,
    AdvancedRecordQueryRequest
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new RecordsApi(configuration);

let advancedRecordQueryRequest: AdvancedRecordQueryRequest; //

const { status, data } = await apiInstance.query(
    advancedRecordQueryRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **advancedRecordQueryRequest** | **AdvancedRecordQueryRequest**|  | |


### Return type

**AdvancedRecordQueryResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Query completed successfully |  -  |
|**400** | Invalid query request |  -  |
|**401** | Authentication is required or the token is invalid. |  -  |
|**403** | The caller is missing a required role or scope. |  -  |
|**404** | The requested resource was not found. |  -  |
|**500** | An internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **restore**
> SuccessResponseString restore()

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

**SuccessResponseString**

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
|**401** | Authentication is required or the token is invalid. |  -  |
|**403** | The caller is missing a required role or scope. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **search**
> PaginationResponseObject search(searchRequest)

Performs a search for records based on the specified criteria in the request body. Returns a PaginationResponse containing matching records.

### Example

```typescript
import {
    RecordsApi,
    Configuration,
    SearchRequest
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new RecordsApi(configuration);

let searchRequest: SearchRequest; //Search criteria
let archived: boolean; //When set to \'true\', includes soft-deleted records in the search results. (optional) (default to false)
let parse: 'DB' | 'HUMAN_READABLE' | 'STRUCTURED'; //Value presentation mode: omit/false/db for raw stored values; true/human_readable for display strings; structured for rich JSON (e.g. PropertyOption arrays, related records). (optional) (default to undefined)
let recordReturnFormat: 'LEGACY' | 'USER_FRIENDLY' | 'EXPANDED'; //Format of the records to return. LEGACY, USER_FRIENDLY, EXPANDED. (optional) (default to 'LEGACY')

const { status, data } = await apiInstance.search(
    searchRequest,
    archived,
    parse,
    recordReturnFormat
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **searchRequest** | **SearchRequest**| Search criteria | |
| **archived** | [**boolean**] | When set to \&#39;true\&#39;, includes soft-deleted records in the search results. | (optional) defaults to false|
| **parse** | [**&#39;DB&#39; | &#39;HUMAN_READABLE&#39; | &#39;STRUCTURED&#39;**]**Array<&#39;DB&#39; &#124; &#39;HUMAN_READABLE&#39; &#124; &#39;STRUCTURED&#39;>** | Value presentation mode: omit/false/db for raw stored values; true/human_readable for display strings; structured for rich JSON (e.g. PropertyOption arrays, related records). | (optional) defaults to undefined|
| **recordReturnFormat** | [**&#39;LEGACY&#39; | &#39;USER_FRIENDLY&#39; | &#39;EXPANDED&#39;**]**Array<&#39;LEGACY&#39; &#124; &#39;USER_FRIENDLY&#39; &#124; &#39;EXPANDED&#39;>** | Format of the records to return. LEGACY, USER_FRIENDLY, EXPANDED. | (optional) defaults to 'LEGACY'|


### Return type

**PaginationResponseObject**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Search completed successfully. data items are preview objects when preview is set, otherwise record payloads shaped by recordReturnFormat. |  -  |
|**400** | Invalid search parameters |  -  |
|**500** | Internal server error |  -  |
|**401** | Authentication is required or the token is invalid. |  -  |
|**403** | The caller is missing a required role or scope. |  -  |
|**404** | The requested resource was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **searchCrossObject**
> PaginationResponsePreviewDTO searchCrossObject(crossObjectRecordSearchRequest)

Searches records across multiple object types in one request. Use fromObjectUuid + relationName to limit to relation target objects (e.g. event attendees), or objectUuids for an explicit list, or omit both to search all company objects (capped). Returns preview-shaped results suitable for relation pickers.

### Example

```typescript
import {
    RecordsApi,
    Configuration,
    CrossObjectRecordSearchRequest
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new RecordsApi(configuration);

let crossObjectRecordSearchRequest: CrossObjectRecordSearchRequest; //
let archived: boolean; //When true, includes archived records. (optional) (default to false)
let parse: 'DB' | 'HUMAN_READABLE' | 'STRUCTURED'; //Parse property values for display. (optional) (default to undefined)

const { status, data } = await apiInstance.searchCrossObject(
    crossObjectRecordSearchRequest,
    archived,
    parse
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **crossObjectRecordSearchRequest** | **CrossObjectRecordSearchRequest**|  | |
| **archived** | [**boolean**] | When true, includes archived records. | (optional) defaults to false|
| **parse** | [**&#39;DB&#39; | &#39;HUMAN_READABLE&#39; | &#39;STRUCTURED&#39;**]**Array<&#39;DB&#39; &#124; &#39;HUMAN_READABLE&#39; &#124; &#39;STRUCTURED&#39;>** | Parse property values for display. | (optional) defaults to undefined|


### Return type

**PaginationResponsePreviewDTO**

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
|**401** | Authentication is required or the token is invalid. |  -  |
|**403** | The caller is missing a required role or scope. |  -  |
|**404** | The requested resource was not found. |  -  |
|**500** | An internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **show**
> ShowResponseObject show()

Retrieves detailed information about a record by its UUID. Returns a ShowResponse containing the record details. Prefer GET /{objectName}/{uuid} when the object context is known.

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
let recordReturnFormat: 'LEGACY' | 'USER_FRIENDLY' | 'EXPANDED'; //Format of the record to return. LEGACY, USER_FRIENDLY, EXPANDED. (optional) (default to 'LEGACY')
let parse: 'DB' | 'HUMAN_READABLE' | 'STRUCTURED'; //Value presentation mode: omit/false/db for raw stored values; true/human_readable for display strings; structured for rich JSON (e.g. PropertyOption arrays, related records). (optional) (default to undefined)
let fields: string; //Comma-separated property names to include (for example: name,status). When omitted, all properties are returned. (optional) (default to undefined)

const { status, data } = await apiInstance.show(
    uuid,
    object,
    recordReturnFormat,
    parse,
    fields
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uuid** | [**string**] |  | defaults to undefined|
| **object** | [**string**] | Optional object name to resolve the record in a specific object context. | (optional) defaults to undefined|
| **recordReturnFormat** | [**&#39;LEGACY&#39; | &#39;USER_FRIENDLY&#39; | &#39;EXPANDED&#39;**]**Array<&#39;LEGACY&#39; &#124; &#39;USER_FRIENDLY&#39; &#124; &#39;EXPANDED&#39;>** | Format of the record to return. LEGACY, USER_FRIENDLY, EXPANDED. | (optional) defaults to 'LEGACY'|
| **parse** | [**&#39;DB&#39; | &#39;HUMAN_READABLE&#39; | &#39;STRUCTURED&#39;**]**Array<&#39;DB&#39; &#124; &#39;HUMAN_READABLE&#39; &#124; &#39;STRUCTURED&#39;>** | Value presentation mode: omit/false/db for raw stored values; true/human_readable for display strings; structured for rich JSON (e.g. PropertyOption arrays, related records). | (optional) defaults to undefined|
| **fields** | [**string**] | Comma-separated property names to include (for example: name,status). When omitted, all properties are returned. | (optional) defaults to undefined|


### Return type

**ShowResponseObject**

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
|**401** | Authentication is required or the token is invalid. |  -  |
|**403** | The caller is missing a required role or scope. |  -  |
|**500** | An internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **showByObject**
> ShowResponseObject showByObject()

Retrieves a record by object name and UUID. Same response as GET /{uuid}?object={objectName}.

### Example

```typescript
import {
    RecordsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new RecordsApi(configuration);

let objectName: string; // (default to undefined)
let uuid: string; // (default to undefined)
let recordReturnFormat: 'LEGACY' | 'USER_FRIENDLY' | 'EXPANDED'; //Format of the record to return. LEGACY, USER_FRIENDLY, EXPANDED. (optional) (default to 'LEGACY')
let parse: 'DB' | 'HUMAN_READABLE' | 'STRUCTURED'; //Value presentation mode: omit/false/db for raw stored values; true/human_readable for display strings; structured for rich JSON (e.g. PropertyOption arrays, related records). (optional) (default to undefined)

const { status, data } = await apiInstance.showByObject(
    objectName,
    uuid,
    recordReturnFormat,
    parse
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **objectName** | [**string**] |  | defaults to undefined|
| **uuid** | [**string**] |  | defaults to undefined|
| **recordReturnFormat** | [**&#39;LEGACY&#39; | &#39;USER_FRIENDLY&#39; | &#39;EXPANDED&#39;**]**Array<&#39;LEGACY&#39; &#124; &#39;USER_FRIENDLY&#39; &#124; &#39;EXPANDED&#39;>** | Format of the record to return. LEGACY, USER_FRIENDLY, EXPANDED. | (optional) defaults to 'LEGACY'|
| **parse** | [**&#39;DB&#39; | &#39;HUMAN_READABLE&#39; | &#39;STRUCTURED&#39;**]**Array<&#39;DB&#39; &#124; &#39;HUMAN_READABLE&#39; &#124; &#39;STRUCTURED&#39;>** | Value presentation mode: omit/false/db for raw stored values; true/human_readable for display strings; structured for rich JSON (e.g. PropertyOption arrays, related records). | (optional) defaults to undefined|


### Return type

**ShowResponseObject**

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
|**401** | Authentication is required or the token is invalid. |  -  |
|**403** | The caller is missing a required role or scope. |  -  |
|**500** | An internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **suggestAnalyticsWidgets**
> SuccessResponseSuggestAnalyticsWidgetsResponse suggestAnalyticsWidgets(suggestAnalyticsWidgetsRequest)

Uses structured OpenAI output plus schema validation to propose dashboard charts for an object. Returns an empty list when AI is unavailable.

### Example

```typescript
import {
    RecordsApi,
    Configuration,
    SuggestAnalyticsWidgetsRequest
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new RecordsApi(configuration);

let suggestAnalyticsWidgetsRequest: SuggestAnalyticsWidgetsRequest; //

const { status, data } = await apiInstance.suggestAnalyticsWidgets(
    suggestAnalyticsWidgetsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **suggestAnalyticsWidgetsRequest** | **SuggestAnalyticsWidgetsRequest**|  | |


### Return type

**SuccessResponseSuggestAnalyticsWidgetsResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Suggestions generated (may be empty) |  -  |
|**400** | Invalid request |  -  |
|**404** | Object not found |  -  |
|**401** | Authentication is required or the token is invalid. |  -  |
|**403** | The caller is missing a required role or scope. |  -  |
|**500** | An internal server error occurred. |  -  |

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
let parse: 'DB' | 'HUMAN_READABLE' | 'STRUCTURED'; //Value presentation mode: omit/false/db for raw stored values; true/human_readable for display strings; structured for rich JSON (e.g. PropertyOption arrays, related records). (optional) (default to undefined)
let ignoreErrors: boolean; //If \'true\', allows the update to proceed while ignoring certain non-critical validation errors, when supported. (optional) (default to false)
let recordReturnFormat: 'LEGACY' | 'USER_FRIENDLY' | 'EXPANDED'; //Format of the record to return. LEGACY, USER_FRIENDLY, EXPANDED. (optional) (default to 'LEGACY')

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
| **parse** | [**&#39;DB&#39; | &#39;HUMAN_READABLE&#39; | &#39;STRUCTURED&#39;**]**Array<&#39;DB&#39; &#124; &#39;HUMAN_READABLE&#39; &#124; &#39;STRUCTURED&#39;>** | Value presentation mode: omit/false/db for raw stored values; true/human_readable for display strings; structured for rich JSON (e.g. PropertyOption arrays, related records). | (optional) defaults to undefined|
| **ignoreErrors** | [**boolean**] | If \&#39;true\&#39;, allows the update to proceed while ignoring certain non-critical validation errors, when supported. | (optional) defaults to false|
| **recordReturnFormat** | [**&#39;LEGACY&#39; | &#39;USER_FRIENDLY&#39; | &#39;EXPANDED&#39;**]**Array<&#39;LEGACY&#39; &#124; &#39;USER_FRIENDLY&#39; &#124; &#39;EXPANDED&#39;>** | Format of the record to return. LEGACY, USER_FRIENDLY, EXPANDED. | (optional) defaults to 'LEGACY'|


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
|**401** | Authentication is required or the token is invalid. |  -  |
|**403** | The caller is missing a required role or scope. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateByUuid**
> UpdateResponse updateByUuid(recordDTO)

Updates a record identified by UUID. Optional object query param resolves the object context (same as GET /{uuid}?object=...). When omitted, the record\'s current/primary object is used. Prefer PUT /{objectName}/{uuid} when the object context is known.

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
let recordDTO: RecordDTO; //
let object: string; //Optional object name to resolve the record in a specific object context. (optional) (default to undefined)
let parse: 'DB' | 'HUMAN_READABLE' | 'STRUCTURED'; //Value presentation mode: omit/false/db for raw stored values; true/human_readable for display strings; structured for rich JSON (e.g. PropertyOption arrays, related records). (optional) (default to undefined)
let ignoreErrors: boolean; //If \'true\', allows the update to proceed while ignoring certain non-critical validation errors, when supported. (optional) (default to false)
let recordReturnFormat: 'LEGACY' | 'USER_FRIENDLY' | 'EXPANDED'; //Format of the record to return. LEGACY, USER_FRIENDLY, EXPANDED. (optional) (default to 'LEGACY')

const { status, data } = await apiInstance.updateByUuid(
    uuid,
    recordDTO,
    object,
    parse,
    ignoreErrors,
    recordReturnFormat
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **recordDTO** | **RecordDTO**|  | |
| **uuid** | [**string**] |  | defaults to undefined|
| **object** | [**string**] | Optional object name to resolve the record in a specific object context. | (optional) defaults to undefined|
| **parse** | [**&#39;DB&#39; | &#39;HUMAN_READABLE&#39; | &#39;STRUCTURED&#39;**]**Array<&#39;DB&#39; &#124; &#39;HUMAN_READABLE&#39; &#124; &#39;STRUCTURED&#39;>** | Value presentation mode: omit/false/db for raw stored values; true/human_readable for display strings; structured for rich JSON (e.g. PropertyOption arrays, related records). | (optional) defaults to undefined|
| **ignoreErrors** | [**boolean**] | If \&#39;true\&#39;, allows the update to proceed while ignoring certain non-critical validation errors, when supported. | (optional) defaults to false|
| **recordReturnFormat** | [**&#39;LEGACY&#39; | &#39;USER_FRIENDLY&#39; | &#39;EXPANDED&#39;**]**Array<&#39;LEGACY&#39; &#124; &#39;USER_FRIENDLY&#39; &#124; &#39;EXPANDED&#39;>** | Format of the record to return. LEGACY, USER_FRIENDLY, EXPANDED. | (optional) defaults to 'LEGACY'|


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
|**401** | Authentication is required or the token is invalid. |  -  |
|**403** | The caller is missing a required role or scope. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateRelationEdge**
> SuccessResponseString updateRelationEdge(relationEdgeRequestDTO)

Patches values stored on an existing relation edge. Only keys present in edgeProperties are written; a null value clears a key.

### Example

```typescript
import {
    RecordsApi,
    Configuration,
    RelationEdgeRequestDTO
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new RecordsApi(configuration);

let fromUuid: string; // (default to undefined)
let relationName: string; // (default to undefined)
let toUuid: string; // (default to undefined)
let relationEdgeRequestDTO: RelationEdgeRequestDTO; //

const { status, data } = await apiInstance.updateRelationEdge(
    fromUuid,
    relationName,
    toUuid,
    relationEdgeRequestDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **relationEdgeRequestDTO** | **RelationEdgeRequestDTO**|  | |
| **fromUuid** | [**string**] |  | defaults to undefined|
| **relationName** | [**string**] |  | defaults to undefined|
| **toUuid** | [**string**] |  | defaults to undefined|


### Return type

**SuccessResponseString**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Relation updated successfully |  -  |
|**400** | Unknown or invalid edge property |  -  |
|**404** | One or more entities not found |  -  |
|**401** | Authentication is required or the token is invalid. |  -  |
|**403** | The caller is missing a required role or scope. |  -  |
|**500** | An internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

