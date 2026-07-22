# CreateCompanyRequest

DTO representing a request to create a new company, including the company\'s name and subdomain.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The name of the company to be created. | [optional] [default to undefined]
**subdomain** | **string** | The desired subdomain for the company. This will be used for company-specific URLs. | [optional] [default to undefined]
**companyName** | **string** | The company name. | [optional] [default to undefined]
**copyDatabaseId** | **string** | The copy database id. | [optional] [default to undefined]
**includeRecords** | **boolean** | Whether to include records in the company. | [optional] [default to undefined]

## Example

```typescript
import { CreateCompanyRequest } from '@caraer/client';

const instance: CreateCompanyRequest = {
    name,
    subdomain,
    companyName,
    copyDatabaseId,
    includeRecords,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
