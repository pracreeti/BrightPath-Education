import { useEffect, useState } from "react";
import SectionHeader from "./SectionHeader";
import ViewMore from "./UI/ViewMore";
import BlogCard from "./BlogCard";
import { blogs as staticBlogs } from "../constant";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setBlogs(staticBlogs);
    setIsLoading(false);
  }, []);

  return (
    <section className="w-full h-max">
      <div className="flex_center flex-col gap-6 w-full py-8 lg:py-12 px-4 md:px-6 lg:px-12">
        <SectionHeader
          header="Blogs"
          description="Explore our latest blogs for expert guidance, career advice, and learning resources to help you achieve your goals!"
        />
        <div className="grid w-full md:w-[80%] grid-cols-1 lg:grid-cols-2 lg:w-full xl:grid-cols-3 gap-12 py-3">
          {!isLoading ? (
            blogs.length > 0 ? (
              [...blogs]
                .reverse()
                .slice(0, 3)
                .map((blog, index) => (
                  <BlogCard
                    key={index}
                    slug={blog.slug}
                    image={blog.image.imageURL}
                    title={blog.title}
                    miniDescription={blog.miniDescription}
                  />
                ))
            ) : (
              <p className="font-bold text-xl text-primary flex_center col-span-1 lg:col-span-2 xl:col-span-3 py-6">
                No Blogs Found
              </p>
            )
          ) : (
            <div className="w-full h-max flex_center bg-white col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4">
              <div className="inline-block size-20 border-8 border-primary rounded-full border-b-secondary animate-rotation"></div>
            </div>
          )}
        </div>
        <ViewMore link="/blogs" text="View More" />
      </div>
    </section>
  );
}
