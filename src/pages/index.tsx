import Head from "next/head";
import Hero from "@/components/Hero/hero";
import Header from "@/components/Header/header";
import CourseList from "@/components/Course/CourseList";

export default function Home() {
  return (
    <>
      <Hero />
      <main className="">
        <section id="services" className="services">
          <div className="container">
            <div className="section-header">
              <h2>Services</h2>
              <p>Toutes les offres disponibles</p>
            </div>
            <CourseList />
          </div>
        </section>
      </main>
    </>
  );
}
