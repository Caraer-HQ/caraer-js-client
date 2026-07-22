# AppBarIframeSessionsApi

All URIs are relative to *https://v2.api.caraer.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createIframeSession**](#createiframesession) | **POST** /api/v2/app-bars/{appBarUuid}/iframe-session | Create an iframe session token|
|[**validateIframeSession**](#validateiframesession) | **POST** /api/v2/app-bars/iframe-session/validate | Validate an iframe session token|

# **createIframeSession**
> createIframeSession()

Issues a short-lived opaque token for an iframe-based app bar. The token can be validated by the embedded app to confirm user, company, view, and filter context.

### Example

```typescript
import {
    AppBarIframeSessionsApi,
    Configuration,
    AppBarIframeSessionRequest
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new AppBarIframeSessionsApi(configuration);

let appBarUuid: string; //UUID of the iframe app bar (default to undefined)
let appBarIframeSessionRequest: AppBarIframeSessionRequest; // (optional)

const { status, data } = await apiInstance.createIframeSession(
    appBarUuid,
    appBarIframeSessionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appBarIframeSessionRequest** | **AppBarIframeSessionRequest**|  | |
| **appBarUuid** | [**string**] | UUID of the iframe app bar | defaults to undefined|


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
|**200** | Token created |  -  |
|**400** | Invalid request |  -  |
|**404** | App bar not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **validateIframeSession**
> validateIframeSession(appBarIframeSessionValidateRequest)

Public endpoint for embedded apps to validate a caraer_iframe_token and receive safe context.

### Example

```typescript
import {
    AppBarIframeSessionsApi,
    Configuration,
    AppBarIframeSessionValidateRequest
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new AppBarIframeSessionsApi(configuration);

let appBarIframeSessionValidateRequest: AppBarIframeSessionValidateRequest; //

const { status, data } = await apiInstance.validateIframeSession(
    appBarIframeSessionValidateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appBarIframeSessionValidateRequest** | **AppBarIframeSessionValidateRequest**|  | |


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
|**200** | Token validated |  -  |
|**401** | Invalid or expired token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

