import { FaQuoteRight, FaStar, FaStarHalfAlt } from "react-icons/fa";

function TestimonialCard({ image, name, statement }) {
  return (
    <div className="flex flex-col justify-center items-center gap-12 py-12 px-4 rounded-3xl bg-white shadow-custom w-72 hover:-rotate-3 transition duration-500">
      <div className="flex w-full items-center gap-2">
        <div className="profile rounded-full size-16 overflow-hidden">
          <img src={image} alt="user" className="size-16 object-cover" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="stars text-yellow-500 text-lg flex items-center gap-1">
            <FaStar className="size-3" />
            <FaStar className="size-3" />
            <FaStar className="size-3" />
            <FaStar className="size-3" />
            <FaStarHalfAlt className="size-3" />
          </div>
          <h1 className="text-base text-tertiary font-bold">{name}</h1>
        </div>
      </div>
      <div className="text-text text-center text-base w-full">{statement}</div>
      <div className="quote size-8 pb-20">
        <FaQuoteRight className="size-8 text-tertiary" />
      </div>
    </div>
  );
}

export default TestimonialCard;
