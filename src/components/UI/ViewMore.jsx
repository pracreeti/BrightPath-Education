import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

export default function ViewMore({ link, text }) {
  return (
    <Link
      to={link}
      className="px-6 py-3 flex_center gap-2 border-2 border-secondary rounded-full font-bold text-base text-secondary hover:bg-secondary hover:text-white transition duration-300"
    >
      {text} <FaArrowRightLong />
    </Link>
  );
}
