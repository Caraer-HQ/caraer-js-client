# RestoreResponseSavedFilterDTO

Represents the response returned when a restore operation is performed successfully.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **string** | A message detailing the result of the operation. | [optional] [default to undefined]
**data** | [**SavedFilterDTO**](SavedFilterDTO.md) | The data payload of the response, if any. | [optional] [default to undefined]

## Example

```typescript
import { RestoreResponseSavedFilterDTO } from '@caraer/client';

const instance: RestoreResponseSavedFilterDTO = {
    message,
    data,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
