import { useEffect, useState } from "react";
import SectionHeader from "./SectionHeader";
import ServiceCard from "./ServiceCard";
import ViewMore from "./UI/ViewMore";
import toast from "react-hot-toast";

const ALL_SERVICES = "/service";

export default function Services() {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    setIsLoading(true);

    const getAllServices = async () => {
      try {
        const response = await axios.get(ALL_SERVICES, {
          signal: controller.signal,
        });
        if (isMounted) {
          setServices(response.data.services);
        }
      } catch (error) {
        console.error(error);
        toast.error("Internal Server Error: Failed to fetch services");
      } finally {
        setIsLoading(false);
      }
    };

    getAllServices();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  return (
    <section className="w-full h-max">
      <div className="flex_center flex-col gap-6 w-full py-8 lg:py-12 px-4 md:px-6 lg:px-12">
        <SectionHeader
          header="Our Services"
          description="At BrightPath Education Consultancy, we provide top-notch facilities for effective learning"
        />
        <div className="grid w-full md:w-[80%] grid-cols-1 lg:grid-cols-2 lg:w-full xl:grid-cols-3 gap-12 py-3">
          {!isLoading ? (
            services.length > 0 ? (
              services
                .slice(0, 3)
                .map((service, index) => (
                  <ServiceCard
                    key={index}
                    slug={service.slug}
                    image={service.image.imageURL}
                    title={service.title}
                    miniDescription={service.miniDescription}
                  />
                ))
            ) : (
              <p className="font-bold text-xl text-primary flex_center col-span-1 lg:col-span-2 xl:col-span-3 py-6">
                No Services Found
              </p>
            )
          ) : (
            <div className="w-full h-max flex_center bg-white col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4">
              <div className="inline-block size-20 border-8 border-primary rounded-full border-b-secondary animate-rotation"></div>
            </div>
          )}
        </div>
        <ViewMore link="/services" text="View More" />
      </div>
    </section>
  );
}
