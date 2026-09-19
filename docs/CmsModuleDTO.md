# CmsModuleDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**label** | **string** |  | [optional] [default to undefined]
**ref** | **string** |  | [optional] [default to undefined]
**kind** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**category** | **string** |  | [optional] [default to undefined]
**icon** | **string** |  | [optional] [default to undefined]
**preview** | **string** |  | [optional] [default to undefined]
**appUuid** | **string** |  | [optional] [default to undefined]
**appName** | **string** |  | [optional] [default to undefined]
**appLabel** | **string** |  | [optional] [default to undefined]
**packageName** | **string** |  | [optional] [default to undefined]
**version** | **string** |  | [optional] [default to undefined]
**retired** | **boolean** |  | [optional] [default to undefined]
**fields** | [**Array&lt;AppSettingFieldSchema&gt;**](AppSettingFieldSchema.md) |  | [optional] [default to undefined]
**frameworks** | **{ [key: string]: string; }** |  | [optional] [default to undefined]

## Example

```typescript
import { CmsModuleDTO } from '@caraer/client';

const instance: CmsModuleDTO = {
    uuid,
    name,
    label,
    ref,
    kind,
    description,
    category,
    icon,
    preview,
    appUuid,
    appName,
    appLabel,
    packageName,
    version,
    retired,
    fields,
    frameworks,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
