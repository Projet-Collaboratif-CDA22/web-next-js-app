import {CourseLocation} from "@/types/definition";
import dynamic from "next/dynamic";

const DynamicAddressAutoFillWithNoSSR = dynamic(
  () => import("./AdresseAutocomplete"),
  {
    ssr: false,
  }
);

export default function DynamicAddress({
  setLocation,
  location,
}: {
  setLocation: any;
  location: CourseLocation | undefined;
}) {
  return (
    <DynamicAddressAutoFillWithNoSSR
      setLocation={setLocation}
      location={location}
    />
  );
}
