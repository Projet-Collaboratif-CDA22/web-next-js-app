import {CourseLocation} from "@/types/definition";
import {AddressAutofillRetrieveResponse} from "@mapbox/search-js-core";
import {AddressAutofill} from "@mapbox/search-js-react";
import {Container, FloatingLabel, Form} from "react-bootstrap";

export interface LocationProps {
  setLocation: any;
  location: CourseLocation | undefined;
}

export default function AdresseAutocomplete({
  setLocation,
  location,
}: LocationProps) {
  const mapBoxToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

  const handleRetrieve = (e: AddressAutofillRetrieveResponse) => {
    if (e.features.length === 0) return;
    handleSubmit(
      e.features[0].properties.place_name as string,
      e.features[0].geometry as any
    );
  };

  function handleSubmit(place: string, geometry: any) {
    location = {
      place_name: place,
      type: geometry.type,
      coordinates: {
        lon: geometry.coordinates[0],
        lat: geometry.coordinates[1],
      },
    };
    console.table(location);
    setLocation(location);
  }

  return (
    <>
      <Container className="container px-4 py-4">
        {/* <Form className="form-floating"> */}
        <Form.Group className="form-floating ">
          <Form.Label htmlFor="floatingAdress" className="form-label-group">
            Adresse
          </Form.Label>
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
            <Form.Control
              name="address"
              type="text"
              // value={value}
              autoComplete="address-line1"
              className="form-control mb-2"
            />
          </AddressAutofill>
        </Form.Group>

        <Form.Group className="mb-3" controlId="cityField">
          <FloatingLabel
            controlId="floatingCity"
            label="Horaire du cours"
            className="mb-3"
          >
            <Form.Control
              name="city"
              placeholder="City"
              type="text"
              autoComplete="address-level2"
            />
          </FloatingLabel>
        </Form.Group>
        <Form.Group className="mb-3" controlId="stateField">
          <FloatingLabel
            controlId="floatingState"
            label="Département"
            className="mb-3"
          >
            <Form.Control
              name="state"
              placeholder="State"
              type="text"
              autoComplete="address-level1"
            />
          </FloatingLabel>
        </Form.Group>
        <Form.Group className="mb-3" controlId="countryField">
          <FloatingLabel
            controlId="floatingCountry"
            label="Code pays"
            className="mb-3"
          >
            <Form.Control
              name="country"
              placeholder="Country"
              type="text"
              autoComplete="country-name"
              className="form-control mb-2"
            />
          </FloatingLabel>
        </Form.Group>
        <Form.Group className="mb-3" controlId="postcodeField">
          <FloatingLabel
            controlId="floatingPostcode"
            label="Code pays"
            className="mb-3"
          >
            <Form.Control
              name="postcode"
              placeholder="Postcode"
              type="text"
              autoComplete="postal-code"
              className="form-control mb-2"
            />
          </FloatingLabel>
        </Form.Group>
        {/* </Form> */}
      </Container>
    </>
  );
}
