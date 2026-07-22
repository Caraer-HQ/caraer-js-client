# ErrorResponse

Defines the structure of error responses returned by the API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **string** | The error message providing details about the failure. | [optional] [default to undefined]
**errors** | [**CaraerErrorType**](CaraerErrorType.md) | A list of error types providing further details about the error. | [optional] [default to undefined]
**status** | **number** | The HTTP status code associated with the error. | [optional] [default to undefined]
**stackTrace** | **string** |  | [optional] [default to undefined]
**roles** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**scopes** | **Array&lt;string&gt;** |  | [optional] [default to undefined]

## Example

```typescript
import { ErrorResponse } from '@caraer/client';

const instance: ErrorResponse = {
    message,
    errors,
    status,
    stackTrace,
    roles,
    scopes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
