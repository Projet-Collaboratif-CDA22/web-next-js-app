import * as yup from "yup";

const timeRegex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
const dateRegex =
  /[1-9][0-9][0-9]{2}-([0][1-9]|[1][0-2])-([1-2][0-9]|[0][1-9]|[3][0-1])/;

const errorMessage = {
  req: "Ce champs est requis",
};

export const CourseSchema = yup
  .object()
  .shape({
    category: yup.number().required(errorMessage.req),
    description: yup
      .string()
      .required(errorMessage.req)
      .min(25, "Description trop courte"), //45
    duration: yup
      .number()
      .required(errorMessage.req)
      .min(15, "Durée trop courte")
      .max(195, "Durée trop longue"),
    place_available: yup
      .number()
      .positive("Le nombre de place doit être positif")
      .required(errorMessage.req)
      .min(1, "Nombre de place trop faible")
      .max(10, "Nombre de place trop important"),
    date: yup.string().required(errorMessage.req).matches(dateRegex),
    time: yup
      .string()
      .required(errorMessage.req)
      .matches(timeRegex, "Renseignez une heure valide"),
    title: yup
      .string()
      .required(errorMessage.req)
      .min(5, "Titre trop court") //15
      .max(25, "Titre trop long"),
  })
  .required();
