import Image from "next/image";
import type { Course } from "@/pages/api/courses";
import Link from "next/link";

export default function CourseElement({ title, date, content, color }: Course) {
  return (
    <>
      <div className="col-lg-12 col-md-12 mb-5">
        <Link href="#">
          {/* Pour l'instant, on peux changer la couleur entre : blue, pink, pruple, red, green, orange */}
          <div className={`service-box ${color}`}>
            <div className="d-flex row">
              <div className="col-lg-3">
                <Image
                  className="grid__img"
                  src="/tutorat.png"
                  alt="Image"
                  width={100}
                  height={100}
                />
              </div>
              <div className="col-lg-9">
                <div className="row">
                  <div className="col-lg-10">
                    <h3 className="grid__title">{title}</h3>
                  </div>
                  <div className="col-lg-2">
                    <small className="grid__date text-black">
                      {date.getDate().toString()}
                    </small>
                  </div>
                </div>
                <span className="grid__description text-black">{content}</span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
