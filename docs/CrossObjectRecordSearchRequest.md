# CrossObjectRecordSearchRequest

Request DTO for searching records across multiple objects.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query** | **string** | Free-text search query. | [optional] [default to undefined]
**fromObjectUuid** | **string** | Event (or source) object UUID used with relationName to resolve target objects. | [optional] [default to undefined]
**relationName** | **string** | Relation name whose connected target objects are searched (e.g. attendees). | [optional] [default to undefined]
**objectUuids** | **Array&lt;string&gt;** | Object UUIDs to search. Used on their own when relationName is omitted; combined with relationName they narrow the relation\&#39;s target objects. | [optional] [default to undefined]
**objectNames** | **Array&lt;string&gt;** | Object internal names to search. Behaves like objectUuids and may be combined with it. | [optional] [default to undefined]
**preview** | **string** | Preview template name. | [optional] [default to undefined]
**page** | **number** | Page number (1-based). | [optional] [default to undefined]
**limit** | **number** | Maximum records returned. | [optional] [default to undefined]
**excludeRecordUuid** | **string** | Optional record UUID to exclude from results. | [optional] [default to undefined]

## Example

```typescript
import { CrossObjectRecordSearchRequest } from '@caraer/client';

const instance: CrossObjectRecordSearchRequest = {
    query,
    fromObjectUuid,
    relationName,
    objectUuids,
    objectNames,
    preview,
    page,
    limit,
    excludeRecordUuid,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
