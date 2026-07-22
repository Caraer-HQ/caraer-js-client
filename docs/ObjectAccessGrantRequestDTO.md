# ObjectAccessGrantRequestDTO

Request to grant record-level access on an object to users, teams, and apps.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**users** | [**ObjectAccessGrantSectionDTO**](ObjectAccessGrantSectionDTO.md) | User grants | [optional] [default to undefined]
**teams** | [**ObjectAccessGrantSectionDTO**](ObjectAccessGrantSectionDTO.md) | Team grants | [optional] [default to undefined]
**apps** | [**ObjectAccessGrantSectionDTO**](ObjectAccessGrantSectionDTO.md) | Installed app grants | [optional] [default to undefined]

## Example

```typescript
import { ObjectAccessGrantRequestDTO } from '@caraer/client';

const instance: ObjectAccessGrantRequestDTO = {
    users,
    teams,
    apps,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
