# CompanyApi

All URIs are relative to *https://v2.api.caraer.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createCompany**](#createcompany) | **POST** /api/v2/company/ | Create a new company|
|[**getCompany**](#getcompany) | **GET** /api/v2/company/ | Get current company|
|[**getCompanyByUuid**](#getcompanybyuuid) | **GET** /api/v2/company/{uuid} | Get company by UUID|
|[**getDigitalIdentity**](#getdigitalidentity) | **GET** /api/v2/company/digital-identity | Get digital identity|
|[**getWebsiteSettings**](#getwebsitesettings) | **GET** /api/v2/company/website-settings | Get website settings|
|[**resumeWebhookDispatch**](#resumewebhookdispatch) | **POST** /api/v2/company/{companyUuid}/webhooks/resume | Resume webhook dispatch|
|[**updateCompany**](#updatecompany) | **PUT** /api/v2/company/{uuid} | Update company|
|[**updateDigitalIdentity**](#updatedigitalidentity) | **PUT** /api/v2/company/digital-identity | Update digital identity|
|[**updateWebsiteSettings**](#updatewebsitesettings) | **PUT** /api/v2/company/website-settings | Update website settings|
|[**uploadFont**](#uploadfont) | **POST** /api/v2/company/uploadFont | Upload a font file|

# **createCompany**
> SuccessResponse createCompany(createCompanyRequest)

Creates a new company based on the provided request data.

### Example

```typescript
import {
    CompanyApi,
    Configuration,
    CreateCompanyRequest
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new CompanyApi(configuration);

let createCompanyRequest: CreateCompanyRequest; //

const { status, data } = await apiInstance.createCompany(
    createCompanyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createCompanyRequest** | **CreateCompanyRequest**|  | |


### Return type

**SuccessResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Company created successfully |  -  |
|**400** | Invalid input |  -  |
|**401** | Unauthorized |  -  |
|**403** | Insufficient scope |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCompany**
> ShowResponse getCompany()

Returns the company currently selected by the logged-in user. Requires TOOLS_COMPANY_SETTINGS_READ scope.

### Example

```typescript
import {
    CompanyApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new CompanyApi(configuration);

const { status, data } = await apiInstance.getCompany();
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
|**200** | Company returned successfully |  -  |
|**401** | Unauthorized |  -  |
|**403** | Insufficient scope |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCompanyByUuid**
> ShowResponse getCompanyByUuid()

Returns a company by its UUID. Requires TOOLS_COMPANY_SETTINGS_READ scope.

### Example

```typescript
import {
    CompanyApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new CompanyApi(configuration);

let uuid: string; // (default to undefined)

const { status, data } = await apiInstance.getCompanyByUuid(
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
|**200** | Company returned successfully |  -  |
|**401** | Unauthorized |  -  |
|**403** | Insufficient scope |  -  |
|**404** | Company not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getDigitalIdentity**
> ShowResponse getDigitalIdentity()

Returns the digital identity (branding) for the company currently selected by the logged-in user.

### Example

```typescript
import {
    CompanyApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new CompanyApi(configuration);

const { status, data } = await apiInstance.getDigitalIdentity();
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
|**200** | Digital identity returned successfully |  -  |
|**401** | Unauthorized |  -  |
|**403** | Insufficient scope |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getWebsiteSettings**
> ShowResponse getWebsiteSettings()

Returns the website settings for the company currently selected by the logged-in user.

### Example

```typescript
import {
    CompanyApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new CompanyApi(configuration);

const { status, data } = await apiInstance.getWebsiteSettings();
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
|**200** | Website settings returned successfully |  -  |
|**401** | Unauthorized |  -  |
|**403** | Insufficient scope |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resumeWebhookDispatch**
> SuccessResponse resumeWebhookDispatch()

Clears the per-company webhook circuit breaker so outbound deliveries resume immediately.

### Example

```typescript
import {
    CompanyApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new CompanyApi(configuration);

let companyUuid: string; // (default to undefined)

const { status, data } = await apiInstance.resumeWebhookDispatch(
    companyUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **companyUuid** | [**string**] |  | defaults to undefined|


### Return type

**SuccessResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Circuit breaker cleared |  -  |
|**401** | Unauthorized |  -  |
|**403** | Insufficient scope |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateCompany**
> UpdateResponse updateCompany(companyDTO)

Updates a company by UUID. Request body should contain the company fields to update.

### Example

```typescript
import {
    CompanyApi,
    Configuration,
    CompanyDTO
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new CompanyApi(configuration);

let uuid: string; // (default to undefined)
let companyDTO: CompanyDTO; //

const { status, data } = await apiInstance.updateCompany(
    uuid,
    companyDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **companyDTO** | **CompanyDTO**|  | |
| **uuid** | [**string**] |  | defaults to undefined|


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
|**200** | Company updated successfully |  -  |
|**401** | Unauthorized |  -  |
|**403** | Insufficient scope |  -  |
|**404** | Company not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateDigitalIdentity**
> UpdateResponse updateDigitalIdentity(digitalIdentityDTO)

Updates the digital identity (branding) for the company currently selected by the logged-in user.

### Example

```typescript
import {
    CompanyApi,
    Configuration,
    DigitalIdentityDTO
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new CompanyApi(configuration);

let digitalIdentityDTO: DigitalIdentityDTO; //

const { status, data } = await apiInstance.updateDigitalIdentity(
    digitalIdentityDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **digitalIdentityDTO** | **DigitalIdentityDTO**|  | |


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
|**200** | Digital identity updated successfully |  -  |
|**401** | Unauthorized |  -  |
|**403** | Insufficient scope |  -  |
|**404** | Digital identity not found for company |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateWebsiteSettings**
> UpdateResponse updateWebsiteSettings(websiteSettingsDTO)

Updates the website settings for the company currently selected by the logged-in user.

### Example

```typescript
import {
    CompanyApi,
    Configuration,
    WebsiteSettingsDTO
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new CompanyApi(configuration);

let websiteSettingsDTO: WebsiteSettingsDTO; //

const { status, data } = await apiInstance.updateWebsiteSettings(
    websiteSettingsDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **websiteSettingsDTO** | **WebsiteSettingsDTO**|  | |


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
|**200** | Website settings updated successfully |  -  |
|**401** | Unauthorized |  -  |
|**403** | Insufficient scope |  -  |
|**404** | Website settings not found for company |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **uploadFont**
> SuccessResponse uploadFont()

Uploads a font file to S3 storage and returns the public URL.

### Example

```typescript
import {
    CompanyApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new CompanyApi(configuration);

let file: File; // (default to undefined)

const { status, data } = await apiInstance.uploadFont(
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
|**200** | Font uploaded successfully |  -  |
|**400** | Invalid file provided |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

