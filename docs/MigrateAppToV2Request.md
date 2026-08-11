# MigrateAppToV2Request

Request to migrate an existing V1 app to platform V2 (shared container runtime)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**runtime** | **string** | Required when functions disagree or none set: nodejs22 or python312 | [optional] [default to undefined]

## Example

```typescript
import { MigrateAppToV2Request } from '@caraer/client';

const instance: MigrateAppToV2Request = {
    runtime,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
