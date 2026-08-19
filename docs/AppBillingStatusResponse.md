# AppBillingStatusResponse

Billing status for one or more app installations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**appUuid** | **string** |  | [optional] [default to undefined]
**appName** | **string** |  | [optional] [default to undefined]
**period** | [**AppBillingPeriodDTO**](AppBillingPeriodDTO.md) |  | [optional] [default to undefined]
**installations** | [**Array&lt;AppInstallationBillingStatusDTO&gt;**](AppInstallationBillingStatusDTO.md) |  | [optional] [default to undefined]
**summary** | [**AppBillingSummaryDTO**](AppBillingSummaryDTO.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AppBillingStatusResponse } from '@caraer/client';

const instance: AppBillingStatusResponse = {
    appUuid,
    appName,
    period,
    installations,
    summary,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
