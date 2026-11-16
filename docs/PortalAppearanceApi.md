# PortalAppearanceApi

All URIs are relative to *https://v2.api.caraer.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**effective**](#effective) | **GET** /api/v2/appearance | Read effective portal appearance|
|[**own**](#own) | **GET** /api/v2/partner/appearance | Read selected partner appearance|
|[**save1**](#save1) | **PUT** /api/v2/partner/appearance | Save selected partner appearance|

# **effective**
> SuccessResponseEffectiveAppearanceDTO effective()

Authenticated selected-company branding inherited from its nearest whitelabel partner, with server-derived management capability. No partner identities are disclosed.

### Example

```typescript
import {
    PortalAppearanceApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new PortalAppearanceApi(configuration);

const { status, data } = await apiInstance.effective();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**SuccessResponseEffectiveAppearanceDTO**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**401** | Authentication is required or the token is invalid. |  -  |
|**403** | The caller is missing a required role or scope. |  -  |
|**404** | The requested resource was not found. |  -  |
|**500** | An internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **own**
> SuccessResponsePortalAppearanceDTO own()

Requires a whitelabel selected-company entitlement, selected membership and company-settings write permission.

### Example

```typescript
import {
    PortalAppearanceApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new PortalAppearanceApi(configuration);

const { status, data } = await apiInstance.own();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**SuccessResponsePortalAppearanceDTO**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**401** | Authentication is required or the token is invalid. |  -  |
|**403** | The caller is missing a required role or scope. |  -  |
|**404** | The requested resource was not found. |  -  |
|**500** | An internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **save1**
> SuccessResponsePortalAppearanceDTO save1(portalAppearanceDTO)

Writes only the selected whitelabel partner. Requires company-settings write permission. Null values restore Caraer defaults. No target company identifier is accepted.

### Example

```typescript
import {
    PortalAppearanceApi,
    Configuration,
    PortalAppearanceDTO
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new PortalAppearanceApi(configuration);

let portalAppearanceDTO: PortalAppearanceDTO; //

const { status, data } = await apiInstance.save1(
    portalAppearanceDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **portalAppearanceDTO** | **PortalAppearanceDTO**|  | |


### Return type

**SuccessResponsePortalAppearanceDTO**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**401** | Authentication is required or the token is invalid. |  -  |
|**403** | The caller is missing a required role or scope. |  -  |
|**404** | The requested resource was not found. |  -  |
|**500** | An internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

