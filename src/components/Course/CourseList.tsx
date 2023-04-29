import CourseElement from "@/components/Course/CourseElement";
import type { Course } from "@/pages/api/courses";
import { getCourses } from "@/pages/api/courses";
import Grid from "@/components/Grid/grid";
import { useEffect, useState } from "react";
import {
  CoursesReponseError,
  CoursesResponseSuccess,
  getAllCourses,
} from "@/services/courses/courses.service";

type CoursesListProps = {
  courses: Course[];
};
export default function CourseList() {
  const [courses, setCourses] = useState<CoursesResponseSuccess>(null);
  const [fetchError, setFetchError] = useState<CoursesReponseError>(null);

  useEffect(() => {
    const fetchCourses = async () => {
      const { data, error } = await getAllCourses();
      if (error) {
        setFetchError(error);
        setCourses([]);
      } else {
        setFetchError(null);
        setCourses(data);
      }
    };
    fetchCourses();
  }, []);

  return (
    <>
      <div className="row gy-4">
        <section className="services">
          <div className={"container"}>
            {courses?.map((course, index) => (
              <CourseElement
                key={index}
                title={course.title!}
                content={course.author!}
                color="red"
                date={new Date(course.created_at!)}
              />
            ))}
            <Grid />
          </div>
        </section>
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
