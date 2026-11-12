# ModelRecord


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [default to undefined]
**label** | **string** |  | [optional] [default to undefined]
**createdAt** | **number** |  | [optional] [default to undefined]
**updatedAt** | **number** |  | [optional] [default to undefined]
**deletedAt** | **number** |  | [optional] [default to undefined]
**createdByUuid** | **string** |  | [optional] [default to undefined]
**updatedByUuid** | **string** |  | [optional] [default to undefined]
**deletedByUuid** | **string** |  | [optional] [default to undefined]
**index** | **number** |  | [optional] [default to undefined]
**deleted** | **boolean** |  | [optional] [default to undefined]
**complete** | **boolean** |  | [optional] [default to undefined]
**uuid** | **string** |  | [default to undefined]
**properties** | [**Array&lt;FilledProperty&gt;**](FilledProperty.md) |  | [optional] [default to undefined]
**objects** | **{ [key: string]: any | null; }** |  | [optional] [default to undefined]
**user** | [**PublicUserDTO**](PublicUserDTO.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ModelRecord } from '@caraer/client';

const instance: ModelRecord = {
    name,
    label,
    createdAt,
    updatedAt,
    deletedAt,
    createdByUuid,
    updatedByUuid,
    deletedByUuid,
    index,
    deleted,
    complete,
    uuid,
    properties,
    objects,
    user,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
