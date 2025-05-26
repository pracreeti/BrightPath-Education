import React from "react";
import PageHeader from "../components/PageHeader";
import FAQ from "../components/FAQ";
import AboutUs from "../components/About";
import Ribbon from "../components/Ribbon";
import Mission from "../components/Mission";

const About = () => {
  return (
    <>
      <main className="w-full h-max overflow-hidden">
        <PageHeader link="/about" title="About Us" />
        <AboutUs page={true} />
        <Ribbon />
        <Mission />
        <FAQ />
      </main>
    </>
  );
};

export default About;
