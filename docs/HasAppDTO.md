# HasAppDTO

Installation link between a company and an app (per-installation settings and token)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **string** | Unique identifier for the installation relationship | [optional] [default to undefined]
**token** | **string** | Installation token | [optional] [default to undefined]
**scopes** | **Array&lt;string&gt;** | Scopes granted to this installation | [optional] [default to undefined]
**settingsValues** | **string** | Per-installation app setting values (JSON object keyed by setting name) | [optional] [default to undefined]
**filters** | [**{ [key: string]: Filter; }**](Filter.md) | Per-object record filters for this installation (object name → filter) | [optional] [default to undefined]
**appBarVisibility** | [**{ [key: string]: AppBarVisibilityEntry; }**](AppBarVisibilityEntry.md) | Per-app-bar placement config keyed by app bar UUID | [optional] [default to undefined]
**oauthConnected** | **boolean** | Whether OAuth tokens have been issued for this installation | [optional] [default to undefined]
**oauthAccessTokenExpiresAt** | **number** | OAuth access token expiry (epoch ms), if connected via OAuth | [optional] [default to undefined]
**selectedPricingPlanUuid** | **string** | UUID of the pricing plan selected for this installation | [optional] [default to undefined]
**billingCommitment** | **string** | MONTHLY or ANNUAL billing commitment | [optional] [default to undefined]
**contractStart** | **number** | Current contract start (epoch ms) | [optional] [default to undefined]
**contractEnd** | **number** | Current contract end / renewal date (epoch ms) | [optional] [default to undefined]
**pendingPricingPlanUuid** | **string** | Plan scheduled to become active | [optional] [default to undefined]
**pendingBillingCommitment** | **string** | Commitment scheduled to become active | [optional] [default to undefined]
**pendingEffectiveAt** | **number** | When the pending subscription change takes effect (epoch ms) | [optional] [default to undefined]

## Example

```typescript
import { HasAppDTO } from '@caraer/client';

const instance: HasAppDTO = {
    uuid,
    token,
    scopes,
    settingsValues,
    filters,
    appBarVisibility,
    oauthConnected,
    oauthAccessTokenExpiresAt,
    selectedPricingPlanUuid,
    billingCommitment,
    contractStart,
    contractEnd,
    pendingPricingPlanUuid,
    pendingBillingCommitment,
    pendingEffectiveAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
