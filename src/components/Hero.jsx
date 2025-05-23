import heroBackground from "../assets/images/herobg.jpg";
import counsellingImage from "../assets/images/counselling.jpg";

const heroCards = [
  {
    title: "ODL mode of study",
    description: "Study in your own place and time",
    classname: "bg-primary",
  },
  {
    title: "Flexibility",
    description: "Self-Individualized Learning",
    classname: "bg-secondary",
  },
  {
    title: "Certificate valid all over the world",
    description: "Offshore Experience Counts",
    classname: "bg-primary",
  },
  {
    title: "Blended Learning",
    description: "Effective Student support system",
    classname: "bg-secondary",
  },
];

export default function Hero() {
  return (
    <section className="w-full h-max">
      <div className="image relative w-full h-[85vh]">
        <img
          src={heroBackground}
          alt="skill spot australia"
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#203174]/60 to-[#B5BBD2]/30 mix-blend-multiply"></div>
        <div className="absolute inset-0 flex justify-center items-center flex-col lg:flex-row-reverse gap-10 px-3 py-12">
          <div className="flex_center w-full lg:w-[50%]">
            <div className="image relative h-52 md:h-80 w-80 md:w-[70%] rounded-tl-[40%] rounded-br-[40%] px-1 bg-white">
              <img
                src={counsellingImage}
                alt="RPL counselling"
                className="size-full object-cover rounded-tl-[40%] rounded-br-[40%] overflow-hidden motion-preset-bounce"
              />
              <p className="absolute flex_center -top-5 -right-5 size-20 rounded-full bg-gradient-to-r from-primary to-secondary font-bold text-sm text-white text-center">
                Apply <br /> Now!
              </p>
            </div>
          </div>
          <div className="flex_center flex-col w-full lg:w-[50%] gap-6 md:gap-10">
            <div className="flex_center flex-col w-full gap-6 md:gap-10 motion-preset-slide-right">
              <h1 className="font-extrabold text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-white">
                Welcome To BrightPath Education Consultancy
              </h1>
              <p className="px-16 text-sm md:text-base text-white text-justify whitespace-pre-wrap">
                Welcome to BrightPath Education Consultancy, your trusted
                partner in international education. As a leading education
                consultancy, we are dedicated to helping you achieve your dream
                of studying abroad—whether you're aiming to pursue higher
                education in the United States of America or looking to enhance
                your skills through global opportunities. Join us at BrightPath
                and take the first step toward your future in the United States
                today!
              </p>
            </div>
            <p className="px-6 py-3 flex justify-center items-center bg-primary text-white text-base md:text-lg lg:text-xl xl:text-2xl rounded-full hover:bg-secondary transition-all duration-300 uppercase motion-preset-confetti">
              Explore Global Opportunities - Start Now!
            </p>
          </div>
        </div>
      </div>

      <div className="flex_center w-full grid grid-cols-2 lg:grid-cols-4">
        {heroCards.map((card, index) => (
          <div
            key={index}
            className={`flex flex-col px-2 py-4 gap-1 col-span-1 h-full text-white ${card.classname}`}
          >
            <h2 className="text-lg md:text-xl font-bold">{card.title}</h2>
            <p className="text-sm md:text-base">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
