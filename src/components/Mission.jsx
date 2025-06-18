import { Link } from "react-router-dom";
import { IoArrowForward } from "react-icons/io5";

const Mission = () => {
  return (
    <section className="w-full flex justify-center items-center py-16 px-4 sm:px-12 md:px-20 lg:px-32">
      <div className="flex flex-col lg:flex-row lg:justify-between w-full gap-16">
        {/* Let's Go Section */}
        <div className="flex flex-col w-full lg:w-[30%] gap-8">
          <div className="flex w-full flex-col gap-5 bg-quaternary shadow-custom rounded-md px-4 py-12">
            <h2 className="font-bold text-3xl lg:text-5xl">
              Achieve Your Dream With BrightPath Education Consultancy
            </h2>
            <p className="text-text text-justify">
              Our commitment is to offer comprehensive services to students
              interested in various RPL certificates. Empowering your journey
              with tailored support and guidance every step of the way.
            </p>
          </div>
          <div className="flex flex-col bg-quaternary shadow-custom rounded-md px-4 py-12 gap-5">
            <h2 className="font-extrabold text-primary text-3xl lg:text-4xl">
              You're Just 60 Seconds Away from Transforming Your Life
            </h2>
            <p className="text-text text-justify">
              Don't wait, take the first step towards a brighter future today.
              Join thousands of successful candidates who used our FREE 60
              second skills check to kickstart their RPL journey. Discover how
              your experience can translate into a nationally recognized
              qualification, propelling your career to new heights.
            </p>
            <Link
              to="/about"
              className="bg-primary text-white px-6 py-4 rounded-full flex justify-center items-center gap-5"
            >
              Let's Go <IoArrowForward />
            </Link>
          </div>
        </div>

        {/* Mission, Vision, Goal Section */}
        <div className="flex flex-col w-full lg:w-[50%] gap-8 justify-center items-center py-4">
          {/* Our Mission */}
          <div className="flex justify-center items-center w-full relative">
            <div className="flex size-10 bg-white border-primary border-2 rotate-45 absolute left-0 md:left-3 lg:left-5"></div>
            <div className="flex flex-col w-[90%] justify-center py-6 px-3 border-2 border-primary rounded-xl z-10 bg-white gap-5">
              <h2 className="text-2xl font-bold">Our Mission</h2>
              <p className="text-text text-justify">
                BrightPath Education Consultancy is dedicated to delivering
                exceptional services that empower our clients to achieve
                success. We are constantly pursuing excellence and staying
                abreast of the most recent developments and trends in the
                education sector. This ensures that we maintain the highest
                level of service and assistance possible.
              </p>
            </div>
          </div>

          {/* Our Vision */}
          <div className="flex justify-center items-center w-full relative">
            <div className="flex size-10 bg-quaternary border-quaternary border-2 rotate-45 absolute left-0 md:left-3 lg:left-5"></div>
            <div className="flex flex-col w-[90%] justify-center py-6 px-3 border-2 border-quaternary rounded-xl z-10 bg-quaternary gap-5 shadow-custom">
              <h2 className="text-2xl font-bold">Our Vision</h2>
              <p className="text-text text-justify">
                BrightPath Education Consultancy is committed to empowering
                individuals from all walks of life to achieve their educational
                and career goals. We believe in unlocking every person's
                potential, providing resources, and personalized support to
                fulfill aspirations and lead fulfilling lives. Furthermore,
                we're committed to helping learners reach their full potential
                and lead fulfilling lives.
              </p>
            </div>
          </div>

          {/* Our Goal */}
          <div className="flex justify-center items-center w-full relative">
            <div className="flex size-10 bg-white border-primary border-2 rotate-45 absolute left-0 md:left-3 lg:left-5"></div>
            <div className="flex flex-col w-[90%] justify-center py-6 px-3 border-2 border-primary rounded-xl z-10 bg-white gap-5">
              <h2 className="text-2xl font-bold">Our Goal</h2>
              <ul className="text-text flex flex-col gap-1">
                <li>Fairness, objectivity, and integrity.</li>
                <li>
                  Transparent, professional, and empathetic communication.
                </li>
                <li>Consideration, empathy, and motivation.</li>
                <li>
                  Confidentiality and professionalism. Inclusivity,
                  impartiality, and respect.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
