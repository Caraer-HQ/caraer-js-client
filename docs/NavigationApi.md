# NavigationApi

All URIs are relative to *https://v2.api.caraer.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**favorites**](#favorites) | **GET** /api/v2/navigation/favorites | Read authorized favorite views|
|[**navigation**](#navigation) | **GET** /api/v2/navigation | Read authorized navigation|
|[**preferences**](#preferences) | **PUT** /api/v2/navigation/objects/{objectUuid}/view-preferences | Set personal view navigation preferences|
|[**scopes**](#scopes) | **GET** /api/v2/access/scopes | Read available access scopes|
|[**views**](#views) | **GET** /api/v2/navigation/objects/{objectUuid}/views | Read authorized view navigation summaries|

# **favorites**
> SuccessResponseListFavoriteViewDTO favorites()

Selected-company favorites across objects. Archived readable favorites require includeArchived=true. Each result carries only object identity/capability names and view navigation metadata.

### Example

```typescript
import {
    NavigationApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new NavigationApi(configuration);

let includeArchived: boolean; // (optional) (default to false)

const { status, data } = await apiInstance.favorites(
    includeArchived
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **includeArchived** | [**boolean**] |  | (optional) defaults to false|


### Return type

**SuccessResponseListFavoriteViewDTO**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**401** | Authentication is required or the token is invalid. |  -  |
|**403** | The caller is missing a required role or scope. |  -  |
|**404** | The requested resource was not found. |  -  |
|**500** | An internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **navigation**
> SuccessResponseNavigationDTO navigation()

Selected-company object and view summaries with permission-gated menus. Does not load schemas, users, scopes, branding or dashboards.

### Example

```typescript
import {
    NavigationApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new NavigationApi(configuration);

const { status, data } = await apiInstance.navigation();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**SuccessResponseNavigationDTO**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**401** | Authentication is required or the token is invalid. |  -  |
|**403** | The caller is missing a required role or scope. |  -  |
|**404** | The requested resource was not found. |  -  |
|**500** | An internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **preferences**
> SuccessResponseListNavigationViewDTO preferences(viewNavigationPreferencesRequest)

Atomic user/company-scoped index and favorite overrides for readable views of this object. Omission preserves; null clears to the legacy default. Does not create sharing edges or change authorization. Requires an actual selected-company user record.

### Example

```typescript
import {
    NavigationApi,
    Configuration,
    ViewNavigationPreferencesRequest
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new NavigationApi(configuration);

let objectUuid: string; // (default to undefined)
let viewNavigationPreferencesRequest: ViewNavigationPreferencesRequest; //

const { status, data } = await apiInstance.preferences(
    objectUuid,
    viewNavigationPreferencesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **viewNavigationPreferencesRequest** | **ViewNavigationPreferencesRequest**|  | |
| **objectUuid** | [**string**] |  | defaults to undefined|


### Return type

**SuccessResponseListNavigationViewDTO**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**401** | Authentication is required or the token is invalid. |  -  |
|**403** | The caller is missing a required role or scope. |  -  |
|**404** | The requested resource was not found. |  -  |
|**500** | An internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **scopes**
> SuccessResponseListString scopes()

Scope catalog for managing selected-company user and team permissions. Requires user-management read or app-management write access. App-only callers discover record scopes only for readable objects. This is not a list of the caller\'s granted scopes.

### Example

```typescript
import {
    NavigationApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new NavigationApi(configuration);

const { status, data } = await apiInstance.scopes();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**SuccessResponseListString**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**401** | Authentication is required or the token is invalid. |  -  |
|**403** | The caller is missing a required role or scope. |  -  |
|**404** | The requested resource was not found. |  -  |
|**500** | An internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **views**
> SuccessResponseListNavigationViewDTO views()

Intent-loaded selected-company metadata. Archived readable views are included only with includeArchived=true; no filters, schemas or sharing grants are returned.

### Example

```typescript
import {
    NavigationApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new NavigationApi(configuration);

let objectUuid: string; // (default to undefined)
let includeArchived: boolean; // (optional) (default to false)

const { status, data } = await apiInstance.views(
    objectUuid,
    includeArchived
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **objectUuid** | [**string**] |  | defaults to undefined|
| **includeArchived** | [**boolean**] |  | (optional) defaults to false|


### Return type

**SuccessResponseListNavigationViewDTO**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**401** | Authentication is required or the token is invalid. |  -  |
|**403** | The caller is missing a required role or scope. |  -  |
|**404** | The requested resource was not found. |  -  |
|**500** | An internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

