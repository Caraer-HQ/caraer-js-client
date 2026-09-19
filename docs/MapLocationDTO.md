# MapLocationDTO

A map marker from one source: custom lat/lng, a page location property, or an object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**latitude** | **number** |  | [optional] [default to undefined]
**longitude** | **number** |  | [optional] [default to undefined]
**propertyUuid** | **string** | UUID of a location property | [optional] [default to undefined]
**propertyName** | **string** | Name of a location property (fallback if uuid missing) | [optional] [default to undefined]
**objectUuid** | **string** | When set, resolve markers from published records of this object. Exclusive with propertyUuid and custom lat/lng. | [optional] [default to undefined]
**objectName** | **string** | Object name fallback when uuid is missing | [optional] [default to undefined]
**icon** | **string** | FontAwesome icon key for the marker | [optional] [default to undefined]
**iconColor** | **string** | Marker icon color (hex or rgba) | [optional] [default to undefined]
**iconBackgroundColor** | **string** | Marker pin background fill color (hex or rgba) | [optional] [default to undefined]
**markerSize** | **number** | Marker pin size in CSS pixels | [optional] [default to undefined]
**iconSize** | **number** | Marker glyph size in CSS pixels | [optional] [default to undefined]
**label** | **string** | Text shown when hovering the marker (supports smart content) | [optional] [default to undefined]
**labelPropertyUuid** | **string** | UUID of a property whose value is shown as hover text | [optional] [default to undefined]
**labelPropertyName** | **string** | Name of a property whose value is shown as hover text | [optional] [default to undefined]
**hoverPreviewUuid** | **string** | UUID of the preview shown when hovering a bound marker | [optional] [default to undefined]
**hoverPreviewName** | **string** | Name of the preview shown when hovering a bound marker | [optional] [default to undefined]
**recordUuid** | **string** | Record this concrete public marker was resolved from | [optional] [default to undefined]
**clickLinkType** | **string** | Marker click target: liveUrl, custom, or unset | [optional] [default to undefined]
**clickLinkUrl** | **string** | Custom URL used when clickLinkType is custom | [optional] [default to undefined]
**clickLinkOpenInNewWindow** | **boolean** | Open the marker link in a new tab | [optional] [default to undefined]
**href** | **string** | Resolved public URL for this concrete marker | [optional] [default to undefined]
**filterProperties** | [**Array&lt;PropertyDTO&gt;**](PropertyDTO.md) | Properties exposed as public filters for object-bound markers | [optional] [default to undefined]
**filterValues** | **{ [key: string]: any | null; }** | Resolved property values used to filter this concrete marker | [optional] [default to undefined]

## Example

```typescript
import { MapLocationDTO } from '@caraer/client';

const instance: MapLocationDTO = {
    latitude,
    longitude,
    propertyUuid,
    propertyName,
    objectUuid,
    objectName,
    icon,
    iconColor,
    iconBackgroundColor,
    markerSize,
    iconSize,
    label,
    labelPropertyUuid,
    labelPropertyName,
    hoverPreviewUuid,
    hoverPreviewName,
    recordUuid,
    clickLinkType,
    clickLinkUrl,
    clickLinkOpenInNewWindow,
    href,
    filterProperties,
    filterValues,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
