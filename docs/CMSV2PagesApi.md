# CMSV2PagesApi

All URIs are relative to *https://v2.api.caraer.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**aiRewrite**](#airewrite) | **POST** /api/v2/webpages/v2/pages/{recordUuid}/ai/rewrite | Rewrite a page or a module from a prompt|
|[**createTranslation**](#createtranslation) | **POST** /api/v2/webpages/v2/pages/{recordUuid}/environments/{key}/translate | Create a translated sibling page for an environment|
|[**ensureNotFound**](#ensurenotfound) | **POST** /api/v2/webpages/v2/pages/not-found | Create or reuse the custom 404 page|
|[**environmentCoverage**](#environmentcoverage) | **GET** /api/v2/webpages/v2/pages/{recordUuid}/environments | Environment coverage for the builder dropdown|
|[**get**](#get) | **GET** /api/v2/webpages/v2/pages/{recordUuid} | Load a page for the builder|
|[**getTemplate**](#gettemplate) | **GET** /api/v2/webpages/v2/pages/templates/{objectUuid} | CMS v2 object template document|
|[**history**](#history) | **GET** /api/v2/webpages/v2/pages/{recordUuid}/history | Draft snapshots for one locale|
|[**hostOnEnvironment**](#hostonenvironment) | **POST** /api/v2/webpages/v2/pages/{recordUuid}/environments/{key}/host | Host this page on another environment|
|[**library**](#library) | **GET** /api/v2/webpages/v2/pages/library/modules | Modules available to this company|
|[**patch**](#patch) | **POST** /api/v2/webpages/v2/pages/{recordUuid}/patch | Apply patches to a page draft|
|[**previewLink**](#previewlink) | **GET** /api/v2/webpages/v2/pages/{recordUuid}/preview-link | Signed preview URL for the builder iframe|
|[**publish**](#publish) | **PUT** /api/v2/webpages/v2/pages/{recordUuid}/publish | Publish one locale, or all of them|
|[**restoreHistory**](#restorehistory) | **POST** /api/v2/webpages/v2/pages/{recordUuid}/history/{index}/restore | Restore a draft snapshot|
|[**save**](#save) | **PUT** /api/v2/webpages/v2/pages/{recordUuid} | Replace a page draft|
|[**saveMeta**](#savemeta) | **PUT** /api/v2/webpages/v2/pages/{recordUuid}/meta | Update slug, title, excerpt, SEO and page scripts|
|[**saveTemplate**](#savetemplate) | **PUT** /api/v2/webpages/v2/pages/templates/{objectUuid} | Replace a CMS v2 object template|
|[**unpublish**](#unpublish) | **PUT** /api/v2/webpages/v2/pages/{recordUuid}/unpublish | Take one locale offline|
|[**unselectEnvironment**](#unselectenvironment) | **DELETE** /api/v2/webpages/v2/pages/{recordUuid}/environments/{key} | Remove an environment from this page only|

# **aiRewrite**
> ShowResponseMapStringObject aiRewrite(requestBody)

Returns patches the editor applies through the same revision channel as a manual edit, so the change is undoable. Page scope may add, remove and reorder modules. A module\'s code lives in a shared npm package, so the AI rewrites field values and composition, never the component itself.

### Example

```typescript
import {
    CMSV2PagesApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new CMSV2PagesApi(configuration);

let recordUuid: string; // (default to undefined)
let requestBody: { [key: string]: any | null; }; //

const { status, data } = await apiInstance.aiRewrite(
    recordUuid,
    requestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **{ [key: string]: any | null; }**|  | |
| **recordUuid** | [**string**] |  | defaults to undefined|


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

# **createTranslation**
> ShowResponseCmsPageDTO createTranslation()


### Example

```typescript
import {
    CMSV2PagesApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new CMSV2PagesApi(configuration);

let recordUuid: string; // (default to undefined)
let key: string; // (default to undefined)

const { status, data } = await apiInstance.createTranslation(
    recordUuid,
    key
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **recordUuid** | [**string**] |  | defaults to undefined|
| **key** | [**string**] |  | defaults to undefined|


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

# **ensureNotFound**
> ShowResponseCmsPageDTO ensureNotFound()

Finds the page at /404 on the root Webpage object, or creates an empty draft there, and stores it as the company custom 404 page.

### Example

```typescript
import {
    CMSV2PagesApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new CMSV2PagesApi(configuration);

const { status, data } = await apiInstance.ensureNotFound();
```

### Parameters
This endpoint does not have any parameters.


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

# **environmentCoverage**
> ShowResponseMapStringObject environmentCoverage()


### Example

```typescript
import {
    CMSV2PagesApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new CMSV2PagesApi(configuration);

let recordUuid: string; // (default to undefined)

const { status, data } = await apiInstance.environmentCoverage(
    recordUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **recordUuid** | [**string**] |  | defaults to undefined|


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

# **get**
> ShowResponseCmsPageDTO get()


### Example

```typescript
import {
    CMSV2PagesApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new CMSV2PagesApi(configuration);

let recordUuid: string; // (default to undefined)
let locale: string; // (optional) (default to undefined)
let state: string; // (optional) (default to 'draft')

const { status, data } = await apiInstance.get(
    recordUuid,
    locale,
    state
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **recordUuid** | [**string**] |  | defaults to undefined|
| **locale** | [**string**] |  | (optional) defaults to undefined|
| **state** | [**string**] |  | (optional) defaults to 'draft'|


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

# **getTemplate**
> ShowResponseCmsPageDocument getTemplate()


### Example

```typescript
import {
    CMSV2PagesApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new CMSV2PagesApi(configuration);

let objectUuid: string; // (default to undefined)
let locale: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getTemplate(
    objectUuid,
    locale
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **objectUuid** | [**string**] |  | defaults to undefined|
| **locale** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ShowResponseCmsPageDocument**

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

# **history**
> ShowResponseListMapStringObject history()


### Example

```typescript
import {
    CMSV2PagesApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new CMSV2PagesApi(configuration);

let recordUuid: string; // (default to undefined)
let locale: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.history(
    recordUuid,
    locale
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **recordUuid** | [**string**] |  | defaults to undefined|
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

# **hostOnEnvironment**
> ShowResponseCmsPageDTO hostOnEnvironment()


### Example

```typescript
import {
    CMSV2PagesApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new CMSV2PagesApi(configuration);

let recordUuid: string; // (default to undefined)
let key: string; // (default to undefined)

const { status, data } = await apiInstance.hostOnEnvironment(
    recordUuid,
    key
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **recordUuid** | [**string**] |  | defaults to undefined|
| **key** | [**string**] |  | defaults to undefined|


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

# **library**
> ShowResponseListCmsModuleDTO library()

Backs the builder\'s library picker. Only modules from installed apps, and never retired ones, because a new page must be able to render them.

### Example

```typescript
import {
    CMSV2PagesApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new CMSV2PagesApi(configuration);

const { status, data } = await apiInstance.library();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ShowResponseListCmsModuleDTO**

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

# **patch**
> ShowResponseCmsPageDTO patch(cmsPagePatchRequest)

Rejected with 409 when expectedRevision does not match, so a stale client cannot overwrite another editor\'s work.

### Example

```typescript
import {
    CMSV2PagesApi,
    Configuration,
    CmsPagePatchRequest
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new CMSV2PagesApi(configuration);

let recordUuid: string; // (default to undefined)
let cmsPagePatchRequest: CmsPagePatchRequest; //

const { status, data } = await apiInstance.patch(
    recordUuid,
    cmsPagePatchRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cmsPagePatchRequest** | **CmsPagePatchRequest**|  | |
| **recordUuid** | [**string**] |  | defaults to undefined|


### Return type

**ShowResponseCmsPageDTO**

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

# **previewLink**
> ShowResponseMapStringObject previewLink()

The iframe renders the draft document, which the public API will not serve. The signature covers the page and an expiry so a leaked link cannot be retargeted or replayed.

### Example

```typescript
import {
    CMSV2PagesApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new CMSV2PagesApi(configuration);

let recordUuid: string; // (default to undefined)
let locale: string; // (optional) (default to undefined)
let state: string; // (optional) (default to 'draft')

const { status, data } = await apiInstance.previewLink(
    recordUuid,
    locale,
    state
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **recordUuid** | [**string**] |  | defaults to undefined|
| **locale** | [**string**] |  | (optional) defaults to undefined|
| **state** | [**string**] |  | (optional) defaults to 'draft'|


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

# **publish**
> ShowResponseListCmsPageDTO publish()

Copies the draft over the published document. Publishing is per locale so a translated page can ship without republishing the others.

### Example

```typescript
import {
    CMSV2PagesApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new CMSV2PagesApi(configuration);

let recordUuid: string; // (default to undefined)
let locale: string; // (optional) (default to undefined)
let allLocales: boolean; // (optional) (default to false)

const { status, data } = await apiInstance.publish(
    recordUuid,
    locale,
    allLocales
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **recordUuid** | [**string**] |  | defaults to undefined|
| **locale** | [**string**] |  | (optional) defaults to undefined|
| **allLocales** | [**boolean**] |  | (optional) defaults to false|


### Return type

**ShowResponseListCmsPageDTO**

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

# **restoreHistory**
> ShowResponseCmsPageDTO restoreHistory()


### Example

```typescript
import {
    CMSV2PagesApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new CMSV2PagesApi(configuration);

let recordUuid: string; // (default to undefined)
let index: number; // (default to undefined)
let locale: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.restoreHistory(
    recordUuid,
    index,
    locale
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **recordUuid** | [**string**] |  | defaults to undefined|
| **index** | [**number**] |  | defaults to undefined|
| **locale** | [**string**] |  | (optional) defaults to undefined|


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

# **save**
> ShowResponseCmsPageDTO save(cmsPageDocument)


### Example

```typescript
import {
    CMSV2PagesApi,
    Configuration,
    CmsPageDocument
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new CMSV2PagesApi(configuration);

let recordUuid: string; // (default to undefined)
let cmsPageDocument: CmsPageDocument; //
let locale: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.save(
    recordUuid,
    cmsPageDocument,
    locale
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cmsPageDocument** | **CmsPageDocument**|  | |
| **recordUuid** | [**string**] |  | defaults to undefined|
| **locale** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ShowResponseCmsPageDTO**

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

# **saveMeta**
> ShowResponseCmsPageDTO saveMeta(requestBody)


### Example

```typescript
import {
    CMSV2PagesApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new CMSV2PagesApi(configuration);

let recordUuid: string; // (default to undefined)
let requestBody: { [key: string]: any | null; }; //
let locale: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.saveMeta(
    recordUuid,
    requestBody,
    locale
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **{ [key: string]: any | null; }**|  | |
| **recordUuid** | [**string**] |  | defaults to undefined|
| **locale** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ShowResponseCmsPageDTO**

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

# **saveTemplate**
> ShowResponseCmsPageDocument saveTemplate(cmsPageDocument)


### Example

```typescript
import {
    CMSV2PagesApi,
    Configuration,
    CmsPageDocument
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new CMSV2PagesApi(configuration);

let objectUuid: string; // (default to undefined)
let cmsPageDocument: CmsPageDocument; //
let locale: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.saveTemplate(
    objectUuid,
    cmsPageDocument,
    locale
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cmsPageDocument** | **CmsPageDocument**|  | |
| **objectUuid** | [**string**] |  | defaults to undefined|
| **locale** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ShowResponseCmsPageDocument**

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

# **unpublish**
> ShowResponseMapStringObject unpublish()


### Example

```typescript
import {
    CMSV2PagesApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new CMSV2PagesApi(configuration);

let recordUuid: string; // (default to undefined)
let locale: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.unpublish(
    recordUuid,
    locale
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **recordUuid** | [**string**] |  | defaults to undefined|
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

# **unselectEnvironment**
> ShowResponseCmsPageDTO unselectEnvironment()


### Example

```typescript
import {
    CMSV2PagesApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new CMSV2PagesApi(configuration);

let recordUuid: string; // (default to undefined)
let key: string; // (default to undefined)

const { status, data } = await apiInstance.unselectEnvironment(
    recordUuid,
    key
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **recordUuid** | [**string**] |  | defaults to undefined|
| **key** | [**string**] |  | defaults to undefined|


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

