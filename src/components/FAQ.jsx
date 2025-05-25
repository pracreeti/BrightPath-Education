import { useState } from "react";
import FaqCard from "./FaqCard";
import SectionHeader from "./SectionHeader";
import faqFirstImage from "../assets/images/faqfirstimage.png";
import faqSecondImage from "../assets/images/faqsecondimage.png";

const faqs = [
  {
    question: "What services does BridgePath Education Consultancy provide?",
    answer:
      "BridgePath offers comprehensive support for students planning to study abroad, including career counseling, university selection, application assistance, visa processing, interview preparation, and pre-departure orientation.",
  },
  {
    question: "Which countries can I apply to through BridgePath?",
    answer:
      "We assist students in applying to universities and colleges in popular study destinations such as Australia, the UK, the USA, Canada, New Zealand, and Europe. Our counselors provide guidance tailored to your academic background and goals.",
  },
  {
    question: "Do you help with student visa applications?",
    answer:
      "Yes, we provide full support with student visa applications, including document preparation, financial guidance, and interview tips to improve your chances of approval.",
  },
  {
    question: "How does BridgePath help me choose the right university?",
    answer:
      "Our experienced counselors assess your academic qualifications, career goals, budget, and preferred destination to recommend universities and programs that are the best fit for you.",
  },
  {
    question: "Is there a fee for your counseling services?",
    answer:
      "We offer free initial counseling sessions. Some specialized services like document processing or application submissions may have associated fees, which will be clearly explained to you in advance.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full h-max">
      <div className="flex_center flex-col gap-6 w-full py-8 lg:py-12 px-4 md:px-6 lg:px-12">
        <SectionHeader
          header="Frequently Asked Question"
          description="Find answers to commonly asked questions about our services, features, and policies. Browse through helpful information to get quick solutions or learn more about what we offer."
        />
        <div className="flex_center flex-col lg:flex-row w-full gap-8 py-8">
          <div className="flex-col w-[20%] h-96 hidden lg:flex">
            <div className="flex_center w-full h-1/2">
              <img
                src={faqFirstImage}
                alt="FAQ - BrightPath Education Consultancy"
                className="size-full object-cover"
              />
            </div>
            <div className="flex_center w-full h-1/2">
              <img
                src={faqSecondImage}
                alt="FAQ - BrightPath Education Consultancy"
                className="size-full object-contain"
              />
            </div>
          </div>
          <div className="flex_center flex-col w-full lg:w-[80%] gap-8">
            {!isLoading ? (
              faqs.length > 0 ? (
                faqs.map((faq, index) => (
                  <FaqCard
                    key={index}
                    index={index}
                    question={faq.question}
                    answer={faq.answer}
                    isActive={activeIndex === index}
                    toggleFAQ={toggleFAQ}
                  />
                ))
              ) : (
                <p className="font-bold text-xl text-primary flex_center w-full py-6">
                  No FAQs Found
                </p>
              )
            ) : (
              <div className="w-full h-max flex_center bg-white">
                <div className="inline-block size-20 border-8 border-primary rounded-full border-b-secondary animate-rotation"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
