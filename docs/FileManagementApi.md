# FileManagementApi

All URIs are relative to *https://v2.api.caraer.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteFile**](#deletefile) | **DELETE** /api/v2/files/ | Delete file|
|[**downloadFile**](#downloadfile) | **GET** /api/v2/files/ | Download file|
|[**listFiles**](#listfiles) | **GET** /api/v2/files/list | List files|
|[**uploadFile2**](#uploadfile2) | **POST** /api/v2/files/ | Upload files|

# **deleteFile**
> SuccessResponse deleteFile()

Deletes a file from the S3-compatible storage identified by its unique key.

### Example

```typescript
import {
    FileManagementApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new FileManagementApi(configuration);

let key: string; //The key of the file to delete. (default to undefined)

const { status, data } = await apiInstance.deleteFile(
    key
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **key** | [**string**] | The key of the file to delete. | defaults to undefined|


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
|**200** | File deleted successfully. |  -  |
|**404** | File not found. |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **downloadFile**
> SuccessResponse downloadFile()

Generates a pre-signed URL to download a file stored in S3-compatible storage. The URL expiry time and download behavior can be specified using the query parameters.

### Example

```typescript
import {
    FileManagementApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new FileManagementApi(configuration);

let key: string; //The key of the file to download. (default to undefined)
let expireAfter: number; //The URL expiry period in seconds. (optional) (default to 86400)
let download: boolean; //Whether to download the file in the browser. (optional) (default to false)

const { status, data } = await apiInstance.downloadFile(
    key,
    expireAfter,
    download
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **key** | [**string**] | The key of the file to download. | defaults to undefined|
| **expireAfter** | [**number**] | The URL expiry period in seconds. | (optional) defaults to 86400|
| **download** | [**boolean**] | Whether to download the file in the browser. | (optional) defaults to false|


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
|**200** | File URL generated successfully. |  -  |
|**404** | File not found. |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listFiles**
> SuccessResponse listFiles()

Lists all files stored in the system or, if a record UUID is provided, lists the files related to that record.

### Example

```typescript
import {
    FileManagementApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new FileManagementApi(configuration);

let recordUuid: string; //An optional record UUID to filter files. (optional) (default to undefined)

const { status, data } = await apiInstance.listFiles(
    recordUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **recordUuid** | [**string**] | An optional record UUID to filter files. | (optional) defaults to undefined|


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
|**200** | Files listed successfully. |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **uploadFile2**
> SuccessResponse uploadFile2()

Uploads multiple files to an S3-compatible storage and returns their unique keys. The request must contain one or more files in multipart/form-data format.

### Example

```typescript
import {
    FileManagementApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new FileManagementApi(configuration);

let recordUuid: string; //Optional record UUID to directly link uploaded files as attachments. (optional) (default to undefined)

const { status, data } = await apiInstance.uploadFile2(
    recordUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **recordUuid** | [**string**] | Optional record UUID to directly link uploaded files as attachments. | (optional) defaults to undefined|


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
|**200** | Files uploaded successfully. |  -  |
|**400** | Invalid input, e.g., file size exceeds the limit. |  -  |
|**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

