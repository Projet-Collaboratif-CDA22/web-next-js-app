import Head from "next/head";
import Hero from "@/components/Hero/hero";
import Header from "@/components/Header/header";
import CourseList from "@/components/Course/CourseList";

export default function Home() {


  return (
    <>
      <Head>
        <title>CESI Match - Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo_temp.png" />
      </Head>
      <Header />
      <Hero />
      <main className="">
        <section id="services" className="services">
          <div className="container">
            <div className="section-header">
              <h2>Services</h2>
              <p>Toutes les offres disponibles</p>
            </div>
            <CourseList courses={[]} />
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  );
}
