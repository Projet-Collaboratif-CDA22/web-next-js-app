import { createCategory, deleteCategory } from "@/services/admin/admin.service";
import { getAllCategories } from "@/services/category/category.service";
import { Category } from "@/types/definition";
import { useEffect, useState } from "react";
import { Alert, Button, Container, Spinner, Table } from "react-bootstrap";
import InputStack from "./stackInput";

export default function CategoryComponent() {
  const [loading, setLoading] = useState<boolean>(true);
  const [categories, setCategories] = useState<Category[]>([]);
  const [error, fetchError] = useState<any>();
  const [newCategory, setNewCategory] = useState<string>("");
  const [inactive, setInactive] = useState<number>();

  useEffect(() => {
    const fetchCategories = async () => {
      const { data, error } = await getAllCategories();
      if (error) {
        console.log(error.message);
        setCategories([]);
        fetchError(error);
      } else {
        setCategories(data);
        fetchError(null);
        setLoading(false);
      }
    };
    fetchCategories();
  }, [categories]);

  useEffect(() => {
    const setInactive = async () => {
      if (!inactive || inactive === 0) return;

      const { data, error } = await deleteCategory(inactive!);
      if (error) {
        alert(error.message);
      } else {
        alert("La catégorie a été désactivée");
      }
    };

    setInactive();
  }, [inactive]);

  useEffect(() => {
    const addCategory = async () => {
      // console.log(newCategory);
      if (newCategory === "") return;
      if (categories.find((category) => category.title === newCategory)) {
        console.log("erreur duplication");
        alert("La catégorie existe déjà");
        return;
      }
      const { data, error } = await createCategory(newCategory);
      if (error) {
        alert(error.message);
      } else {
        alert("La catégorie a été ajoutée");
      }
    };
    addCategory();
  }, [newCategory, setNewCategory, categories]);

  return (
    <Container fluid="md">
      {loading && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Chargement...</span>
        </Spinner>
      )}
      {loading && error && (
        <Alert key="warning" variant="warning">
          error.message
        </Alert>
      )}
      {!loading && !error && (
        <>
          <InputStack
            message="Ajouter une catégorie"
            // value={newCategory}
            setValue={setNewCategory}
          />
          <div>Category component</div>
          <Table striped>
            <thead>
              <tr>
                <th>Categorie</th>
                <th>Etat</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category, index) => (
                <tr key={category.id}>
                  <td>{category.title}</td>
                  <td>{category.is_active ? "actif" : "inactif"}</td>
                  <td>
                    <Button
                      disabled={!category.is_active}
                      onClick={() => setInactive(category.id)}
                    >
                      Rendre inactif
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}
    </Container>
  );
}
