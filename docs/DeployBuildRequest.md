# DeployBuildRequest

Request body for deploying a developer project build.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**target** | **string** | Deploy target: production or sandbox. Defaults to the build\&#39;s target. | [optional] [default to undefined]
**prune** | **boolean** | When true, soft-delete remote functions/webhooks/schedules/inbound routes/OAuth providers that are absent from the build archive. Defaults to false. | [optional] [default to undefined]

## Example

```typescript
import { DeployBuildRequest } from '@caraer/client';

const instance: DeployBuildRequest = {
    target,
    prune,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
