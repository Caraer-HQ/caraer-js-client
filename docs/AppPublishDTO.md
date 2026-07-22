# AppPublishDTO

Publish and review state for a public app in the marketplace

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
**publishState** | **string** | Publish state: DRAFT, SUBMITTED, IN_REVIEW, APPROVED, PUBLISHED, REJECTED, CHANGES_REQUESTED | [optional] [default to undefined]
**submittedAt** | **number** | Timestamp when developer submitted for review | [optional] [default to undefined]
**reviewedAt** | **number** | Timestamp when review was completed | [optional] [default to undefined]
**publishedAt** | **number** | Timestamp when app went live in marketplace | [optional] [default to undefined]
**feedback** | **string** | Feedback shown to developer (e.g. rejection reason) | [optional] [default to undefined]
**reviewerNotes** | **string** | Internal reviewer notes (admin only, not exposed to developer) | [optional] [default to undefined]

## Example

```typescript
import { AppPublishDTO } from '@caraer/client';

const instance: AppPublishDTO = {
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
    publishState,
    submittedAt,
    reviewedAt,
    publishedAt,
    feedback,
    reviewerNotes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
