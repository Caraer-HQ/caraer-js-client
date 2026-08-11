# SamplePayloadRequest

Request body for generating a sample webhook payload from a record and event type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recordUuid** | **string** | UUID of the record to base the sample payload on. | [optional] [default to undefined]
**eventType** | **string** | Event type to simulate (created, updated, deleted, etc.). | [optional] [default to undefined]

## Example

```typescript
import { SamplePayloadRequest } from '@caraer/client';

const instance: SamplePayloadRequest = {
    recordUuid,
    eventType,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
