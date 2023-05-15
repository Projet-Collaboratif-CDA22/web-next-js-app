import Head from "next/head";
import Hero from "@/components/Hero/hero";
import Header from "@/components/Header/header";
import CourseList from "@/components/Course/CourseList";
import { Button } from "react-bootstrap";
import { NextRequest, NextResponse } from "next/server";
import { redirect } from "next/dist/server/api-utils";
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
