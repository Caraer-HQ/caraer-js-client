# AppSubscriptionDTO

Current and pending subscription state

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**selectedPricingPlanUuid** | **string** |  | [optional] [default to undefined]
**billingCommitment** | **string** |  | [optional] [default to undefined]
**contractStart** | **number** |  | [optional] [default to undefined]
**contractEnd** | **number** |  | [optional] [default to undefined]
**pendingPricingPlanUuid** | **string** |  | [optional] [default to undefined]
**pendingBillingCommitment** | **string** |  | [optional] [default to undefined]
**pendingEffectiveAt** | **number** |  | [optional] [default to undefined]
**message** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { AppSubscriptionDTO } from '@caraer/client';

const instance: AppSubscriptionDTO = {
    selectedPricingPlanUuid,
    billingCommitment,
    contractStart,
    contractEnd,
    pendingPricingPlanUuid,
    pendingBillingCommitment,
    pendingEffectiveAt,
    message,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
