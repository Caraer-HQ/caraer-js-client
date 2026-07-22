# WebpageOptionsDTO

Data Transfer Object representing options for a webpage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**relatedToTemplate** | **boolean** | Indicates if the webpage is related to a template. | [optional] [default to undefined]
**protectionOverride** | **string** | Page-level protection override: inherit, none, password, signedUrl, caraerAuth | [optional] [default to undefined]
**passwordHash** | **string** | Bcrypt hash for per-page password (never returned in public APIs) | [optional] [default to undefined]
**password** | **string** | Recoverable per-page password value for CMS display only | [optional] [default to undefined]
**passwordValue** | **string** | Stored recoverable per-page password value for CMS display only | [optional] [default to undefined]
**passwordSmartContent** | **boolean** | Whether the per-page password value should be resolved as smart content | [optional] [default to undefined]
**hasPassword** | **boolean** | Whether a per-page password is configured | [optional] [default to undefined]
**inheritedPassword** | **string** | Recoverable inherited shared password value for CMS display only | [optional] [default to undefined]
**inheritedPasswordValue** | **string** | Stored recoverable inherited shared password value for CMS display only | [optional] [default to undefined]
**inheritedPasswordSmartContent** | **boolean** | Whether the inherited shared password value should be resolved as smart content | [optional] [default to undefined]
**inheritedHasPassword** | **boolean** | Whether an inherited shared password is configured | [optional] [default to undefined]

## Example

```typescript
import { WebpageOptionsDTO } from '@caraer/client';

const instance: WebpageOptionsDTO = {
    relatedToTemplate,
    protectionOverride,
    passwordHash,
    password,
    passwordValue,
    passwordSmartContent,
    hasPassword,
    inheritedPassword,
    inheritedPasswordValue,
    inheritedPasswordSmartContent,
    inheritedHasPassword,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
