# Team


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
**description** | **string** |  | [optional] [default to undefined]
**scopes** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**filtersString** | **string** |  | [optional] [default to undefined]
**filters** | [**{ [key: string]: Filter; }**](Filter.md) |  | [optional] [default to undefined]
**memberCount** | **number** |  | [optional] [default to undefined]
**deleted** | **boolean** |  | [optional] [default to undefined]
**complete** | **boolean** |  | [optional] [default to undefined]
**uuid** | **string** |  | [default to undefined]

## Example

```typescript
import { Team } from '@caraer/client';

const instance: Team = {
    name,
    label,
    createdAt,
    updatedAt,
    deletedAt,
    createdByUuid,
    updatedByUuid,
    deletedByUuid,
    index,
    description,
    scopes,
    filtersString,
    filters,
    memberCount,
    deleted,
    complete,
    uuid,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
