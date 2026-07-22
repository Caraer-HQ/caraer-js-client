# AppTierDTO

Data transfer object for a pricing tier (plan) within tiered app pricing

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
**startUnits** | **string** | Start of unit range (e.g. 0) | [optional] [default to undefined]
**endUnits** | **string** | End of unit range (e.g. 1000 or null for unlimited) | [optional] [default to undefined]
**pricePerMonth** | **string** | Price per month (e.g. 10.00) | [optional] [default to undefined]
**pricePerYear** | **string** | Price per year (e.g. 100.00) | [optional] [default to undefined]
**pricePerExtraUnit** | **string** | Price per extra unit beyond tier (e.g. 0.01, typically for last tier) | [optional] [default to undefined]

## Example

```typescript
import { AppTierDTO } from '@caraer/client';

const instance: AppTierDTO = {
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
    startUnits,
    endUnits,
    pricePerMonth,
    pricePerYear,
    pricePerExtraUnit,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
