# NotFoundError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cause** | [**NotFoundErrorCause**](NotFoundErrorCause.md) |  | [optional] [default to undefined]
**stackTrace** | [**Array&lt;NotFoundErrorCauseStackTraceInner&gt;**](NotFoundErrorCauseStackTraceInner.md) |  | [optional] [default to undefined]
**errors** | [**Array&lt;CaraerErrorType&gt;**](CaraerErrorType.md) | The error message providing details about the failure. | [optional] [default to undefined]
**code** | **number** | The HTTP status code associated with the error. | [optional] [default to undefined]
**correctionSuggestion** | **string** | A suggestion on how to correct the error. | [default to undefined]
**message** | **string** | The error message providing details about the failure. | [default to undefined]
**suppressed** | [**Array&lt;NotFoundErrorCause&gt;**](NotFoundErrorCause.md) |  | [optional] [default to undefined]
**localizedMessage** | **string** |  | [optional] [default to undefined]
**resourceKind** | **string** |  | [optional] [default to undefined]
**identifier** | **string** |  | [optional] [default to undefined]
**identifierType** | **string** |  | [optional] [default to undefined]
**referencedBy** | [**Array&lt;Reference&gt;**](Reference.md) |  | [optional] [default to undefined]

## Example

```typescript
import { NotFoundError } from '@caraer/client';

const instance: NotFoundError = {
    cause,
    stackTrace,
    errors,
    code,
    correctionSuggestion,
    message,
    suppressed,
    localizedMessage,
    resourceKind,
    identifier,
    identifierType,
    referencedBy,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
