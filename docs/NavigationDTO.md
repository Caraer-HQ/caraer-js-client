# NavigationDTO

Authorized application navigation for the currently selected company. Contains no record schema or user configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**objects** | [**Array&lt;NavigationObjectDTO&gt;**](NavigationObjectDTO.md) |  | [optional] [default to undefined]
**suites** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**tools** | [**WebMenuDTO**](WebMenuDTO.md) |  | [optional] [default to undefined]
**settings** | [**WebMenuDTO**](WebMenuDTO.md) |  | [optional] [default to undefined]

## Example

```typescript
import { NavigationDTO } from '@caraer/client';

const instance: NavigationDTO = {
    objects,
    suites,
    tools,
    settings,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
