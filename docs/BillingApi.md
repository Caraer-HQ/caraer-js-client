# BillingApi

All URIs are relative to *https://v2.api.caraer.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getStatus**](#getstatus) | **GET** /api/v2/billing/status | Get billing enforcement status|
|[**sendSetupEmail**](#sendsetupemail) | **POST** /api/v2/billing/setup-email | Send billing setup email|

# **getStatus**
> ShowResponseBillingStatusDTO getStatus()

Returns whether the selected company should see no UI, a billing banner, or a non-dismissible lockout, based on Caraer BV CRM billing fields.

### Example

```typescript
import {
    BillingApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

const { status, data } = await apiInstance.getStatus();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ShowResponseBillingStatusDTO**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Billing status |  -  |
|**401** | Unauthorized |  -  |
|**403** | The caller is missing a required role or scope. |  -  |
|**404** | The requested resource was not found. |  -  |
|**500** | An internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sendSetupEmail**
> ShowResponseMapStringBoolean sendSetupEmail()

Triggers Jortt to email the linked customer a direct-debit authorization payment link.

### Example

```typescript
import {
    BillingApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

const { status, data } = await apiInstance.sendSetupEmail();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ShowResponseMapStringBoolean**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Email requested |  -  |
|**400** | Missing CRM link, Jortt customer id, or already accepted |  -  |
|**401** | Unauthorized |  -  |
|**503** | Jortt or CRM not configured |  -  |
|**403** | The caller is missing a required role or scope. |  -  |
|**404** | The requested resource was not found. |  -  |
|**500** | An internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

