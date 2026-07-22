# Filter

DTO representing a filter composed of filter groups for querying records. The filter groups are combined using a logical OR operation. The filter items within each group are combined using a logical AND operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**groups** | [**Set&lt;FilterGroup&gt;**](FilterGroup.md) | A collection of filter groups. | [optional] [default to undefined]

## Example

```typescript
import { Filter } from '@caraer/client';

const instance: Filter = {
    groups,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
