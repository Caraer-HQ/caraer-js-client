# CreateResponseSignedUrlResultDTO

Response for a successful resource creation operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **string** | A message detailing the result of the operation. | [optional] [default to undefined]
**data** | [**SignedUrlResultDTO**](SignedUrlResultDTO.md) | The data payload of the response, if any. | [optional] [default to undefined]

## Example

```typescript
import { CreateResponseSignedUrlResultDTO } from '@caraer/client';

const instance: CreateResponseSignedUrlResultDTO = {
    message,
    data,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
