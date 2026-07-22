# PageContentSettingsDTO

Data transfer object representing the settings for a content

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**form** | [**FormDTO**](FormDTO.md) | The form associated with the content | [optional] [default to undefined]
**openIcon** | **string** | The icon to display when the accordion is open | [optional] [default to undefined]
**closeIcon** | **string** | The icon to display when the accordion is closed | [optional] [default to undefined]
**alt** | **string** | The alt text of the image | [optional] [default to undefined]
**key** | **string** | The key of the image | [optional] [default to undefined]
**playVideo** | **boolean** | Whether the video should play automatically | [optional] [default to undefined]
**startMuted** | **boolean** | Whether the image should start muted | [optional] [default to undefined]
**loopVideo** | **boolean** | Whether the video should loop | [optional] [default to undefined]
**startOffset** | **number** | The start offset of the video | [optional] [default to undefined]
**link** | **string** | The link of the button | [optional] [default to undefined]
**style** | **string** | The style of the button. Primary, secondary, tertiary or custom | [optional] [default to undefined]
**ctaId** | **string** | Optional CTA tracking identifier for CMS buttons | [optional] [default to undefined]
**openInNewWindow** | **boolean** | Whether the link should open in a new window | [optional] [default to undefined]
**sliderType** | **string** | The slider type. Dots, arrows and swipe | [optional] [default to undefined]
**carouselSpeed** | **number** | The carousel speed. | [optional] [default to undefined]
**enableControls** | **boolean** | Whether carousel prev/next controls are shown | [optional] [default to undefined]
**previewObject** | [**CaraerObjectDTO**](CaraerObjectDTO.md) | The object of the previews | [optional] [default to undefined]
**previews** | [**{ [key: string]: PreviewDTO; }**](PreviewDTO.md) | The previews associated with the layouts | [optional] [default to undefined]
**previewLayoutOrder** | **Array&lt;string&gt;** | The order of preview layouts | [optional] [default to undefined]
**filter** | [**Filter**](Filter.md) | The filter associated with the settings | [optional] [default to undefined]
**orderBy** | [**PropertyDTO**](PropertyDTO.md) | The order by property associated with the settings | [optional] [default to undefined]
**orderByDirection** | **string** | The order by direction associated with the settings. ASC or DESC, default is ASC | [optional] [default to undefined]
**asWebpages** | **boolean** | Whether the previews should be shown as webpages | [optional] [default to undefined]
**loop** | **boolean** | Whether the previews should loop | [optional] [default to undefined]
**limit** | **number** | The limit associated with the settings | [optional] [default to undefined]
**groupBy** | [**PropertyDTO**](PropertyDTO.md) | The group by property associated with the settings | [optional] [default to undefined]
**hideOnNoResults** | **boolean** | Whether the previews should be hidden when there are no results | [optional] [default to undefined]
**filterType** | **string** | The type of the filter block. left_bar or top_search | [optional] [default to undefined]
**searchResultSingleString** | **string** | The single result string of the filter block | [optional] [default to undefined]
**searchResultPluralString** | **string** | The Plural result string of the filter block | [optional] [default to undefined]
**noResultsString** | **string** | The no results string of the filter block | [optional] [default to undefined]
**searchFieldEnabled** | **boolean** | Whether the search field should be enabled | [optional] [default to undefined]
**searchFieldPlaceholder** | **string** | The placeholder of the search field | [optional] [default to undefined]
**filterBlockEnabled** | **boolean** | Whether the filter block should be enabled | [optional] [default to undefined]
**filterTitle** | **string** | The title of the filter block | [optional] [default to undefined]
**filterSubtitle** | **string** | The subtitle of the filter block | [optional] [default to undefined]
**filterProperties** | [**Array&lt;PropertyDTO&gt;**](PropertyDTO.md) | The properties of the filter block | [optional] [default to undefined]
**enableFilterTiles** | **boolean** | Whether the filter tiles should be enabled | [optional] [default to undefined]
**enableFilterQuery** | **boolean** | Whether the filter query should be enabled | [optional] [default to undefined]
**enableRemoveAllFiltersButton** | **boolean** | Whether the remove all filters button should be enabled | [optional] [default to undefined]
**ctaEnabled** | **boolean** | Whether the CTA should be enabled | [optional] [default to undefined]
**ctaTitle** | **string** | The title of the CTA | [optional] [default to undefined]
**ctaText** | **string** | The text of the CTA | [optional] [default to undefined]
**ctaButtonText** | **string** | The button text of the CTA | [optional] [default to undefined]
**ctaButtonLink** | **string** | The button link of the CTA | [optional] [default to undefined]
**platforms** | **Array&lt;string&gt;** | The platforms shown in the share component | [optional] [default to undefined]

## Example

```typescript
import { PageContentSettingsDTO } from '@caraer/client';

const instance: PageContentSettingsDTO = {
    form,
    openIcon,
    closeIcon,
    alt,
    key,
    playVideo,
    startMuted,
    loopVideo,
    startOffset,
    link,
    style,
    ctaId,
    openInNewWindow,
    sliderType,
    carouselSpeed,
    enableControls,
    previewObject,
    previews,
    previewLayoutOrder,
    filter,
    orderBy,
    orderByDirection,
    asWebpages,
    loop,
    limit,
    groupBy,
    hideOnNoResults,
    filterType,
    searchResultSingleString,
    searchResultPluralString,
    noResultsString,
    searchFieldEnabled,
    searchFieldPlaceholder,
    filterBlockEnabled,
    filterTitle,
    filterSubtitle,
    filterProperties,
    enableFilterTiles,
    enableFilterQuery,
    enableRemoveAllFiltersButton,
    ctaEnabled,
    ctaTitle,
    ctaText,
    ctaButtonText,
    ctaButtonLink,
    platforms,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
