# AdvancedRecordQueryRequest

Advanced record query. Provide either question or plan, not both.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**question** | **string** | Natural-language question to plan and execute. | [optional] [default to undefined]
**plan** | [**AdvancedRecordQueryPlan**](AdvancedRecordQueryPlan.md) | Validated declarative query plan. | [optional] [default to undefined]
**mainObject** | **string** | Optional main object hint. Use mainObjects for multi-type queries. | [optional] [default to undefined]
**mainObjects** | **Array&lt;string&gt;** | Optional object list for multi-type queries (e.g. candidate and vacancy together). | [optional] [default to undefined]
**strategy** | **string** |  | [optional] [default to undefined]
**page** | **number** |  | [optional] [default to undefined]
**limit** | **number** |  | [optional] [default to undefined]
**preview** | **string** |  | [optional] [default to undefined]
**parse** | **any** |  | [optional] [default to undefined]
**archived** | **boolean** |  | [optional] [default to undefined]
**explain** | **boolean** | When true, include normalized plan, scores, and evidence. | [optional] [default to undefined]
**recordReturnFormat** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { AdvancedRecordQueryRequest } from '@caraer/client';

const instance: AdvancedRecordQueryRequest = {
    question,
    plan,
    mainObject,
    mainObjects,
    strategy,
    page,
    limit,
    preview,
    parse,
    archived,
    explain,
    recordReturnFormat,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
