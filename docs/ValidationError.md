# ValidationError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cause** | [**NotFoundErrorCause**](NotFoundErrorCause.md) |  | [optional] [default to undefined]
**stackTrace** | [**Array&lt;NotFoundErrorCauseStackTraceInner&gt;**](NotFoundErrorCauseStackTraceInner.md) |  | [optional] [default to undefined]
**suppressed** | [**Array&lt;NotFoundErrorCause&gt;**](NotFoundErrorCause.md) |  | [optional] [default to undefined]
**localizedMessage** | **string** |  | [optional] [default to undefined]
**type** | **string** | The type of error. | [default to undefined]
**field** | **string** |  | [optional] [default to undefined]
**message** | **string** | The error message providing details about the failure. | [default to undefined]
**correctionSuggestion** | **string** | A suggestion on how to correct the error. | [default to undefined]
**_class** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { ValidationError } from '@caraer/client';

const instance: ValidationError = {
    cause,
    stackTrace,
    suppressed,
    localizedMessage,
    type,
    field,
    message,
    correctionSuggestion,
    _class,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
