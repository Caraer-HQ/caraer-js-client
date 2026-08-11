# AggregateRequest

Aggregation request for analytics charts over Neo4j records.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**xaxis** | [**AnalyticsAxisConfig**](AnalyticsAxisConfig.md) |  | [optional] [default to undefined]
**yaxis** | [**AnalyticsAxisConfig**](AnalyticsAxisConfig.md) |  | [optional] [default to undefined]
**id** | **string** | Optional client widget id, echoed in batch responses. | [optional] [default to undefined]
**mainObject** | **string** |  | [optional] [default to undefined]
**filter** | [**Filter**](Filter.md) |  | [optional] [default to undefined]
**query** | **string** |  | [optional] [default to undefined]
**xAxis** | [**AnalyticsAxisConfig**](AnalyticsAxisConfig.md) |  | [optional] [default to undefined]
**yAxis** | [**AnalyticsAxisConfig**](AnalyticsAxisConfig.md) |  | [optional] [default to undefined]
**series** | [**AnalyticsSeriesConfig**](AnalyticsSeriesConfig.md) |  | [optional] [default to undefined]
**limit** | **number** | Optional top-N series limit. For additive metrics (count, countDistinct, sum), keeps the N series with the highest total Y. Null or &lt;&#x3D; 0 means no truncation. | [optional] [default to undefined]
**sort** | **string** |  | [optional] [default to undefined]
**excludeEmptyValues** | **boolean** | When true, omit null/blank/(empty) category buckets from the response. Useful for bar and pie charts grouped by optional properties. | [optional] [default to undefined]

## Example

```typescript
import { AggregateRequest } from '@caraer/client';

const instance: AggregateRequest = {
    xaxis,
    yaxis,
    id,
    mainObject,
    filter,
    query,
    xAxis,
    yAxis,
    series,
    limit,
    sort,
    excludeEmptyValues,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
