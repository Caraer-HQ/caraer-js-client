# AppPricingLineItemDTO

Billable line item on an app pricing plan

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
**countType** | **string** | Count type: meter or static_query | [optional] [default to undefined]
**countingSource** | **string** | Event sources for meter line items: WEBHOOK, MANUAL, WEBHOOK_AND_MANUAL | [optional] [default to undefined]
**unit** | **string** | Unit label (e.g. webhook, document) | [optional] [default to undefined]
**includedUnits** | **string** | Included units for FLAT line items | [optional] [default to undefined]
**pricePerUnit** | **string** | Base price covering included units (FLAT) | [optional] [default to undefined]
**pricePerExtraUnit** | **string** | Price per unit above includedUnits (FLAT) | [optional] [default to undefined]
**staticQuery** | [**AppStaticQueryDTO**](AppStaticQueryDTO.md) | Scheduled Cypher snapshot for static_query line items | [optional] [default to undefined]
**tiers** | [**Array&lt;AppTierDTO&gt;**](AppTierDTO.md) | Tiers for TIERED line items | [optional] [default to undefined]

## Example

```typescript
import { AppPricingLineItemDTO } from '@caraer/client';

const instance: AppPricingLineItemDTO = {
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
    countType,
    countingSource,
    unit,
    includedUnits,
    pricePerUnit,
    pricePerExtraUnit,
    staticQuery,
    tiers,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
