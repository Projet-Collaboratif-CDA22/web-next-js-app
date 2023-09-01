import { CourseInputs } from "@/components/Course/CreateCourse";
import { CourseInsert, CourseLocation } from "@/types/definition";

export function handleCourseInput(
  courseAttributes: CourseInputs,
  courseLocation: CourseLocation
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
  const time_slot = new Date(`${date} ${time}`).toString();
  console.log(time_slot);
  return {
    title,
    description,
    duration_minutes: duration,
    time_slot: new Date(`${date} ${time}`).toISOString(),
    place_available,
    categories: category,
    coordinates: courseLocation,
  };
}
