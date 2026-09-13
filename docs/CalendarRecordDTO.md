# CalendarRecordDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_default** | **boolean** |  | [optional] [default to undefined]
**uuid** | **string** |  | [optional] [default to undefined]
**title** | **string** |  | [optional] [default to undefined]
**color** | **string** |  | [optional] [default to undefined]
**colorHex** | **string** |  | [optional] [default to undefined]
**isDefault** | **boolean** |  | [optional] [default to undefined]
**ownerUuid** | **string** |  | [optional] [default to undefined]
**ownerName** | **string** |  | [optional] [default to undefined]
**ownedByCurrentUser** | **boolean** |  | [optional] [default to undefined]
**teamUuid** | **string** |  | [optional] [default to undefined]
**teamName** | **string** |  | [optional] [default to undefined]
**companyCalendar** | **boolean** |  | [optional] [default to undefined]
**companyName** | **string** |  | [optional] [default to undefined]
**members** | [**Array&lt;CalendarTeamMemberDTO&gt;**](CalendarTeamMemberDTO.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CalendarRecordDTO } from '@caraer/client';

const instance: CalendarRecordDTO = {
    _default,
    uuid,
    title,
    color,
    colorHex,
    isDefault,
    ownerUuid,
    ownerName,
    ownedByCurrentUser,
    teamUuid,
    teamName,
    companyCalendar,
    companyName,
    members,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
