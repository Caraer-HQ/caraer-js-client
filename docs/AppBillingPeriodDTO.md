# AppBillingPeriodDTO

UTC calendar-month billing window, with pro-rata fields when the subscription started mid-month

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**start** | **string** |  | [optional] [default to undefined]
**end** | **string** |  | [optional] [default to undefined]
**status** | **string** |  | [optional] [default to undefined]
**activeStart** | **string** |  | [optional] [default to undefined]
**daysActive** | **number** |  | [optional] [default to undefined]
**daysInPeriod** | **number** |  | [optional] [default to undefined]
**prorationFactor** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { AppBillingPeriodDTO } from '@caraer/client';

const instance: AppBillingPeriodDTO = {
    start,
    end,
    status,
    activeStart,
    daysActive,
    daysInPeriod,
    prorationFactor,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
