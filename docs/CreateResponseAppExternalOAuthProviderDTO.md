# CreateResponseAppExternalOAuthProviderDTO

Response for a successful resource creation operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **string** | A message detailing the result of the operation. | [optional] [default to undefined]
**data** | [**AppExternalOAuthProviderDTO**](AppExternalOAuthProviderDTO.md) | The data payload of the response, if any. | [optional] [default to undefined]

## Example

```typescript
import { CreateResponseAppExternalOAuthProviderDTO } from '@caraer/client';

const instance: CreateResponseAppExternalOAuthProviderDTO = {
    message,
    data,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
