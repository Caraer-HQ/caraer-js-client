# WebpagePublicRecordDTO

Webpage-public record values with internal and parsed property maps

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **string** | UUID of the webpage backing record | [optional] [default to undefined]
**properties** | **{ [key: string]: any | null; }** | Internal/plain property values keyed by property name | [optional] [default to undefined]
**parsedProperties** | **{ [key: string]: any | null; }** | Parsed/display property values keyed by property name | [optional] [default to undefined]

## Example

```typescript
import { WebpagePublicRecordDTO } from '@caraer/client';

const instance: WebpagePublicRecordDTO = {
    uuid,
    properties,
    parsedProperties,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
