import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import PageHeader from "../components/PageHeader";
import Loading from "../components/Loading";
import { blogs as staticBlogs } from "../constant";

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setBlogs(staticBlogs);
    setIsLoading(false);
  }, []);

  return (
    <main className="w-full h-max">
      <PageHeader link="/blogs" title="Blogs" />
      {!isLoading ? (
        <section className="w-full h-max py-8">
          <div className="flex_center flex-col gap-6 w-full py-8 lg:py-12 px-4 md:px-6 lg:px-12">
            <div className="grid w-full md:w-[80%] grid-cols-1 lg:grid-cols-2 lg:w-full xl:grid-cols-3 gap-12 py-3">
              {blogs.length > 0 ? (
                [...blogs]
                  .reverse()
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
              )}
            </div>
          </div>
        </section>
      ) : (
        <Loading classname="h-[80vh]" />
      )}
    </main>
  );
};

export default BlogsPage;
