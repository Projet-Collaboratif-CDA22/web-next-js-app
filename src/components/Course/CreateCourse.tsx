import { SubmitHandler, useForm } from "react-hook-form";
import React from "react";
import { ErrorMessage } from "@hookform/error-message";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type Inputs = yup.InferType<typeof CourseSchema>;
//   {
//   title: string;
//   description: string;
// };

const CourseSchema = yup
  .object({
    title: yup
      .string()
      .required("Ce champs est requis")
      .min(15, "Titre trop court")
      .max(75, "Titre trop long"),
    description: yup
      .string()
      .required("Ce champs est requis")
      .min(35, "Description trop courte")
      .max(250, "Description trop longue"),
  })
  .required();

export default function CreateCourse() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty, isValid, isSubmitting },
  } = useForm<Inputs>({ resolver: yupResolver(CourseSchema) });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };
  console.log(errors);
  // console.log(watch("title"));
  console.log(isValid);

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)} className="mx-8 flex">
        {/* Titre du cours */}
        <div className="form-group my-2 ">
          <div className="bg-primary rounded">
            <label
              id="titleLabel"
              className="form-label d-block px-2 py-1 text-white"
            >
              Titre du cours
            </label>
          </div>
          <input
            {...register("title")}
            className="form-control"
            placeholder="titre du cours"
          />
          <div className="text-warning">
            <ErrorMessage errors={errors} name="title" />
          </div>
        </div>
        <div className="form-group my-2">
          <div className="bg-primary rounded">
            <label
              id="descriptionLabel"
              className="form-label d-block px-2 py-1 text-white"
            >
              Description
            </label>
          </div>
          <textarea
            {...register("description")}
            className="form-control mx-6"
          />
          <div className="text-warning">
            <ErrorMessage errors={errors} name="description" />
          </div>
        </div>
        {/* submit */}
        <button
          type="submit"
          disabled={isSubmitting || !isValid}
          className="btn btn-dark"
        >
          Ajouter ce cours
        </button>
      </form>
    </div>
  );
}
