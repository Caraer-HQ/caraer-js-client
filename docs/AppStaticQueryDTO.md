# AppStaticQueryDTO

Read-only Cypher snapshot used by static_query line items

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schedule** | **string** | When the query runs: period_end (default) or period_start | [optional] [default to undefined]
**cypher** | **string** | Read-only Cypher that returns count(...) AS count | [optional] [default to undefined]

## Example

```typescript
import { AppStaticQueryDTO } from '@caraer/client';

const instance: AppStaticQueryDTO = {
    schedule,
    cypher,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
