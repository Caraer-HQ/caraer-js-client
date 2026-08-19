# AppMeterEventRequest

Manual meter event for a billable line item

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lineItemName** | **string** |  | [default to undefined]
**quantity** | **number** | Positive unit count; defaults to 1 | [optional] [default to undefined]
**idempotencyKey** | **string** |  | [optional] [default to undefined]
**occurredAt** | **string** | ISO-8601 timestamp; defaults to now | [optional] [default to undefined]
**metadata** | **{ [key: string]: any | null; }** |  | [optional] [default to undefined]

## Example

```typescript
import { AppMeterEventRequest } from '@caraer/client';

const instance: AppMeterEventRequest = {
    lineItemName,
    quantity,
    idempotencyKey,
    occurredAt,
    metadata,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
