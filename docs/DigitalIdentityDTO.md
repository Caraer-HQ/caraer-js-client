# DigitalIdentityDTO

A DTO representing the digital identity of a company.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lightPrimaryColor** | **string** | The primary color of the company in light mode. | [optional] [default to undefined]
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
**lightFontColor** | **string** | The font color of the company in light mode. | [optional] [default to undefined]
**lightSecondaryColor** | **string** | The secondary color of the company in light mode. | [optional] [default to undefined]
**lightPrimary100Color** | **string** | The primary 100 color of the company in light mode. | [optional] [default to undefined]
**lightAccentColor** | **string** | The accent color of the company in light mode. | [optional] [default to undefined]
**lightBlackColor** | **string** | The black color of the company in light mode. | [optional] [default to undefined]
**lightGray900Color** | **string** | The gray 900 color of the company in light mode. | [optional] [default to undefined]
**lightGray800Color** | **string** | The gray 800 color of the company in light mode. | [optional] [default to undefined]
**lightGray700Color** | **string** | The gray 700 color of the company in light mode. | [optional] [default to undefined]
**lightGray600Color** | **string** | The gray 600 color of the company in light mode. | [optional] [default to undefined]
**lightGray500Color** | **string** | The gray 500 color of the company in light mode. | [optional] [default to undefined]
**lightGray400Color** | **string** | The gray 400 color of the company in light mode. | [optional] [default to undefined]
**lightGray300Color** | **string** | The gray 300 color of the company in light mode. | [optional] [default to undefined]
**lightGray200Color** | **string** | The gray 200 color of the company in light mode. | [optional] [default to undefined]
**lightGray100Color** | **string** | The gray 100 color of the company in light mode. | [optional] [default to undefined]
**lightGray50Color** | **string** | The gray 50 color of the company in light mode. | [optional] [default to undefined]
**lightWhiteColor** | **string** | The white color of the company in light mode. | [optional] [default to undefined]
**lightBackgroundColor** | **string** | The background color of the company in light mode. | [optional] [default to undefined]
**lightDestructiveColor** | **string** | The destructive color of the company in light mode. | [optional] [default to undefined]
**darkFontColor** | **string** | The font color of the company in dark mode. | [optional] [default to undefined]
**darkPrimaryColor** | **string** | The primary color of the company in dark mode. | [optional] [default to undefined]
**darkSecondaryColor** | **string** | The secondary color of the company in dark mode. | [optional] [default to undefined]
**darkPrimary100Color** | **string** | The primary 100 color of the company in dark mode. | [optional] [default to undefined]
**darkAccentColor** | **string** | The accent color of the company in dark mode. | [optional] [default to undefined]
**darkBlackColor** | **string** | The black color of the company in dark mode. | [optional] [default to undefined]
**darkGray900Color** | **string** | The gray 900 color of the company in dark mode. | [optional] [default to undefined]
**darkGray800Color** | **string** | The gray 800 color of the company in dark mode. | [optional] [default to undefined]
**darkGray700Color** | **string** | The gray 700 color of the company in dark mode. | [optional] [default to undefined]
**darkGray600Color** | **string** | The gray 600 color of the company in dark mode. | [optional] [default to undefined]
**darkGray500Color** | **string** | The gray 500 color of the company in dark mode. | [optional] [default to undefined]
**darkGray400Color** | **string** | The gray 400 color of the company in dark mode. | [optional] [default to undefined]
**darkGray300Color** | **string** | The gray 300 color of the company in dark mode. | [optional] [default to undefined]
**darkGray200Color** | **string** | The gray 200 color of the company in dark mode. | [optional] [default to undefined]
**darkGray100Color** | **string** | The gray 100 color of the company in dark mode. | [optional] [default to undefined]
**darkGray50Color** | **string** | The gray 50 color of the company in dark mode. | [optional] [default to undefined]
**darkWhiteColor** | **string** | The white color of the company in dark mode. | [optional] [default to undefined]
**darkBackgroundColor** | **string** | The background color of the company in dark mode. | [optional] [default to undefined]
**darkDestructiveColor** | **string** | The destructive color of the company in dark mode. | [optional] [default to undefined]

## Example

```typescript
import { DigitalIdentityDTO } from '@caraer/client';

const instance: DigitalIdentityDTO = {
    lightPrimaryColor,
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
    lightFontColor,
    lightSecondaryColor,
    lightPrimary100Color,
    lightAccentColor,
    lightBlackColor,
    lightGray900Color,
    lightGray800Color,
    lightGray700Color,
    lightGray600Color,
    lightGray500Color,
    lightGray400Color,
    lightGray300Color,
    lightGray200Color,
    lightGray100Color,
    lightGray50Color,
    lightWhiteColor,
    lightBackgroundColor,
    lightDestructiveColor,
    darkFontColor,
    darkPrimaryColor,
    darkSecondaryColor,
    darkPrimary100Color,
    darkAccentColor,
    darkBlackColor,
    darkGray900Color,
    darkGray800Color,
    darkGray700Color,
    darkGray600Color,
    darkGray500Color,
    darkGray400Color,
    darkGray300Color,
    darkGray200Color,
    darkGray100Color,
    darkGray50Color,
    darkWhiteColor,
    darkBackgroundColor,
    darkDestructiveColor,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
