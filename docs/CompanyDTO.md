# CompanyDTO

A DTO representing a company with its various settings and details.

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
**details** | [**CompanyDetailsDTO**](CompanyDetailsDTO.md) | The details of the company. | [optional] [default to undefined]
**digitalIdentity** | [**DigitalIdentityDTO**](DigitalIdentityDTO.md) | The digital identity of the company. | [optional] [default to undefined]
**websiteSettings** | [**WebsiteSettingsDTO**](WebsiteSettingsDTO.md) | The website settings of the company. | [optional] [default to undefined]
**billingSettings** | [**BillingSettingsDTO**](BillingSettingsDTO.md) | The billing settings of the company. | [optional] [default to undefined]

## Example

```typescript
import { CompanyDTO } from '@caraer/client';

const instance: CompanyDTO = {
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
    details,
    digitalIdentity,
    websiteSettings,
    billingSettings,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
