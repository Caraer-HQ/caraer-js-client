# CreatePrivateAppRequest

Private app creation request with label and optional description

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label** | **string** | The display label for the private app. | [default to undefined]
**description** | **string** | Optional description text for the app. | [optional] [default to undefined]
**authMethod** | **string** | Authentication method (API_KEY default, OAUTH2 for OAuth 2.0) | [optional] [default to undefined]
**oauthRedirectUris** | **Array&lt;string&gt;** | Registered OAuth redirect URIs (required when authMethod is OAUTH2) | [optional] [default to undefined]

## Example

```typescript
import { CreatePrivateAppRequest } from '@caraer/client';

const instance: CreatePrivateAppRequest = {
    label,
    description,
    authMethod,
    oauthRedirectUris,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
