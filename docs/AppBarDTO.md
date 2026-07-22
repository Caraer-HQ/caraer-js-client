# AppBarDTO

Data transfer object for an app bar (location-specific settings and action config)

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
**location** | **string** | Bar location: RECORD_PREVIEW, RECORD_OVERVIEW, RECORD_DETAIL, TOOL_BAR, TRAIT_BAR | [optional] [default to undefined]
**iframeUrl** | **string** | URL for iframe-based locations (supports {recordUuid}, {object}, {viewId}, {trait}, {companyUuid} placeholders) | [optional] [default to undefined]
**icon** | **string** | Optional icon name/key for this app bar | [optional] [default to undefined]
**description** | **string** | Description shown under the dialog title for action-based bars | [optional] [default to undefined]
**tooltipLabel** | **string** | Tooltip label for buttons and sidebar entries | [optional] [default to undefined]
**actionLabel** | **string** | Primary button label in the action dialog | [optional] [default to undefined]
**settingsSchema** | [**Array&lt;AppSettingFieldSchema&gt;**](AppSettingFieldSchema.md) | JSON array of AppSettingFieldSchema (field definitions for action locations) | [optional] [default to undefined]
**webhook** | [**SubscribeWebhookDTO**](SubscribeWebhookDTO.md) | Webhook configuration for action-based locations | [optional] [default to undefined]

## Example

```typescript
import { AppBarDTO } from '@caraer/client';

const instance: AppBarDTO = {
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
    location,
    iframeUrl,
    icon,
    description,
    tooltipLabel,
    actionLabel,
    settingsSchema,
    webhook,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
