import { Link } from "react-router-dom";

export default function ExploreButton(props) {
  const { link, text } = props;

  return (
    <Link
      to={link}
      className="py-3 px-6 border-2 border-secondary rounded-lg w-max font-bold text-secondary hover:bg-secondary hover:text-white transition duration-300"
    >
      {text}
    </Link>
  );
}
