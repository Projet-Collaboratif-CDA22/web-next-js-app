import { CourseLocation } from "@/types/definition";
import { AddressAutofillRetrieveResponse } from "@mapbox/search-js-core";

function TransformToLocation(
  rawAddress: AddressAutofillRetrieveResponse
): CourseLocation {
  return {
    place_name: rawAddress.features[0].properties.place_name as string,
    type: rawAddress.type,
    coordinates: {
      lon: rawAddress.features[0].geometry.coordinates[0],
      lat: rawAddress.features[0].geometry.coordinates[1],
    },
  };
}
