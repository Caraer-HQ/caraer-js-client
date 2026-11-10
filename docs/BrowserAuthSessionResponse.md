# BrowserAuthSessionResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessToken** | **string** |  | [optional] [default to undefined]
**refreshToken** | **string** |  | [optional] [default to undefined]
**tokenType** | **string** |  | [optional] [default to undefined]
**user** | [**UserDTO**](UserDTO.md) |  | [optional] [default to undefined]
**companyUuid** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { BrowserAuthSessionResponse } from '@caraer/client';

const instance: BrowserAuthSessionResponse = {
    accessToken,
    refreshToken,
    tokenType,
    user,
    companyUuid,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
