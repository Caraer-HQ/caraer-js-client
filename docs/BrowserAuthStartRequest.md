# BrowserAuthStartRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provider** | **string** |  | [optional] [default to undefined]
**redirectUri** | **string** |  | [optional] [default to undefined]
**codeChallenge** | **string** |  | [optional] [default to undefined]
**codeChallengeMethod** | **string** |  | [optional] [default to undefined]
**state** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { BrowserAuthStartRequest } from '@caraer/client';

const instance: BrowserAuthStartRequest = {
    provider,
    redirectUri,
    codeChallenge,
    codeChallengeMethod,
    state,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
