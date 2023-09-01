import CourseList from "@/components/Course/CourseList";
import { Button } from "react-bootstrap";

export default function Courses() {
  return (
    <>
      <section className="mt-4">
        <h1 className="text-primary">Tous les cours</h1>
        <div className="d-grid gap-2 ">
          <Button variant="primary" size="lg" href="/course/add">
            Ajouter un cours
          </Button>
        </div>
        <CourseList />
      </section>
    </>
  );
}
