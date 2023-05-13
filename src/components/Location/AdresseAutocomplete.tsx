import { AddressAutofillRetrieveResponse } from "@mapbox/search-js-core";
import { AddressAutofill } from "@mapbox/search-js-react";
import { useState } from "react";

export default function AdresseAutocomplete() {
  const mapBoxToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
  const [placeName, setPlaceName] = useState("");
  const [geometry, setGeometry] = useState({} as any);

  const [location, setLocation] = useState<Location>();

  const handleRetrieve = (e: AddressAutofillRetrieveResponse) => {
    if (e.features.length === 0) return;

    setPlaceName(e.features[0].properties.place_name as string);
    setGeometry(e.features[0].geometry);
  };

  console.log(placeName);
  console.log(geometry);

  return (
    <>
      <div className="container px-4 py-4">
        <form className="form-floating">
          <div className="form-floating ">
            <label htmlFor="floatingAdress" className="form-label-group">
              Adresse
            </label>
            <AddressAutofill
              accessToken={mapBoxToken!}
              options={{
                country: "fr",
                language: "fr",
              }}
              onRetrieve={(e) => {
                handleRetrieve(e);
              }}
            >
              <input
                name="address"
                // placeholder="Addresse"
                type="text"
                // value={value}
                autoComplete="address-line1"
                className="form-control mb-2"
              />
            </AddressAutofill>
          </div>

          <div className="form-floating">
            <input
              name="city"
              placeholder="City"
              type="text"
              autoComplete="address-level2"
              className="form-control mb-2"
            />
            <label htmlFor="floatingCity" className="">
              Ville
            </label>
          </div>
          <div className="form-floating">
            <input
              name="state"
              placeholder="State"
              type="text"
              autoComplete="address-level1"
              className="form-control mb-2"
            />
            <label htmlFor="floatingState" className="">
              Département
            </label>
          </div>
          <div className="form-floating">
            <input
              name="country"
              placeholder="Country"
              type="text"
              autoComplete="country-name"
              className="form-control mb-2"
            />
            <label htmlFor="floatingCountry" className="">
              Code pays
            </label>
          </div>
          <div className="form-floating">
            <input
              name="postcode"
              placeholder="Postcode"
              type="text"
              autoComplete="postal-code"
              className="form-control mb-2"
            />
            <label htmlFor="floatingPostcode" className="">
              Code postal
            </label>
          </div>
        </form>
      </div>
    </>
  );
}
