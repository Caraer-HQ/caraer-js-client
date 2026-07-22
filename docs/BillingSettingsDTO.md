# BillingSettingsDTO

The billing settings of the company.

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
**billingEmail** | **string** | The email address of the billing contact. | [optional] [default to undefined]
**address** | **string** | The address of the billing contact. | [optional] [default to undefined]
**city** | **string** | The city of the billing contact. | [optional] [default to undefined]
**state** | **string** | The state of the billing contact. | [optional] [default to undefined]
**zip** | **string** | The zip code of the billing contact. | [optional] [default to undefined]
**country** | **string** | The country of the billing contact. | [optional] [default to undefined]

## Example

```typescript
import { BillingSettingsDTO } from '@caraer/client';

const instance: BillingSettingsDTO = {
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
    billingEmail,
    address,
    city,
    state,
    zip,
    country,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
