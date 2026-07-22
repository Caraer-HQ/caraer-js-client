# AutomationsApi

All URIs are relative to *https://v2.api.caraer.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getToken**](#gettoken) | **GET** /api/v2/automations/token | Get Latenode JWT token for current user|

# **getToken**
> string getToken()

Generates a short-lived Latenode JWT token for the authenticated user, to be used with the Latenode embedded SDK.

### Example

```typescript
import {
    AutomationsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new AutomationsApi(configuration);

const { status, data } = await apiInstance.getToken();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**string**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully generated token |  -  |
|**401** | Unauthorized access |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

