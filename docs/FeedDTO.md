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
**itemPath** | **string** |  | [optional] [default to undefined]
**cacheTtlSeconds** | **number** |  | [optional] [default to undefined]
**active** | **boolean** |  | [optional] [default to undefined]
**direction** | **string** |  | [optional] [default to undefined]
**sourceUrl** | **string** |  | [optional] [default to undefined]
**sourceAuthType** | **string** |  | [optional] [default to undefined]
**sourceAuthKey** | **string** |  | [optional] [default to undefined]
**sourceAuthValue** | **string** |  | [optional] [default to undefined]
**sourceAuthUsername** | **string** |  | [optional] [default to undefined]
**importInterval** | **string** |  | [optional] [default to undefined]
**publishMode** | **string** |  | [optional] [default to undefined]
**publishEnvironment** | **string** |  | [optional] [default to undefined]
**publishFilter** | **any** |  | [optional] [default to undefined]
**publishFilterJson** | **string** |  | [optional] [default to undefined]
**unpublishFilter** | **any** |  | [optional] [default to undefined]
**unpublishFilterJson** | **string** |  | [optional] [default to undefined]
**lastImportAt** | **number** |  | [optional] [default to undefined]
**lastImportStatus** | **string** |  | [optional] [default to undefined]
**lastImportMessage** | **string** |  | [optional] [default to undefined]
**lastImportJson** | **string** |  | [optional] [default to undefined]
**importRunningAt** | **number** |  | [optional] [default to undefined]
**nextImportAt** | **number** |  | [optional] [default to undefined]
**warnings** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**availableEnvironments** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**siblingImportFeeds** | **Array&lt;string&gt;** |  | [optional] [default to undefined]

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
    itemPath,
    cacheTtlSeconds,
    active,
    direction,
    sourceUrl,
    sourceAuthType,
    sourceAuthKey,
    sourceAuthValue,
    sourceAuthUsername,
    importInterval,
    publishMode,
    publishEnvironment,
    publishFilter,
    publishFilterJson,
    unpublishFilter,
    unpublishFilterJson,
    lastImportAt,
    lastImportStatus,
    lastImportMessage,
    lastImportJson,
    importRunningAt,
    nextImportAt,
    warnings,
    availableEnvironments,
    siblingImportFeeds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
