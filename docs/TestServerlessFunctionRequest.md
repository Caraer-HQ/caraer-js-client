# TestServerlessFunctionRequest

Request body for testing a serverless function with a specific record and event type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recordUuid** | **string** | UUID of the record to base the event on. | [optional] [default to undefined]
**eventType** | **string** | Event type to simulate (created, updated, deleted, etc.). | [optional] [default to undefined]
**forceProvision** | **boolean** | If true, forces re-provisioning of the serverless function before invocation. | [optional] [default to undefined]

## Example

```typescript
import { TestServerlessFunctionRequest } from '@caraer/client';

const instance: TestServerlessFunctionRequest = {
    recordUuid,
    eventType,
    forceProvision,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
