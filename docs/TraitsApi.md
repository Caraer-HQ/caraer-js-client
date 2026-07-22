# TraitsApi

All URIs are relative to *https://v2.api.caraer.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createTrait**](#createtrait) | **POST** /api/v2/traits/{objectUuid}/{traitName} | Create or update a trait for an object|
|[**deleteTrait**](#deletetrait) | **DELETE** /api/v2/traits/{objectUuid}/{traitName} | Delete a trait from an object|
|[**getTrait**](#gettrait) | **GET** /api/v2/traits/{objectUuid}/{traitName} | Fetch a specific trait for an object|
|[**getTraits**](#gettraits) | **GET** /api/v2/traits/{objectUuid} | Fetch all traits for an object|

# **createTrait**
> CreateResponse createTrait(body)

Creates a new trait or updates an existing trait for the specified object. The trait name is provided in the URL, and trait details are supplied in the request body as a JSON map. If a trait with the specified name exists, it will be updated; otherwise, a new trait is created. Returns a CreateResponse containing the TraitDTO of the created or updated trait.

### Example

```typescript
import {
    TraitsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new TraitsApi(configuration);

let objectUuid: string; // (default to undefined)
let traitName: string; // (default to undefined)
let body: string; //Trait details as a JSON map

const { status, data } = await apiInstance.createTrait(
    objectUuid,
    traitName,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**| Trait details as a JSON map | |
| **objectUuid** | [**string**] |  | defaults to undefined|
| **traitName** | [**string**] |  | defaults to undefined|


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
|**201** | Trait created successfully |  -  |
|**400** | Invalid input data |  -  |
|**404** | Trait type not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteTrait**
> DeleteResponse deleteTrait()

Removes a trait identified by its name from the specified object. Returns a DeleteResponse confirming that the trait has been removed.

### Example

```typescript
import {
    TraitsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new TraitsApi(configuration);

let objectUuid: string; // (default to undefined)
let traitName: string; // (default to undefined)

const { status, data } = await apiInstance.deleteTrait(
    objectUuid,
    traitName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **objectUuid** | [**string**] |  | defaults to undefined|
| **traitName** | [**string**] |  | defaults to undefined|


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
|**200** | Trait removed successfully |  -  |
|**404** | Trait not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getTrait**
> ShowResponse getTrait()

Retrieves details of a specific trait associated with the specified object, identified by the trait name. Returns a ShowResponse containing the TraitDTO. If the trait is not found, a NotFoundError is thrown.

### Example

```typescript
import {
    TraitsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new TraitsApi(configuration);

let objectUuid: string; // (default to undefined)
let traitName: string; // (default to undefined)

const { status, data } = await apiInstance.getTrait(
    objectUuid,
    traitName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **objectUuid** | [**string**] |  | defaults to undefined|
| **traitName** | [**string**] |  | defaults to undefined|


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
|**200** | Trait retrieved successfully |  -  |
|**404** | Trait not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getTraits**
> PaginationResponse getTraits()

Retrieves a list of traits associated with the specified object. Returns a paginated response containing TraitDTO objects. The page is set to 0 by default, with a maximum limit of 100.

### Example

```typescript
import {
    TraitsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new TraitsApi(configuration);

let objectUuid: string; // (default to undefined)

const { status, data } = await apiInstance.getTraits(
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
|**200** | Traits retrieved successfully |  -  |
|**404** | Object or traits not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

