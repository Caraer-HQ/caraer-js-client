# AppBillingLineItemStatusDTO

Current-period usage for one pricing line item

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [optional] [default to undefined]
**label** | **string** |  | [optional] [default to undefined]
**countType** | **string** |  | [optional] [default to undefined]
**countingSource** | **string** |  | [optional] [default to undefined]
**usage** | **number** |  | [optional] [default to undefined]
**usageBreakdown** | **{ [key: string]: number; }** |  | [optional] [default to undefined]
**includedUnits** | **number** |  | [optional] [default to undefined]
**overageUnits** | **number** |  | [optional] [default to undefined]
**projectedCharge** | **number** |  | [optional] [default to undefined]
**status** | **string** |  | [optional] [default to undefined]
**note** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { AppBillingLineItemStatusDTO } from '@caraer/client';

const instance: AppBillingLineItemStatusDTO = {
    name,
    label,
    countType,
    countingSource,
    usage,
    usageBreakdown,
    includedUnits,
    overageUnits,
    projectedCharge,
    status,
    note,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
