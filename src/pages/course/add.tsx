import CreateCourse from "@/components/Course/CreateCourse";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  title: string;
  description: string;
};

export default function Courses() {
  //   const {
  //     register,
  //     handleSubmit,
  //     watch,
  //     control,
  //     formState: { errors },
  //   } = useForm<Inputs>();

  //   const onSubmit: SubmitHandler<Inputs> = (data) => {
  //     console.log(data);
  //   };

  return (
    <>
      <h1 className="text-primary">Ajouter un cours</h1>
      <CreateCourse />
    </>
  );
}
