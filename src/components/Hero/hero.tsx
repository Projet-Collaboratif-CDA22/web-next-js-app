import Image from "next/image";

function Header() {
  return (
    <>
      <section id="hero" className="hero d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <h1 data-aos="fade-up">
                Nous offrons une opportunité d&apos; améliorer vos champs de
                compétences.
              </h1>
              <h2 data-aos="fade-up" data-aos-delay="400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti repellat perferendis vero rerum laborum minima deleniti
                inventore officiis. Sed, inventore voluptatibus exercitationem
                voluptate id obcaecati? Aliquam natus saepe suscipit tenetur?
              </h2>
              <div data-aos="fade-up" data-aos-delay="600">
                <div className="text-center text-lg-start">
                  <a
                    href="src/components/Hero#about"
                    className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                  >
                    <span>Get Started</span>
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 hero-img"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <Image src="/tutorat.png" alt="Image" width={626} height={379} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
