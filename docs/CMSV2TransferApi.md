# CMSV2TransferApi

All URIs are relative to *https://v2.api.caraer.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**attach**](#attach) | **POST** /api/v2/company/{companyUuid}/cms-transfer/attach | Attach a manually created caraer-web project|
|[**cutover**](#cutover) | **POST** /api/v2/company/{companyUuid}/cms-transfer/cutover | Switch the live site to CMS v2: schema, caraer-web repo, and hostname|
|[**rollback**](#rollback) | **POST** /api/v2/company/{companyUuid}/cms-transfer/rollback | Restore the live hostname to the stored v1 project|
|[**status**](#status) | **GET** /api/v2/company/{companyUuid}/cms-transfer | Transfer status for one company|

# **attach**
> ShowResponseCompanyDTO attach(requestBody)


### Example

```typescript
import {
    CMSV2TransferApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new CMSV2TransferApi(configuration);

let companyUuid: string; // (default to undefined)
let requestBody: { [key: string]: string; }; //

const { status, data } = await apiInstance.attach(
    companyUuid,
    requestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **{ [key: string]: string; }**|  | |
| **companyUuid** | [**string**] |  | defaults to undefined|


### Return type

**ShowResponseCompanyDTO**

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

# **cutover**
> ShowResponseCompanyDTO cutover()


### Example

```typescript
import {
    CMSV2TransferApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new CMSV2TransferApi(configuration);

let companyUuid: string; // (default to undefined)

const { status, data } = await apiInstance.cutover(
    companyUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **companyUuid** | [**string**] |  | defaults to undefined|


### Return type

**ShowResponseCompanyDTO**

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

# **rollback**
> ShowResponseCompanyDTO rollback()


### Example

```typescript
import {
    CMSV2TransferApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new CMSV2TransferApi(configuration);

let companyUuid: string; // (default to undefined)

const { status, data } = await apiInstance.rollback(
    companyUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **companyUuid** | [**string**] |  | defaults to undefined|


### Return type

**ShowResponseCompanyDTO**

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

# **status**
> ShowResponseMapStringObject status()


### Example

```typescript
import {
    CMSV2TransferApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new CMSV2TransferApi(configuration);

let companyUuid: string; // (default to undefined)

const { status, data } = await apiInstance.status(
    companyUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **companyUuid** | [**string**] |  | defaults to undefined|


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

