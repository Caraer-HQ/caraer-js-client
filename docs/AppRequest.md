# AppRequest

Settings required to uninstall the application

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**settings** | [**Array&lt;AppSettingFieldSchema&gt;**](AppSettingFieldSchema.md) | A map of configuration settings. The keys are strings representing the setting names, and the values represent the setting values, which can be different types. | [optional] [default to undefined]

## Example

```typescript
import { AppRequest } from '@caraer/client';

const instance: AppRequest = {
    settings,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
