import {getCommentsByCourseId, getCourseById} from "@/services/courses/courses.service";
import {Course} from "@/types/definition";
import {GetServerSideProps} from "next";
import {useEffect, useState} from "react";
import Accordion from "react-bootstrap/Accordion";
import Badge from "react-bootstrap/Badge";
import {getCategoryById} from "@/services/category/category.service";
import moment from "moment";
import AddComment from "@/components/Course/AddComment";

export default function CoursePageDetails({course, comments}: { course: Course , comments : any[]}) {
  const [canParticipate, setCanParticipate] = useState<boolean>(false);
  const [categoryTitle, setCategoryTitle] = useState<string>("");
  const [coms, setComs] = useState<any[]>([])
  useEffect(() => {
    const getCatName = () => {
      getCategoryById(course.categories ?? 0).then(({data, error}) => {
        setCategoryTitle(data?.title ?? "")
      })
    }
    getCatName()
  }, [course.categories])
  console.log(comments)
  return (
      <>
        <div className="">
          <div className="card border-secondary m-5">
            <div className="card-header fst-italic bg-dark text-white">
              {categoryTitle}
            </div>
            <div className="card-body">
              <h4 className="card-title fw-bolder">{course.title}</h4>
              <p className="card-text">{course.description}</p>
            </div>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Informations pratiques</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Nombre de places disponibles : {course.place_available}</li>
                    {/*@ts-ignore*/}
                    <li>Addresse: {course.coordinates.place_name}</li>
                    {/*@ts-ignore*/}
                    <li>Longitude: {course.coordinates.coordinates.lon}</li>
                    {/*@ts-ignore*/}
                    <li>Latitude: {course.coordinates.coordinates.lat}</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Commentaires</Accordion.Header>
                <Accordion.Body>
                  {comments &&
                      comments.map((comment, index) => (
                          <div key={index}>
                            <p >Name :  {comment.user_id}</p> Date: {moment(comment.created_at).format("DD/MM/YYYY")}
                            <p>Comment :  {comment.body}</p>
                          </div>
                      ))}
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
        </div>
        <AddComment course_id={course.id}/>

      </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { data, error } = await getCourseById(Number(params?.id));
  if (error) {
    console.log(error.message);
  }
  const comments = await getCommentsByCourseId(Number(params?.id))

  console.log(comments)
  if(comments.error){
    console.log(comments.error.message)
  }
  return {
    props: {
      course: data,
      comments:comments.data
    },
  };
};
