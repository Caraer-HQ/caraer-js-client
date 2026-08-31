# SuccessResponseListDeveloperSandboxDTO

Represents a standard successful response with a message and optional data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **string** | A message detailing the result of the operation. | [optional] [default to undefined]
**data** | [**Array&lt;DeveloperSandboxDTO&gt;**](DeveloperSandboxDTO.md) | The data payload of the response, if any. | [optional] [default to undefined]

## Example

```typescript
import { SuccessResponseListDeveloperSandboxDTO } from '@caraer/client';

const instance: SuccessResponseListDeveloperSandboxDTO = {
    message,
    data,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
