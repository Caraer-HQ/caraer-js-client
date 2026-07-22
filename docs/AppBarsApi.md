# AppBarsApi

All URIs are relative to *https://v2.api.caraer.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**listAppBars**](#listappbars) | **GET** /api/v2/app-bars | List installed app bars for a location|
|[**triggerAppBar**](#triggerappbar) | **POST** /api/v2/app-bars/{appBarUuid}/trigger | Trigger an action-based app bar|

# **listAppBars**
> listAppBars()

Returns all app bars from installed apps for the authenticated user\'s company at the given location.

### Example

```typescript
import {
    AppBarsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new AppBarsApi(configuration);

let location: 'RECORD_PREVIEW' | 'RECORD_OVERVIEW' | 'RECORD_DETAIL' | 'TOOL_BAR' | 'TRAIT_BAR'; //App bar location (default to undefined)
let object: string; //Object name in context (optional) (default to undefined)
let recordUuid: string; //Record UUID in context (optional) (default to undefined)
let viewId: string; //View ID in context (optional) (default to undefined)
let trait: string; //Trait name in context (optional) (default to undefined)

const { status, data } = await apiInstance.listAppBars(
    location,
    object,
    recordUuid,
    viewId,
    trait
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **location** | [**&#39;RECORD_PREVIEW&#39; | &#39;RECORD_OVERVIEW&#39; | &#39;RECORD_DETAIL&#39; | &#39;TOOL_BAR&#39; | &#39;TRAIT_BAR&#39;**]**Array<&#39;RECORD_PREVIEW&#39; &#124; &#39;RECORD_OVERVIEW&#39; &#124; &#39;RECORD_DETAIL&#39; &#124; &#39;TOOL_BAR&#39; &#124; &#39;TRAIT_BAR&#39;>** | App bar location | defaults to undefined|
| **object** | [**string**] | Object name in context | (optional) defaults to undefined|
| **recordUuid** | [**string**] | Record UUID in context | (optional) defaults to undefined|
| **viewId** | [**string**] | View ID in context | (optional) defaults to undefined|
| **trait** | [**string**] | Trait name in context | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | App bars retrieved |  -  |
|**400** | Invalid request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **triggerAppBar**
> triggerAppBar()

Fires the app bar webhook with optional settings values and record/view context.

### Example

```typescript
import {
    AppBarsApi,
    Configuration,
    AppBarTriggerRequest
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new AppBarsApi(configuration);

let appBarUuid: string; //UUID of the app bar to trigger (default to undefined)
let appBarTriggerRequest: AppBarTriggerRequest; // (optional)

const { status, data } = await apiInstance.triggerAppBar(
    appBarUuid,
    appBarTriggerRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appBarTriggerRequest** | **AppBarTriggerRequest**|  | |
| **appBarUuid** | [**string**] | UUID of the app bar to trigger | defaults to undefined|


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
|**200** | Trigger accepted |  -  |
|**400** | Invalid request |  -  |
|**404** | App bar not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

