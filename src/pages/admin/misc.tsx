import CategoryComponent from "@/components/Category/categoryTable";
import { getAllCategories } from "@/services/category/category.service";
import { Category } from "@/types/definition";
import { GetServerSideProps } from "next";
import { useState } from "react";

export default function Home() {
  // { categories }: { categories: Category[] }
  return (
    <>
      <h1>Divers</h1>
      <CategoryComponent></CategoryComponent>
    </>
  );
}

// export const getServerSideProps: GetServerSideProps = async () => {
//   const { data, error } = await getAllCategories();
//   if (error) {
//   }

//   return {
//     props: {
//       categories: data,
//     },
//   };
// };
