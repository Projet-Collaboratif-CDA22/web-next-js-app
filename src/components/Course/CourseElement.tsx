import {Course} from "@/types/definition";
import Image from "next/image";
import Link from "next/link";

export default function CourseElement({ course }: { course: Course }) {
  return (
    <>
      <div className="col-lg-12 col-md-12 mb-5">
        <Link href={"/course/" + course.id} key={course.id}>
          <div className={`service-box red`}>
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
                    <h3 className="grid__title">{course.title}</h3>
                  </div>
                  <div className="col-lg-2">
                    <small className="grid__date text-black">
                      {course.created_at!.toString()}
                    </small>
                  </div>
                </div>
                <span className="grid__description text-black">
                  {course.description}
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
