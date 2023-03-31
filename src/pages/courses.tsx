import Link from "next/link";
import CourseList from "@/components/Course/CourseList";
import Header from "@/components/Header/header";

export default function Courses() {
  return (
    <div>
      <Header />
      <section className="mt-4">
        <h1 className="text-primary">Tous les cours</h1>
        <Link href="/">Homepage</Link>
        <CourseList />
      </section>
    </div>
  );
}
