import { Link } from "react-router-dom";

export default function BlogCard({ image, title, miniDescription, slug }) {
  return (
    <Link
      to={`/blogs/blogdetail/${slug}`}
      className="blogCard flex_center flex-col gap-4 col-span-1 p-4 w-full h-max shadow rounded-lg overflow-hidden"
    >
      <div className="image w-full h-60 border-8 border-primary rounded-lg overflow-hidden">
        <img
          src={image}
          alt="placeholder image"
          className="flex_center size-full object-cover"
        />
      </div>
      <div className="flex_center flex-col gap-3">
        <h4 className="font-bold text-2xl text-primary">{title}</h4>
        <p className="text-text text-base h-12 w-full text-center overflow-scroll no-scrollbar">
          {miniDescription}
        </p>
        <p className="text-secondary flex_center">Read More ...</p>
      </div>
    </Link>
  );
}
