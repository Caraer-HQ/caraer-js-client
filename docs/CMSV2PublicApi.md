# CMSV2PublicApi

All URIs are relative to *https://v2.api.caraer.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**appSettings**](#appsettings) | **GET** /api/v2/webpages/v2/public/apps/{appName}/settings | Installed app settings with SECRET fields removed|
|[**asset**](#asset) | **GET** /api/v2/webpages/v2/public/asset | Redirect to a company file for the website runtime|
|[**buildManifest**](#buildmanifest) | **GET** /api/v2/webpages/v2/build/manifest | Installed apps and modules for a company\&#39;s website build|
|[**menus**](#menus) | **GET** /api/v2/webpages/v2/public/menus | Navigation menus for the header and footer|
|[**pageByPath**](#pagebypath) | **GET** /api/v2/webpages/v2/public/page | A published page by URL path|
|[**pageByUuid**](#pagebyuuid) | **GET** /api/v2/webpages/v2/public/page/{uuid} | A page by record uuid|
|[**pageGate**](#pagegate) | **GET** /api/v2/webpages/v2/public/page/gate | Protection info for a path, without the page document|
|[**paths**](#paths) | **GET** /api/v2/webpages/v2/public/paths | Published paths per environment, for sitemaps and cache warming|
|[**records**](#records) | **POST** /api/v2/webpages/v2/public/records | Public records visible in an environment|
|[**settings**](#settings) | **GET** /api/v2/webpages/v2/public/settings | Company settings, branding and locales|
|[**unlock**](#unlock) | **POST** /api/v2/webpages/v2/public/page/{uuid}/unlock | Unlock a password-protected CMS v2 page|

# **appSettings**
> ShowResponseMapStringObject appSettings()


### Example

```typescript
import {
    CMSV2PublicApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new CMSV2PublicApi(configuration);

let xCaraerSubdomain: string; // (default to undefined)
let appName: string; // (default to undefined)

const { status, data } = await apiInstance.appSettings(
    xCaraerSubdomain,
    appName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **xCaraerSubdomain** | [**string**] |  | defaults to undefined|
| **appName** | [**string**] |  | defaults to undefined|


### Return type

**ShowResponseMapStringObject**

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

# **asset**
> asset()


### Example

```typescript
import {
    CMSV2PublicApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new CMSV2PublicApi(configuration);

let xCaraerSubdomain: string; // (default to undefined)
let key: string; // (default to undefined)
let pageUuid: string; // (optional) (default to undefined)
let environment: string; // (optional) (default to undefined)
let locale: string; // (optional) (default to undefined)
let access: string; // (optional) (default to undefined)
let token: string; // (optional) (default to undefined)
let caraerExpires: string; // (optional) (default to undefined)
let caraerSig: string; // (optional) (default to undefined)
let xCaraerWebpageAccess: string; // (optional) (default to undefined)
let authorization: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.asset(
    xCaraerSubdomain,
    key,
    pageUuid,
    environment,
    locale,
    access,
    token,
    caraerExpires,
    caraerSig,
    xCaraerWebpageAccess,
    authorization
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **xCaraerSubdomain** | [**string**] |  | defaults to undefined|
| **key** | [**string**] |  | defaults to undefined|
| **pageUuid** | [**string**] |  | (optional) defaults to undefined|
| **environment** | [**string**] |  | (optional) defaults to undefined|
| **locale** | [**string**] |  | (optional) defaults to undefined|
| **access** | [**string**] |  | (optional) defaults to undefined|
| **token** | [**string**] |  | (optional) defaults to undefined|
| **caraerExpires** | [**string**] |  | (optional) defaults to undefined|
| **caraerSig** | [**string**] |  | (optional) defaults to undefined|
| **xCaraerWebpageAccess** | [**string**] |  | (optional) defaults to undefined|
| **authorization** | [**string**] |  | (optional) defaults to undefined|


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

# **buildManifest**
> ShowResponseMapStringObject buildManifest()


### Example

```typescript
import {
    CMSV2PublicApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new CMSV2PublicApi(configuration);

let xCaraerSubdomain: string; // (default to undefined)

const { status, data } = await apiInstance.buildManifest(
    xCaraerSubdomain
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **xCaraerSubdomain** | [**string**] |  | defaults to undefined|


### Return type

**ShowResponseMapStringObject**

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

# **menus**
> ShowResponseListCmsPublicMenuDTO menus()


### Example

```typescript
import {
    CMSV2PublicApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new CMSV2PublicApi(configuration);

let xCaraerSubdomain: string; // (default to undefined)
let environment: string; // (optional) (default to undefined)
let locale: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.menus(
    xCaraerSubdomain,
    environment,
    locale
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **xCaraerSubdomain** | [**string**] |  | defaults to undefined|
| **environment** | [**string**] |  | (optional) defaults to undefined|
| **locale** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ShowResponseListCmsPublicMenuDTO**

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

# **pageByPath**
> ShowResponseCmsPageDTO pageByPath()


### Example

```typescript
import {
    CMSV2PublicApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new CMSV2PublicApi(configuration);

let xCaraerSubdomain: string; // (default to undefined)
let path: string; // (default to undefined)
let xCaraerWebpageAccess: string; // (optional) (default to undefined)
let authorization: string; // (optional) (default to undefined)
let environment: string; // (optional) (default to undefined)
let locale: string; // (optional) (default to undefined)
let access: string; // (optional) (default to undefined)
let token: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.pageByPath(
    xCaraerSubdomain,
    path,
    xCaraerWebpageAccess,
    authorization,
    environment,
    locale,
    access,
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **xCaraerSubdomain** | [**string**] |  | defaults to undefined|
| **path** | [**string**] |  | defaults to undefined|
| **xCaraerWebpageAccess** | [**string**] |  | (optional) defaults to undefined|
| **authorization** | [**string**] |  | (optional) defaults to undefined|
| **environment** | [**string**] |  | (optional) defaults to undefined|
| **locale** | [**string**] |  | (optional) defaults to undefined|
| **access** | [**string**] |  | (optional) defaults to undefined|
| **token** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ShowResponseCmsPageDTO**

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

# **pageByUuid**
> ShowResponseCmsPageDTO pageByUuid()

Used by the builder preview, which addresses a page by uuid because a draft may not have a slug yet.

### Example

```typescript
import {
    CMSV2PublicApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new CMSV2PublicApi(configuration);

let xCaraerSubdomain: string; // (default to undefined)
let uuid: string; // (default to undefined)
let xCaraerWebpageAccess: string; // (optional) (default to undefined)
let authorization: string; // (optional) (default to undefined)
let environment: string; // (optional) (default to undefined)
let locale: string; // (optional) (default to undefined)
let state: string; // (optional) (default to 'published')
let access: string; // (optional) (default to undefined)
let token: string; // (optional) (default to undefined)
let caraerExpires: string; // (optional) (default to undefined)
let caraerSig: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.pageByUuid(
    xCaraerSubdomain,
    uuid,
    xCaraerWebpageAccess,
    authorization,
    environment,
    locale,
    state,
    access,
    token,
    caraerExpires,
    caraerSig
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **xCaraerSubdomain** | [**string**] |  | defaults to undefined|
| **uuid** | [**string**] |  | defaults to undefined|
| **xCaraerWebpageAccess** | [**string**] |  | (optional) defaults to undefined|
| **authorization** | [**string**] |  | (optional) defaults to undefined|
| **environment** | [**string**] |  | (optional) defaults to undefined|
| **locale** | [**string**] |  | (optional) defaults to undefined|
| **state** | [**string**] |  | (optional) defaults to 'published'|
| **access** | [**string**] |  | (optional) defaults to undefined|
| **token** | [**string**] |  | (optional) defaults to undefined|
| **caraerExpires** | [**string**] |  | (optional) defaults to undefined|
| **caraerSig** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ShowResponseCmsPageDTO**

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

# **pageGate**
> ShowResponseMapStringObject pageGate()


### Example

```typescript
import {
    CMSV2PublicApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new CMSV2PublicApi(configuration);

let xCaraerSubdomain: string; // (default to undefined)
let path: string; // (default to undefined)
let environment: string; // (optional) (default to undefined)
let locale: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.pageGate(
    xCaraerSubdomain,
    path,
    environment,
    locale
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **xCaraerSubdomain** | [**string**] |  | defaults to undefined|
| **path** | [**string**] |  | defaults to undefined|
| **environment** | [**string**] |  | (optional) defaults to undefined|
| **locale** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ShowResponseMapStringObject**

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

# **paths**
> ShowResponseListMapStringObject paths()


### Example

```typescript
import {
    CMSV2PublicApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new CMSV2PublicApi(configuration);

let xCaraerSubdomain: string; // (default to undefined)
let environment: string; // (optional) (default to undefined)
let locale: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.paths(
    xCaraerSubdomain,
    environment,
    locale
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **xCaraerSubdomain** | [**string**] |  | defaults to undefined|
| **environment** | [**string**] |  | (optional) defaults to undefined|
| **locale** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ShowResponseListMapStringObject**

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

# **records**
> ShowResponseMapStringObject records(requestBody)


### Example

```typescript
import {
    CMSV2PublicApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new CMSV2PublicApi(configuration);

let xCaraerSubdomain: string; // (default to undefined)
let requestBody: { [key: string]: any | null; }; //
let environment: string; // (optional) (default to undefined)
let locale: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.records(
    xCaraerSubdomain,
    requestBody,
    environment,
    locale
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **{ [key: string]: any | null; }**|  | |
| **xCaraerSubdomain** | [**string**] |  | defaults to undefined|
| **environment** | [**string**] |  | (optional) defaults to undefined|
| **locale** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ShowResponseMapStringObject**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
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

# **settings**
> ShowResponseMapStringObject settings()


### Example

```typescript
import {
    CMSV2PublicApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new CMSV2PublicApi(configuration);

let xCaraerSubdomain: string; // (default to undefined)

const { status, data } = await apiInstance.settings(
    xCaraerSubdomain
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **xCaraerSubdomain** | [**string**] |  | defaults to undefined|


### Return type

**ShowResponseMapStringObject**

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

# **unlock**
> SuccessResponseString unlock(requestBody)


### Example

```typescript
import {
    CMSV2PublicApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new CMSV2PublicApi(configuration);

let xCaraerSubdomain: string; // (default to undefined)
let uuid: string; // (default to undefined)
let requestBody: { [key: string]: string; }; //
let environment: string; // (optional) (default to undefined)
let locale: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.unlock(
    xCaraerSubdomain,
    uuid,
    requestBody,
    environment,
    locale
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **{ [key: string]: string; }**|  | |
| **xCaraerSubdomain** | [**string**] |  | defaults to undefined|
| **uuid** | [**string**] |  | defaults to undefined|
| **environment** | [**string**] |  | (optional) defaults to undefined|
| **locale** | [**string**] |  | (optional) defaults to undefined|


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
|**200** | OK |  -  |
|**401** | Authentication is required or the token is invalid. |  -  |
|**403** | The caller is missing a required role or scope. |  -  |
|**404** | The requested resource was not found. |  -  |
|**500** | An internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

