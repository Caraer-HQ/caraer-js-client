# FormRelationDTO

Data transfer object representing a form relation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | The type of the form relation. The options are: CONVERSION_PAGE_RECORD, RELATED_RECORD_TO_CONVERSION_PAGE_RECORD, STATIC | [optional] [default to undefined]
**relation** | [**RelationDTO**](RelationDTO.md) | The relation to be created. | [optional] [default to undefined]
**relatedRelation** | [**RelationDTO**](RelationDTO.md) | The related relation associated with conversion page record | [optional] [default to undefined]
**relatedObject** | [**CaraerObjectDTO**](CaraerObjectDTO.md) | The related object associated with conversion page record or for static | [optional] [default to undefined]
**recordUuid** | **string** | UUID of the record for the static connection. | [optional] [default to undefined]
**relatedObjectConnection** | **string** | The connection type for the related object. The options are: PRIMARY, ALL | [optional] [default to undefined]

## Example

```typescript
import { FormRelationDTO } from '@caraer/client';

const instance: FormRelationDTO = {
    type,
    relation,
    relatedRelation,
    relatedObject,
    recordUuid,
    relatedObjectConnection,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
