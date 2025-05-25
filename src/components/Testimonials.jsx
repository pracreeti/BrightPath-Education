import { Fragment, useEffect, useState } from "react";
import SectionHeader from "./SectionHeader";
import TestimonialCard from "./TestimonialCard";
import toast from "react-hot-toast";

const ALL_TESTIMONIALS = "/testimonials";

function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    setIsLoading(true);

    const getAllTestimonials = async () => {
      try {
        const response = await axios.get(ALL_TESTIMONIALS, {
          signal: controller.signal,
        });
        if (isMounted) {
          setTestimonials(response.data);
        }
      } catch (error) {
        console.error(error);
        toast.error("Internal Server Error: Failed to fetch testimonials");
      } finally {
        setIsLoading(false);
      }
    };

    getAllTestimonials();
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  return (
    <section className="w-full h-max">
      <div className="flex_center flex-col gap-6 w-full py-8 lg:py-12 px-4 md:px-6 lg:px-12">
        <SectionHeader
          header="What Our Clients Say"
          description="Hear from our satisfied clients! Discover real stories of success and transformation through our expert guidance and services."
        />
        <div className="flex w-full overflow-x-clip mask-text my-8">
          {!isLoading ? (
            <div className="flex flex-none gap-8 pr-8 -translate-x-1/2 animate-move-left [animation-duration:30s] hover:[animation-play-state:paused]">
              {testimonials.length > 0 ? (
                [...new Array(2)].fill(0).map((_, idx) => (
                  <Fragment key={idx}>
                    {testimonials.map((tst, index) => (
                      <TestimonialCard
                        key={`${idx}-${index}`}
                        image={tst.image?.imageURL}
                        name={tst.fullName}
                        statement={tst.statement}
                      />
                    ))}
                  </Fragment>
                ))
              ) : (
                <p className="font-bold text-xl text-primary">
                  No Testimonials Found
                </p>
              )}
            </div>
          ) : (
            <div className="w-full h-max flex_center bg-white col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4">
              <div className="inline-block size-20 border-8 border-primary rounded-full border-b-secondary animate-rotation"></div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
