# CalendarsApi

All URIs are relative to *https://v2.api.caraer.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**bootstrap**](#bootstrap) | **POST** /api/v2/calendars/bootstrap | Ensure calendar schema and personal default; never assigns existing events|
|[**create4**](#create4) | **POST** /api/v2/calendars | Create a calendar owned by the current user|
|[**list3**](#list3) | **GET** /api/v2/calendars | List calendars visible to the current company|

# **bootstrap**
> SuccessResponseCalendarBootstrapDTO bootstrap()


### Example

```typescript
import {
    CalendarsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new CalendarsApi(configuration);

const { status, data } = await apiInstance.bootstrap();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**SuccessResponseCalendarBootstrapDTO**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Calendars ready |  -  |
|**400** | Invalid request |  -  |
|**401** | Authentication is required or the token is invalid. |  -  |
|**403** | The caller is missing a required role or scope. |  -  |
|**404** | The requested resource was not found. |  -  |
|**500** | An internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create4**
> CreateResponseCalendarRecordDTO create4(calendarCreateRequest)


### Example

```typescript
import {
    CalendarsApi,
    Configuration,
    CalendarCreateRequest
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new CalendarsApi(configuration);

let calendarCreateRequest: CalendarCreateRequest; //

const { status, data } = await apiInstance.create4(
    calendarCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **calendarCreateRequest** | **CalendarCreateRequest**|  | |


### Return type

**CreateResponseCalendarRecordDTO**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Calendar created |  -  |
|**400** | Invalid request |  -  |
|**401** | Authentication is required or the token is invalid. |  -  |
|**403** | The caller is missing a required role or scope. |  -  |
|**404** | The requested resource was not found. |  -  |
|**500** | An internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list3**
> SuccessResponseListCalendarRecordDTO list3()


### Example

```typescript
import {
    CalendarsApi,
    Configuration
} from '@caraer/client';

const configuration = new Configuration();
const apiInstance = new CalendarsApi(configuration);

const { status, data } = await apiInstance.list3();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**SuccessResponseListCalendarRecordDTO**

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

