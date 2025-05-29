import SectionHeader from "./SectionHeader";
import CourseCard from "./CourseCard";
import { useEffect, useState } from "react";
import { popularCourses } from "../constant";

export default function PopularCourses() {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setCourses(popularCourses);
    setIsLoading(false);
  }, []);

  return (
    <section className="w-full h-max">
      <div className="flex_center flex-col gap-6 w-full py-8 lg:py-12 px-4 md:px-6 lg:px-12">
        <SectionHeader
          header="Popular Courses"
          description="Explore our popular courses designed to elevate your skills and career prospects. From childcare to construction, find the path to success with us."
        />

        <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 mb-3">
          {!isLoading ? (
            courses && courses.length > 0 ? (
              courses
                .slice(0, 8)
                .map((course, index) => (
                  <CourseCard
                    key={index}
                    image={course.image.imageURL}
                    courseName={course.courseName}
                    slug={course.slug}
                    alt={course.alt}
                  />
                ))
            ) : (
              <p className="font-bold text-xl text-primary flex_center col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4 py-6">
                No Course Found
              </p>
            )
          ) : (
            <div className="w-full h-max flex_center bg-white col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4">
              <div className="inline-block size-20 border-8 border-primary rounded-full border-b-secondary animate-rotation"></div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
