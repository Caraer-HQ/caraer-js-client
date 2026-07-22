# AppDetailsDTO

Detailed DTO representing an application with all available configuration and visibility metadata for the current company context

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **string** |  | [optional] [default to undefined]
**description** | **string** | Short marketplace description shown on app cards and detail pages | [optional] [default to undefined]
**image** | **string** |  | [optional] [default to undefined]
**brandColor** | **string** | Hex accent color (#RRGGBB) for installed app-bar action buttons and toolbar icons | [optional] [default to undefined]
**textColor** | **string** | Hex text color (#RRGGBB) for text on brand-colored marketplace UI elements | [optional] [default to undefined]
**url** | **string** |  | [optional] [default to undefined]
**category** | **string** | Main marketplace category key from GET /api/v2/apps/categories | [optional] [default to undefined]
**subcategories** | **Array&lt;string&gt;** | Selected subcategory keys under the main category | [optional] [default to undefined]
**privacyPolicy** | **string** |  | [optional] [default to undefined]
**termsAndConditions** | **string** |  | [optional] [default to undefined]
**processingAgreement** | **string** |  | [optional] [default to undefined]
**disclaimer** | **string** |  | [optional] [default to undefined]
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

## Example

```typescript
import { AppDetailsDTO } from '@caraer/client';

const instance: AppDetailsDTO = {
    title,
    description,
    image,
    brandColor,
    textColor,
    url,
    category,
    subcategories,
    privacyPolicy,
    termsAndConditions,
    processingAgreement,
    disclaimer,
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
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
