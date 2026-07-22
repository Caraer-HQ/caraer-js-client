# TrackingEventRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**visitorId** | **string** |  | [optional] [default to undefined]
**sessionId** | **string** |  | [optional] [default to undefined]
**type** | **string** |  | [optional] [default to undefined]
**ts** | **number** |  | [optional] [default to undefined]
**pageUrl** | **string** |  | [optional] [default to undefined]
**pageTitle** | **string** |  | [optional] [default to undefined]
**webpageUuid** | **string** |  | [optional] [default to undefined]
**recordUuid** | **string** |  | [optional] [default to undefined]
**formUuid** | **string** |  | [optional] [default to undefined]
**formName** | **string** |  | [optional] [default to undefined]
**utm** | **{ [key: string]: string; }** |  | [optional] [default to undefined]
**referrer** | **string** |  | [optional] [default to undefined]
**scrollPct** | **number** |  | [optional] [default to undefined]
**timeOnPage** | **number** |  | [optional] [default to undefined]
**activeTime** | **number** |  | [optional] [default to undefined]
**ctaId** | **string** |  | [optional] [default to undefined]
**ctaLabel** | **string** |  | [optional] [default to undefined]
**stepIndex** | **number** |  | [optional] [default to undefined]
**stepTitle** | **string** |  | [optional] [default to undefined]
**progressPct** | **number** |  | [optional] [default to undefined]
**completedFieldsCount** | **number** |  | [optional] [default to undefined]
**consentChoice** | **string** |  | [optional] [default to undefined]
**requestedRoute** | **string** |  | [optional] [default to undefined]
**userAgent** | **string** |  | [optional] [default to undefined]
**clientIp** | **string** |  | [optional] [default to undefined]
**country** | **string** |  | [optional] [default to undefined]
**region** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { TrackingEventRequest } from '@caraer/client';

const instance: TrackingEventRequest = {
    visitorId,
    sessionId,
    type,
    ts,
    pageUrl,
    pageTitle,
    webpageUuid,
    recordUuid,
    formUuid,
    formName,
    utm,
    referrer,
    scrollPct,
    timeOnPage,
    activeTime,
    ctaId,
    ctaLabel,
    stepIndex,
    stepTitle,
    progressPct,
    completedFieldsCount,
    consentChoice,
    requestedRoute,
    userAgent,
    clientIp,
    country,
    region,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
