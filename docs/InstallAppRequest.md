# InstallAppRequest

Optional initial configuration settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**settings** | [**Array&lt;AppSettingFieldSchema&gt;**](AppSettingFieldSchema.md) | Optional initial configuration settings (key-value via AppSettingFieldSchema name/value). | [optional] [default to undefined]
**scopes** | **Array&lt;string&gt;** | Optional scopes to grant to the app. | [optional] [default to undefined]
**filters** | [**{ [key: string]: Filter; }**](Filter.md) | Optional per-object record filters for this installation (object name → filter). | [optional] [default to undefined]
**appBarVisibility** | [**{ [key: string]: AppBarVisibilityEntry; }**](AppBarVisibilityEntry.md) | Optional per-app-bar placement config keyed by app bar UUID. | [optional] [default to undefined]
**selectedPricingPlanUuid** | **string** | UUID of the pricing plan selected for this installation. | [optional] [default to undefined]

## Example

```typescript
import { InstallAppRequest } from '@caraer/client';

const instance: InstallAppRequest = {
    settings,
    scopes,
    filters,
    appBarVisibility,
    selectedPricingPlanUuid,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
