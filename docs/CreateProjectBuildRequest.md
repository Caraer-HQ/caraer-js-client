# CreateProjectBuildRequest

Request body for uploading a developer project build archive.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**archiveBase64** | **string** | Base64-encoded zip archive containing caraer.project.json and src/app. | [optional] [default to undefined]
**filename** | **string** | Original archive filename, for traceability. | [optional] [default to undefined]
**target** | **string** | Deploy target: production or sandbox. | [optional] [default to undefined]
**version** | **string** | Semantic version for this build (MAJOR.MINOR.PATCH). Auto-bumped when omitted. | [optional] [default to undefined]
**releaseNotes** | **string** | Release notes for this build. | [optional] [default to undefined]

## Example

```typescript
import { CreateProjectBuildRequest } from '@caraer/client';

const instance: CreateProjectBuildRequest = {
    archiveBase64,
    filename,
    target,
    version,
    releaseNotes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
