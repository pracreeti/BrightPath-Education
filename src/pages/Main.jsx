import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import AboutUs from "../components/About";
import PopularCourses from "../components/PopularCourses";
import Ribbon from "../components/Ribbon";
import Services from "../components/Services";
import Blogs from "../components/Blogs";
import Testimonials from "../components/Testimonials";

export default function Main() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      const isAtBottom = scrollY + clientHeight >= scrollHeight - 50;

      setIsVisible(scrollY > 300 && !isAtBottom);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="w-full overflow-hidden relative">
      <Hero />
      <AboutUs page={false} />
      <PopularCourses />
      <Ribbon />
      <Services />
      <Blogs />
      <Testimonials />
    </main>
  );
}
