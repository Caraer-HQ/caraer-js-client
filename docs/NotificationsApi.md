# NotificationsApi

All URIs are relative to *https://v2.api.caraer.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**dismissNotification**](#dismissnotification) | **DELETE** /api/v2/notifications/{notificationId} | Dismiss a notification|
|[**markAllAsRead**](#markallasread) | **PATCH** /api/v2/notifications/read-all | Mark all notifications as read for the current company|
|[**markAsRead**](#markasread) | **PATCH** /api/v2/notifications/{notificationId}/read | Mark a notification as read|
|[**sendNotification**](#sendnotification) | **POST** /api/v2/notifications | Send a notification (app token)|

# **dismissNotification**
> DeleteResponseString dismissNotification()


### Example

```typescript
import {
    NotificationsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new NotificationsApi(configuration);

let notificationId: string; //Firestore notification document ID (default to undefined)

const { status, data } = await apiInstance.dismissNotification(
    notificationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **notificationId** | [**string**] | Firestore notification document ID | defaults to undefined|


### Return type

**DeleteResponseString**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Notification dismissed |  -  |
|**404** | Notification not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **markAllAsRead**
> SuccessResponseString markAllAsRead()


### Example

```typescript
import {
    NotificationsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new NotificationsApi(configuration);

const { status, data } = await apiInstance.markAllAsRead();
```

### Parameters
This endpoint does not have any parameters.


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

# **markAsRead**
> SuccessResponseString markAsRead()


### Example

```typescript
import {
    NotificationsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new NotificationsApi(configuration);

let notificationId: string; //Firestore notification document ID (default to undefined)

const { status, data } = await apiInstance.markAsRead(
    notificationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **notificationId** | [**string**] | Firestore notification document ID | defaults to undefined|


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
|**200** | Notification marked as read |  -  |
|**404** | Notification not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sendNotification**
> sendNotification(sendNotificationRequest)

Installed apps call this endpoint after async work completes. Authenticate with the installation token (Authorization: Bearer or X-CARAER-TOKEN). The target user must belong to the app\'s company.

### Example

```typescript
import {
    NotificationsApi,
    Configuration,
    SendNotificationRequest
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new NotificationsApi(configuration);

let sendNotificationRequest: SendNotificationRequest; //

const { status, data } = await apiInstance.sendNotification(
    sendNotificationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sendNotificationRequest** | **SendNotificationRequest**|  | |


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Notification created |  -  |
|**400** | Invalid request |  -  |
|**403** | Forbidden |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

