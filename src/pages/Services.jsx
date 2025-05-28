import { useEffect, useState } from "react";
import ServiceCard from "../components/ServiceCard";
import PageHeader from "../components/PageHeader";
import Loading from "../components/Loading";
import { services as staticServices } from "../constant";

const ServicesPage = () => {
  const [services, setServices] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setServices(staticServices);
    setIsLoading(false);
  }, []);

  return (
    <main className="w-full h-max overflow-hidden">
      <PageHeader link="/services" title="Our Services" />
      {!isLoading ? (
        <section className="w-full h-max py-8">
          <div className="flex_center flex-col gap-6 w-full py-8 lg:py-12 px-4 md:px-6 lg:px-12">
            <div className="grid w-full md:w-[80%] grid-cols-1 lg:grid-cols-2 lg:w-full xl:grid-cols-3 gap-12 py-3">
              {services.length > 0 ? (
                services.map((service, index) => (
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
              )}
            </div>
            <div className="flex w-full py-2 justify-between">
              <button
                disabled={currentPage === 1 || isLoading}
                onClick={() => setPage(page - 1)}
                className="py-3 px-6 rounded-md text-white bg-primary hover:bg-primary/80"
              >
                Previous
              </button>
              <div className="flex_center text-xl">
                Page - {currentPage} / {totalPages}
              </div>
              <button
                disabled={
                  currentPage === totalPages || isLoading || totalPages === 0
                }
                onClick={() => setPage(page + 1)}
                className="py-3 px-6 rounded-md text-white bg-primary hover:bg-primary/80"
              >
                Next
              </button>
            </div>
          </div>
        </section>
      ) : (
        <Loading classname="h-[80vh]" />
      )}
    </main>
  );
};

export default ServicesPage;
