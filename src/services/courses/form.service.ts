import { CourseInputs } from "@/components/Course/CreateCourse";
import { CourseInsert } from "@/types/definition";

export function handleCourseInput(
  courseAttributes: CourseInputs
): CourseInsert {
  const {
    title,
    description,
    duration,
    date,
    time,
    place_available,
    category,
  } = courseAttributes;
  debugger;
  // const { place_name, type, coordinates } = location;
  const time_slot = new Date(`${date} ${time}`).toString();
  console.log(time_slot);
  return {
    title,
    description,
    duration_minutes: duration,
    time_slot: new Date(`${date} ${time}`).toISOString(),
    place_available,
    categories: category,
  };
}
