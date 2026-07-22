# PublicUserDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **string** |  | [optional] [default to undefined]
**email** | **string** |  | [optional] [default to undefined]
**firstname** | **string** |  | [optional] [default to undefined]
**lastname** | **string** |  | [optional] [default to undefined]
**initials** | **string** |  | [optional] [default to undefined]
**scopes** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**filters** | [**{ [key: string]: Filter; }**](Filter.md) |  | [optional] [default to undefined]
**role** | **string** |  | [optional] [default to undefined]
**record** | [**ModelRecord**](ModelRecord.md) |  | [optional] [default to undefined]

## Example

```typescript
import { PublicUserDTO } from '@caraer/client';

const instance: PublicUserDTO = {
    uuid,
    email,
    firstname,
    lastname,
    initials,
    scopes,
    filters,
    role,
    record,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
