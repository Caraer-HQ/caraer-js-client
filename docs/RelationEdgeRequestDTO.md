# RelationEdgeRequestDTO

Optional relation edge payload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**edgeProperties** | **{ [key: string]: any | null; }** | Values for properties declared on the relation schema, stored on the edge itself. A null value clears that key. | [optional] [default to undefined]
**primary** | **boolean** | When true, marks this relation edge as primary. Overrides the primary query parameter. | [optional] [default to undefined]

## Example

```typescript
import { RelationEdgeRequestDTO } from '@caraer/client';

const instance: RelationEdgeRequestDTO = {
    edgeProperties,
    primary,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
