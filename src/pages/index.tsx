import Head from "next/head";
import Grid from "../components/Grid/grid";
import Header from "../components/Header/header";
import Hero from "../components/Hero/hero";

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
            <div className="row gy-4">
              <Grid />
              <Grid />
            </div>
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  );
}
