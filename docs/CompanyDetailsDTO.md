# CompanyDetailsDTO

A DTO representing the details of a company.

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
**twitter** | **string** | The twitter/X url of the company. | [optional] [default to undefined]
**linkedIn** | **string** | The linkedin url of the company. | [optional] [default to undefined]
**facebook** | **string** | The facebook url of the company. | [optional] [default to undefined]
**youtube** | **string** | The youtube url of the company. | [optional] [default to undefined]
**instagram** | **string** | The instagram url of the company. | [optional] [default to undefined]
**address** | **string** | The address of the company. | [optional] [default to undefined]
**city** | **string** | The city of the company. | [optional] [default to undefined]
**state** | **string** | The state of the company. | [optional] [default to undefined]
**zip** | **string** | The zip code of the company. | [optional] [default to undefined]
**country** | **string** | The country of the company. | [optional] [default to undefined]
**phone** | **string** | The phone number of the company. | [optional] [default to undefined]
**email** | **string** | The email of the company. | [optional] [default to undefined]
**website** | **string** | The website of the company. | [optional] [default to undefined]
**unsubscribeLink** | **string** | The unsubscribe link of the company. | [optional] [default to undefined]
**cookiePolicy** | **string** | The cookie policy of the company. | [optional] [default to undefined]
**privacyPolicy** | **string** | The privacy policy of the company. | [optional] [default to undefined]
**termsAndConditions** | **string** | The terms and conditions of the company. | [optional] [default to undefined]
**disclaimer** | **string** | The disclaimer of the company. | [optional] [default to undefined]

## Example

```typescript
import { CompanyDetailsDTO } from '@caraer/client';

const instance: CompanyDetailsDTO = {
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
    twitter,
    linkedIn,
    facebook,
    youtube,
    instagram,
    address,
    city,
    state,
    zip,
    country,
    phone,
    email,
    website,
    unsubscribeLink,
    cookiePolicy,
    privacyPolicy,
    termsAndConditions,
    disclaimer,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
