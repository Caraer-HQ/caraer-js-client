# FormsApi

All URIs are relative to *https://v2.api.caraer.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**chatField**](#chatfield) | **POST** /api/v2/forms/public/{companyUuid}/ai/field/{fieldUuid}/{prompt} | AI form field (public)|
|[**chatStep**](#chatstep) | **POST** /api/v2/forms/public/{companyUuid}/ai/step/{stepTitle}/{prompt} | AI form step (public)|
|[**createForm**](#createform) | **POST** /api/v2/forms/ | Create a new form|
|[**deleteForm**](#deleteform) | **DELETE** /api/v2/forms/{formUuid} | Delete a form|
|[**getForm**](#getform) | **GET** /api/v2/forms/{formUuid} | Get form by UUID|
|[**getFormPublic**](#getformpublic) | **GET** /api/v2/forms/public/{companyUuid}/{formUuid} | Get form by UUID|
|[**getForms**](#getforms) | **POST** /api/v2/forms/index | Get paginated list of forms|
|[**getFormsByObject**](#getformsbyobject) | **POST** /api/v2/forms/{objectUuid}/index | Get forms by object UUID|
|[**getFormsPublic**](#getformspublic) | **POST** /api/v2/forms/public/{companyUuid}/index | Get all forms for a company|
|[**getObjectsWithForms**](#getobjectswithforms) | **GET** /api/v2/forms/objects | List objects that have forms|
|[**getOptions**](#getoptions) | **POST** /api/v2/forms/public/{companyUuid}/{propertyUuid}/options | Property options (public)|
|[**restoreForm**](#restoreform) | **POST** /api/v2/forms/{formUuid}/restore | Restore a deleted form|
|[**submit**](#submit) | **POST** /api/v2/forms/public/{companyUuid}/{formUuid}/submit | Submit a form|
|[**updateForm**](#updateform) | **PUT** /api/v2/forms/{formUuid} | Update an existing form|
|[**uploadFiles**](#uploadfiles) | **POST** /api/v2/forms/public/{companyUuid}/{formUuid}/upload | Submit a file|

# **chatField**
> any chatField(formWithAiPromptDTO)

When X-CARAER-TOKEN or X-Caraer-Company-Uuid is sent, that value selects the tenant company and overrides the companyUuid path segment.

### Example

```typescript
import {
    FormsApi,
    Configuration,
    FormWithAiPromptDTO
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new FormsApi(configuration);

let companyUuid: string; // (default to undefined)
let fieldUuid: string; // (default to undefined)
let prompt: string; // (default to undefined)
let formWithAiPromptDTO: FormWithAiPromptDTO; //

const { status, data } = await apiInstance.chatField(
    companyUuid,
    fieldUuid,
    prompt,
    formWithAiPromptDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **formWithAiPromptDTO** | **FormWithAiPromptDTO**|  | |
| **companyUuid** | [**string**] |  | defaults to undefined|
| **fieldUuid** | [**string**] |  | defaults to undefined|
| **prompt** | [**string**] |  | defaults to undefined|


### Return type

**any**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **chatStep**
> any chatStep(formWithAiPromptDTO)

When X-CARAER-TOKEN or X-Caraer-Company-Uuid is sent, that value selects the tenant company and overrides the companyUuid path segment.

### Example

```typescript
import {
    FormsApi,
    Configuration,
    FormWithAiPromptDTO
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new FormsApi(configuration);

let companyUuid: string; // (default to undefined)
let stepTitle: string; // (default to undefined)
let prompt: string; // (default to undefined)
let formWithAiPromptDTO: FormWithAiPromptDTO; //

const { status, data } = await apiInstance.chatStep(
    companyUuid,
    stepTitle,
    prompt,
    formWithAiPromptDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **formWithAiPromptDTO** | **FormWithAiPromptDTO**|  | |
| **companyUuid** | [**string**] |  | defaults to undefined|
| **stepTitle** | [**string**] |  | defaults to undefined|
| **prompt** | [**string**] |  | defaults to undefined|


### Return type

**any**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createForm**
> CreateResponse createForm(formDTO)

Creates a new form with the provided data. The request body should contain a valid FormDTO object. On success, returns the created form as a FormDTO wrapped in a CreateResponse. Validation: Form fields are validated according to the Form validation rules. Required fields and format constraints are enforced.

### Example

```typescript
import {
    FormsApi,
    Configuration,
    FormDTO
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new FormsApi(configuration);

let formDTO: FormDTO; //

const { status, data } = await apiInstance.createForm(
    formDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **formDTO** | **FormDTO**|  | |


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
|**201** | Form successfully created |  -  |
|**400** | Invalid input |  -  |
|**401** | Unauthorized access |  -  |
|**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteForm**
> DeleteResponse deleteForm()

Deletes a form identified by its UUID. On success, returns the deleted form\'s data wrapped in a DeleteResponse.

### Example

```typescript
import {
    FormsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new FormsApi(configuration);

let formUuid: string; //UUID of the form to delete (default to undefined)

const { status, data } = await apiInstance.deleteForm(
    formUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **formUuid** | [**string**] | UUID of the form to delete | defaults to undefined|


### Return type

**DeleteResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Form successfully deleted |  -  |
|**404** | Form not found |  -  |
|**401** | Unauthorized access |  -  |
|**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getForm**
> ShowResponse getForm()

Retrieves a specific form by its UUID. Returns the details of the form in a FormDTO object wrapped in a ShowResponse.

### Example

```typescript
import {
    FormsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new FormsApi(configuration);

let formUuid: string; //UUID of the form to retrieve (default to undefined)

const { status, data } = await apiInstance.getForm(
    formUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **formUuid** | [**string**] | UUID of the form to retrieve | defaults to undefined|


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
|**200** | Successfully retrieved the form |  -  |
|**404** | Form not found |  -  |
|**401** | Unauthorized access |  -  |
|**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFormPublic**
> ShowResponse getFormPublic()

Retrieves a specific form by its UUID. When X-CARAER-TOKEN or X-Caraer-Company-Uuid is sent, that value selects the tenant company and overrides the companyUuid path segment.

### Example

```typescript
import {
    FormsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new FormsApi(configuration);

let companyUuid: string; // (default to undefined)
let formUuid: string; // (default to undefined)

const { status, data } = await apiInstance.getFormPublic(
    companyUuid,
    formUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **companyUuid** | [**string**] |  | defaults to undefined|
| **formUuid** | [**string**] |  | defaults to undefined|


### Return type

**ShowResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully retrieved the form |  -  |
|**404** | Form not found |  -  |
|**401** | Unauthorized access |  -  |
|**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getForms**
> PaginationResponse getForms(body)

Retrieves a paginated list of forms based on the provided filters, sorting, and search query. This endpoint returns a list of FormDTO objects wrapped in a PaginationResponse containing the current page, limit, total count, and the forms data.

### Example

```typescript
import {
    FormsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new FormsApi(configuration);

let body: any; //

const { status, data } = await apiInstance.getForms(
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
|**200** | Successfully retrieved forms list |  -  |
|**400** | Invalid request |  -  |
|**401** | Unauthorized access |  -  |
|**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFormsByObject**
> PaginationResponse getFormsByObject(body)

Retrieves a paginated list of forms associated with a specific object UUID. The endpoint uses a custom Cypher query to match forms linked to the object.

### Example

```typescript
import {
    FormsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new FormsApi(configuration);

let objectUuid: string; //UUID of the object to get forms for (default to undefined)
let body: any; //

const { status, data } = await apiInstance.getFormsByObject(
    objectUuid,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **any**|  | |
| **objectUuid** | [**string**] | UUID of the object to get forms for | defaults to undefined|


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
|**200** | Successfully retrieved forms for the given object |  -  |
|**400** | Invalid request |  -  |
|**401** | Unauthorized access |  -  |
|**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFormsPublic**
> any getFormsPublic(body)

When X-CARAER-TOKEN or X-Caraer-Company-Uuid is sent, that value selects the tenant company and overrides the companyUuid path segment.

### Example

```typescript
import {
    FormsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new FormsApi(configuration);

let companyUuid: string; // (default to undefined)
let body: any; //

const { status, data } = await apiInstance.getFormsPublic(
    companyUuid,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **any**|  | |
| **companyUuid** | [**string**] |  | defaults to undefined|


### Return type

**any**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getObjectsWithForms**
> ShowResponse getObjectsWithForms()

Returns distinct custom objects that have at least one non-deleted form, ordered by object index.

### Example

```typescript
import {
    FormsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new FormsApi(configuration);

const { status, data } = await apiInstance.getObjectsWithForms();
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
|**200** | Successfully retrieved objects with forms |  -  |
|**401** | Unauthorized access |  -  |
|**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getOptions**
> any getOptions(body)

When X-CARAER-TOKEN or X-Caraer-Company-Uuid is sent, that value selects the tenant company and overrides the companyUuid path segment.

### Example

```typescript
import {
    FormsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new FormsApi(configuration);

let propertyUuid: string; // (default to undefined)
let companyUuid: string; // (default to undefined)
let body: any; //

const { status, data } = await apiInstance.getOptions(
    propertyUuid,
    companyUuid,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **any**|  | |
| **propertyUuid** | [**string**] |  | defaults to undefined|
| **companyUuid** | [**string**] |  | defaults to undefined|


### Return type

**any**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **restoreForm**
> RestoreResponse restoreForm()

Restores a previously deleted form identified by its UUID. Returns the restored form wrapped in a RestoreResponse.

### Example

```typescript
import {
    FormsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new FormsApi(configuration);

let formUuid: string; //UUID of the form to restore (default to undefined)

const { status, data } = await apiInstance.restoreForm(
    formUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **formUuid** | [**string**] | UUID of the form to restore | defaults to undefined|


### Return type

**RestoreResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Form successfully restored |  -  |
|**404** | Form not found |  -  |
|**401** | Unauthorized access |  -  |
|**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **submit**
> SuccessResponse submit(formDTO)

Submits a form with the provided data. Returns a SuccessResponse upon successful submission. When X-CARAER-TOKEN or X-Caraer-Company-Uuid is sent, that value selects the tenant company and overrides the companyUuid path segment.

### Example

```typescript
import {
    FormsApi,
    Configuration,
    FormDTO
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new FormsApi(configuration);

let companyUuid: string; // (default to undefined)
let formUuid: string; // (default to undefined)
let formDTO: FormDTO; //

const { status, data } = await apiInstance.submit(
    companyUuid,
    formUuid,
    formDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **formDTO** | **FormDTO**|  | |
| **companyUuid** | [**string**] |  | defaults to undefined|
| **formUuid** | [**string**] |  | defaults to undefined|


### Return type

**SuccessResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Form successfully submitted |  -  |
|**400** | Invalid input |  -  |
|**401** | Invalid X-CARAER-TOKEN |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateForm**
> UpdateResponse updateForm(formDTO)

Updates an existing form identified by its UUID with the provided data. The request body should include the updated fields in a FormDTO. Returns the updated form wrapped in an UpdateResponse. Validation: Form fields are validated according to the Form validation rules. Required fields and format constraints are enforced.

### Example

```typescript
import {
    FormsApi,
    Configuration,
    FormDTO
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new FormsApi(configuration);

let formUuid: string; //UUID of the form to update (default to undefined)
let formDTO: FormDTO; //

const { status, data } = await apiInstance.updateForm(
    formUuid,
    formDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **formDTO** | **FormDTO**|  | |
| **formUuid** | [**string**] | UUID of the form to update | defaults to undefined|


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
|**200** | Form successfully updated |  -  |
|**400** | Invalid input |  -  |
|**404** | Form not found |  -  |
|**401** | Unauthorized access |  -  |
|**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **uploadFiles**
> SuccessResponse uploadFiles()

Submits a file with the provided data. Returns a SuccessResponse upon successful submission. When X-CARAER-TOKEN or X-Caraer-Company-Uuid is sent, that value selects the tenant company and overrides the companyUuid path segment.

### Example

```typescript
import {
    FormsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new FormsApi(configuration);

let companyUuid: string; // (default to undefined)
let formUuid: string; // (default to undefined)
let files: Array<File>; // (default to undefined)

const { status, data } = await apiInstance.uploadFiles(
    companyUuid,
    formUuid,
    files
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **companyUuid** | [**string**] |  | defaults to undefined|
| **formUuid** | [**string**] |  | defaults to undefined|
| **files** | **Array&lt;File&gt;** |  | defaults to undefined|


### Return type

**SuccessResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | File successfully submitted |  -  |
|**400** | Invalid input |  -  |
|**401** | Invalid X-CARAER-TOKEN |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

