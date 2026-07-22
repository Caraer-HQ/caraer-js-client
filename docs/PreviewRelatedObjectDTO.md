# PreviewRelatedObjectDTO

Data transfer object representing a PreviewRelatedObject, constructed using related object and relation data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object** | [**CaraerObjectDTO**](CaraerObjectDTO.md) | The related object data. | [optional] [default to undefined]
**relation** | [**RelationDTO**](RelationDTO.md) | The type of relation between objects. | [optional] [default to undefined]

## Example

```typescript
import { PreviewRelatedObjectDTO } from '@caraer/client';

const instance: PreviewRelatedObjectDTO = {
    object,
    relation,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
