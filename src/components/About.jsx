import heroBackground from "../assets/images/herobgthree.jpg";
import counsellingImage from "../assets/images/counselling.jpg";
import ExploreButton from "../components/UI/ExploreButton";

export default function AboutUs(props) {
  const { page } = props;
  return (
    <>
      <section className="w-full h-max">
        <div className="flex_center flex-col gap-6 w-full py-8 lg:py-12 px-4 md:px-6 lg:px-12">
          <div className={"flex flex-col gap-1 w-full animation-appear"}>
            <label className="text-secondary text-base lg:text-lg font-bold">
              BrightPath Education Consultancy
            </label>
            {page ? (
              <h1 className="text-4xl text-primary font-bold">Who Are We ?</h1>
            ) : (
              <h2 className="text-4xl text-primary font-bold">Who Are We ?</h2>
            )}
          </div>
          <div className="content flex flex-col lg:flex-row-reverse lg:gap-12 w-full gap-4">
            <div className="flex w-full lg:w-[40%] h-[40vh] lg:h-[50vh] relative animation-appear">
              <img
                src={heroBackground}
                alt="placeholder image"
                className="flex_center w-3/4 object-cover rounded-md"
              />
              <div className="absolute flex_center w-[70%] h-[80%] bg-primary -bottom-10 right-0 rounded-tl-full rounded-bl-full border-8 border-white overflow-hidden">
                <img
                  src={counsellingImage}
                  alt="placeholder iamge"
                  className="size-full object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col w-full lg:w-[60%] gap-4">
              {page === true ? (
                <div className="flex flex-col gap-4 text-justify mt-10 md:mt-12 lg:mt-0 text-text mb-5 content">
                  <p>
                    BrightPath Education Consultancy is a U.S. Educational
                    Consultant that aims to provide you with complete services
                    in regards to enrolling in the United States. With years of
                    experience and a team of skilled members, we are here to
                    provide you with comprehensive skill courses along with
                    services such as visa application, college and university
                    admission, SAT/GRE, pathway guidance, and more to ensure
                    that you have a smooth journey ahead. Furthermore, we also
                    specialize in Recognition of Prior Learning (RPL), which
                    allows us to provide you with a certificate that is valid in
                    the United States based on your skill level.
                  </p>

                  <p>
                    As one of the best education agents in San Francisco, we can
                    ensure that you get the best service regardless of whether
                    you want to start enhancing your skills or switch to a new
                    skill set in the United States. Furthermore, BrightPath
                    Education Consultancy is not just about providing you with
                    the best services. We understand that each one of your
                    journeys is unique, and therefore, we offer you personalized
                    guidance so that you can achieve your specific dream in the
                    United States.
                  </p>

                  <p>
                    So, come join us and get the perfect opportunity to fulfill
                    your dream of enhancing your skills in the United States.
                    Become a member of BrightPath Education Consultancy now!
                  </p>

                  <h2>
                    Fulfill Your Dream With BrightPath Education Consultancy
                  </h2>

                  <p>
                    We offer you comprehensive services and ensure that whether
                    you want to enhance your skills or find opportunities in the
                    United States, you receive customized support each step of
                    the way. So, if you want to reap the benefits of your
                    developed skills without needing to repeat the process and
                    start a new journey, don't hesitate—contact us right away.
                  </p>

                  <h3> A New Chapter Starts—Don&apos;t Wait Any Longer! </h3>

                  <p>
                    Hurry up and book an appointment with BrightPath Education
                    Consultancy now! Take the first step towards a brighter
                    future and become one of the thousands who have fulfilled
                    their dream today. Discover how your experience can be
                    converted into internationally recognized qualifications and
                    boost your career opportunities to greater heights now!
                  </p>
                </div>
              ) : (
                <div className="flex flex-col gap-4 text-justify mt-10 md:mt-12 lg:mt-0 text-text mb-5 content">
                  <p>
                    BrightPath Education Consultancy is a U.S. Educational
                    Consultant that aims to provide you with complete services
                    in regards to enrolling in the United States. With years of
                    experience and a team of skilled members, we are here to
                    provide you with comprehensive skill courses along with
                    services such as visa application, college and university
                    admission, SAT/GRE, pathway guidance, and more to ensure
                    that you have a smooth journey ahead. Furthermore, we also
                    specialize in Recognition of Prior Learning (RPL), which
                    allows us to provide you with a certificate that is valid in
                    the United States based on your skill level.
                  </p>

                  <p>
                    As one of the best education agents in San Francisco, we can
                    ensure that you get the best service regardless of whether
                    you want to start enhancing your skills or switch to a new
                    skill set in the United States. Furthermore, BrightPath
                    Education Consultancy is not just about providing you with
                    the best services. We understand that each one of your
                    journeys is unique, and therefore, we offer you personalized
                    guidance so that you can achieve your specific dream in the
                    United States.
                  </p>

                  <p>
                    So, come join us and get the perfect opportunity to fulfill
                    your dream of enhancing your skills in the United States.
                    Become a member of BrightPath Education Consultancy now!
                  </p>
                </div>
              )}
              {!page && <ExploreButton link="/about" text="Explore More" />}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
