# AppCategoryDTO

Predefined marketplace main category with subcategories

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** | Stable main category key stored on AppDetails.category | [optional] [default to undefined]
**label** | **string** | Human-readable main category label | [optional] [default to undefined]
**subcategories** | [**Array&lt;AppSubcategoryDTO&gt;**](AppSubcategoryDTO.md) | Subcategories available under this main category | [optional] [default to undefined]
**appCount** | **number** | Distinct visible apps in this category; provided by the available-category endpoint, independent of search and pagination | [optional] [default to undefined]

## Example

```typescript
import { AppCategoryDTO } from '@caraer/client';

const instance: AppCategoryDTO = {
    key,
    label,
    subcategories,
    appCount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
