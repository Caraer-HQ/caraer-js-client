# ReviewRequest

Review request with feedback, reviewer notes, and publish state

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**feedback** | **string** | Feedback shown to the developer. | [optional] [default to undefined]
**reviewerNotes** | **string** | Internal notes for reviewers (not shown to the developer). | [optional] [default to undefined]
**publishState** | **string** | Publish state after review: APPROVED, REJECTED, CHANGES_REQUESTED. | [optional] [default to undefined]

## Example

```typescript
import { ReviewRequest } from '@caraer/client';

const instance: ReviewRequest = {
    feedback,
    reviewerNotes,
    publishState,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
