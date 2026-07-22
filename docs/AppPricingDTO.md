# AppPricingDTO

Data transfer object for app pricing (flat or tiered)

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
**title** | **string** | Pricing title | [optional] [default to undefined]
**description** | **string** | Pricing description | [optional] [default to undefined]
**pricingType** | **string** | Pricing type: TIERED or FLAT | [optional] [default to undefined]
**pricePerUnit** | **string** | Price per unit (FLAT, e.g. 10.00) | [optional] [default to undefined]
**unit** | **string** | Unit label (FLAT, e.g. document) | [optional] [default to undefined]
**freeUnits** | **string** | Free units included (FLAT, e.g. 100) | [optional] [default to undefined]
**freeUnitsPeriod** | **string** | Free units period (FLAT, e.g. month) | [optional] [default to undefined]
**tiers** | [**Array&lt;AppTierDTO&gt;**](AppTierDTO.md) | Tiers for tiered pricing (TIERED) | [optional] [default to undefined]

## Example

```typescript
import { AppPricingDTO } from '@caraer/client';

const instance: AppPricingDTO = {
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
    title,
    description,
    pricingType,
    pricePerUnit,
    unit,
    freeUnits,
    freeUnitsPeriod,
    tiers,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
