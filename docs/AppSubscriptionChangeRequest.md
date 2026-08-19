# AppSubscriptionChangeRequest

Schedule a plan or commitment change

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**targetPlanUuid** | **string** |  | [optional] [default to undefined]
**targetCommitment** | **string** | MONTHLY or ANNUAL | [optional] [default to undefined]

## Example

```typescript
import { AppSubscriptionChangeRequest } from '@caraer/client';

const instance: AppSubscriptionChangeRequest = {
    targetPlanUuid,
    targetCommitment,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
