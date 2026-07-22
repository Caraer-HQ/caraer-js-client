# WebpagesApi

All URIs are relative to *https://v2.api.caraer.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**claimTemplateWebpageEditingSession**](#claimtemplatewebpageeditingsession) | **POST** /api/v2/webpages/template/{objectName}/{environment}/editing-session | Claim a template webpage editing session|
|[**claimWebpageEditingSession**](#claimwebpageeditingsession) | **POST** /api/v2/webpages/{uuid}/editing-session | Claim a webpage editing session|
|[**copyPropertyToEnvironments**](#copypropertytoenvironments) | **POST** /api/v2/webpages/environments/properties | Copy properties to environments|
|[**copyTemplateWebpage**](#copytemplatewebpage) | **POST** /api/v2/webpages/template/{objectName}/copy/{fromEnvironment}/{toEnvironment} | Copy a template webpage from one environment to another|
|[**copyWebpage**](#copywebpage) | **POST** /api/v2/webpages/{uuid}/copy/{fromEnvironment}/{toEnvironment} | Copy a webpage from one environment to another|
|[**createEnvironments**](#createenvironments) | **POST** /api/v2/webpages/environments | Create an environment|
|[**createOrUpdateTemplateWebpage**](#createorupdatetemplatewebpage) | **POST** /api/v2/webpages/template/{objectName}/{environment} | Create or update template webpage|
|[**createSignedUrl**](#createsignedurl) | **POST** /api/v2/webpages/{uuid}/protection/signed-url | Generate signed URL for protected webpage|
|[**createWebpage**](#createwebpage) | **POST** /api/v2/webpages/ | Create a new webpage|
|[**deleteEnvironment**](#deleteenvironment) | **DELETE** /api/v2/webpages/environments/{environment} | Delete an environment|
|[**getAllSlugs**](#getallslugs) | **GET** /api/v2/webpages/public/getSlugs | Get all public webpage slugs|
|[**getCompanySettings**](#getcompanysettings) | **GET** /api/v2/webpages/public/companySettings | Fetch public company settings|
|[**getEnvironments**](#getenvironments) | **GET** /api/v2/webpages/environments | Get all environments|
|[**getMenus**](#getmenus) | **GET** /api/v2/webpages/public/getMenus | Fetch public web menus|
|[**getPublicCustomFooterModule**](#getpubliccustomfootermodule) | **GET** /api/v2/webpages/public/module/{moduleUuid} | Fetch public custom footer module|
|[**getPublicPreviews**](#getpublicpreviews) | **POST** /api/v2/webpages/public/previews/{pageUuid}/{componentUuid}/{layout} | Get previews for a public webpage|
|[**getPublicWebpage**](#getpublicwebpage) | **GET** /api/v2/webpages/public/{rootSlug}/{slug} | Get a public webpage by slug|
|[**getPublicWebpageByUuid**](#getpublicwebpagebyuuid) | **GET** /api/v2/webpages/public/uuid/{uuid} | Get a public webpage by UUID|
|[**getPublicWebpageProtection**](#getpublicwebpageprotection) | **GET** /api/v2/webpages/public/uuid/{uuid}/protection | Get webpage protection metadata|
|[**getTemplateWebpage**](#gettemplatewebpage) | **GET** /api/v2/webpages/template/{objectName}/{environment} | Get template webpage|
|[**getTemplateWebpageEditingStatus**](#gettemplatewebpageeditingstatus) | **GET** /api/v2/webpages/template/{objectName}/{environment}/editing-status | Check if a template webpage is being edited|
|[**getWebpage**](#getwebpage) | **GET** /api/v2/webpages/{uuid} | Get webpage details|
|[**getWebpageEditingStatus**](#getwebpageeditingstatus) | **GET** /api/v2/webpages/{uuid}/editing-status | Check if a webpage is being edited|
|[**getWebpagePickerPages**](#getwebpagepickerpages) | **GET** /api/v2/webpages/picker/pages | List webpages for picker dropdowns|
|[**listProtectionGrants**](#listprotectiongrants) | **GET** /api/v2/webpages/{uuid}/protection/grants | List signed URL grants for a webpage|
|[**publishWebpage**](#publishwebpage) | **PUT** /api/v2/webpages/{uuid}/publish | Publish a webpage|
|[**releaseTemplateWebpageEditingSession**](#releasetemplatewebpageeditingsession) | **DELETE** /api/v2/webpages/template/{objectName}/{environment}/editing-session | Release a template webpage editing session|
|[**releaseWebpageEditingSession**](#releasewebpageeditingsession) | **DELETE** /api/v2/webpages/{uuid}/editing-session | Release a webpage editing session|
|[**revokeProtectionGrant**](#revokeprotectiongrant) | **DELETE** /api/v2/webpages/{uuid}/protection/grants/{grantUuid} | Revoke a signed URL grant|
|[**unlockPublicWebpage**](#unlockpublicwebpage) | **POST** /api/v2/webpages/public/uuid/{uuid}/unlock | Unlock password-protected webpage|
|[**unpublishWebpage**](#unpublishwebpage) | **PUT** /api/v2/webpages/{uuid}/unpublish | Unpublish a webpage|
|[**updateWebpage**](#updatewebpage) | **PUT** /api/v2/webpages/{uuid} | Update a webpage|
|[**uploadFile**](#uploadfile) | **POST** /api/v2/webpages/{uuid}/uploadFile | Upload a file for a webpage|
|[**uploadFile1**](#uploadfile1) | **POST** /api/v2/webpages/uploadFile | Upload a file|

# **claimTemplateWebpageEditingSession**
> WebpageEditingStatusDTO claimTemplateWebpageEditingSession()

Registers the current user as editing the template webpage so other users are blocked from opening the builder.

### Example

```typescript
import {
    WebpagesApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new WebpagesApi(configuration);

let objectName: string; // (default to undefined)
let environment: string; // (default to undefined)

const { status, data } = await apiInstance.claimTemplateWebpageEditingSession(
    objectName,
    environment
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **objectName** | [**string**] |  | defaults to undefined|
| **environment** | [**string**] |  | defaults to undefined|


### Return type

**WebpageEditingStatusDTO**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Editing session claimed or blocked |  -  |
|**404** | Template webpage not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **claimWebpageEditingSession**
> WebpageEditingStatusDTO claimWebpageEditingSession()

Registers the current user as editing this webpage so other users are blocked from opening the builder.

### Example

```typescript
import {
    WebpagesApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new WebpagesApi(configuration);

let uuid: string; // (default to undefined)
let environment: string; // (optional) (default to 'staging')

const { status, data } = await apiInstance.claimWebpageEditingSession(
    uuid,
    environment
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uuid** | [**string**] |  | defaults to undefined|
| **environment** | [**string**] |  | (optional) defaults to 'staging'|


### Return type

**WebpageEditingStatusDTO**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Editing session claimed |  -  |
|**403** | Missing write access on webpage fields for this environment |  -  |
|**404** | Webpage not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **copyPropertyToEnvironments**
> ShowResponse copyPropertyToEnvironments(copyPropertyToEnvironmentsRequest)

Copies selected properties for the chosen environments (e.g. production_title → german_production_title).

### Example

```typescript
import {
    WebpagesApi,
    Configuration,
    CopyPropertyToEnvironmentsRequest
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new WebpagesApi(configuration);

let copyPropertyToEnvironmentsRequest: CopyPropertyToEnvironmentsRequest; //

const { status, data } = await apiInstance.copyPropertyToEnvironments(
    copyPropertyToEnvironmentsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **copyPropertyToEnvironmentsRequest** | **CopyPropertyToEnvironmentsRequest**|  | |


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
|**200** | Environment properties copied successfully |  -  |
|**400** | Invalid input data |  -  |
|**404** | Object or property not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **copyTemplateWebpage**
> CreateResponse copyTemplateWebpage()

Copies a template webpage by object name from one environment to another. Returns a CreateResponse containing the copied template webpage as a TemplateWebpageDTO.

### Example

```typescript
import {
    WebpagesApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new WebpagesApi(configuration);

let objectName: string; // (default to undefined)
let fromEnvironment: string; // (default to undefined)
let toEnvironment: string; // (default to undefined)

const { status, data } = await apiInstance.copyTemplateWebpage(
    objectName,
    fromEnvironment,
    toEnvironment
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **objectName** | [**string**] |  | defaults to undefined|
| **fromEnvironment** | [**string**] |  | defaults to undefined|
| **toEnvironment** | [**string**] |  | defaults to undefined|


### Return type

**CreateResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Template webpage copied successfully |  -  |
|**404** | Template webpage not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **copyWebpage**
> CreateResponse copyWebpage()

Copies a webpage by its UUID from one environment to another. Returns a CreateResponse containing the copied webpage as a WebpageDTO.

### Example

```typescript
import {
    WebpagesApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new WebpagesApi(configuration);

let uuid: string; // (default to undefined)
let fromEnvironment: string; // (default to undefined)
let toEnvironment: string; // (default to undefined)

const { status, data } = await apiInstance.copyWebpage(
    uuid,
    fromEnvironment,
    toEnvironment
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uuid** | [**string**] |  | defaults to undefined|
| **fromEnvironment** | [**string**] |  | defaults to undefined|
| **toEnvironment** | [**string**] |  | defaults to undefined|


### Return type

**CreateResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Webpage copied successfully |  -  |
|**404** | Webpage not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createEnvironments**
> ShowResponse createEnvironments(createOrUpdateEnvironmentRequest)

Creates an environment.

### Example

```typescript
import {
    WebpagesApi,
    Configuration,
    CreateOrUpdateEnvironmentRequest
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new WebpagesApi(configuration);

let createOrUpdateEnvironmentRequest: CreateOrUpdateEnvironmentRequest; //

const { status, data } = await apiInstance.createEnvironments(
    createOrUpdateEnvironmentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createOrUpdateEnvironmentRequest** | **CreateOrUpdateEnvironmentRequest**|  | |


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
|**200** | Environments created or updated successfully |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createOrUpdateTemplateWebpage**
> UpdateResponse createOrUpdateTemplateWebpage(templateWebpageDTO)

Creates a new or updates an existing template webpage for the specified object. An event is published after the template is changed. Returns an UpdateResponse or CreateResponse with the template webpage details.

### Example

```typescript
import {
    WebpagesApi,
    Configuration,
    TemplateWebpageDTO
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new WebpagesApi(configuration);

let objectName: string; // (default to undefined)
let environment: string; // (default to undefined)
let templateWebpageDTO: TemplateWebpageDTO; //Template webpage details

const { status, data } = await apiInstance.createOrUpdateTemplateWebpage(
    objectName,
    environment,
    templateWebpageDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **templateWebpageDTO** | **TemplateWebpageDTO**| Template webpage details | |
| **objectName** | [**string**] |  | defaults to undefined|
| **environment** | [**string**] |  | defaults to undefined|


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
|**200** | Template webpage updated successfully |  -  |
|**201** | Template webpage created successfully |  -  |
|**404** | Template webpage not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createSignedUrl**
> CreateResponseSignedUrlResultDTO createSignedUrl()


### Example

```typescript
import {
    WebpagesApi,
    Configuration,
    CreateSignedUrlRequest
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new WebpagesApi(configuration);

let uuid: string; // (default to undefined)
let environment: string; // (optional) (default to 'staging')
let createSignedUrlRequest: CreateSignedUrlRequest; // (optional)

const { status, data } = await apiInstance.createSignedUrl(
    uuid,
    environment,
    createSignedUrlRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createSignedUrlRequest** | **CreateSignedUrlRequest**|  | |
| **uuid** | [**string**] |  | defaults to undefined|
| **environment** | [**string**] |  | (optional) defaults to 'staging'|


### Return type

**CreateResponseSignedUrlResultDTO**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createWebpage**
> CreateResponse createWebpage(webpageDTO)

Creates a new webpage using the provided webpage details. Returns a CreateResponse containing the newly created webpage as a WebpageDTO. Validation: Webpage fields are validated according to the Webpage validation rules. Required fields and format constraints are enforced.

### Example

```typescript
import {
    WebpagesApi,
    Configuration,
    WebpageDTO
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new WebpagesApi(configuration);

let webpageDTO: WebpageDTO; //Webpage details
let environment: string; // (optional) (default to 'staging')

const { status, data } = await apiInstance.createWebpage(
    webpageDTO,
    environment
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webpageDTO** | **WebpageDTO**| Webpage details | |
| **environment** | [**string**] |  | (optional) defaults to 'staging'|


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
|**201** | Webpage created successfully |  -  |
|**400** | Invalid input data |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteEnvironment**
> ShowResponse deleteEnvironment()

Soft deletes an environment.

### Example

```typescript
import {
    WebpagesApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new WebpagesApi(configuration);

let environment: string; // (default to undefined)

const { status, data } = await apiInstance.deleteEnvironment(
    environment
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **environment** | [**string**] |  | defaults to undefined|


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
|**200** | Environment deleted successfully |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAllSlugs**
> PaginationResponse getAllSlugs()

Retrieves a list of all webpage slugs for the public site. Returns a PaginationResponse containing WebpageMapItemDTO objects.

### Example

```typescript
import {
    WebpagesApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new WebpagesApi(configuration);

let xCaraerSubdomain: string; // (default to undefined)
let xCaraerEnvironment: string; // (optional) (default to 'production')
let xCaraerPrimaryEnvironment: string; // (optional) (default to 'production')

const { status, data } = await apiInstance.getAllSlugs(
    xCaraerSubdomain,
    xCaraerEnvironment,
    xCaraerPrimaryEnvironment
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **xCaraerSubdomain** | [**string**] |  | defaults to undefined|
| **xCaraerEnvironment** | [**string**] |  | (optional) defaults to 'production'|
| **xCaraerPrimaryEnvironment** | [**string**] |  | (optional) defaults to 'production'|


### Return type

**PaginationResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Slugs retrieved successfully |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCompanySettings**
> SimplePublicCompanyDTO getCompanySettings()

Retrieves the public company configuration for the given subdomain. Returns a ShowResponse containing PublicCompanyDTO details.

### Example

```typescript
import {
    WebpagesApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new WebpagesApi(configuration);

let xCaraerSubdomain: string; // (default to undefined)
let xCaraerEnvironment: string; // (optional) (default to 'production')
let xCaraerPrimaryEnvironment: string; // (optional) (default to 'production')

const { status, data } = await apiInstance.getCompanySettings(
    xCaraerSubdomain,
    xCaraerEnvironment,
    xCaraerPrimaryEnvironment
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **xCaraerSubdomain** | [**string**] |  | defaults to undefined|
| **xCaraerEnvironment** | [**string**] |  | (optional) defaults to 'production'|
| **xCaraerPrimaryEnvironment** | [**string**] |  | (optional) defaults to 'production'|


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
|**200** | Company settings retrieved successfully |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getEnvironments**
> ShowResponse getEnvironments()

Retrieves a list of all environments.

### Example

```typescript
import {
    WebpagesApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new WebpagesApi(configuration);

const { status, data } = await apiInstance.getEnvironments();
```

### Parameters
This endpoint does not have any parameters.


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
|**200** | Environments retrieved successfully |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getMenus**
> PaginationResponse getMenus()

Retrieves a list of web menus for the public site. Returns a PaginationResponse containing WebMenuDTO objects.

### Example

```typescript
import {
    WebpagesApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new WebpagesApi(configuration);

let xCaraerSubdomain: string; // (default to undefined)
let xCaraerEnvironment: string; // (optional) (default to 'production')
let xCaraerPrimaryEnvironment: string; // (optional) (default to 'production')

const { status, data } = await apiInstance.getMenus(
    xCaraerSubdomain,
    xCaraerEnvironment,
    xCaraerPrimaryEnvironment
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **xCaraerSubdomain** | [**string**] |  | defaults to undefined|
| **xCaraerEnvironment** | [**string**] |  | (optional) defaults to 'production'|
| **xCaraerPrimaryEnvironment** | [**string**] |  | (optional) defaults to 'production'|


### Return type

**PaginationResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Menus retrieved successfully |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPublicCustomFooterModule**
> ShowResponse getPublicCustomFooterModule()

Returns the PageContent tree for the module configured as custom footer when enabled. Requires X-Caraer-Subdomain; only the UUID configured in website settings is accessible.

### Example

```typescript
import {
    WebpagesApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new WebpagesApi(configuration);

let xCaraerSubdomain: string; // (default to undefined)
let moduleUuid: string; // (default to undefined)

const { status, data } = await apiInstance.getPublicCustomFooterModule(
    xCaraerSubdomain,
    moduleUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **xCaraerSubdomain** | [**string**] |  | defaults to undefined|
| **moduleUuid** | [**string**] |  | defaults to undefined|


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
|**200** | Module retrieved successfully |  -  |
|**404** | Module not found or not exposed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPublicPreviews**
> PaginationResponsePreviewDTO getPublicPreviews()

Retrieves a list of previews for a public webpage identified by its UUID. Returns a PaginationResponse containing PreviewDTO objects.

### Example

```typescript
import {
    WebpagesApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new WebpagesApi(configuration);

let xCaraerSubdomain: string; // (default to undefined)
let pageUuid: string; // (default to undefined)
let componentUuid: string; // (default to undefined)
let layout: string; // (default to undefined)
let xCaraerEnvironment: string; // (optional) (default to 'production')
let xCaraerPrimaryEnvironment: string; // (optional) (default to 'production')
let authorization: string; // (optional) (default to undefined)
let xCaraerWebpageAccess: string; // (optional) (default to undefined)
let access: string; // (optional) (default to undefined)
let token: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getPublicPreviews(
    xCaraerSubdomain,
    pageUuid,
    componentUuid,
    layout,
    xCaraerEnvironment,
    xCaraerPrimaryEnvironment,
    authorization,
    xCaraerWebpageAccess,
    access,
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **xCaraerSubdomain** | [**string**] |  | defaults to undefined|
| **pageUuid** | [**string**] |  | defaults to undefined|
| **componentUuid** | [**string**] |  | defaults to undefined|
| **layout** | [**string**] |  | defaults to undefined|
| **xCaraerEnvironment** | [**string**] |  | (optional) defaults to 'production'|
| **xCaraerPrimaryEnvironment** | [**string**] |  | (optional) defaults to 'production'|
| **authorization** | [**string**] |  | (optional) defaults to undefined|
| **xCaraerWebpageAccess** | [**string**] |  | (optional) defaults to undefined|
| **access** | [**string**] |  | (optional) defaults to undefined|
| **token** | [**string**] |  | (optional) defaults to undefined|


### Return type

**PaginationResponsePreviewDTO**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPublicWebpage**
> WebpageDTO getPublicWebpage()

Retrieves a published webpage based on the provided root slug and slug. Returns a ShowResponse containing WebpageDTO data.

### Example

```typescript
import {
    WebpagesApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new WebpagesApi(configuration);

let xCaraerSubdomain: string; // (default to undefined)
let rootSlug: string; // (default to undefined)
let slug: string; // (default to undefined)
let xCaraerEnvironment: string; // (optional) (default to 'production')
let xCaraerPrimaryEnvironment: string; // (optional) (default to 'production')
let authorization: string; // (optional) (default to undefined)
let xCaraerWebpageAccess: string; // (optional) (default to undefined)
let access: string; // (optional) (default to undefined)
let token: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getPublicWebpage(
    xCaraerSubdomain,
    rootSlug,
    slug,
    xCaraerEnvironment,
    xCaraerPrimaryEnvironment,
    authorization,
    xCaraerWebpageAccess,
    access,
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **xCaraerSubdomain** | [**string**] |  | defaults to undefined|
| **rootSlug** | [**string**] |  | defaults to undefined|
| **slug** | [**string**] |  | defaults to undefined|
| **xCaraerEnvironment** | [**string**] |  | (optional) defaults to 'production'|
| **xCaraerPrimaryEnvironment** | [**string**] |  | (optional) defaults to 'production'|
| **authorization** | [**string**] |  | (optional) defaults to undefined|
| **xCaraerWebpageAccess** | [**string**] |  | (optional) defaults to undefined|
| **access** | [**string**] |  | (optional) defaults to undefined|
| **token** | [**string**] |  | (optional) defaults to undefined|


### Return type

**WebpageDTO**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Webpage retrieved successfully |  -  |
|**404** | Webpage not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPublicWebpageByUuid**
> WebpageDTO getPublicWebpageByUuid()

Retrieves a published webpage based on its UUID. Returns a ShowResponse containing WebpageDTO data.

### Example

```typescript
import {
    WebpagesApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new WebpagesApi(configuration);

let xCaraerSubdomain: string; // (default to undefined)
let uuid: string; // (default to undefined)
let xCaraerEnvironment: string; // (optional) (default to 'production')
let xCaraerPrimaryEnvironment: string; // (optional) (default to 'production')
let authorization: string; // (optional) (default to undefined)
let xCaraerWebpageAccess: string; // (optional) (default to undefined)
let access: string; // (optional) (default to undefined)
let token: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getPublicWebpageByUuid(
    xCaraerSubdomain,
    uuid,
    xCaraerEnvironment,
    xCaraerPrimaryEnvironment,
    authorization,
    xCaraerWebpageAccess,
    access,
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **xCaraerSubdomain** | [**string**] |  | defaults to undefined|
| **uuid** | [**string**] |  | defaults to undefined|
| **xCaraerEnvironment** | [**string**] |  | (optional) defaults to 'production'|
| **xCaraerPrimaryEnvironment** | [**string**] |  | (optional) defaults to 'production'|
| **authorization** | [**string**] |  | (optional) defaults to undefined|
| **xCaraerWebpageAccess** | [**string**] |  | (optional) defaults to undefined|
| **access** | [**string**] |  | (optional) defaults to undefined|
| **token** | [**string**] |  | (optional) defaults to undefined|


### Return type

**WebpageDTO**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Webpage retrieved successfully |  -  |
|**404** | Webpage not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPublicWebpageProtection**
> ShowResponseWebpageProtectionInfoDTO getPublicWebpageProtection()

Returns protection requirements without page content.

### Example

```typescript
import {
    WebpagesApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new WebpagesApi(configuration);

let xCaraerSubdomain: string; // (default to undefined)
let uuid: string; // (default to undefined)
let xCaraerEnvironment: string; // (optional) (default to 'production')
let xCaraerPrimaryEnvironment: string; // (optional) (default to 'production')

const { status, data } = await apiInstance.getPublicWebpageProtection(
    xCaraerSubdomain,
    uuid,
    xCaraerEnvironment,
    xCaraerPrimaryEnvironment
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **xCaraerSubdomain** | [**string**] |  | defaults to undefined|
| **uuid** | [**string**] |  | defaults to undefined|
| **xCaraerEnvironment** | [**string**] |  | (optional) defaults to 'production'|
| **xCaraerPrimaryEnvironment** | [**string**] |  | (optional) defaults to 'production'|


### Return type

**ShowResponseWebpageProtectionInfoDTO**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getTemplateWebpage**
> ShowResponse getTemplateWebpage()

Retrieves the template webpage for the given object name by querying the TemplateWebpage associated with it. Returns a ShowResponse containing TemplateWebpageDTO data.

### Example

```typescript
import {
    WebpagesApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new WebpagesApi(configuration);

let objectName: string; // (default to undefined)
let environment: string; // (default to undefined)

const { status, data } = await apiInstance.getTemplateWebpage(
    objectName,
    environment
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **objectName** | [**string**] |  | defaults to undefined|
| **environment** | [**string**] |  | defaults to undefined|


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
|**200** | Template webpage retrieved successfully |  -  |
|**404** | Template webpage not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getTemplateWebpageEditingStatus**
> WebpageEditingStatusDTO getTemplateWebpageEditingStatus()

Returns whether another user is actively editing the template webpage for the given object and environment.

### Example

```typescript
import {
    WebpagesApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new WebpagesApi(configuration);

let objectName: string; // (default to undefined)
let environment: string; // (default to undefined)

const { status, data } = await apiInstance.getTemplateWebpageEditingStatus(
    objectName,
    environment
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **objectName** | [**string**] |  | defaults to undefined|
| **environment** | [**string**] |  | defaults to undefined|


### Return type

**WebpageEditingStatusDTO**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Editing status retrieved successfully |  -  |
|**404** | Template webpage not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getWebpage**
> WebpageDTO getWebpage()

Retrieves detailed information for a webpage identified by its UUID. Optionally, the webpage title is \'smartened\' if the smartened parameter is true.

### Example

```typescript
import {
    WebpagesApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new WebpagesApi(configuration);

let uuid: string; // (default to undefined)
let smartened: boolean; // (optional) (default to false)
let environment: string; // (optional) (default to 'staging')

const { status, data } = await apiInstance.getWebpage(
    uuid,
    smartened,
    environment
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uuid** | [**string**] |  | defaults to undefined|
| **smartened** | [**boolean**] |  | (optional) defaults to false|
| **environment** | [**string**] |  | (optional) defaults to 'staging'|


### Return type

**WebpageDTO**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Webpage retrieved successfully |  -  |
|**403** | Missing read access on one or more webpage fields for this environment |  -  |
|**404** | Webpage not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getWebpageEditingStatus**
> WebpageEditingStatusDTO getWebpageEditingStatus()

Returns whether another user is actively editing this webpage (via an open builder session or collaborative WebSocket connection).

### Example

```typescript
import {
    WebpagesApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new WebpagesApi(configuration);

let uuid: string; // (default to undefined)
let environment: string; // (optional) (default to 'staging')

const { status, data } = await apiInstance.getWebpageEditingStatus(
    uuid,
    environment
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uuid** | [**string**] |  | defaults to undefined|
| **environment** | [**string**] |  | (optional) defaults to 'staging'|


### Return type

**WebpageEditingStatusDTO**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Editing status retrieved successfully |  -  |
|**403** | Missing read access on webpage fields for this environment |  -  |
|**404** | Webpage not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getWebpagePickerPages**
> ShowResponse getWebpagePickerPages()

Returns uuid and title for all webpage records across objects with a Page trait. Supports optional filters for published pages and excluding template-related pages.

### Example

```typescript
import {
    WebpagesApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new WebpagesApi(configuration);

let environment: string; //Environment to resolve webpage properties from (e.g. \'production\' or \'staging\'). (optional) (default to 'production')
let publishedOnly: boolean; //When true, only returns pages that are published in the given environment. (optional) (default to false)
let excludeTemplateRelated: boolean; //When true, excludes pages whose options mark them as related to a template. (optional) (default to false)

const { status, data } = await apiInstance.getWebpagePickerPages(
    environment,
    publishedOnly,
    excludeTemplateRelated
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **environment** | [**string**] | Environment to resolve webpage properties from (e.g. \&#39;production\&#39; or \&#39;staging\&#39;). | (optional) defaults to 'production'|
| **publishedOnly** | [**boolean**] | When true, only returns pages that are published in the given environment. | (optional) defaults to false|
| **excludeTemplateRelated** | [**boolean**] | When true, excludes pages whose options mark them as related to a template. | (optional) defaults to false|


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
|**200** | Webpages retrieved successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listProtectionGrants**
> PaginationResponseWebpageAccessGrantDTO listProtectionGrants()


### Example

```typescript
import {
    WebpagesApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new WebpagesApi(configuration);

let uuid: string; // (default to undefined)
let environment: string; // (optional) (default to 'staging')

const { status, data } = await apiInstance.listProtectionGrants(
    uuid,
    environment
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uuid** | [**string**] |  | defaults to undefined|
| **environment** | [**string**] |  | (optional) defaults to 'staging'|


### Return type

**PaginationResponseWebpageAccessGrantDTO**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **publishWebpage**
> UpdateResponse publishWebpage()

Publishes a webpage by its UUID. Optionally, a publish_at timestamp (in seconds) may be provided. Returns an UpdateResponse containing the published webpage details.

### Example

```typescript
import {
    WebpagesApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new WebpagesApi(configuration);

let uuid: string; // (default to undefined)
let publishAt: string; // (optional) (default to undefined)
let environment: string; // (optional) (default to 'production')

const { status, data } = await apiInstance.publishWebpage(
    uuid,
    publishAt,
    environment
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uuid** | [**string**] |  | defaults to undefined|
| **publishAt** | [**string**] |  | (optional) defaults to undefined|
| **environment** | [**string**] |  | (optional) defaults to 'production'|


### Return type

**UpdateResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Webpage published successfully |  -  |
|**400** | Webpage failed publish validation |  -  |
|**403** | Missing read or write access on webpage property fields for this environment |  -  |
|**404** | Webpage not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **releaseTemplateWebpageEditingSession**
> ShowResponse releaseTemplateWebpageEditingSession()

Releases the editing session held by the current user for this template webpage.

### Example

```typescript
import {
    WebpagesApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new WebpagesApi(configuration);

let objectName: string; // (default to undefined)
let environment: string; // (default to undefined)

const { status, data } = await apiInstance.releaseTemplateWebpageEditingSession(
    objectName,
    environment
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **objectName** | [**string**] |  | defaults to undefined|
| **environment** | [**string**] |  | defaults to undefined|


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
|**200** | Editing session released |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **releaseWebpageEditingSession**
> ShowResponse releaseWebpageEditingSession()

Releases the editing session held by the current user for this webpage.

### Example

```typescript
import {
    WebpagesApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new WebpagesApi(configuration);

let uuid: string; // (default to undefined)

const { status, data } = await apiInstance.releaseWebpageEditingSession(
    uuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uuid** | [**string**] |  | defaults to undefined|


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
|**200** | Editing session released |  -  |
|**404** | Webpage not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **revokeProtectionGrant**
> SuccessResponseString revokeProtectionGrant()


### Example

```typescript
import {
    WebpagesApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new WebpagesApi(configuration);

let uuid: string; // (default to undefined)
let grantUuid: string; // (default to undefined)
let environment: string; // (optional) (default to 'staging')

const { status, data } = await apiInstance.revokeProtectionGrant(
    uuid,
    grantUuid,
    environment
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uuid** | [**string**] |  | defaults to undefined|
| **grantUuid** | [**string**] |  | defaults to undefined|
| **environment** | [**string**] |  | (optional) defaults to 'staging'|


### Return type

**SuccessResponseString**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **unlockPublicWebpage**
> SuccessResponseString unlockPublicWebpage(webpageUnlockRequest)

Validates password and returns a short-lived access token.

### Example

```typescript
import {
    WebpagesApi,
    Configuration,
    WebpageUnlockRequest
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new WebpagesApi(configuration);

let xCaraerSubdomain: string; // (default to undefined)
let uuid: string; // (default to undefined)
let webpageUnlockRequest: WebpageUnlockRequest; //
let xCaraerEnvironment: string; // (optional) (default to 'production')
let xCaraerPrimaryEnvironment: string; // (optional) (default to 'production')

const { status, data } = await apiInstance.unlockPublicWebpage(
    xCaraerSubdomain,
    uuid,
    webpageUnlockRequest,
    xCaraerEnvironment,
    xCaraerPrimaryEnvironment
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webpageUnlockRequest** | **WebpageUnlockRequest**|  | |
| **xCaraerSubdomain** | [**string**] |  | defaults to undefined|
| **uuid** | [**string**] |  | defaults to undefined|
| **xCaraerEnvironment** | [**string**] |  | (optional) defaults to 'production'|
| **xCaraerPrimaryEnvironment** | [**string**] |  | (optional) defaults to 'production'|


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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **unpublishWebpage**
> UpdateResponse unpublishWebpage()

Unpublishes a webpage by its UUID. Optionally, an unpublishAt timestamp (in seconds) may be provided. Returns an UpdateResponse containing the unpublished webpage details.

### Example

```typescript
import {
    WebpagesApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new WebpagesApi(configuration);

let uuid: string; // (default to undefined)
let unpublishAt: string; // (optional) (default to undefined)
let environment: string; // (optional) (default to 'production')

const { status, data } = await apiInstance.unpublishWebpage(
    uuid,
    unpublishAt,
    environment
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uuid** | [**string**] |  | defaults to undefined|
| **unpublishAt** | [**string**] |  | (optional) defaults to undefined|
| **environment** | [**string**] |  | (optional) defaults to 'production'|


### Return type

**UpdateResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Webpage unpublished successfully |  -  |
|**404** | Webpage not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateWebpage**
> UpdateResponse updateWebpage(webpageDTO)

Updates an existing webpage identified by its UUID using the provided webpage details. Returns an UpdateResponse containing the updated webpage as a WebpageDTO. Validation: Webpage fields are validated according to the Webpage validation rules. Required fields and format constraints are enforced.

### Example

```typescript
import {
    WebpagesApi,
    Configuration,
    WebpageDTO
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new WebpagesApi(configuration);

let uuid: string; // (default to undefined)
let webpageDTO: WebpageDTO; //Webpage details
let environment: string; // (optional) (default to 'staging')

const { status, data } = await apiInstance.updateWebpage(
    uuid,
    webpageDTO,
    environment
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webpageDTO** | **WebpageDTO**| Webpage details | |
| **uuid** | [**string**] |  | defaults to undefined|
| **environment** | [**string**] |  | (optional) defaults to 'staging'|


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
|**200** | Webpage updated successfully |  -  |
|**400** | Invalid input data |  -  |
|**403** | Missing write access on one or more webpage fields for this environment |  -  |
|**404** | Webpage not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **uploadFile**
> SuccessResponse uploadFile()

Uploads a file to S3 storage under the specified webpage\'s attachments folder, sets the file\'s ACL to public, and returns the public URL for the file in a SuccessResponse.

### Example

```typescript
import {
    WebpagesApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new WebpagesApi(configuration);

let uuid: string; // (default to undefined)

const { status, data } = await apiInstance.uploadFile(
    uuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uuid** | [**string**] |  | defaults to undefined|


### Return type

**SuccessResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | File uploaded successfully |  -  |
|**400** | Invalid file provided |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **uploadFile1**
> SuccessResponse uploadFile1()

Uploads a file to S3 storage and returns the public URL for the file in a SuccessResponse.

### Example

```typescript
import {
    WebpagesApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new WebpagesApi(configuration);

let file: File; // (default to undefined)

const { status, data } = await apiInstance.uploadFile1(
    file
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **file** | [**File**] |  | defaults to undefined|


### Return type

**SuccessResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | File uploaded successfully |  -  |
|**400** | Invalid file provided |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

