import { useEffect, useState } from "react";
import Hero from "../components/Hero";

export default function Main() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      const isAtBottom = scrollY + clientHeight >= scrollHeight - 50; // Adjust 50px threshold as needed

      // Set visibility based on scroll position and proximity to the bottom
      setIsVisible(scrollY > 300 && !isAtBottom);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="w-full overflow-hidden relative">
      <Hero />
    </main>
  );
}
