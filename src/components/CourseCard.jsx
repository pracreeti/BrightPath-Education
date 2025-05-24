import ExploreButton from "./UI/ExploreButton";

export default function CourseCard({ image, courseName, slug, alt }) {
  return (
    <div className="flex_center flex-col gap-2 w-full py-4 px-2 col-span-1 shadow rounded-lg">
      <h2 className="coursename font-bold text-lg text-center text-primary p-2">
        {courseName}
      </h2>
      <div className="image w-full h-60 rounded-lg overflow-hidden mb-2">
        {image ? (
          <img src={image} alt={alt} className="size-full object-cover" />
        ) : (
          <p>No image available</p>
        )}
      </div>
      <ExploreButton link={`/rpl/enroll/${slug}`} text="Enroll Now" />
    </div>
  );
}
