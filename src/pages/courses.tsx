import Link from "next/link";
import CourseList from "@/components/Course/CourseList";
import Header from "@/components/Header/header";
import Head from "next/head";

export default function Courses() {
  return (
    <div>
      <Head>
        <title>CESI Match - Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo_temp.png" />
      </Head>
      <Header />
      <section className="mt-4">
        <h1 className="text-primary">Tous les cours</h1>
        <Link href="/">Homepage</Link>
        <CourseList />
      </section>
    </div>
  );
}
