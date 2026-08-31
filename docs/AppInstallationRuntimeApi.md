# AppInstallationRuntimeApi

All URIs are relative to *https://v2.api.caraer.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteSecret**](#deletesecret) | **DELETE** /api/v2/apps/{appUuid}/installation/secrets/{name} | Delete an encrypted secret|
|[**deleteStateKey**](#deletestatekey) | **DELETE** /api/v2/apps/{appUuid}/installation/state/{key} | Delete a state key|
|[**enqueueJob**](#enqueuejob) | **POST** /api/v2/apps/{appUuid}/installation/jobs | Enqueue an async serverless function job|
|[**getJob**](#getjob) | **GET** /api/v2/apps/{appUuid}/installation/jobs/{jobId} | Get async job status|
|[**getState**](#getstate) | **GET** /api/v2/apps/{appUuid}/installation/state | Get installation state map|
|[**getStateKey**](#getstatekey) | **GET** /api/v2/apps/{appUuid}/installation/state/{key} | Get a single state key|
|[**listConnections**](#listconnections) | **GET** /api/v2/apps/{appUuid}/installation/connections | List external OAuth connection status|
|[**listSecrets**](#listsecrets) | **GET** /api/v2/apps/{appUuid}/installation/secrets | List secret names (no values)|
|[**mergeCompanySettings**](#mergecompanysettings) | **PUT** /api/v2/apps/{appUuid}/installation/settings | Merge COMPANY-scoped installation settings from the app runtime|
|[**putSecret**](#putsecret) | **PUT** /api/v2/apps/{appUuid}/installation/secrets/{name} | Set an encrypted secret|
|[**putState**](#putstate) | **PUT** /api/v2/apps/{appUuid}/installation/state | Replace/merge installation state (shallow merge)|
|[**putStateKey**](#putstatekey) | **PUT** /api/v2/apps/{appUuid}/installation/state/{key} | Put a single state key|
|[**revokeConnection**](#revokeconnection) | **DELETE** /api/v2/apps/{appUuid}/installation/connections/{providerOrConnectionId} | Revoke external OAuth connection tokens by connection id or provider name|
|[**saveUserSettings**](#saveusersettings) | **PUT** /api/v2/apps/{appUuid}/installation/settings/user | Save USER-scoped installation settings for the current user|
|[**startOAuth**](#startoauth) | **POST** /api/v2/apps/{appUuid}/installation/oauth/{provider}/start | Start external OAuth authorize (returns provider authorize URL)|

# **deleteSecret**
> DeleteResponseVoid deleteSecret()


### Example

```typescript
import {
    AppInstallationRuntimeApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new AppInstallationRuntimeApi(configuration);

let appUuid: string; // (default to undefined)
let name: string; // (default to undefined)

const { status, data } = await apiInstance.deleteSecret(
    appUuid,
    name
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appUuid** | [**string**] |  | defaults to undefined|
| **name** | [**string**] |  | defaults to undefined|


### Return type

**DeleteResponseVoid**

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

# **deleteStateKey**
> DeleteResponse deleteStateKey()


### Example

```typescript
import {
    AppInstallationRuntimeApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new AppInstallationRuntimeApi(configuration);

let appUuid: string; // (default to undefined)
let key: string; // (default to undefined)

const { status, data } = await apiInstance.deleteStateKey(
    appUuid,
    key
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appUuid** | [**string**] |  | defaults to undefined|
| **key** | [**string**] |  | defaults to undefined|


### Return type

**DeleteResponse**

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

# **enqueueJob**
> ShowResponseMapStringObject enqueueJob(requestBody)


### Example

```typescript
import {
    AppInstallationRuntimeApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new AppInstallationRuntimeApi(configuration);

let appUuid: string; // (default to undefined)
let requestBody: { [key: string]: any | null; }; //

const { status, data } = await apiInstance.enqueueJob(
    appUuid,
    requestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **{ [key: string]: any | null; }**|  | |
| **appUuid** | [**string**] |  | defaults to undefined|


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

# **getJob**
> ShowResponseMapStringObject getJob()


### Example

```typescript
import {
    AppInstallationRuntimeApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new AppInstallationRuntimeApi(configuration);

let appUuid: string; // (default to undefined)
let jobId: string; // (default to undefined)

const { status, data } = await apiInstance.getJob(
    appUuid,
    jobId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appUuid** | [**string**] |  | defaults to undefined|
| **jobId** | [**string**] |  | defaults to undefined|


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

# **getState**
> ShowResponseMapStringObject getState()


### Example

```typescript
import {
    AppInstallationRuntimeApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new AppInstallationRuntimeApi(configuration);

let appUuid: string; // (default to undefined)

const { status, data } = await apiInstance.getState(
    appUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appUuid** | [**string**] |  | defaults to undefined|


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
|**200** | State map |  -  |
|**403** | Forbidden |  -  |
|**401** | Authentication is required or the token is invalid. |  -  |
|**404** | The requested resource was not found. |  -  |
|**500** | An internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getStateKey**
> ShowResponseObject getStateKey()


### Example

```typescript
import {
    AppInstallationRuntimeApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new AppInstallationRuntimeApi(configuration);

let appUuid: string; // (default to undefined)
let key: string; // (default to undefined)

const { status, data } = await apiInstance.getStateKey(
    appUuid,
    key
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appUuid** | [**string**] |  | defaults to undefined|
| **key** | [**string**] |  | defaults to undefined|


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
|**200** | OK |  -  |
|**401** | Authentication is required or the token is invalid. |  -  |
|**403** | The caller is missing a required role or scope. |  -  |
|**404** | The requested resource was not found. |  -  |
|**500** | An internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listConnections**
> ShowResponseListAppConnectionStatusDTO listConnections()


### Example

```typescript
import {
    AppInstallationRuntimeApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new AppInstallationRuntimeApi(configuration);

let appUuid: string; // (default to undefined)

const { status, data } = await apiInstance.listConnections(
    appUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appUuid** | [**string**] |  | defaults to undefined|


### Return type

**ShowResponseListAppConnectionStatusDTO**

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

# **listSecrets**
> ShowResponseListString listSecrets()


### Example

```typescript
import {
    AppInstallationRuntimeApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new AppInstallationRuntimeApi(configuration);

let appUuid: string; // (default to undefined)

const { status, data } = await apiInstance.listSecrets(
    appUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appUuid** | [**string**] |  | defaults to undefined|


### Return type

**ShowResponseListString**

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

# **mergeCompanySettings**
> ShowResponseMapStringObject mergeCompanySettings(appSettingFieldSchema)


### Example

```typescript
import {
    AppInstallationRuntimeApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new AppInstallationRuntimeApi(configuration);

let appUuid: string; // (default to undefined)
let appSettingFieldSchema: Array<AppSettingFieldSchema>; //

const { status, data } = await apiInstance.mergeCompanySettings(
    appUuid,
    appSettingFieldSchema
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appSettingFieldSchema** | **Array<AppSettingFieldSchema>**|  | |
| **appUuid** | [**string**] |  | defaults to undefined|


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
|**200** | Merged settings map |  -  |
|**403** | Forbidden |  -  |
|**401** | Authentication is required or the token is invalid. |  -  |
|**404** | The requested resource was not found. |  -  |
|**500** | An internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putSecret**
> SuccessResponseVoid putSecret(requestBody)


### Example

```typescript
import {
    AppInstallationRuntimeApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new AppInstallationRuntimeApi(configuration);

let appUuid: string; // (default to undefined)
let name: string; // (default to undefined)
let requestBody: { [key: string]: any | null; }; //

const { status, data } = await apiInstance.putSecret(
    appUuid,
    name,
    requestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **{ [key: string]: any | null; }**|  | |
| **appUuid** | [**string**] |  | defaults to undefined|
| **name** | [**string**] |  | defaults to undefined|


### Return type

**SuccessResponseVoid**

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

# **putState**
> ShowResponseMapStringObject putState(requestBody)


### Example

```typescript
import {
    AppInstallationRuntimeApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new AppInstallationRuntimeApi(configuration);

let appUuid: string; // (default to undefined)
let requestBody: { [key: string]: any | null; }; //

const { status, data } = await apiInstance.putState(
    appUuid,
    requestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **{ [key: string]: any | null; }**|  | |
| **appUuid** | [**string**] |  | defaults to undefined|


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

# **putStateKey**
> ShowResponseObject putStateKey(body)


### Example

```typescript
import {
    AppInstallationRuntimeApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new AppInstallationRuntimeApi(configuration);

let appUuid: string; // (default to undefined)
let key: string; // (default to undefined)
let body: object; //

const { status, data } = await apiInstance.putStateKey(
    appUuid,
    key,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **appUuid** | [**string**] |  | defaults to undefined|
| **key** | [**string**] |  | defaults to undefined|


### Return type

**ShowResponseObject**

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

# **revokeConnection**
> DeleteResponseVoid revokeConnection()


### Example

```typescript
import {
    AppInstallationRuntimeApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new AppInstallationRuntimeApi(configuration);

let appUuid: string; // (default to undefined)
let providerOrConnectionId: string; // (default to undefined)

const { status, data } = await apiInstance.revokeConnection(
    appUuid,
    providerOrConnectionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appUuid** | [**string**] |  | defaults to undefined|
| **providerOrConnectionId** | [**string**] |  | defaults to undefined|


### Return type

**DeleteResponseVoid**

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

# **saveUserSettings**
> SuccessResponseVoid saveUserSettings(appSettingFieldSchema)


### Example

```typescript
import {
    AppInstallationRuntimeApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new AppInstallationRuntimeApi(configuration);

let appUuid: string; // (default to undefined)
let appSettingFieldSchema: Array<AppSettingFieldSchema>; //

const { status, data } = await apiInstance.saveUserSettings(
    appUuid,
    appSettingFieldSchema
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appSettingFieldSchema** | **Array<AppSettingFieldSchema>**|  | |
| **appUuid** | [**string**] |  | defaults to undefined|


### Return type

**SuccessResponseVoid**

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

# **startOAuth**
> ShowResponseAppOAuthStartResponseDTO startOAuth()


### Example

```typescript
import {
    AppInstallationRuntimeApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new AppInstallationRuntimeApi(configuration);

let appUuid: string; // (default to undefined)
let provider: string; // (default to undefined)
let redirectUri: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.startOAuth(
    appUuid,
    provider,
    redirectUri
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appUuid** | [**string**] |  | defaults to undefined|
| **provider** | [**string**] |  | defaults to undefined|
| **redirectUri** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ShowResponseAppOAuthStartResponseDTO**

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

