import PageHeader from "../components/PageHeader";
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
      </main>
    </>
  );
};

export default About;
