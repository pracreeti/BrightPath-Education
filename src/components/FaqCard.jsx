import { FaMinus, FaPlus } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

export default function FaqCard({
  index,
  question,
  answer,
  isActive,
  toggleFAQ,
}) {
  return (
    <div
      className={twMerge(
        "faqcard flex_center flex-col w-full border border-text/50 rounded-md transition duration-300 text-text gap-2",
        isActive ? "border-tertiary text-primary" : ""
      )}
    >
      <button
        onClick={() => toggleFAQ(index)}
        className="question flex justify-between items-center py-4 px-6 w-full gap-2"
      >
        <p className="font-bold text-left">{question}</p>
        {isActive ? <FaMinus /> : <FaPlus />}
      </button>
      {isActive && <p className="px-6 pb-4 text-secondary">{answer}</p>}
    </div>
  );
}
