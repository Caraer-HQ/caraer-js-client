# AppDTO

Full app payload (AppCreatorDTO) to apply

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **string** | Unique identifier for the entity | [default to undefined]
**name** | **string** | The name of the entity | [default to undefined]
**label** | **string** | Display label for the entity, can be different from name | [optional] [default to undefined]
**createdAt** | **number** | Unix timestamp when the entity was created | [optional] [default to undefined]
**createdBy** | [**ModelRecord**](ModelRecord.md) | Identifier of the user who created the entity | [optional] [default to undefined]
**updatedAt** | **number** | Unix timestamp when the entity was last updated | [optional] [default to undefined]
**updatedBy** | [**ModelRecord**](ModelRecord.md) | Identifier of the user who last updated the entity | [optional] [default to undefined]
**deletedAt** | **number** | Unix timestamp when the entity was deleted (null if not deleted) | [optional] [default to undefined]
**deletedBy** | [**ModelRecord**](ModelRecord.md) | Identifier of the user who deleted the entity | [optional] [default to undefined]
**index** | **number** | Index number for ordering entities | [optional] [default to undefined]
**privateApp** | **boolean** | Indicates whether this app is private (only available to the creator\&#39;s company) | [optional] [default to undefined]
**hideApiKeyField** | **boolean** | Whether to hide the API token field in app settings UI | [optional] [default to undefined]
**details** | [**AppDetailsDTO**](AppDetailsDTO.md) | Additional details and specifications about the application | [optional] [default to undefined]
**pricingPlans** | [**Array&lt;AppPricingDTO&gt;**](AppPricingDTO.md) | Pricing information for the application | [optional] [default to undefined]
**appBars** | [**Array&lt;AppBarDTO&gt;**](AppBarDTO.md) | App bars (location-specific configuration and actions) | [optional] [default to undefined]
**serverlessFunctions** | [**Array&lt;ServerlessFunctionDTO&gt;**](ServerlessFunctionDTO.md) | Serverless functions owned by this app | [optional] [default to undefined]
**installWebhook** | [**SubscribeWebhookDTO**](SubscribeWebhookDTO.md) | Webhook triggered when the app is installed | [optional] [default to undefined]
**uninstallWebhook** | [**SubscribeWebhookDTO**](SubscribeWebhookDTO.md) | Webhook triggered when the app is uninstalled | [optional] [default to undefined]
**rotateWebhook** | [**SubscribeWebhookDTO**](SubscribeWebhookDTO.md) | Webhook triggered when the app installation token is rotated | [optional] [default to undefined]
**updateWebhook** | [**SubscribeWebhookDTO**](SubscribeWebhookDTO.md) | Webhook triggered when an already installed app is saved again | [optional] [default to undefined]
**settingsSchema** | [**Array&lt;AppSettingFieldSchema&gt;**](AppSettingFieldSchema.md) | JSON array of AppSettingFieldSchema (app-level setting field definitions) | [optional] [default to undefined]
**webhookRateLimitPerMinute** | **number** | Webhook rate limit per minute | [optional] [default to undefined]
**billFailedWebhookRequests** | **boolean** | Whether failed webhook requests are considered billable for this app | [optional] [default to undefined]
**appPublish** | [**AppPublishDTO**](AppPublishDTO.md) | Publish and review state for the app in the marketplace (creator view) | [optional] [default to undefined]
**hasApp** | [**HasAppDTO**](HasAppDTO.md) | Installation link (company–app) with token, scopes, and per-installation settingsValues; present when includeSettings is true | [optional] [default to undefined]
**image** | **string** | URL to the application\&#39;s image or icon (derived from details.image) | [optional] [default to undefined]
**url** | **string** | URL where the application can be accessed (derived from details.url) | [optional] [default to undefined]
**category** | **string** | Category the application belongs to (derived from details.category) | [optional] [default to undefined]
**installed** | **boolean** | Whether the app is installed for the current company | [optional] [default to undefined]
**requiredScopes** | **Array&lt;string&gt;** | Required scopes requested by the app (macro patterns or concrete scope strings). | [optional] [default to undefined]
**resolvedRequiredScopes** | **Array&lt;string&gt;** | Resolved concrete required scopes derived from requiredScopes and dynamic availableScopes. | [optional] [default to undefined]
**authMethod** | **string** | Authentication method for this app (API_KEY default, OAUTH2 for OAuth 2.0) | [optional] [default to undefined]
**oauthClientId** | **string** | OAuth 2.0 client identifier (OAuth apps only) | [optional] [default to undefined]
**oauthClientSecret** | **string** | OAuth 2.0 client secret; only returned once on create or secret rotation | [optional] [default to undefined]
**oauthClientSecretConfigured** | **boolean** | Whether an OAuth client secret is stored for this app (plain value is not re-readable) | [optional] [default to undefined]
**oauthRedirectUris** | **Array&lt;string&gt;** | Registered OAuth redirect URIs (OAuth apps only) | [optional] [default to undefined]
**oauthAuthorizeUrl** | **string** | OAuth authorization endpoint URL | [optional] [default to undefined]
**oauthTokenUrl** | **string** | OAuth token endpoint URL | [optional] [default to undefined]
**installUrl** | **string** | External URL where end users install this app (e.g. ChatGPT connector page) | [optional] [default to undefined]
**brandmark** | **string** | Square brandmark URL used in compact app surfaces | [optional] [default to undefined]
**description** | **string** | Internal app description used in Caraer admin views | [optional] [default to undefined]

## Example

```typescript
import { AppDTO } from '@caraer/client';

const instance: AppDTO = {
    uuid,
    name,
    label,
    createdAt,
    createdBy,
    updatedAt,
    updatedBy,
    deletedAt,
    deletedBy,
    index,
    privateApp,
    hideApiKeyField,
    details,
    pricingPlans,
    appBars,
    serverlessFunctions,
    installWebhook,
    uninstallWebhook,
    rotateWebhook,
    updateWebhook,
    settingsSchema,
    webhookRateLimitPerMinute,
    billFailedWebhookRequests,
    appPublish,
    hasApp,
    image,
    url,
    category,
    installed,
    requiredScopes,
    resolvedRequiredScopes,
    authMethod,
    oauthClientId,
    oauthClientSecret,
    oauthClientSecretConfigured,
    oauthRedirectUris,
    oauthAuthorizeUrl,
    oauthTokenUrl,
    installUrl,
    brandmark,
    description,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
