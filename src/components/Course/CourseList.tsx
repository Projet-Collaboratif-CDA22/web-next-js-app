import CourseElement from "@/components/Course/CourseElement";
import { useEffect, useState } from "react";
import {
  CoursesReponseError,
  CoursesResponseSuccess,
  getAllCourses,
} from "@/services/courses/courses.service";

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
              <CourseElement course={course} key={index} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
