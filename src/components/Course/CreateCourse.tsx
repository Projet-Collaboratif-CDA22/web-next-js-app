import { SubmitHandler, useForm } from "react-hook-form";
import React, { useCallback, useEffect, useState } from "react";
import { ErrorMessage } from "@hookform/error-message";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CourseSchema } from "@/lib/schemas/course.schema";
import {
  Col,
  Container,
  Row,
  Form,
  Button,
  Tooltip,
  Badge,
} from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Category, CourseInsert, CourseLocation } from "@/types/definition";
import { addCourse } from "@/services/courses/courses.service";
import { handleCourseInput } from "@/services/courses/form.service";
import DynamicAddress from "../Location/DynamicAddressAutofil";
import Router from "next/router";
import { useUser } from "@supabase/auth-helpers-react";
import { log } from "console";

type Inputs = yup.InferType<typeof CourseSchema>;
export type { Inputs as CourseInputs };

export default function CreateCourse({
  props: categories,
}: {
  props: Category[];
}) {
  const user = useUser();
  const [place, setPlace] = useState<number>(1);
  const [duration, setDuration] = useState<number>(15);
  const [location, setLocation] = useState<CourseLocation>();
  const [locationValidated, setLocationValidated] = useState<boolean>(false);
  const [course, setCourse] = useState<CourseInsert>();

  console.log(user?.id);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty, isValid, isSubmitting },
  } = useForm<Inputs>({
    resolver: yupResolver(CourseSchema),
    mode: "all",
  });

  useEffect(() => {
    if (location) {
      setLocationValidated(true);
    }
  }, [location]);

  useEffect(() => {
    const submitCourse = async () => {
      console.log("here");

      if (course) {
        course.author = user?.id;
        const { data, error } = await addCourse(course);
        if (data) {
          alert("Le cours a été créé avec succès");
          const id: string = data.id.toString();
          return Router.push("/course/" + id);
        } else {
          alert("Une erreur est survenue lors de la création du cours");
        }
      }
    };
    submitCourse();
  }, [course, setCourse]);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const courseInput = handleCourseInput(data, location!);
    setCourse(courseInput);
  };
  console.log(location);
  console.log(locationValidated);

  return (
    <Container>
      <Form
        onSubmit={handleSubmit((data) => onSubmit(data))}
        className="mx-8 flex"
        noValidate
      >
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="titleField">
              <FloatingLabel
                controlId="floatingTitle"
                label="Titre du cours"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  isInvalid={errors.title ? true : false}
                  {...register("title")}
                  onChange={(e) => {
                    console.log(e.target.value);
                    console.log(categories);
                  }}
                ></Form.Control>

                <Form.Control.Feedback type="invalid">
                  {errors.title?.message}
                </Form.Control.Feedback>
              </FloatingLabel>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="descriptionField">
              <FloatingLabel
                controlId="floatingDescription"
                label="Description"
                className="mb-3"
              >
                <Form.Control
                  type="textarea"
                  isInvalid={errors.description ? true : false}
                  {...register("description")}
                  onChange={(e) => {}}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.description?.message}
                </Form.Control.Feedback>{" "}
              </FloatingLabel>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <FloatingLabel
              controlId="floatingCategory"
              label="Description"
              className="mb-3"
            >
              <Form.Select
                {...register("category")}
                isInvalid={errors.category ? true : false}
              >
                {categories.map((category, index) => (
                  <option value={category.id} key={index}>
                    {category.title}
                  </option>
                ))}
              </Form.Select>
            </FloatingLabel>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="placeField">
              <Form.Label>Places disponibles</Form.Label>
              <Form.Range
                min={1}
                max={10}
                step={1}
                defaultValue={place}
                {...register("place_available")}
                onChange={(e) => setPlace(+e.target.value)}
              />
              {place > 1 ? (
                <Badge bg="info">{place} places</Badge>
              ) : (
                <Badge bg="info">{place} place</Badge>
              )}
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="dateField">
              <FloatingLabel
                controlId="floatingDate"
                label="Date du cours"
                className="mb-3"
              >
                {/* <Form.Label>Titre du cours</Form.Label> */}
                <Form.Control
                  type="date"
                  isInvalid={errors.date ? true : false}
                  {...register("date")}
                  onChange={(e) => {}}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.date?.message}
                </Form.Control.Feedback>
              </FloatingLabel>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="timeField">
              <FloatingLabel
                controlId="floatingTime"
                label="Horaire du cours"
                className="mb-3"
              >
                {/* <Form.Label>Titre du cours</Form.Label> */}
                <Form.Control
                  type="time"
                  isInvalid={errors.time ? true : false}
                  {...register("time")}
                  onChange={(e) => {}}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.time?.message}
                </Form.Control.Feedback>
              </FloatingLabel>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="durationField">
              <Form.Label>Durée du cours</Form.Label>
              <Form.Range
                min={15}
                max={195}
                step={15}
                defaultValue={duration}
                {...register("duration")}
                onChange={(e) => setDuration(+e.target.value)}
              />
              <Badge bg="info">{duration} minutes</Badge>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <DynamicAddress setLocation={setLocation} location={location} />
        </Row>
        <Button
          type="submit"
          disabled={isSubmitting || !isValid || !locationValidated}
          className="btn btn-dark"
        >
          Ajouter ce cours
        </Button>
      </Form>
    </Container>
  );
}
