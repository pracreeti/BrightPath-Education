import { Link, useLocation } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { MdLogin } from "react-icons/md";
import { RiMenuFoldFill } from "react-icons/ri";
import logo from "../assets/images/logo.png";
import { navLinks, socialMedia } from "../constant/index";
import { twMerge } from "tailwind-merge";
import { useState } from "react";

export default function Header() {
  const location = useLocation();
  const pathname = location.pathname;

  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <header className="z-40 sticky -top-0 left-0 w-full flex flex-col items-end overflow-x-clip shadow-custom bg-white">
      {/* Top part of header */}
      <div className="flex justify-between items-center md:w-[80%] w-[60%] h-max py-1 px-3 md:px-14 lg:px-12 lg:pl-32 bg-primary clip-slant">
        <div className="contact flex_center gap-2 text-xs md:text-sm">
          <div className="flex_center text-white hidden md:flex">
            <a href="tel:+1 215 456-7890" className="flex_center gap-1">
              <FaPhoneAlt className="text-secondary" />
              +1 215 456-7890
            </a>
          </div>
          <div className="font-bold text-white hidden md:flex">|</div>
          <div className="flex_center text-white hidden md:flex">
            <a href="mailto:info@brightpath.com" className="flex_center gap-1">
              <IoIosMail className="text-secondary" />
              info@brightpath.com
            </a>
          </div>
          <div className="font-bold text-white hidden md:flex">|</div>
          <div className="flex_center gap-1 text-white hidden xl:flex">
            <p>For Business:</p>
            <a href="mailto:admin@brightpath.com" className="flex_center gap-1">
              <IoIosMail className="text-secondary" />
              <p>admin@brightpath.com</p>
            </a>
          </div>
        </div>
        <div className="flex_center gap-4 text-white text-sm hidden lg:flex">
          {socialMedia.map((media, index) => (
            <a
              key={index}
              href={media.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary transition duration-300"
            >
              <media.logo />
            </a>
          ))}
        </div>
      </div>

      {/* Bottom part of header */}
      <div className="flex justify-end items-center w-full h-20 bg-white px-3 md:px-6 lg:px-20 relative motion-preset-bounce">
        <Link
          to="/"
          className="logo absolute -top-10 left-5 md:left-16 size-32 flex_center text-primary"
        >
          <img src={logo} alt="logo" className="w-3/4 h-3/4 object-cover" />
        </Link>
        <button
          className={twMerge(
            "p-2 lg:hidden text-2xl text-primary hover:text-secondary transition duration-500",
            showNav ? "rotate-180" : "rotate-0"
          )}
          onClick={toggleNav}
        >
          <RiMenuFoldFill />
        </button>

        <nav className="hidden w-[60%] lg:flex items-center justify-between font-bold z-50">
          {navLinks.map((nav, index) => {
            const isActive = pathname === nav.link;
            return (
              <Link
                key={index}
                to={nav.link}
                className={twMerge(
                  "hover:text-secondary uppercase transition-colors",
                  isActive ? "text-secondary" : "text-primary"
                )}
              >
                {nav.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile nav */}
        <div
          className={twMerge(
            "fixed left-0 right-0 top-[80px] bg-white w-full h-[calc(100vh-80px)] lg:hidden transform transition-transform duration-300 ease-in-out",
            showNav ? "translate-x-0" : "translate-x-full"
          )}
          style={{
            visibility: showNav ? "visible" : "hidden",
            transitionProperty: "transform",
            willChange: "transform",
          }}
        >
          <nav className="flex flex-col w-full gap-y-4 px-4 font-bold">
            {navLinks.map((nav, index) => {
              const isActive = pathname === nav.link;
              return (
                <Link
                  key={index}
                  to={nav.link}
                  className={twMerge(
                    "hover:text-secondary uppercase transition-colors border-b border-primary pb-2",
                    isActive ? "text-secondary" : "text-primary"
                  )}
                  onClick={() => setShowNav(false)}
                >
                  {nav.name}
                </Link>
              );
            })}
          </nav>
          <div className="flex w-full px-4 gap-1 text-primary mt-2 md:hidden">
            <a href="mailto:info@brightpath.com" className="flex_center gap-1">
              <IoIosMail className="text-secondary" />
              <p>info@brightpath.com</p>
            </a>
          </div>
          <div className="flex w-full px-4 gap-1 text-primary mt-2 md:hidden">
            <p>For Business:</p>
            <a href="mailto:admin@brightpath.com" className="flex_center gap-1">
              <IoIosMail className="text-secondary" />
              <p>admin@brightpath.com</p>
            </a>
          </div>
          <div className="flex_center gap-10 text-primary text-2xl mt-5">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary transition duration-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.whatsapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary transition duration-300"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary transition duration-300"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary transition duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary transition duration-300"
            >
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
