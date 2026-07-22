# WebpageEditingStatusDTO

Whether a webpage is currently being edited by another user

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**locked** | **boolean** | True when another user is actively editing this webpage | [optional] [default to undefined]
**editor** | [**UserWithCursorLocationDTO**](UserWithCursorLocationDTO.md) | The user currently editing, when locked is true | [optional] [default to undefined]
**message** | **string** | Human-readable message for the client UI | [optional] [default to undefined]

## Example

```typescript
import { WebpageEditingStatusDTO } from '@caraer/client';

const instance: WebpageEditingStatusDTO = {
    locked,
    editor,
    message,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
