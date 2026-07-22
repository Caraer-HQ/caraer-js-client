# ObjectAccessGrantCandidatesDTO

Users, teams, and installed apps available for object access grants.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**users** | [**Array&lt;AccessGrantTargetDTO&gt;**](AccessGrantTargetDTO.md) | Company users with HAS_ACCESS_TO | [optional] [default to undefined]
**teams** | [**Array&lt;AccessGrantTargetDTO&gt;**](AccessGrantTargetDTO.md) | Teams in the tenant | [optional] [default to undefined]
**apps** | [**Array&lt;AccessGrantTargetDTO&gt;**](AccessGrantTargetDTO.md) | Apps installed for the current company | [optional] [default to undefined]

## Example

```typescript
import { ObjectAccessGrantCandidatesDTO } from '@caraer/client';

const instance: ObjectAccessGrantCandidatesDTO = {
    users,
    teams,
    apps,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
