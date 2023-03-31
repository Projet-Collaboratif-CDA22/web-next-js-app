import { useState } from "react";
import CourseElement from "@/components/Course/CourseElement";
import Header from "@/components/Header/header";

export default function CourseList() {
  const [courses, setCourses] = useState([]);
  //TODO Fetch courses & map -> CourseElement (add props)
  return (
    <>
      <div className="d-flex justify-content-center flex-wrap">
        <CourseElement />
        <CourseElement />
        <CourseElement />
        <CourseElement />
        <CourseElement />
        <CourseElement />
        <CourseElement />
        <CourseElement />
      </div>
    </>
  );
}
