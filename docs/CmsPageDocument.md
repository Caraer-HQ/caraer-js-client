# CmsPageDocument


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**version** | **number** |  | [optional] [default to undefined]
**revision** | **number** |  | [optional] [default to undefined]
**modules** | [**Array&lt;CmsPageModuleInstance&gt;**](CmsPageModuleInstance.md) |  | [optional] [default to undefined]
**seo** | **{ [key: string]: any | null; }** |  | [optional] [default to undefined]
**title** | **string** |  | [optional] [default to undefined]
**slug** | **string** |  | [optional] [default to undefined]
**excerpt** | **string** |  | [optional] [default to undefined]
**css** | **string** |  | [optional] [default to undefined]
**headJs** | **string** |  | [optional] [default to undefined]
**bodyJs** | **string** |  | [optional] [default to undefined]
**relatedToTemplate** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { CmsPageDocument } from '@caraer/client';

const instance: CmsPageDocument = {
    version,
    revision,
    modules,
    seo,
    title,
    slug,
    excerpt,
    css,
    headJs,
    bodyJs,
    relatedToTemplate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
