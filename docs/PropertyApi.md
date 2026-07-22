# PropertyApi

All URIs are relative to *https://v2.api.caraer.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**copyPropertiesToObject**](#copypropertiestoobject) | **POST** /api/v2/objects/{objectUuid}/properties/copy | Copy properties to object|
|[**createProperty**](#createproperty) | **POST** /api/v2/objects/{objectUuid}/properties/ | Create a new property|
|[**deleteProperty**](#deleteproperty) | **DELETE** /api/v2/objects/{objectUuid}/properties/{propertyUuid} | Delete a property|
|[**getCalculationTypes**](#getcalculationtypes) | **GET** /api/v2/objects/{objectUuid}/properties/calculation-types | Retrieve allowed calculation types per property type|
|[**getFormats**](#getformats) | **GET** /api/v2/objects/{objectUuid}/properties/formats | Retrieve property formats|
|[**getProperties**](#getproperties) | **POST** /api/v2/objects/{objectUuid}/properties/index | Fetch paginated properties|
|[**getProperty**](#getproperty) | **GET** /api/v2/objects/{objectUuid}/properties/{propertyUuid} | Fetch a specific property|
|[**getPropertyCalculationTypes**](#getpropertycalculationtypes) | **GET** /api/v2/objects/{objectUuid}/properties/{propertyUuid}/calculation-types | Retrieve allowed calculation types for a property|
|[**permanentlyDeleteArchivedProperty**](#permanentlydeletearchivedproperty) | **DELETE** /api/v2/objects/{objectUuid}/properties/{propertyUuid}/permanent | Permanently remove archived property|
|[**pinProperty**](#pinproperty) | **PUT** /api/v2/objects/{objectUuid}/properties/{propertyUuid}/pin | Pin a property|
|[**restoreProperty**](#restoreproperty) | **POST** /api/v2/objects/{objectUuid}/properties/{propertyUuid}/restore | Restore a soft-deleted property|
|[**unpinProperty**](#unpinproperty) | **DELETE** /api/v2/objects/{objectUuid}/properties/{propertyUuid}/pin | Unpin a property|
|[**updateIndices2**](#updateindices2) | **PUT** /api/v2/objects/{objectUuid}/properties/updateIndices | Update property indices|
|[**updateProperty**](#updateproperty) | **PUT** /api/v2/objects/{objectUuid}/properties/{propertyUuid} | Update an existing property|

# **copyPropertiesToObject**
> SuccessResponse copyPropertiesToObject(copyPropertiesToObjectRequest)

Attaches existing properties from other objects to the target object in a single request. Archived links on the target object are restored. Properties already active on the target are rejected.

### Example

```typescript
import {
    PropertyApi,
    Configuration,
    CopyPropertiesToObjectRequest
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new PropertyApi(configuration);

let objectUuid: string; // (default to undefined)
let copyPropertiesToObjectRequest: CopyPropertiesToObjectRequest; //

const { status, data } = await apiInstance.copyPropertiesToObject(
    objectUuid,
    copyPropertiesToObjectRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **copyPropertiesToObjectRequest** | **CopyPropertiesToObjectRequest**|  | |
| **objectUuid** | [**string**] |  | defaults to undefined|


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
|**200** | Properties copied successfully |  -  |
|**400** | Invalid input data |  -  |
|**404** | Object or property not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createProperty**
> CreateResponse createProperty(savePropertyDTO)

Creates a new property for a specific object using the provided property details. The SavePropertyDTO must include necessary details, and the object association is determined by the objectUuid path variable. Returns a CreateResponse containing the newly created property as a PropertyDTO. Validation rules: name (required, must be unique, must be lowercase, must match name pattern (lowercase letters, numbers, underscores)), label (required), description (maximum 255 characters), type (required, must be one of valid PropertyTypes, cannot be changed after creation), format (required, must be one of valid PropertyFormats, cannot be changed after creation), rules (required, must be an array of string).

### Example

```typescript
import {
    PropertyApi,
    Configuration,
    SavePropertyDTO
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new PropertyApi(configuration);

let objectUuid: string; // (default to undefined)
let savePropertyDTO: SavePropertyDTO; //Property details for creation

const { status, data } = await apiInstance.createProperty(
    objectUuid,
    savePropertyDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **savePropertyDTO** | **SavePropertyDTO**| Property details for creation | |
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
|**201** | Property created successfully |  -  |
|**400** | Invalid input data |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteProperty**
> DeleteResponse deleteProperty()

Deletes a property from the specified object, identified by the property UUID. Returns a DeleteResponse containing the deleted property\'s details.

### Example

```typescript
import {
    PropertyApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new PropertyApi(configuration);

let objectUuid: string; // (default to undefined)
let propertyUuid: string; // (default to undefined)

const { status, data } = await apiInstance.deleteProperty(
    objectUuid,
    propertyUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **objectUuid** | [**string**] |  | defaults to undefined|
| **propertyUuid** | [**string**] |  | defaults to undefined|


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
|**200** | Property deleted successfully |  -  |
|**404** | Property not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCalculationTypes**
> PaginationResponse getCalculationTypes()

Returns the calculation functions available for each property type (for example min/max on numbers).

### Example

```typescript
import {
    PropertyApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new PropertyApi(configuration);

let objectUuid: string; // (default to undefined)

const { status, data } = await apiInstance.getCalculationTypes(
    objectUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **objectUuid** | [**string**] |  | defaults to undefined|


### Return type

**PaginationResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Calculation types retrieved successfully |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFormats**
> PaginationResponse getFormats()

Fetches a sorted list of available property formats. The formats are retrieved from the PropertyFormats enum and converted to PropertyFormat instances.

### Example

```typescript
import {
    PropertyApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new PropertyApi(configuration);

let objectUuid: string; // (default to undefined)

const { status, data } = await apiInstance.getFormats(
    objectUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **objectUuid** | [**string**] |  | defaults to undefined|


### Return type

**PaginationResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Property formats retrieved successfully |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getProperties**
> PaginationResponse getProperties(body)

Retrieves a paginated list of properties for a given object. Depending on the object UUID format, a Cypher query is constructed to filter properties belonging to that object. Returns a PaginationResponse containing PropertyDTO objects.

### Example

```typescript
import {
    PropertyApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new PropertyApi(configuration);

let objectUuid: string; // (default to undefined)
let body: any; //Pagination details (limit, page, filters, sort, query)

const { status, data } = await apiInstance.getProperties(
    objectUuid,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **any**| Pagination details (limit, page, filters, sort, query) | |
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
|**200** | Properties fetched successfully |  -  |
|**400** | Invalid pagination request |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getProperty**
> ShowResponse getProperty()

Retrieves details of a property by its UUID and associates it with its parent object. Returns a ShowResponse containing a PropertyDTO object with complete property details.

### Example

```typescript
import {
    PropertyApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new PropertyApi(configuration);

let objectUuid: string; // (default to undefined)
let propertyUuid: string; // (default to undefined)

const { status, data } = await apiInstance.getProperty(
    objectUuid,
    propertyUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **objectUuid** | [**string**] |  | defaults to undefined|
| **propertyUuid** | [**string**] |  | defaults to undefined|


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
|**200** | Property retrieved successfully |  -  |
|**404** | Property not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPropertyCalculationTypes**
> SuccessResponse getPropertyCalculationTypes()

Returns calculation functions supported for the property\'s type.

### Example

```typescript
import {
    PropertyApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new PropertyApi(configuration);

let objectUuid: string; // (default to undefined)
let propertyUuid: string; // (default to undefined)

const { status, data } = await apiInstance.getPropertyCalculationTypes(
    objectUuid,
    propertyUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **objectUuid** | [**string**] |  | defaults to undefined|
| **propertyUuid** | [**string**] |  | defaults to undefined|


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
|**200** | Calculation types retrieved successfully |  -  |
|**404** | Property or object not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **permanentlyDeleteArchivedProperty**
> DeleteResponse permanentlyDeleteArchivedProperty()

Deletes the soft-deleted HAS_PROPERTY link to this object. If the property is not linked to any other object, the property node is hard-deleted.

### Example

```typescript
import {
    PropertyApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new PropertyApi(configuration);

let objectUuid: string; // (default to undefined)
let propertyUuid: string; // (default to undefined)

const { status, data } = await apiInstance.permanentlyDeleteArchivedProperty(
    objectUuid,
    propertyUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **objectUuid** | [**string**] |  | defaults to undefined|
| **propertyUuid** | [**string**] |  | defaults to undefined|


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
|**200** | Archived property permanently removed |  -  |
|**400** | Property is not archived for this object |  -  |
|**404** | Object or property not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pinProperty**
> UpdateResponse pinProperty()

Pins the specified property for the logged-in user. Pinned properties appear at the top of record create and update forms.

### Example

```typescript
import {
    PropertyApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new PropertyApi(configuration);

let objectUuid: string; // (default to undefined)
let propertyUuid: string; // (default to undefined)

const { status, data } = await apiInstance.pinProperty(
    objectUuid,
    propertyUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **objectUuid** | [**string**] |  | defaults to undefined|
| **propertyUuid** | [**string**] |  | defaults to undefined|


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
|**200** | Property pinned successfully |  -  |
|**404** | Property not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **restoreProperty**
> RestoreResponse restoreProperty()

Restores a previously deleted property by propertyUuid for the specified objectUuid. Returns a RestoreResponse containing the restored property details.

### Example

```typescript
import {
    PropertyApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new PropertyApi(configuration);

let objectUuid: string; // (default to undefined)
let propertyUuid: string; // (default to undefined)

const { status, data } = await apiInstance.restoreProperty(
    objectUuid,
    propertyUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **objectUuid** | [**string**] |  | defaults to undefined|
| **propertyUuid** | [**string**] |  | defaults to undefined|


### Return type

**RestoreResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Property restored successfully |  -  |
|**404** | Property or Object not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **unpinProperty**
> UpdateResponse unpinProperty()

Removes the pin for the specified property for the logged-in user.

### Example

```typescript
import {
    PropertyApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new PropertyApi(configuration);

let objectUuid: string; // (default to undefined)
let propertyUuid: string; // (default to undefined)

const { status, data } = await apiInstance.unpinProperty(
    objectUuid,
    propertyUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **objectUuid** | [**string**] |  | defaults to undefined|
| **propertyUuid** | [**string**] |  | defaults to undefined|


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
|**200** | Property unpinned successfully |  -  |
|**404** | Property not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateIndices2**
> SuccessResponse updateIndices2(body)

Updates the indices for properties of a specific object. The request body should contain a mapping between property UUIDs and their new index values. Returns a SuccessResponse containing a list of updated PropertyDTO objects.

### Example

```typescript
import {
    PropertyApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new PropertyApi(configuration);

let objectUuid: string; // (default to undefined)
let body: string; //Mapping of property UUIDs to new index values

const { status, data } = await apiInstance.updateIndices2(
    objectUuid,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**| Mapping of property UUIDs to new index values | |
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
|**200** | Indices updated successfully |  -  |
|**400** | Invalid input provided |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateProperty**
> UpdateResponse updateProperty(savePropertyDTO)

Updates the details of an existing property for a specific object. The property details are provided via SavePropertyDTO, and the property is identified by its UUID. Returns an UpdateResponse containing the updated property as a PropertyDTO. Validation rules: name (required, must be unique, must be lowercase, must match name pattern (lowercase letters, numbers, underscores), cannot be changed after creation), label (required), description (maximum 255 characters), type (required, must be one of valid PropertyTypes, cannot be changed after creation), format (required, must be one of valid PropertyFormats, cannot be changed after creation), rules (required, must be an array of string).

### Example

```typescript
import {
    PropertyApi,
    Configuration,
    SavePropertyDTO
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new PropertyApi(configuration);

let objectUuid: string; // (default to undefined)
let propertyUuid: string; // (default to undefined)
let savePropertyDTO: SavePropertyDTO; //Updated property details

const { status, data } = await apiInstance.updateProperty(
    objectUuid,
    propertyUuid,
    savePropertyDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **savePropertyDTO** | **SavePropertyDTO**| Updated property details | |
| **objectUuid** | [**string**] |  | defaults to undefined|
| **propertyUuid** | [**string**] |  | defaults to undefined|


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
|**200** | Property updated successfully |  -  |
|**400** | Invalid input data |  -  |
|**404** | Property not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

