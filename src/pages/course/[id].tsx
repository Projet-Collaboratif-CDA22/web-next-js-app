import Header from "@/components/Header/header";
import { getCourseById } from "@/services/courses/courses.service";
import { Course } from "@/types/definition";
import { GetServerSideProps } from "next";
import Accordion from "react-bootstrap/Accordion";
import Badge from "react-bootstrap/Badge";

export default function CoursePageDetails({ course }: { course: Course }) {
  console.log(course.tags);
  console.log(typeof course.tags);

  return (
    <>
      <Header />
      <div style={{ position: "absolute" }}>
        <main>
          <section className="services bg-red">
            <h1>{course.title}</h1>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Description</Accordion.Header>
                <Accordion.Body>{course.description}</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Comments</Accordion.Header>
                <Accordion.Body>
                  comments to be added, accessible only for authentificated
                  users
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <div className="tag">
              {course.tags &&
                course.tags.map((tag, index) => (
                  <Badge bg="info" text="dark" key={index}>
                    {tag}
                  </Badge>
                ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { data, error } = await getCourseById(Number(params?.id));
  if (error) {
    console.log(error.message);
  }

  return {
    props: {
      course: data,
    },
  };
};
