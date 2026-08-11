# AnalyticsWidgetConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**title** | **string** |  | [optional] [default to undefined]
**chartType** | **string** |  | [optional] [default to undefined]
**mainObject** | **string** |  | [optional] [default to undefined]
**x** | **number** |  | [optional] [default to undefined]
**y** | **number** |  | [optional] [default to undefined]
**w** | **number** |  | [optional] [default to undefined]
**h** | **number** |  | [optional] [default to undefined]
**filter** | [**Filter**](Filter.md) |  | [optional] [default to undefined]
**xAxis** | [**AnalyticsAxisConfig**](AnalyticsAxisConfig.md) |  | [optional] [default to undefined]
**yAxis** | [**AnalyticsAxisConfig**](AnalyticsAxisConfig.md) |  | [optional] [default to undefined]
**series** | [**AnalyticsSeriesConfig**](AnalyticsSeriesConfig.md) |  | [optional] [default to undefined]
**comparisonMetrics** | [**Array&lt;AnalyticsComparisonMetric&gt;**](AnalyticsComparisonMetric.md) |  | [optional] [default to undefined]
**trend** | [**AnalyticsTrendConfig**](AnalyticsTrendConfig.md) |  | [optional] [default to undefined]
**limit** | **number** |  | [optional] [default to undefined]
**sort** | **string** |  | [optional] [default to undefined]
**excludeEmptyValues** | **boolean** |  | [optional] [default to undefined]
**style** | [**AnalyticsWidgetStyle**](AnalyticsWidgetStyle.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AnalyticsWidgetConfig } from '@caraer/client';

const instance: AnalyticsWidgetConfig = {
    id,
    title,
    chartType,
    mainObject,
    x,
    y,
    w,
    h,
    filter,
    xAxis,
    yAxis,
    series,
    comparisonMetrics,
    trend,
    limit,
    sort,
    excludeEmptyValues,
    style,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
