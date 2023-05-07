import Link from "next/link";
import CourseList from "@/components/Course/CourseList";

export default function Courses() {
  return (
    <>
      <section className="mt-4">
        <h1 className="text-primary">Tous les cours</h1>
        <CourseList />
      </section>
    </>
  );
}
