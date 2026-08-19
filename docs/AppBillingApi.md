# AppBillingApi

All URIs are relative to *https://v2.api.caraer.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**appBillingStatus**](#appbillingstatus) | **GET** /api/v2/apps/{appUuid}/billing/status | Current-period billing for every installation of an app|
|[**cancelPendingChange**](#cancelpendingchange) | **DELETE** /api/v2/apps/{appUuid}/installation/subscription/pending | Cancel a scheduled subscription change|
|[**getSubscription**](#getsubscription) | **GET** /api/v2/apps/{appUuid}/installation/subscription | Current subscription state for the selected company\&#39;s installation|
|[**installationBillingStatus**](#installationbillingstatus) | **GET** /api/v2/apps/{appUuid}/installation/billing/status | Current-period billing for the selected company\&#39;s installation|
|[**platformBillingStatus**](#platformbillingstatus) | **GET** /api/v2/apps/billing/status | Platform-wide current-period app usage billing|
|[**recordMeterEvent**](#recordmeterevent) | **POST** /api/v2/apps/{appUuid}/installation/meter-events | Record a manual meter event for the selected company\&#39;s installation|
|[**scheduleSubscriptionChange**](#schedulesubscriptionchange) | **POST** /api/v2/apps/{appUuid}/installation/subscription/change | Schedule a plan or commitment change|
|[**usagePeriods**](#usageperiods) | **GET** /api/v2/apps/{appUuid}/installation/usage/periods | Usage periods for the selected company\&#39;s installation|

# **appBillingStatus**
> ShowResponseAppBillingStatusResponse appBillingStatus()


### Example

```typescript
import {
    AppBillingApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new AppBillingApi(configuration);

let appUuid: string; // (default to undefined)

const { status, data } = await apiInstance.appBillingStatus(
    appUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appUuid** | [**string**] |  | defaults to undefined|


### Return type

**ShowResponseAppBillingStatusResponse**

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

# **cancelPendingChange**
> ShowResponseAppSubscriptionDTO cancelPendingChange()


### Example

```typescript
import {
    AppBillingApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new AppBillingApi(configuration);

let appUuid: string; // (default to undefined)

const { status, data } = await apiInstance.cancelPendingChange(
    appUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appUuid** | [**string**] |  | defaults to undefined|


### Return type

**ShowResponseAppSubscriptionDTO**

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

# **getSubscription**
> ShowResponseAppSubscriptionDTO getSubscription()


### Example

```typescript
import {
    AppBillingApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new AppBillingApi(configuration);

let appUuid: string; // (default to undefined)

const { status, data } = await apiInstance.getSubscription(
    appUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appUuid** | [**string**] |  | defaults to undefined|


### Return type

**ShowResponseAppSubscriptionDTO**

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

# **installationBillingStatus**
> ShowResponseAppInstallationBillingStatusDTO installationBillingStatus()


### Example

```typescript
import {
    AppBillingApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new AppBillingApi(configuration);

let appUuid: string; // (default to undefined)

const { status, data } = await apiInstance.installationBillingStatus(
    appUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appUuid** | [**string**] |  | defaults to undefined|


### Return type

**ShowResponseAppInstallationBillingStatusDTO**

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

# **platformBillingStatus**
> ShowResponseAppBillingStatusResponse platformBillingStatus()


### Example

```typescript
import {
    AppBillingApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new AppBillingApi(configuration);

let appUuid: string; // (optional) (default to undefined)
let page: number; // (optional) (default to 1)
let limit: number; // (optional) (default to 50)

const { status, data } = await apiInstance.platformBillingStatus(
    appUuid,
    page,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appUuid** | [**string**] |  | (optional) defaults to undefined|
| **page** | [**number**] |  | (optional) defaults to 1|
| **limit** | [**number**] |  | (optional) defaults to 50|


### Return type

**ShowResponseAppBillingStatusResponse**

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

# **recordMeterEvent**
> ShowResponseAppMeterEventResponse recordMeterEvent(appMeterEventRequest)


### Example

```typescript
import {
    AppBillingApi,
    Configuration,
    AppMeterEventRequest
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new AppBillingApi(configuration);

let appUuid: string; // (default to undefined)
let appMeterEventRequest: AppMeterEventRequest; //

const { status, data } = await apiInstance.recordMeterEvent(
    appUuid,
    appMeterEventRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appMeterEventRequest** | **AppMeterEventRequest**|  | |
| **appUuid** | [**string**] |  | defaults to undefined|


### Return type

**ShowResponseAppMeterEventResponse**

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

# **scheduleSubscriptionChange**
> ShowResponseAppSubscriptionDTO scheduleSubscriptionChange(appSubscriptionChangeRequest)


### Example

```typescript
import {
    AppBillingApi,
    Configuration,
    AppSubscriptionChangeRequest
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new AppBillingApi(configuration);

let appUuid: string; // (default to undefined)
let appSubscriptionChangeRequest: AppSubscriptionChangeRequest; //

const { status, data } = await apiInstance.scheduleSubscriptionChange(
    appUuid,
    appSubscriptionChangeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appSubscriptionChangeRequest** | **AppSubscriptionChangeRequest**|  | |
| **appUuid** | [**string**] |  | defaults to undefined|


### Return type

**ShowResponseAppSubscriptionDTO**

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

# **usagePeriods**
> ShowResponseListAppInstallationBillingStatusDTO usagePeriods()


### Example

```typescript
import {
    AppBillingApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new AppBillingApi(configuration);

let appUuid: string; // (default to undefined)

const { status, data } = await apiInstance.usagePeriods(
    appUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **appUuid** | [**string**] |  | defaults to undefined|


### Return type

**ShowResponseListAppInstallationBillingStatusDTO**

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

