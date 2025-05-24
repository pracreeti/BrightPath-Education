import { twMerge } from "tailwind-merge";

export default function SectionHeader({ header, description, hClass, pClass }) {
  return (
    <div className="sectionheader flex_center flex-col xl:w-[70%] gap-2">
      <div
        className={twMerge(
          "text-3xl lg:text-4xl font-bold text-primary text-center",
          hClass
        )}
      >
        {header}
      </div>
      <div
        className={twMerge(
          "text-text text-base lg:text-lg text-center",
          pClass
        )}
      >
        {description}
      </div>
    </div>
  );
}
