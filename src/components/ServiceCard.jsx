import { Link } from "react-router-dom";

export default function ServiceCard({ image, title, miniDescription, slug }) {
  return (
    <Link
      to={`/services/servicedetail/${slug}`}
      className="servicecard relative col-span-1 w-full h-96"
    >
      <div className="flex_center h-[80%] w-full rounded-lg overflow-hidden">
        <img
          src={image}
          alt="placeholder image"
          className="size-full object-cover"
        />
      </div>
      <div className="absolute flex_center py-3 px-6 bg-secondary text-white rounded-lg top-0 left-1/2 -translate-x-1/2 w-max">
        {title}
      </div>
      <div className="absolute h-44 bottom-0 w-[80%] bg-quaternary rounded-lg left-1/2 -translate-x-1/2 overflow-y-scroll no-scrollbar flex_center p-4">
        <p className="size-full overflow-y-scroll no-scrollbar flex">
          {miniDescription}
        </p>
      </div>
    </Link>
  );
}
