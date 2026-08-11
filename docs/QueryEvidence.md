# QueryEvidence


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [optional] [default to undefined]
**polarity** | **string** |  | [optional] [default to undefined]
**summary** | **string** |  | [optional] [default to undefined]
**sourceObject** | **string** |  | [optional] [default to undefined]
**sourceRecordUuid** | **string** |  | [optional] [default to undefined]
**relation** | **string** |  | [optional] [default to undefined]
**timestamp** | **number** |  | [optional] [default to undefined]
**recencyWeight** | **number** |  | [optional] [default to undefined]
**confidence** | **number** |  | [optional] [default to undefined]
**properties** | **{ [key: string]: any | null; }** |  | [optional] [default to undefined]
**paths** | [**Array&lt;GraphPathEvidence&gt;**](GraphPathEvidence.md) |  | [optional] [default to undefined]

## Example

```typescript
import { QueryEvidence } from '@caraer/client';

const instance: QueryEvidence = {
    type,
    polarity,
    summary,
    sourceObject,
    sourceRecordUuid,
    relation,
    timestamp,
    recencyWeight,
    confidence,
    properties,
    paths,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
