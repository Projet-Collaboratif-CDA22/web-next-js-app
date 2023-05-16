import CategoryComponent from "@/components/Category/categoryTable";
import { getAllCategories } from "@/services/category/category.service";
import { Category } from "@/types/definition";
import { GetServerSideProps } from "next";
import { useState } from "react";

export default function Home() {
// { categories }: { categories: Category[] }
  return (
    <>
      <div>Statistiques</div>;<CategoryComponent></CategoryComponent>
    </>
  );
}

// export const getServerSideProps: GetServerSideProps = async () => {
//   const { data, error } = await getAllCategories();
//   if (error) {
//     console.log(error.message);
//   }

//   return {
//     props: {
//       categories: data,
//     },
//   };
// };
