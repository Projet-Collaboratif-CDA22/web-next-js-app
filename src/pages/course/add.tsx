import CreateCourse from "@/components/Course/CreateCourse";
import { Category } from "@/types/definition";
import {
  CategoryResponseError,
  getAllCategories,
} from "@/services/category/category.service";
import { useState, useEffect } from "react";
import { useUser } from "@supabase/auth-helpers-react";

export default function Courses() {
  const user = useUser();
  const [categories, setCategories] = useState<Category[]>([]);
  const [fetchCategoryError, setFetchCategoryError] =
    useState<CategoryResponseError>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      const { data, error } = await getAllCategories();
      if (error) {
        setFetchCategoryError(error);
        setCategories([]);
      } else {
        setFetchCategoryError(null);
        setCategories(data);
      }
    };
    fetchCategories();
  }, []);

  return (
    <>
      <h1 className="text-primary">Ajouter un cours</h1>
      <CreateCourse props={categories} />
    </>
  );
}
