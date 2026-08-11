# AdvancedRecordQueryResponse

Advanced record query response with scores and evidence.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **Array&lt;any&gt;** |  | [optional] [default to undefined]
**results** | [**Array&lt;AdvancedRecordQueryResultItem&gt;**](AdvancedRecordQueryResultItem.md) |  | [optional] [default to undefined]
**total** | **number** |  | [optional] [default to undefined]
**page** | **number** |  | [optional] [default to undefined]
**perPage** | **number** |  | [optional] [default to undefined]
**lastPage** | **number** |  | [optional] [default to undefined]
**plan** | [**AdvancedRecordQueryPlan**](AdvancedRecordQueryPlan.md) |  | [optional] [default to undefined]
**confidence** | **number** |  | [optional] [default to undefined]
**warnings** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**diagnostics** | **{ [key: string]: any | null; }** |  | [optional] [default to undefined]

## Example

```typescript
import { AdvancedRecordQueryResponse } from '@caraer/client';

const instance: AdvancedRecordQueryResponse = {
    data,
    results,
    total,
    page,
    perPage,
    lastPage,
    plan,
    confidence,
    warnings,
    diagnostics,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
