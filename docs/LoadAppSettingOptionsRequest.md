# LoadAppSettingOptionsRequest

Request to load dynamic options for a SINGLE_SELECT or MULTI_SELECT setting field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fieldName** | **string** | Name of the setting field to load options for. | [default to undefined]
**query** | **string** | Optional search query typed by the installer. | [optional] [default to undefined]
**settingsSchema** | [**Array&lt;AppSettingFieldSchema&gt;**](AppSettingFieldSchema.md) | Current draft settings schema with values from the installer UI. | [default to undefined]
**appBarUuid** | **string** | When loading options for an app bar field, the app bar UUID. | [optional] [default to undefined]

## Example

```typescript
import { LoadAppSettingOptionsRequest } from '@caraer/client';

const instance: LoadAppSettingOptionsRequest = {
    fieldName,
    query,
    settingsSchema,
    appBarUuid,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
