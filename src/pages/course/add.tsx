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

  //get categories
  // const [categories, setCategories] = useState<Category[] | null>(null);
  // const [fetchError, setFetchError] = useState<any | null>(null);

  // useEffect(() => {
  //   const fetchCategories = async () => {
  //     const { data, error } = await getAllCategories();
  //     if (error) {
  //       setFetchError(error);
  //       setCategories([]);
  //     } else {
  //       setFetchError(null);
  //       setCategories(data);
  //     }
  //   };
  //   fetchCategories();
  // }, []);

  return (
    <>
      <h1 className="text-primary">Ajouter un cours</h1>
      <CreateCourse />
    </>
  );
}
