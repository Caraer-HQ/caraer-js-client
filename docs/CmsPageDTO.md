# CmsPageDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **string** |  | [optional] [default to undefined]
**title** | **string** |  | [optional] [default to undefined]
**slug** | **string** |  | [optional] [default to undefined]
**locale** | **string** |  | [optional] [default to undefined]
**environment** | **string** |  | [optional] [default to undefined]
**state** | **string** |  | [optional] [default to undefined]
**published** | **boolean** |  | [optional] [default to undefined]
**document** | [**CmsPageDocument**](CmsPageDocument.md) |  | [optional] [default to undefined]
**record** | [**RecordSummary**](RecordSummary.md) |  | [optional] [default to undefined]
**protection** | **{ [key: string]: any | null; }** |  | [optional] [default to undefined]
**locales** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**publishAt** | **number** |  | [optional] [default to undefined]
**unpublishAt** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { CmsPageDTO } from '@caraer/client';

const instance: CmsPageDTO = {
    uuid,
    title,
    slug,
    locale,
    environment,
    state,
    published,
    document,
    record,
    protection,
    locales,
    publishAt,
    unpublishAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
