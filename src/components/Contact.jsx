import { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { contactInfo, socialMedia } from "../constant";
import SectionHeader from "./SectionHeader";
import toast from "react-hot-toast";
import contactImage from "../assets/images/contactimage.png";

const CREATE_CONTACT_URL = "/contact/newMsg";

export default function Contact() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (!fullname || !email || !mobileNumber || isLoading) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [fullname, email, mobileNumber, isLoading]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await axios.post(
        CREATE_CONTACT_URL,
        JSON.stringify({ fullname, email, mobileNumber, message }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      setFullname("");
      setEmail("");
      setMobileNumber("");
      setMessage("");
      toast.success("Your Message Was Sent Successfully");
    } catch (err) {
      if (!err?.response) {
        toast.error("No Server Response");
      } else if (err.response?.status === 400) {
        toast.error("Fullname, Email or Number is missing");
      } else {
        toast.error("Oops!!! Something went wrong. Try Again");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="w-full h-max">
      <div className="flex_center xl:justify-start flex-col lg:flex-row gap-6 w-full py-12 lg:py-16 xl:pb-32 px-4 md:px-6 lg:px-12 bg-quaternary xl:relative">
        {/* Image Section */}
        <div className="hidden xl:flex flex_center size-96 absolute right-20 top-1/2 -translate-y-1/2">
          <img
            src={contactImage}
            alt="Contact - BrightPath Education Consultancy"
            className="size-full object-contain"
          />
        </div>

        {/* Form Section */}
        <div className="flex_center xl:items-start flex-col gap-8 w-full lg:w-1/2 xl:w-[600px] rounded-lg bg-white py-10 pb-20 px-4 relative xl:ml-20">
          <SectionHeader
            header="Get In Touch"
            description="Advance your career with us"
          />

          <form
            onSubmit={handleSubmit}
            className="flex justify-start flex-col w-full xl:w-[80%] gap-6"
          >
            <input
              id="fullname"
              type="text"
              placeholder="Your Full Name *"
              autoComplete="off"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              className="w-full flex_center px-4 py-2 text-base text-text shadow-custom rounded-lg focus:outline-none focus:border-b-2 focus:border-primary"
            />
            <input
              id="email"
              type="email"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email Address *"
              className="w-full flex_center px-4 py-2 text-base text-text shadow-custom rounded-lg focus:outline-none focus:border-b-2 focus:border-primary"
            />
            <input
              id="number"
              type="number"
              autoComplete="off"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              placeholder="Your Number *"
              className="w-full flex_center px-4 py-2 text-base text-text shadow-custom rounded-lg focus:outline-none focus:border-b-2 focus:border-primary"
            />
            <textarea
              id="textarea"
              autoComplete="off"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Leave Your Message"
              className="w-full flex_center px-4 py-2 text-base text-text shadow-custom rounded-lg focus:outline-none focus:border-b-2 focus:border-primary h-20 resize-none"
            />

            <button
              type="submit"
              disabled={isDisabled}
              className="py-3 px-6 w-32 h-14 border-2 border-secondary rounded-lg font-bold text-secondary hover:bg-secondary hover:text-white transition duration-300"
            >
              {!isLoading ? (
                <p>Submit</p>
              ) : (
                <div className="inline-block size-5 border-2 border-secondary rounded-full border-b-white animate-rotation"></div>
              )}
            </button>
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="flex_center flex-col gap-8 w-full lg:w-1/2 xl:w-96 rounded-lg bg-primary py-10 px-4 relative xl:absolute xl:top-52 xl:left-1/2 xl:-translate-x-[40%]">
          <SectionHeader
            header="Let's Have A Talk"
            description="Visit or call us today"
            pClass="text-white"
            hClass="text-white"
          />

          <div className="quickcontact flex flex-col gap-8 w-full">
            <div className="flex flex-col w-full gap-8 text-white">
              <a
                href="/"
                target="_blank"
                className="gap-4 flex items-center text-base hover:text-secondary"
              >
                <FaMapLocation className="text-secondary" />
                {contactInfo.location}
              </a>
              <a
                href={`tel:${contactInfo.number}`}
                className="gap-4 flex items-center text-base hover:text-secondary"
              >
                <FaPhoneAlt className="text-secondary" />
                {contactInfo.number}
              </a>
              <a
                href={`mailto:${contactInfo.mail}`}
                className="gap-4 flex items-center text-base hover:text-secondary"
              >
                <IoMail className="text-secondary" />
                {contactInfo.mail}
              </a>
              <a
                href={`mailto:${contactInfo.businessMail}`}
                className="gap-4 flex items-center text-base hover:text-secondary"
              >
                <IoMail className="text-secondary" />
                For Business: &nbsp;{contactInfo.businessMail}
              </a>
            </div>
          </div>

          <div className="flex_center text-2xl w-full gap-4 text-white">
            {socialMedia.map((media, index) => (
              <a
                href={media.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition duration-300"
                key={index}
              >
                <media.logo />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
