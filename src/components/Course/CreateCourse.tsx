import { SubmitHandler, useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";
import { ErrorMessage } from "@hookform/error-message";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CourseSchema } from "@/lib/schemas/course.schema";

type Inputs = yup.InferType<typeof CourseSchema>;

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

  //TODO déplacer categoriesdans la page pour en faire une props passée au composant
  const categories = [
    {
      id: 1,
      title: "categorieA",
    },
    {
      id: 2,
      title: "categorieB",
    },
    {
      id: 3,
      title: "categorieC",
    },
  ];

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
        {/* Description */}
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
        {/* Category */}
        <div className="form-group my-2">
          <div className="bg-primary rounded">
            <label
              id="categoryLabel"
              className="form-label d-block px-2 py-1 text-white"
            >
              Category
            </label>
          </div>
          <select {...register("category")} className="form-select mx-6">
            {categories?.map((category, index) => (
              <option key={index} value={category.id}>
                {category.title}
              </option>
            ))}
          </select>
          <div className="text-warning">
            <ErrorMessage errors={errors} name="category" />
          </div>
        </div>
        {/* Duration */}
        <div className="form-group my-2">
          <div className="bg-primary rounded d-flex flex-row justify-content-between">
            <label
              id="durationLabel"
              htmlFor="duration"
              className="form-label px-2 py-1 text-white"
            >
              Durée
            </label>
            {watch("duration") && (
              <p className="text-dark px-2">{watch("duration")} minutes</p>
            )}
          </div>
          <input
            {...register("duration")}
            className="form-range mx-6"
            type="range"
            defaultValue={45}
            min="10"
            max="190"
            step={10}
            list="markers"
            name="duration"
          />
          {/* <datalist
            id="markers"
            style={{ display: "unset", position: "relative" }}
          >
            <option value="15">15</option>
            <option value="190">190</option>
          </datalist> */}

          <div className="text-warning">
            <ErrorMessage errors={errors} name="description" />
          </div>
        </div>
        {/* Place available */}
        {/* Date Time */}
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
