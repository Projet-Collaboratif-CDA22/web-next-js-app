import CourseElement from "@/components/Course/CourseElement";
import type { Course } from "@/pages/api/courses";
import { getCourses } from "@/pages/api/courses";
import Grid from "@/components/Grid/grid";

type CoursesListProps = {
  courses: Course[];
};
export default function CourseList({ courses }: CoursesListProps) {
  //TODO Fetch courses & map -> CourseElement (add props)
  return (
    <>
      <div className="row gy-4">
        <section className="services">
          <div className={"container"}>
            <CourseElement
              content={"bonjour"}
              title={"Titre 1"}
              date={new Date("01/01/2023")}
              color={"red"}
              key={1}
            />
            <CourseElement
              content={"Au revoir"}
              title={"Titre 2"}
              date={new Date("01/01/2023")}
              key={2}
              color={"blue"}
            />
            <CourseElement
              content={"Au revoir"}
              title={"Titre 2"}
              date={new Date("01/01/2023")}
              key={2}
              color={"green"}
            />
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
