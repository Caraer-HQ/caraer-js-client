# BrowserAuthenticationApi

All URIs are relative to *https://v2.api.caraer.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**authorize**](#authorize) | **GET** /api/v2/auth/browser/authorize | Open the browser-owned provider session|
|[**exchange**](#exchange) | **POST** /api/v2/auth/browser/exchange | Exchange a native callback code|
|[**start**](#start) | **POST** /api/v2/auth/browser/start | Start browser sign-in|

# **authorize**
> authorize()


### Example

```typescript
import {
    BrowserAuthenticationApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new BrowserAuthenticationApi(configuration);

let flow: string; // (default to undefined)

const { status, data } = await apiInstance.authorize(
    flow
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **flow** | [**string**] |  | defaults to undefined|


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
|**200** | OK |  -  |
|**401** | Authentication is required or the token is invalid. |  -  |
|**403** | The caller is missing a required role or scope. |  -  |
|**404** | The requested resource was not found. |  -  |
|**500** | An internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **exchange**
> ShowResponseBrowserAuthSessionResponse exchange(browserAuthExchangeRequest)

Exchanges an unexpired single-use code only after exact redirect and PKCE verifier checks. Access/refresh tokens are returned in JSON and never in callback URLs.

### Example

```typescript
import {
    BrowserAuthenticationApi,
    Configuration,
    BrowserAuthExchangeRequest
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new BrowserAuthenticationApi(configuration);

let browserAuthExchangeRequest: BrowserAuthExchangeRequest; //

const { status, data } = await apiInstance.exchange(
    browserAuthExchangeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **browserAuthExchangeRequest** | **BrowserAuthExchangeRequest**|  | |


### Return type

**ShowResponseBrowserAuthSessionResponse**

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

# **start**
> ShowResponseBrowserAuthStartResponse start(browserAuthStartRequest)

Requires an exact configured redirect URI, random client state and S256 PKCE challenge. Open the returned URL in the system browser.

### Example

```typescript
import {
    BrowserAuthenticationApi,
    Configuration,
    BrowserAuthStartRequest
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new BrowserAuthenticationApi(configuration);

let browserAuthStartRequest: BrowserAuthStartRequest; //

const { status, data } = await apiInstance.start(
    browserAuthStartRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **browserAuthStartRequest** | **BrowserAuthStartRequest**|  | |


### Return type

**ShowResponseBrowserAuthStartResponse**

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

