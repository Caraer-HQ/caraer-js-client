# UpdateLifecyclePropertiesDTO

Request body for enabling lifecycle tracking on object properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**propertyUuids** | **Array&lt;string&gt;** | UUIDs of properties to track in lifecycle history | [optional] [default to undefined]

## Example

```typescript
import { UpdateLifecyclePropertiesDTO } from '@caraer/client';

const instance: UpdateLifecyclePropertiesDTO = {
    propertyUuids,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
