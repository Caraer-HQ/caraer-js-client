# PublicFormDTO

Data transfer object representing a form with its associated properties and structure

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
**object** | [**CaraerObjectDTO**](CaraerObjectDTO.md) | The associated Caraer object that this form belongs to | [optional] [default to undefined]
**grids** | [**Array&lt;FormItemDTO&gt;**](FormItemDTO.md) | List of form items that make up the form\&#39;s structure. Each grid represents a section or group of form elements | [optional] [default to undefined]
**description** | **string** | Descriptive text providing additional information about the form | [optional] [default to undefined]
**styling** | **string** | The styling of the form. Can be \&#39;standard\&#39;, \&#39;underline\&#39; or \&#39;plain\&#39; | [optional] [default to undefined]
**wizard** | **boolean** | Indicates if the form should be displayed as a step-by-step wizard interface | [optional] [default to undefined]
**metadata** | **{ [key: string]: string; }** | Metadata associated with the form | [optional] [default to undefined]
**thankYouMessage** | **string** | Thank you message to be displayed after the form is submitted | [optional] [default to undefined]
**redirectUrl** | **string** | Redirect URL to be displayed after the form is submitted | [optional] [default to undefined]

## Example

```typescript
import { PublicFormDTO } from '@caraer/client';

const instance: PublicFormDTO = {
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
    object,
    grids,
    description,
    styling,
    wizard,
    metadata,
    thankYouMessage,
    redirectUrl,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
