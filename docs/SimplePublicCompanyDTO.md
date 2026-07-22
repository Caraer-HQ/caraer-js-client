# SimplePublicCompanyDTO

Data Transfer Object representing a public-facing view of a company

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **string** | Unique identifier of the company | [optional] [default to undefined]
**updatedAt** | **number** | Timestamp of the last update (in milliseconds since epoch) | [optional] [default to undefined]
**website** | **string** | The website URL of the company | [optional] [default to undefined]
**cookiePolicy** | **string** | Cookie policy URL of the company | [optional] [default to undefined]
**favicon** | **string** | Path to the company\&#39;s favicon | [optional] [default to undefined]
**privacyPolicy** | **string** | Privacy policy URL of the company | [optional] [default to undefined]
**accentColor** | **string** | The accent color used by the company | [optional] [default to undefined]
**twitterUrl** | **string** | Twitter URL of the company\&#39;s social media page | [optional] [default to undefined]
**primaryColor** | **string** | The company\&#39;s primary color used in branding | [optional] [default to undefined]
**termsAndConditions** | **string** | Terms and conditions URL of the company | [optional] [default to undefined]
**facebookUrl** | **string** | URL to the company\&#39;s Facebook page | [optional] [default to undefined]
**youtubeUrl** | **string** | URL to the company\&#39;s YouTube page | [optional] [default to undefined]
**companyColor** | **string** | Company\&#39;s branding color | [optional] [default to undefined]
**name** | **string** | Name of the company | [optional] [default to undefined]
**logo** | **string** | Path to the company\&#39;s logo image | [optional] [default to undefined]
**instagramUrl** | **string** | URL to the company\&#39;s Instagram page | [optional] [default to undefined]
**fontColor** | **string** | Font color used in company\&#39;s branding | [optional] [default to undefined]
**secondaryColor** | **string** | Secondary color used in company\&#39;s branding | [optional] [default to undefined]
**rightNavBarButtonEnabled** | **boolean** | Boolean flag indicating if the right navigation bar button is enabled | [optional] [default to undefined]
**rightNavBarButtonTitle** | **string** | Title of the right navigation bar button | [optional] [default to undefined]
**rightNavBarButtonLink** | **string** | Link for the right navigation bar button | [optional] [default to undefined]
**cssScript** | **string** | CSS scripts added by the company | [optional] [default to undefined]
**jsHeadScript** | **string** | JavaScript code injected into the head tag of the HTML page | [optional] [default to undefined]
**jsBodyScript** | **string** | JavaScript code injected into the body tag of the HTML page | [optional] [default to undefined]
**customDomain** | **string** | Custom domain name used by the company | [optional] [default to undefined]

## Example

```typescript
import { SimplePublicCompanyDTO } from '@caraer/client';

const instance: SimplePublicCompanyDTO = {
    uuid,
    updatedAt,
    website,
    cookiePolicy,
    favicon,
    privacyPolicy,
    accentColor,
    twitterUrl,
    primaryColor,
    termsAndConditions,
    facebookUrl,
    youtubeUrl,
    companyColor,
    name,
    logo,
    instagramUrl,
    fontColor,
    secondaryColor,
    rightNavBarButtonEnabled,
    rightNavBarButtonTitle,
    rightNavBarButtonLink,
    cssScript,
    jsHeadScript,
    jsBodyScript,
    customDomain,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
