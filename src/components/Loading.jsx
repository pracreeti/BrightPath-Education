import React from "react";
import { twMerge } from "tailwind-merge";

const Loading = ({ classname }) => {
  return (
    <section
      className={twMerge("w-screen h-screen flex_center bg-white", classname)}
    >
      <div className="inline-block size-20 border-8 border-primary rounded-full border-b-secondary animate-rotation"></div>
    </section>
  );
};

export default Loading;
