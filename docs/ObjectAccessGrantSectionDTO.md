# ObjectAccessGrantSectionDTO

Access grant selection for one principal type (users, teams, or apps).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuids** | **Array&lt;string&gt;** | UUIDs to grant access to | [optional] [default to undefined]
**globalScopes** | **Array&lt;string&gt;** | Record scopes applied to every selected UUID | [optional] [default to undefined]
**overrides** | **{ [key: string]: Array&lt;string&gt;; }** | Per-UUID scope overrides merged with globalScopes | [optional] [default to undefined]

## Example

```typescript
import { ObjectAccessGrantSectionDTO } from '@caraer/client';

const instance: ObjectAccessGrantSectionDTO = {
    uuids,
    globalScopes,
    overrides,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
