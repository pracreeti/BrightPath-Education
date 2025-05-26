import { BiHome } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import pageHeaderImage from "../assets/images/herobg.jpg";
import { Link } from "react-router-dom";

const PageHeader = ({ title, link }) => {
  return (
    <div className="w-full h-64 bg-secondary flex_center flex-col text-white relative overflow-hidden">
      <img
        src={pageHeaderImage}
        alt="page header"
        className="w-full h-full object-cover absolute inset-0"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary"></div>
      <div className="flex_center flex-col gap-8 absolute">
        <h1 className="text-[40px] font-semibold">{title}</h1>
        <div className="flex_center gap-3 py-3 px-6 border border-white rounded-md text-base bg-transparent z-10">
          <Link to="/" className="flex_center gap-3 hover:text-secondary">
            <BiHome />
            <p>Home</p>
          </Link>
          <div className="text-base">
            <IoIosArrowForward />
          </div>
          <Link to={link} className="flex_center gap-3 hover:text-secondary">
            {title}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
