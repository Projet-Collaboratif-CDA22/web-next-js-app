import * as yup from "yup";

const timeRegex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;

export const CourseSchema = yup
  .object({
    title: yup
      .string()
      .required("Ce champs est requis")
      .min(5, "Titre trop court") //15
      .max(75, "Titre trop long"),
    description: yup
      .string()
      .required("Ce champs est requis")
      .min(5, "Description trop courte") //45
      .max(250, "Description trop longue"),
    category: yup.number().required("Ce champs est requis"),
    duration: yup
      .number()
      .required("Ce champs est requis")
      .min(15, "Durée trop courte")
      .max(190, "Durée trop longue"),
    place_available: yup
      .number()
      .required("Ce champs est requis")
      .min(1, "Nombre de place trop faible")
      .max(10, "Nombre de place trop important"),
    date: yup.date().required("Renseignez une date"),
    time: yup
      .string()
      .required("Renseignez une heure")
      .matches(timeRegex, "Renseignez une heure valide"),
  })
  .required();
