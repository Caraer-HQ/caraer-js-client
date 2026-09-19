# CmsPagePatch


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**op** | **string** |  | [optional] [default to undefined]
**moduleId** | **string** |  | [optional] [default to undefined]
**field** | **string** |  | [optional] [default to undefined]
**value** | **any** |  | [optional] [default to undefined]
**fields** | **{ [key: string]: any | null; }** |  | [optional] [default to undefined]
**module** | [**CmsPageModuleInstance**](CmsPageModuleInstance.md) |  | [optional] [default to undefined]
**index** | **number** |  | [optional] [default to undefined]
**toIndex** | **number** |  | [optional] [default to undefined]
**hidden** | **boolean** |  | [optional] [default to undefined]
**modules** | [**Array&lt;CmsPageModuleInstance&gt;**](CmsPageModuleInstance.md) |  | [optional] [default to undefined]
**seo** | **{ [key: string]: any | null; }** |  | [optional] [default to undefined]

## Example

```typescript
import { CmsPagePatch } from '@caraer/client';

const instance: CmsPagePatch = {
    op,
    moduleId,
    field,
    value,
    fields,
    module,
    index,
    toIndex,
    hidden,
    modules,
    seo,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
