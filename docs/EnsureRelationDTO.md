# EnsureRelationDTO

Atomic ensure-link receipt. UNCHANGED leaves every existing edge property untouched.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fromUuid** | **string** |  | [optional] [default to undefined]
**toUuid** | **string** |  | [optional] [default to undefined]
**relationName** | **string** |  | [optional] [default to undefined]
**outcome** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { EnsureRelationDTO } from '@caraer/client';

const instance: EnsureRelationDTO = {
    fromUuid,
    toUuid,
    relationName,
    outcome,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
