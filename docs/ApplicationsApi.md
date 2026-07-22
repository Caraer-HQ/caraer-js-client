# ApplicationsApi

All URIs are relative to *https://v2.api.caraer.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createAppWebhookForApp**](#createappwebhookforapp) | **POST** /api/v2/apps/{appUuid}/webhooks | Create a webhook for an app (app-scoped path)|
|[**createPrivateApp**](#createprivateapp) | **POST** /api/v2/apps/private | Create a private app|
|[**createPublicApp**](#createpublicapp) | **POST** /api/v2/apps/public | Create a public app|
|[**deleteAppWebhook**](#deleteappwebhook) | **DELETE** /api/v2/apps/{appUuid}/webhooks/{webhookUuid} | Delete a webhook for an app|
|[**getApp**](#getapp) | **GET** /api/v2/apps/{uuid} | Retrieve application details by UUID|
|[**getAppWebhooks**](#getappwebhooks) | **POST** /api/v2/apps/{appUuid}/webhooks/index | Retrieve a paginated list of webhooks for an app|
|[**getApps**](#getapps) | **POST** /api/v2/apps/index | Retrieve a paginated list of applications|
|[**getCompanyInformation**](#getcompanyinformation) | **GET** /api/v2/apps/{appUuid}/me | Get current user\&#39;s company information|
|[**getMyCreatedApps**](#getmycreatedapps) | **POST** /api/v2/apps/my/index | Retrieve apps created by the logged-in user\&#39;s selected company|
|[**getPublicApp**](#getpublicapp) | **GET** /api/v2/apps/public/{uuid} | Get a public app (creator view)|
|[**getWebhookEvents**](#getwebhookevents) | **GET** /api/v2/apps/{appUuid}/webhooks/events | Get available webhook record events|
|[**getWebhookFormats**](#getwebhookformats) | **GET** /api/v2/apps/{appUuid}/webhooks/formats | Get available webhook formats|
|[**getWebhookPropertyTopics**](#getwebhookpropertytopics) | **GET** /api/v2/apps/{appUuid}/webhooks/property-topics | Get webhook property topic options|
|[**installApp**](#installapp) | **POST** /api/v2/apps/{uuid}/install | Install an application|
|[**listAppCategories**](#listappcategories) | **GET** /api/v2/apps/categories | List predefined marketplace app categories|
|[**loadSettingOptions**](#loadsettingoptions) | **POST** /api/v2/apps/{uuid}/settings-schema/options | Load dynamic options for a setting select field|
|[**reviewPublicApp**](#reviewpublicapp) | **POST** /api/v2/apps/public/{uuid}/review | Review a public app|
|[**rotateApp**](#rotateapp) | **POST** /api/v2/apps/{uuid}/rotate | Rotate application configurations|
|[**submitPublicApp**](#submitpublicapp) | **POST** /api/v2/apps/public/{uuid}/submit | Submit a public app for review|
|[**testAppWebhook**](#testappwebhook) | **POST** /api/v2/apps/{appUuid}/webhooks/test/{webhookUuid}/{recordUuid}/{eventType} | Test a webhook for an app|
|[**testAppWebhookAuto**](#testappwebhookauto) | **POST** /api/v2/apps/{appUuid}/webhooks/test/{webhookUuid} | Test a webhook for an app (auto-resolve)|
|[**testAppWebhookUnsaved**](#testappwebhookunsaved) | **POST** /api/v2/apps/{appUuid}/webhooks/test | Test an unsaved webhook for an app|
|[**uninstallApp**](#uninstallapp) | **POST** /api/v2/apps/{uuid}/uninstall | Uninstall an application|
|[**updateAppWebhookForApp**](#updateappwebhookforapp) | **PUT** /api/v2/apps/{appUuid}/webhooks/{webhookUuid} | Update a webhook for an app|
|[**updatePublicApp**](#updatepublicapp) | **PUT** /api/v2/apps/public/{uuid} | Update a public app (creator edit)|

# **createAppWebhookForApp**
> CreateResponse createAppWebhookForApp(subscribeWebhookDTO)

Creates a new webhook for the specified app using normal bearer authentication. The app must be installed for the authenticated user\'s selected company. This endpoint is an app-scoped equivalent of the generic webhook creation endpoint.

### Example

```typescript
import {
    ApplicationsApi,
    Configuration,
    SubscribeWebhookDTO
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new ApplicationsApi(configuration);

let appUuid: string; //UUID of the app to create the webhook for (default to undefined)
let subscribeWebhookDTO: SubscribeWebhookDTO; //Webhook details

const { status, data } = await apiInstance.createAppWebhookForApp(
    appUuid,
    subscribeWebhookDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **subscribeWebhookDTO** | **SubscribeWebhookDTO**| Webhook details | |
| **appUuid** | [**string**] | UUID of the app to create the webhook for | defaults to undefined|


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
|**200** | Webhook created successfully |  -  |
|**400** | Invalid input provided or app not installed |  -  |
|**404** | App not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createPrivateApp**
> CreateResponse createPrivateApp(createPrivateAppRequest)

Creates a new private app with the provided label and optional description. Private apps are automatically installed for the creating user\'s company. Returns the created app details as a CreateResponse wrapping an AppDTO.

### Example

```typescript
import {
    ApplicationsApi,
    Configuration,
    CreatePrivateAppRequest
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new ApplicationsApi(configuration);

let createPrivateAppRequest: CreatePrivateAppRequest; //

const { status, data } = await apiInstance.createPrivateApp(
    createPrivateAppRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createPrivateAppRequest** | **CreatePrivateAppRequest**|  | |


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
|**200** | Successfully created the private app |  -  |
|**400** | Invalid request data |  -  |
|**401** | Unauthorized access |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createPublicApp**
> CreateResponse createPublicApp(appDTO)

Creates a new public app with the provided label and optional description. Public apps are automatically published for the creating user\'s company. Returns the created app details as a CreateResponse wrapping an AppDTO.

### Example

```typescript
import {
    ApplicationsApi,
    Configuration,
    AppDTO
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new ApplicationsApi(configuration);

let appDTO: AppDTO; //

const { status, data } = await apiInstance.createPublicApp(
    appDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appDTO** | **AppDTO**|  | |


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
|**200** | Successfully created the public app |  -  |
|**400** | Invalid request data |  -  |
|**401** | Unauthorized access |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteAppWebhook**
> DeleteResponse deleteAppWebhook()

Deletes a webhook that belongs to the specified app and the authenticated user\'s selected company.

### Example

```typescript
import {
    ApplicationsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new ApplicationsApi(configuration);

let appUuid: string; //UUID of the app that owns the webhook (default to undefined)
let webhookUuid: string; //UUID of the webhook to delete (default to undefined)

const { status, data } = await apiInstance.deleteAppWebhook(
    appUuid,
    webhookUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appUuid** | [**string**] | UUID of the app that owns the webhook | defaults to undefined|
| **webhookUuid** | [**string**] | UUID of the webhook to delete | defaults to undefined|


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
|**200** | Webhook deleted successfully |  -  |
|**404** | Webhook not found for the specified app or company |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getApp**
> ShowResponse getApp()

Fetches details about an application specified by its UUID. Returns the application details as a ShowResponse wrapping an AppDetailDTO.

### Example

```typescript
import {
    ApplicationsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new ApplicationsApi(configuration);

let uuid: string; //UUID of the application to retrieve (default to undefined)

const { status, data } = await apiInstance.getApp(
    uuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uuid** | [**string**] | UUID of the application to retrieve | defaults to undefined|


### Return type

**ShowResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully retrieved application details |  -  |
|**404** | Application not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAppWebhooks**
> PaginationResponse getAppWebhooks(body)

Fetches a paginated and optionally filtered list of webhooks associated with the specified app and the authenticated user\'s selected company.

### Example

```typescript
import {
    ApplicationsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new ApplicationsApi(configuration);

let appUuid: string; //UUID of the application for which to retrieve webhooks (default to undefined)
let body: any; //

const { status, data } = await apiInstance.getAppWebhooks(
    appUuid,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **any**|  | |
| **appUuid** | [**string**] | UUID of the application for which to retrieve webhooks | defaults to undefined|


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
|**200** | Successfully retrieved the list of webhooks for the app |  -  |
|**400** | Invalid request data or app not installed for company |  -  |
|**401** | Unauthorized access |  -  |
|**404** | Application not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getApps**
> PaginationResponse getApps(body)

Fetches a paginated and optionally filtered list of applications. The list is sorted alphabetically by category and name. On success, returns a PaginationResponse containing AppSummaryDTO objects.

### Example

```typescript
import {
    ApplicationsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new ApplicationsApi(configuration);

let body: any; //
let type: string; // (optional) (default to '')
let installedOnly: boolean; // (optional) (default to false)

const { status, data } = await apiInstance.getApps(
    body,
    type,
    installedOnly
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **any**|  | |
| **type** | [**string**] |  | (optional) defaults to ''|
| **installedOnly** | [**boolean**] |  | (optional) defaults to false|


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
|**200** | Successfully retrieved the list of applications |  -  |
|**400** | Invalid request data |  -  |
|**401** | Unauthorized access |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCompanyInformation**
> SimplePublicCompanyDTO getCompanyInformation()

Retrieves the company information of the authenticated user. The response includes public details of the user\'s selected company.

### Example

```typescript
import {
    ApplicationsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new ApplicationsApi(configuration);

let appUuid: string; //UUID of the app to get the company information for (default to undefined)

const { status, data } = await apiInstance.getCompanyInformation(
    appUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appUuid** | [**string**] | UUID of the app to get the company information for | defaults to undefined|


### Return type

**SimplePublicCompanyDTO**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully retrieved company information |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getMyCreatedApps**
> PaginationResponse getMyCreatedApps(body)

Fetches a paginated and optionally filtered list of apps where the selected company is the creator. Returns a PaginationResponse containing AppDTO objects.

### Example

```typescript
import {
    ApplicationsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new ApplicationsApi(configuration);

let body: any; //

const { status, data } = await apiInstance.getMyCreatedApps(
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **any**|  | |


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
|**200** | Successfully retrieved creator apps |  -  |
|**400** | Invalid request data |  -  |
|**401** | Unauthorized access |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPublicApp**
> ShowResponse getPublicApp()

Gets the full app for the creator, including appPublish, appBars, details, and pricing. Returns AppCreatorDTO with everything under App.

### Example

```typescript
import {
    ApplicationsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new ApplicationsApi(configuration);

let uuid: string; //UUID of the public app to retrieve (default to undefined)

const { status, data } = await apiInstance.getPublicApp(
    uuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uuid** | [**string**] | UUID of the public app to retrieve | defaults to undefined|


### Return type

**ShowResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully retrieved the public app |  -  |
|**404** | Public app not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getWebhookEvents**
> getWebhookEvents()

Returns all supported record webhook events with their details.

### Example

```typescript
import {
    ApplicationsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new ApplicationsApi(configuration);

let appUuid: string; //UUID of the app to get the webhook events for (default to undefined)

const { status, data } = await apiInstance.getWebhookEvents(
    appUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appUuid** | [**string**] | UUID of the app to get the webhook events for | defaults to undefined|


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
|**200** | List of available webhook record events |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getWebhookFormats**
> getWebhookFormats()

Returns all supported webhook payload formats with their details.

### Example

```typescript
import {
    ApplicationsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new ApplicationsApi(configuration);

let appUuid: string; //UUID of the app to get the webhook formats for (default to undefined)

const { status, data } = await apiInstance.getWebhookFormats(
    appUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appUuid** | [**string**] | UUID of the app to get the webhook formats for | defaults to undefined|


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
|**200** | List of available webhook formats |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getWebhookPropertyTopics**
> getWebhookPropertyTopics()

Returns property names on an object that can be used in 4-part property_changed webhook topics.

### Example

```typescript
import {
    ApplicationsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new ApplicationsApi(configuration);

let appUuid: string; //UUID of the app (default to undefined)
let object: string; //Object name (e.g. contact) (default to undefined)

const { status, data } = await apiInstance.getWebhookPropertyTopics(
    appUuid,
    object
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appUuid** | [**string**] | UUID of the app | defaults to undefined|
| **object** | [**string**] | Object name (e.g. contact) | defaults to undefined|


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
|**200** | List of property names |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **installApp**
> ShowResponse installApp()

Installs the application specified by its UUID with optional initial configuration settings. Returns the updated application details as a ShowResponse wrapping an AppDTO.

### Example

```typescript
import {
    ApplicationsApi,
    Configuration,
    InstallAppRequest
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new ApplicationsApi(configuration);

let uuid: string; //UUID of the application to install (default to undefined)
let installAppRequest: InstallAppRequest; // (optional)

const { status, data } = await apiInstance.installApp(
    uuid,
    installAppRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **installAppRequest** | **InstallAppRequest**|  | |
| **uuid** | [**string**] | UUID of the application to install | defaults to undefined|


### Return type

**ShowResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully installed the application |  -  |
|**404** | Application not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listAppCategories**
> listAppCategories()

Returns the allowed category keys and labels for public app marketplace listings.

### Example

```typescript
import {
    ApplicationsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new ApplicationsApi(configuration);

const { status, data } = await apiInstance.listAppCategories();
```

### Parameters
This endpoint does not have any parameters.


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
|**200** | Successfully retrieved app categories |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **loadSettingOptions**
> ShowResponse loadSettingOptions(loadAppSettingOptionsRequest)

Invokes the app serverless function configured on the field\'s optionsSource and returns options for SINGLE_SELECT / MULTI_SELECT fields. Uses the draft settingsSchema from the installer UI so credentials entered in other fields are available to the loader.

### Example

```typescript
import {
    ApplicationsApi,
    Configuration,
    LoadAppSettingOptionsRequest
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new ApplicationsApi(configuration);

let uuid: string; //UUID of the application (default to undefined)
let loadAppSettingOptionsRequest: LoadAppSettingOptionsRequest; //Field name, optional query, and draft settings schema

const { status, data } = await apiInstance.loadSettingOptions(
    uuid,
    loadAppSettingOptionsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loadAppSettingOptionsRequest** | **LoadAppSettingOptionsRequest**| Field name, optional query, and draft settings schema | |
| **uuid** | [**string**] | UUID of the application | defaults to undefined|


### Return type

**ShowResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Options loaded successfully |  -  |
|**400** | Invalid request or dependsOn not satisfied |  -  |
|**403** | App not accessible |  -  |
|**404** | App, field, or serverless function not found |  -  |
|**502** | Serverless function failed or returned invalid response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reviewPublicApp**
> ShowResponse reviewPublicApp(reviewRequest)

Sets review outcome (approve/reject/changes requested), feedback, and optional reviewer notes. Returns the updated app details as a ShowResponse wrapping an AppDTO.

### Example

```typescript
import {
    ApplicationsApi,
    Configuration,
    ReviewRequest
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new ApplicationsApi(configuration);

let uuid: string; //UUID of the public app to review (default to undefined)
let reviewRequest: ReviewRequest; //

const { status, data } = await apiInstance.reviewPublicApp(
    uuid,
    reviewRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reviewRequest** | **ReviewRequest**|  | |
| **uuid** | [**string**] | UUID of the public app to review | defaults to undefined|


### Return type

**ShowResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully reviewed the public app |  -  |
|**404** | Public app not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rotateApp**
> ShowResponse rotateApp()

Rotates the configuration or settings for the specified application by UUID. On success, returns the updated application details as a ShowResponse wrapping an AppDTO.

### Example

```typescript
import {
    ApplicationsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new ApplicationsApi(configuration);

let uuid: string; //UUID of the application to rotate configurations (default to undefined)

const { status, data } = await apiInstance.rotateApp(
    uuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uuid** | [**string**] | UUID of the application to rotate configurations | defaults to undefined|


### Return type

**ShowResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully rotated application configurations |  -  |
|**404** | Application not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **submitPublicApp**
> ShowResponse submitPublicApp()

Submits a public app specified by its UUID for review. Returns the submitted app details as a ShowResponse wrapping an AppDTO.

### Example

```typescript
import {
    ApplicationsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new ApplicationsApi(configuration);

let uuid: string; //UUID of the public app to submit for review (default to undefined)

const { status, data } = await apiInstance.submitPublicApp(
    uuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uuid** | [**string**] | UUID of the public app to submit for review | defaults to undefined|


### Return type

**ShowResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully submitted the public app for review |  -  |
|**404** | Public app not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **testAppWebhook**
> testAppWebhook()

Generates a test webhook payload for a specific record and event type. Uses the same payload generation logic as live webhook delivery.

### Example

```typescript
import {
    ApplicationsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new ApplicationsApi(configuration);

let appUuid: string; //UUID of the app that owns the webhook (default to undefined)
let webhookUuid: string; //UUID of the webhook to test (default to undefined)
let recordUuid: string; //UUID of the record to include in the webhook payload (default to undefined)
let eventType: string; //Type of event to simulate. Supported values are the entries returned by /webhooks/events, or property_changed for property webhooks. (default to undefined)
let propertyName: string; //Property name when simulating property_changed (optional) (default to undefined)

const { status, data } = await apiInstance.testAppWebhook(
    appUuid,
    webhookUuid,
    recordUuid,
    eventType,
    propertyName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appUuid** | [**string**] | UUID of the app that owns the webhook | defaults to undefined|
| **webhookUuid** | [**string**] | UUID of the webhook to test | defaults to undefined|
| **recordUuid** | [**string**] | UUID of the record to include in the webhook payload | defaults to undefined|
| **eventType** | [**string**] | Type of event to simulate. Supported values are the entries returned by /webhooks/events, or property_changed for property webhooks. | defaults to undefined|
| **propertyName** | [**string**] | Property name when simulating property_changed | (optional) defaults to undefined|


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
|**200** | Webhook test payload generated successfully |  -  |
|**400** | Invalid event type or app not installed |  -  |
|**404** | Webhook not found for the specified app or company |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **testAppWebhookAuto**
> testAppWebhookAuto()

Generates a test webhook payload using the latest updated record for the webhook topic object and the event type from the webhook topic (uses updated when the topic action is all).

### Example

```typescript
import {
    ApplicationsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new ApplicationsApi(configuration);

let appUuid: string; //UUID of the app that owns the webhook (default to undefined)
let webhookUuid: string; //UUID of the webhook to test (default to undefined)

const { status, data } = await apiInstance.testAppWebhookAuto(
    appUuid,
    webhookUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appUuid** | [**string**] | UUID of the app that owns the webhook | defaults to undefined|
| **webhookUuid** | [**string**] | UUID of the webhook to test | defaults to undefined|


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
|**200** | Webhook test payload generated successfully |  -  |
|**400** | Webhook topic cannot be used for record testing |  -  |
|**404** | Webhook not found or no records available for the topic object |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **testAppWebhookUnsaved**
> testAppWebhookUnsaved(testWebhookRequest)

Generates a test webhook payload from webhook configuration supplied in the request body without persisting the webhook. When recordUuid is omitted, auto-resolves the record and event from the webhook topic (same as the saved-webhook auto test endpoint).

### Example

```typescript
import {
    ApplicationsApi,
    Configuration,
    TestWebhookRequest
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new ApplicationsApi(configuration);

let appUuid: string; //UUID of the app the webhook belongs to (default to undefined)
let testWebhookRequest: TestWebhookRequest; //Webhook configuration and optional test event parameters

const { status, data } = await apiInstance.testAppWebhookUnsaved(
    appUuid,
    testWebhookRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **testWebhookRequest** | **TestWebhookRequest**| Webhook configuration and optional test event parameters | |
| **appUuid** | [**string**] | UUID of the app the webhook belongs to | defaults to undefined|


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
|**200** | Webhook test payload generated successfully |  -  |
|**400** | Invalid webhook configuration or event parameters |  -  |
|**404** | App not found or no records available for auto-resolve |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **uninstallApp**
> ShowResponse uninstallApp(appRequest)

Removes the installed application specified by its UUID using the provided settings. The request body should contain an AppRequest with the uninstallation settings. Returns the updated application details as a ShowResponse wrapping an AppDTO.

### Example

```typescript
import {
    ApplicationsApi,
    Configuration,
    AppRequest
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new ApplicationsApi(configuration);

let uuid: string; //UUID of the application to uninstall (default to undefined)
let appRequest: AppRequest; //

const { status, data } = await apiInstance.uninstallApp(
    uuid,
    appRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appRequest** | **AppRequest**|  | |
| **uuid** | [**string**] | UUID of the application to uninstall | defaults to undefined|


### Return type

**ShowResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully uninstalled the application |  -  |
|**404** | Application not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateAppWebhookForApp**
> CreateResponse updateAppWebhookForApp(subscribeWebhookDTO)

Updates an existing webhook that belongs to the specified app and the authenticated user\'s selected company.

### Example

```typescript
import {
    ApplicationsApi,
    Configuration,
    SubscribeWebhookDTO
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new ApplicationsApi(configuration);

let appUuid: string; //UUID of the app that owns the webhook (default to undefined)
let webhookUuid: string; //UUID of the webhook to update (default to undefined)
let subscribeWebhookDTO: SubscribeWebhookDTO; //

const { status, data } = await apiInstance.updateAppWebhookForApp(
    appUuid,
    webhookUuid,
    subscribeWebhookDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **subscribeWebhookDTO** | **SubscribeWebhookDTO**|  | |
| **appUuid** | [**string**] | UUID of the app that owns the webhook | defaults to undefined|
| **webhookUuid** | [**string**] | UUID of the webhook to update | defaults to undefined|


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
|**200** | Webhook updated successfully |  -  |
|**400** | Invalid input provided or app not installed |  -  |
|**404** | Webhook not found for the specified app or company |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updatePublicApp**
> ShowResponse updatePublicApp(appDTO)

Updates a public app with the full creator payload (label, description, details, pricing, settingsSchema, appBars). Send the entire AppCreatorDTO as returned by GET. Returns the updated app as AppCreatorDTO.

### Example

```typescript
import {
    ApplicationsApi,
    Configuration,
    AppDTO
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new ApplicationsApi(configuration);

let uuid: string; //UUID of the public app to update (default to undefined)
let appDTO: AppDTO; //

const { status, data } = await apiInstance.updatePublicApp(
    uuid,
    appDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appDTO** | **AppDTO**|  | |
| **uuid** | [**string**] | UUID of the public app to update | defaults to undefined|


### Return type

**ShowResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully updated the public app |  -  |
|**404** | Public app not found |  -  |
|**403** | You are not allowed to update this app |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

