# AdvancedRecordQueryResultItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**record** | **any** |  | [optional] [default to undefined]
**recordUuid** | **string** |  | [optional] [default to undefined]
**objectName** | **string** |  | [optional] [default to undefined]
**scores** | [**ScoreBreakdown**](ScoreBreakdown.md) |  | [optional] [default to undefined]
**criteria** | [**Array&lt;CriterionScore&gt;**](CriterionScore.md) |  | [optional] [default to undefined]
**supportingEvidence** | [**Array&lt;QueryEvidence&gt;**](QueryEvidence.md) |  | [optional] [default to undefined]
**contradictingEvidence** | [**Array&lt;QueryEvidence&gt;**](QueryEvidence.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AdvancedRecordQueryResultItem } from '@caraer/client';

const instance: AdvancedRecordQueryResultItem = {
    record,
    recordUuid,
    objectName,
    scores,
    criteria,
    supportingEvidence,
    contradictingEvidence,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
