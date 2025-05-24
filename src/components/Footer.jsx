import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { navLinks, contactInfo, socialMedia } from "../constant";
import { FaMapLocation } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { useEffect, useState } from "react";
import axios from "axios";
import { isAxiosError } from "axios";
import toast from "react-hot-toast";

const EMAIL_SUBSCRIPTION = "/subscribe/subscribe";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (email === "" || isLoading === true) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [email, isLoading]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await axios.post(EMAIL_SUBSCRIPTION, JSON.stringify({ email }), {
        headers: { "Content-Type": "application/json" },
      });
      setEmail("");
      toast.success("Congratulations!!! Email subscription successful");
      setIsLoading(false);
    } catch (err) {
      if (isAxiosError(err)) {
        if (!err?.response) {
          toast.error("No Serer Response");
        } else if (err.response?.status === 400) {
          toast.error("Email missing");
        } else if (err.response?.status === 409) {
          toast.error("You have already subscribed");
        } else {
          toast.error("Oops!!! Something went wrong. Try Again");
        }
      }
      setIsLoading(false);
    }
  };

  return (
    <footer className="w-full h-max overflow-hidden">
      <div className="mainfooter mt-48 md:mt-32 lg:mt-20 xl:mt-16 flex_center w-full pt-44 md:pt-36 lg:pt-20 xl:pt-16 pb-8 px-4 md:px-6 lg:px-12 bg-quaternary relative">
        <div className="absolute -top-36 md:-top-24 lg:-top-16 xl:-top-12 left-1/2 -translate-x-1/2 flex flex-col lg:flex-row w-[90%] rounded-lg px-4 py-2 gap-5 bg-primary">
          <div className="headingtext flex flex-col w-full lg:w-1/2 gap-3">
            <h2 className="font-bold text-2xl text-white">
              Enroll for our various courses anywhere from the USA
            </h2>
            <p className="text-sm text-white">
              Read the articles related to Open and Distance Learning (ODL) mode
              of education and Blended mode of Learning.
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="input flex_center flex-col lg:flex-row lg:w-1/2 gap-2"
          >
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 rounded-lg flex_center w-full text-text focus:outline-none focus:border-b-2 focus:border-primary"
            />
            <button
              disabled={isDisabled}
              onClick={() => handleSubmit}
              className="flex_center px-4 py-2 h-12 rounded-lg w-32 bg-secondary text-white hover:bg-secondary/70 transition duration-300"
            >
              {!isLoading ? (
                <p>Subscribe</p>
              ) : (
                <div className="inline-block size-5 border-2 border-primary rounded-full border-b-white animate-rotation"></div>
              )}
            </button>
          </form>
        </div>
        <div className="flex_center flex-col lg:flex-row w-full px-3 py-4 gap-4 lg:gap-10">
          <div className="about flex_center flex-col gap-2 w-full lg:w-[40%]">
            <Link to={"/"} className="size-20">
              <img
                src={logo}
                alt="Skill Spot Australia"
                className="size-full object-contain"
              />
            </Link>
            <p className="text-base text-text text-justify">
              Welcome to BrightPath Education Consultancy, your trusted partner
              in education consulting. As one of the leading experts in the
              field, we are dedicated to helping you achieve your dream of
              studying abroad—whether you're aiming to pursue higher education
              in the USA or looking to enhance your skills. Join Bright Path
              today and take the first step toward a brighter future in the USA!
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-8 w-full">
            <div className="quicklinks flex flex-col gap-4 w-full">
              <h3 className="text-2xl font-bold">
                <span className="text-secondary">Quick</span> Links
              </h3>
              <nav className="footernav flex flex-col gap-2">
                {navLinks.map((nav, index) => {
                  return (
                    <Link
                      key={index}
                      to={nav.link}
                      className="text-base text-text hover:text-primary transition duration-300"
                    >
                      {nav.name}
                    </Link>
                  );
                })}
              </nav>
            </div>
            <div className="quickcontact flex flex-col gap-4 w-full">
              <h3 className="text-2xl font-bold">
                <span className="text-secondary">Quick</span> contact
              </h3>
              <div className="flex flex-col w-full gap-2">
                <a
                  href="/"
                  target="_blank"
                  className="gap-2 flex items-center text-text text-base hover:text-primary"
                >
                  <FaMapLocation className="text-secondary" />
                  {contactInfo.location}
                </a>
                <a
                  href={`tel:${contactInfo.number}`}
                  target="_blank"
                  className="gap-2 flex items-center text-text text-base hover:text-primary"
                >
                  <FaPhoneAlt className="text-secondary" />
                  {contactInfo.number}
                </a>
                <a
                  href={`mailto:${contactInfo.mail}`}
                  target="_blank"
                  className="gap-2 flex items-center text-text text-base hover:text-primary"
                >
                  <IoMail className="text-secondary" />
                  {contactInfo.mail}
                </a>
                <a
                  href={`mailto:${contactInfo.businessMail}`}
                  target="_blank"
                  className="gap-2 flex items-center text-text text-base hover:text-primary"
                >
                  <FaPhoneAlt className="text-secondary" />
                  For Business: &nbsp;
                  {contactInfo.businessMail}
                </a>
              </div>
            </div>
            <div className="quickcontact flex flex-col gap-4 w-full">
              <h3 className="text-2xl font-bold">
                <span className="text-secondary">Let&apos;s</span> get social
              </h3>
              <div className="flex text-xl w-full gap-4 text-primary">
                {socialMedia.map((media, index) => {
                  return (
                    <a
                      href={media.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-secondary transition duration-300"
                      key={index}
                    >
                      <media.logo />
                    </a>
                  );
                })}
              </div>
              <Link
                to={"tel:0477608883"}
                className="flex_center px-4 py-2 rounded-lg w-max bg-secondary text-white hover:bg-secondary/70 transition duration-300s"
              >
                Call Us Today
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="footerbottom p-4 flex_center flex-col gap-4 bg-primary text-white">
        <div className="flex_center gap-4">
          <Link to={"/terms"} className="hover:text-secondary">
            Terms and Conditions
          </Link>
          <div className=" h-4 w-0.5 bg-white"></div>
          <Link to={"/privacy"} className="hover:text-secondary">
            Privacy Policy
          </Link>
        </div>
        <div className="copyright flex_center">
          <p className="text-center">
            &copy;Copyright 2024 Bright Path Education Consultancy, All Rights
            Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
