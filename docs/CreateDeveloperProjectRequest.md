# CreateDeveloperProjectRequest

Request body for creating (or fetching an existing) developer project for an app.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**appUuid** | **string** | UUID of the app to link this project to. | [optional] [default to undefined]
**name** | **string** | Project name. | [optional] [default to undefined]
**label** | **string** | Optional human-readable label for the project. | [optional] [default to undefined]

## Example

```typescript
import { CreateDeveloperProjectRequest } from '@caraer/client';

const instance: CreateDeveloperProjectRequest = {
    appUuid,
    name,
    label,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
