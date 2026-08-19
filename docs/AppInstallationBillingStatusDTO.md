# AppInstallationBillingStatusDTO

Current-period billing status for one installation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**appUuid** | **string** |  | [optional] [default to undefined]
**appName** | **string** |  | [optional] [default to undefined]
**installationUuid** | **string** |  | [optional] [default to undefined]
**companyUuid** | **string** |  | [optional] [default to undefined]
**companyName** | **string** |  | [optional] [default to undefined]
**selectedPricingPlanUuid** | **string** |  | [optional] [default to undefined]
**selectedPricingPlanTitle** | **string** |  | [optional] [default to undefined]
**pricingType** | **string** |  | [optional] [default to undefined]
**billingCommitment** | **string** |  | [optional] [default to undefined]
**pendingPricingPlanUuid** | **string** |  | [optional] [default to undefined]
**pendingEffectiveAt** | **number** |  | [optional] [default to undefined]
**period** | [**AppBillingPeriodDTO**](AppBillingPeriodDTO.md) |  | [optional] [default to undefined]
**lineItems** | [**Array&lt;AppBillingLineItemStatusDTO&gt;**](AppBillingLineItemStatusDTO.md) |  | [optional] [default to undefined]
**projectedTotal** | **number** |  | [optional] [default to undefined]
**subscription** | [**AppSubscriptionDTO**](AppSubscriptionDTO.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AppInstallationBillingStatusDTO } from '@caraer/client';

const instance: AppInstallationBillingStatusDTO = {
    appUuid,
    appName,
    installationUuid,
    companyUuid,
    companyName,
    selectedPricingPlanUuid,
    selectedPricingPlanTitle,
    pricingType,
    billingCommitment,
    pendingPricingPlanUuid,
    pendingEffectiveAt,
    period,
    lineItems,
    projectedTotal,
    subscription,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
