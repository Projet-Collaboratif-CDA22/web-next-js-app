import Hero from "@/components/Hero/hero";
import CourseList from "@/components/Course/CourseList";
import { Button } from "react-bootstrap";
import Router from "next/router";

export default function Home() {
  return (
    <>
      <Hero />
      <main className="">
        <section id="services" className="services">
          <div className="container">
            <div className="section-header">
              <h2>Services</h2>
              <Button onClick={() => Router.push("/course")}></Button>
              <p>Toutes les offres disponibles</p>
            </div>
            <CourseList />
          </div>
        </section>
      </main>
    </>
  );
}
