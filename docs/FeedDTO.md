# FeedDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **string** | Unique identifier for the entity | [default to undefined]
**name** | **string** | The name of the entity | [default to undefined]
**label** | **string** | Display label for the entity, can be different from name | [optional] [default to undefined]
**createdAt** | **number** | Unix timestamp when the entity was created | [optional] [default to undefined]
**createdBy** | [**ModelRecord**](ModelRecord.md) | Identifier of the user who created the entity | [optional] [default to undefined]
**updatedAt** | **number** | Unix timestamp when the entity was last updated | [optional] [default to undefined]
**updatedBy** | [**ModelRecord**](ModelRecord.md) | Identifier of the user who last updated the entity | [optional] [default to undefined]
**deletedAt** | **number** | Unix timestamp when the entity was deleted (null if not deleted) | [optional] [default to undefined]
**deletedBy** | [**ModelRecord**](ModelRecord.md) | Identifier of the user who deleted the entity | [optional] [default to undefined]
**index** | **number** | Index number for ordering entities | [optional] [default to undefined]
**slug** | **string** |  | [optional] [default to undefined]
**format** | **string** |  | [optional] [default to undefined]
**mainObject** | **string** |  | [optional] [default to undefined]
**isPublic** | **boolean** |  | [optional] [default to undefined]
**publicToken** | **string** |  | [optional] [default to undefined]
**filter** | **any** |  | [optional] [default to undefined]
**filterJson** | **string** |  | [optional] [default to undefined]
**mapping** | **any** |  | [optional] [default to undefined]
**mappingJson** | **string** |  | [optional] [default to undefined]
**parseRecord** | **boolean** |  | [optional] [default to undefined]
**rootElement** | **string** |  | [optional] [default to undefined]
**itemElement** | **string** |  | [optional] [default to undefined]
**cacheTtlSeconds** | **number** |  | [optional] [default to undefined]
**active** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { FeedDTO } from '@caraer/client';

const instance: FeedDTO = {
    uuid,
    name,
    label,
    createdAt,
    createdBy,
    updatedAt,
    updatedBy,
    deletedAt,
    deletedBy,
    index,
    slug,
    format,
    mainObject,
    isPublic,
    publicToken,
    filter,
    filterJson,
    mapping,
    mappingJson,
    parseRecord,
    rootElement,
    itemElement,
    cacheTtlSeconds,
    active,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
