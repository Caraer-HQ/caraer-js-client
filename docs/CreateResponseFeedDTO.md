# CreateResponseFeedDTO

Response for a successful resource creation operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **string** | A message detailing the result of the operation. | [optional] [default to undefined]
**data** | [**FeedDTO**](FeedDTO.md) | The data payload of the response, if any. | [optional] [default to undefined]

## Example

```typescript
import { CreateResponseFeedDTO } from '@caraer/client';

const instance: CreateResponseFeedDTO = {
    message,
    data,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
