# AppExternalOAuthProviderDTO

Third-party OAuth provider declared on an app

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **string** | Unique identifier for the entity | [default to undefined]
**name** | **string** | The name of the entity | [default to undefined]
**label** | **string** | Display label for the entity, can be different from name | [optional] [default to undefined]
**createdAt** | **number** | Unix timestamp when the entity was created | [optional] [default to undefined]
**createdBy** | [**ModelRecord**](ModelRecord.md) | Identifier of the user who created the entity | [optional] [default to undefined]
**updatedAt** | **number** | Unix timestamp when the entity was last updated | [optional] [default to undefined]
**updatedBy** | [**ModelRecord**](ModelRecord.md) | Identifier of the user who last updated the entity | [optional] [default to undefined]
**deletedAt** | **number** | Unix timestamp when the entity was deleted (null if not deleted) | [optional] [default to undefined]
**deletedBy** | [**ModelRecord**](ModelRecord.md) | Identifier of the user who deleted the entity | [optional] [default to undefined]
**index** | **number** | Index number for ordering entities | [optional] [default to undefined]
**preset** | **string** | Ignored. Set authorizeUrl and tokenUrl explicitly. | [optional] [default to undefined]
**logo** | **string** | Optional logo URL shown on the Connect button | [optional] [default to undefined]
**authorizeUrl** | **string** |  | [optional] [default to undefined]
**tokenUrl** | **string** |  | [optional] [default to undefined]
**clientId** | **string** |  | [optional] [default to undefined]
**clientSecret** | **string** |  | [optional] [default to undefined]
**hasClientSecret** | **boolean** |  | [optional] [default to undefined]
**scopes** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**pkce** | **boolean** |  | [optional] [default to undefined]
**connectionOwner** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { AppExternalOAuthProviderDTO } from '@caraer/client';

const instance: AppExternalOAuthProviderDTO = {
    uuid,
    name,
    label,
    createdAt,
    createdBy,
    updatedAt,
    updatedBy,
    deletedAt,
    deletedBy,
    index,
    preset,
    logo,
    authorizeUrl,
    tokenUrl,
    clientId,
    clientSecret,
    hasClientSecret,
    scopes,
    pkce,
    connectionOwner,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
