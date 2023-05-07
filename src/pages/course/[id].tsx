import Header from "@/components/Header/header";
import { getCourseById } from "@/services/courses/courses.service";
import { Course } from "@/types/definition";
import { GetServerSideProps } from "next";
import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Badge from "react-bootstrap/Badge";

export default function CoursePageDetails({ course }: { course: Course }) {
  const [canParticipate, setCanParticipate] = useState<boolean>(false);

  return (
    <>
      <div className="" style={{ position: "absolute" }}>
        <div className="card border-secondary m-5">
          <div className="card-header fst-italic bg-dark text-white">
            course categories to be implemented
          </div>
          <div className="card-body">
            <h4 className="card-title fw-bolder">{course.title}</h4>
            <p className="card-text">{course.description}</p>
          </div>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Informations pratiques</Accordion.Header>
              <Accordion.Body>Lieu / date / heure etc </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Commentaires</Accordion.Header>
              <Accordion.Body>
                comments to be added, accessible only for authentificated users
                need to be implemented and designed
              </Accordion.Body>
            </Accordion.Item>
            {course.tags && (
              <Accordion.Item eventKey="2">
                <Accordion.Header>Tags</Accordion.Header>
                <Accordion.Body>
                  {course.tags &&
                    course.tags.map((tag, index) => (
                      <Badge
                        className="badge rounded-pill bg-primary mx-1"
                        key={index}
                      >
                        {tag}
                      </Badge>
                    ))}
                </Accordion.Body>
              </Accordion.Item>
            )}
            <Accordion.Item eventKey="3">
              <Accordion.Header>Call to action</Accordion.Header>
              <Accordion.Body className="flex-row-reverse">
                <button className="btn btn-primary mx-1">Participer</button>
                <button className="btn btn-warning mx-1">Signaler</button>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        e
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
