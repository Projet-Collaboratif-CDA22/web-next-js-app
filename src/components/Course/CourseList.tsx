import CourseElement from "@/components/Course/CourseElement";
import type { Course } from "@/pages/api/courses";
import { getCourses } from "@/pages/api/courses";

type CoursesListProps = {
  courses: Course[];
};
export default function CourseList({ courses }: CoursesListProps) {
  //TODO Fetch courses & map -> CourseElement (add props)
  return (
    <>
      <div className="d-flex justify-content-center flex-wrap">
        <CourseElement />
        <CourseElement />
        <CourseElement />
        <CourseElement />
        <CourseElement />
        <CourseElement />
        <CourseElement />
        <CourseElement />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  let errors = null;
  const courses = await getCourses();
  return {
    props: {
      courses,
    }, // will be passed to the page component as props
  };
}
