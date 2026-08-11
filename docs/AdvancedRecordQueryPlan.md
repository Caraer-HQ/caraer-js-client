# AdvancedRecordQueryPlan


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**version** | **number** |  | [optional] [default to undefined]
**mainObject** | **string** |  | [optional] [default to undefined]
**mainObjects** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**query** | **string** |  | [optional] [default to undefined]
**filter** | [**Filter**](Filter.md) |  | [optional] [default to undefined]
**sort** | [**Set&lt;SortItem&gt;**](SortItem.md) |  | [optional] [default to undefined]
**show** | [**Set&lt;ShowItem&gt;**](ShowItem.md) |  | [optional] [default to undefined]
**strategy** | **string** |  | [optional] [default to undefined]
**anchorRecordUuid** | **string** |  | [optional] [default to undefined]
**criteria** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**graphTraversals** | [**Array&lt;GraphTraversalSpec&gt;**](GraphTraversalSpec.md) |  | [optional] [default to undefined]
**scoreWeights** | **{ [key: string]: number; }** |  | [optional] [default to undefined]
**includeEvidence** | **boolean** |  | [optional] [default to undefined]
**maxTraversalDepth** | **number** |  | [optional] [default to undefined]
**page** | **number** |  | [optional] [default to undefined]
**limit** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { AdvancedRecordQueryPlan } from '@caraer/client';

const instance: AdvancedRecordQueryPlan = {
    version,
    mainObject,
    mainObjects,
    query,
    filter,
    sort,
    show,
    strategy,
    anchorRecordUuid,
    criteria,
    graphTraversals,
    scoreWeights,
    includeEvidence,
    maxTraversalDepth,
    page,
    limit,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
