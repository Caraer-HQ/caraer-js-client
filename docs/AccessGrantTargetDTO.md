# AccessGrantTargetDTO

A user, team, or app that can receive record access on an object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **string** | UUID of the principal | [optional] [default to undefined]
**label** | **string** | Primary display label | [optional] [default to undefined]
**subtitle** | **string** | Secondary line (e.g. email) | [optional] [default to undefined]

## Example

```typescript
import { AccessGrantTargetDTO } from '@caraer/client';

const instance: AccessGrantTargetDTO = {
    uuid,
    label,
    subtitle,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
