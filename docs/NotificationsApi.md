# NotificationsApi

All URIs are relative to *https://v2.api.caraer.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**dismissNotification**](#dismissnotification) | **DELETE** /api/v2/notifications/{notificationId} | Dismiss a notification|
|[**firebaseToken**](#firebasetoken) | **GET** /api/v2/notifications/firebase-token | Mint a Firebase custom token so the app can listen to its inbox|
|[**getNotification**](#getnotification) | **GET** /api/v2/notifications/{notificationId} | Get an authoritative notification by ID|
|[**listNotifications**](#listnotifications) | **GET** /api/v2/notifications | List in-app notifications for the logged-in user|
|[**markAllAsRead**](#markallasread) | **PATCH** /api/v2/notifications/read-all | Mark all notifications as read|
|[**markAsRead**](#markasread) | **PATCH** /api/v2/notifications/{notificationId}/read | Mark a notification as read|
|[**registerDevice**](#registerdevice) | **PUT** /api/v2/notifications/devices/{deviceInstallationId} | Register this user\&#39;s native notification device|
|[**sendNotification**](#sendnotification) | **POST** /api/v2/notifications | Send a notification (app token)|
|[**unregisterDevice**](#unregisterdevice) | **DELETE** /api/v2/notifications/devices/{deviceInstallationId} | Unregister this user\&#39;s native notification device|

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
|**401** | Authentication is required or the token is invalid. |  -  |
|**403** | The caller is missing a required role or scope. |  -  |
|**404** | The requested resource was not found. |  -  |
|**500** | An internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **firebaseToken**
> ShowResponseMapStringString firebaseToken()


### Example

```typescript
import {
    NotificationsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new NotificationsApi(configuration);

const { status, data } = await apiInstance.firebaseToken();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ShowResponseMapStringString**

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

# **getNotification**
> ShowResponseItem getNotification()

Returns an inbox entry only for its human recipient in the authorized selected company, including entries outside the inbox page.

### Example

```typescript
import {
    NotificationsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new NotificationsApi(configuration);

let notificationId: string; // (default to undefined)

const { status, data } = await apiInstance.getNotification(
    notificationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **notificationId** | [**string**] |  | defaults to undefined|


### Return type

**ShowResponseItem**

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

# **listNotifications**
> ShowResponseNotificationInboxDTO listNotifications()

Returns notifications for the selected company plus user-general notifications that have no company. Other companies are never included.

### Example

```typescript
import {
    NotificationsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new NotificationsApi(configuration);

let company: string; // (optional) (default to undefined)
let limit: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.listNotifications(
    company,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **company** | [**string**] |  | (optional) defaults to undefined|
| **limit** | [**number**] |  | (optional) defaults to undefined|


### Return type

**ShowResponseNotificationInboxDTO**

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
|**401** | Authentication is required or the token is invalid. |  -  |
|**403** | The caller is missing a required role or scope. |  -  |
|**404** | The requested resource was not found. |  -  |
|**500** | An internal server error occurred. |  -  |

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
|**401** | Authentication is required or the token is invalid. |  -  |
|**403** | The caller is missing a required role or scope. |  -  |
|**500** | An internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **registerDevice**
> ShowResponseNotificationDeviceReceipt registerDevice(notificationDeviceRegistration)

Idempotently registers an allowed native application. Human authentication required. Does not accept a target user or company. Rotate the registration when moving between accounts.

### Example

```typescript
import {
    NotificationsApi,
    Configuration,
    NotificationDeviceRegistration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new NotificationsApi(configuration);

let deviceInstallationId: string; // (default to undefined)
let notificationDeviceRegistration: NotificationDeviceRegistration; //

const { status, data } = await apiInstance.registerDevice(
    deviceInstallationId,
    notificationDeviceRegistration
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **notificationDeviceRegistration** | **NotificationDeviceRegistration**|  | |
| **deviceInstallationId** | [**string**] |  | defaults to undefined|


### Return type

**ShowResponseNotificationDeviceReceipt**

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

# **sendNotification**
> CreateResponseMapStringString sendNotification(sendNotificationRequest)

Installed apps call this endpoint after async work completes. Authenticate with the installation token (Authorization: Bearer or X-CARAER-TOKEN). Every notification is scoped to the app\'s company. Omit targetUserUuid to notify every user in that company, or set it to aim the notification at one member.

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

**CreateResponseMapStringString**

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
|**401** | Authentication is required or the token is invalid. |  -  |
|**404** | The requested resource was not found. |  -  |
|**500** | An internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **unregisterDevice**
> SuccessResponseString unregisterDevice()

Idempotent. Call before logout; other users\' device registrations are inaccessible.

### Example

```typescript
import {
    NotificationsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new NotificationsApi(configuration);

let deviceInstallationId: string; // (default to undefined)

const { status, data } = await apiInstance.unregisterDevice(
    deviceInstallationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deviceInstallationId** | [**string**] |  | defaults to undefined|


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
|**401** | Authentication is required or the token is invalid. |  -  |
|**403** | The caller is missing a required role or scope. |  -  |
|**404** | The requested resource was not found. |  -  |
|**500** | An internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

