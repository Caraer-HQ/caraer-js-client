# ProjectDeployDTO

Data transfer object for a developer project deploy.

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
**projectUuid** | **string** | UUID of the owning developer project | [optional] [default to undefined]
**buildUuid** | **string** | UUID of the build that was deployed | [optional] [default to undefined]
**version** | **string** | Semantic version of the deployed build | [optional] [default to undefined]
**status** | **string** | PENDING, SUCCEEDED, FAILED, or PARTIAL | [optional] [default to undefined]
**target** | **string** | production or sandbox | [optional] [default to undefined]
**resultsJson** | **string** | Per-component reconciliation results (app, functions, webhooks), serialized as JSON | [optional] [default to undefined]
**activatedAt** | **number** | Unix timestamp (ms) when this deploy was activated | [optional] [default to undefined]

## Example

```typescript
import { ProjectDeployDTO } from '@caraer/client';

const instance: ProjectDeployDTO = {
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
    projectUuid,
    buildUuid,
    version,
    status,
    target,
    resultsJson,
    activatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
