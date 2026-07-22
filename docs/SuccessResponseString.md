# SuccessResponseString

Represents a standard successful response with a message and optional data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **string** | A message detailing the result of the operation. | [optional] [default to undefined]
**data** | **string** | The data payload of the response, if any. | [optional] [default to undefined]

## Example

```typescript
import { SuccessResponseString } from '@caraer/client';

const instance: SuccessResponseString = {
    message,
    data,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
