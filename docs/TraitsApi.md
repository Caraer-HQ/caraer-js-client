# TraitsApi

All URIs are relative to *https://v2.api.caraer.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createTrait**](#createtrait) | **POST** /api/v2/traits/{objectUuid}/{traitName} | Create or update a trait for an object|
|[**deleteTrait**](#deletetrait) | **DELETE** /api/v2/traits/{objectUuid}/{traitName} | Delete a trait from an object|
|[**getTrait**](#gettrait) | **GET** /api/v2/traits/{objectUuid}/{traitName} | Fetch a specific trait for an object|
|[**getTraits**](#gettraits) | **GET** /api/v2/traits/{objectUuid} | Fetch all traits for an object|
|[**rsvpBrowserGet**](#rsvpbrowserget) | **GET** /api/v2/traits/event/{companyUuid}/{eventUuid}/rsvp/{attendeeUuid} | Respond to an event invitation (email link)|
|[**rsvpBrowserLogin**](#rsvpbrowserlogin) | **POST** /api/v2/traits/event/{companyUuid}/{eventUuid}/rsvp/{attendeeUuid}/login | Email/password login for RSVP|
|[**rsvpBrowserSocial**](#rsvpbrowsersocial) | **GET** /api/v2/traits/event/{companyUuid}/{eventUuid}/rsvp/{attendeeUuid}/social/{provider} | Start social login for RSVP|
|[**rsvpJson**](#rsvpjson) | **POST** /api/v2/traits/event/{companyUuid}/{eventUuid}/rsvp/{attendeeUuid} | Update event RSVP (JSON)|

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

# **rsvpBrowserGet**
> rsvpBrowserGet()

Public browser RSVP. Without partstat shows a choice page; with partstat applies after login when the attendee has a user trait. Non-user-trait attendees need no login.

### Example

```typescript
import {
    TraitsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new TraitsApi(configuration);

let companyUuid: string; // (default to undefined)
let eventUuid: string; // (default to undefined)
let attendeeUuid: string; // (default to undefined)
let partstat: string; // (optional) (default to undefined)
let scope: string; // (optional) (default to undefined)
let switchAccount: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.rsvpBrowserGet(
    companyUuid,
    eventUuid,
    attendeeUuid,
    partstat,
    scope,
    switchAccount
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **companyUuid** | [**string**] |  | defaults to undefined|
| **eventUuid** | [**string**] |  | defaults to undefined|
| **attendeeUuid** | [**string**] |  | defaults to undefined|
| **partstat** | [**string**] |  | (optional) defaults to undefined|
| **scope** | [**string**] |  | (optional) defaults to undefined|
| **switchAccount** | [**string**] |  | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | HTML choice, login, success, or error page |  -  |
|**400** | Invalid partstat or scope |  -  |
|**401** | Login required for JSON clients |  -  |
|**403** | Not the invited attendee |  -  |
|**404** | Event, attendee, or invitation not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rsvpBrowserLogin**
> rsvpBrowserLogin()


### Example

```typescript
import {
    TraitsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new TraitsApi(configuration);

let companyUuid: string; // (default to undefined)
let eventUuid: string; // (default to undefined)
let attendeeUuid: string; // (default to undefined)
let email: string; // (default to undefined)
let password: string; // (default to undefined)
let partstat: string; // (optional) (default to undefined)
let scope: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.rsvpBrowserLogin(
    companyUuid,
    eventUuid,
    attendeeUuid,
    email,
    password,
    partstat,
    scope
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **companyUuid** | [**string**] |  | defaults to undefined|
| **eventUuid** | [**string**] |  | defaults to undefined|
| **attendeeUuid** | [**string**] |  | defaults to undefined|
| **email** | [**string**] |  | defaults to undefined|
| **password** | [**string**] |  | defaults to undefined|
| **partstat** | [**string**] |  | (optional) defaults to undefined|
| **scope** | [**string**] |  | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rsvpBrowserSocial**
> rsvpBrowserSocial()


### Example

```typescript
import {
    TraitsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new TraitsApi(configuration);

let companyUuid: string; // (default to undefined)
let eventUuid: string; // (default to undefined)
let attendeeUuid: string; // (default to undefined)
let provider: string; // (default to undefined)
let partstat: string; // (optional) (default to undefined)
let scope: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.rsvpBrowserSocial(
    companyUuid,
    eventUuid,
    attendeeUuid,
    provider,
    partstat,
    scope
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **companyUuid** | [**string**] |  | defaults to undefined|
| **eventUuid** | [**string**] |  | defaults to undefined|
| **attendeeUuid** | [**string**] |  | defaults to undefined|
| **provider** | [**string**] |  | defaults to undefined|
| **partstat** | [**string**] |  | (optional) defaults to undefined|
| **scope** | [**string**] |  | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rsvpJson**
> UpdateResponse rsvpJson(eventRsvpRequest)

Patches partstat on the attendees edge. No tools @AccessControl — auth is bearer/session + self-only / partner login rules.

### Example

```typescript
import {
    TraitsApi,
    Configuration,
    EventRsvpRequest
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new TraitsApi(configuration);

let companyUuid: string; // (default to undefined)
let eventUuid: string; // (default to undefined)
let attendeeUuid: string; // (default to undefined)
let eventRsvpRequest: EventRsvpRequest; //RSVP payload

const { status, data } = await apiInstance.rsvpJson(
    companyUuid,
    eventUuid,
    attendeeUuid,
    eventRsvpRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **eventRsvpRequest** | **EventRsvpRequest**| RSVP payload | |
| **companyUuid** | [**string**] |  | defaults to undefined|
| **eventUuid** | [**string**] |  | defaults to undefined|
| **attendeeUuid** | [**string**] |  | defaults to undefined|


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
|**200** | RSVP updated |  -  |
|**400** | Invalid partstat or scope |  -  |
|**401** | Login required |  -  |
|**403** | Not the invited attendee |  -  |
|**404** | Event, attendee, or invitation not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

