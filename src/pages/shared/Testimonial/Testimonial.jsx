import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useDataLoader from "../../../hooks/useDataLoader";
import TestimonialCard from "../TestimonialCard/TestimonialCard";

const Testimonial = () => {
  const customerReviewData = useDataLoader("/public/customerReviewData.json");
  console.log(customerReviewData);
  return (
    <section className="bg-[url('https://i.ibb.co/fk989kz/testimonials-bg2.jpg')] bg-cover  bg-no-repeat bg-center py-[130px]">
      {/* section title */}
      <div className="">
        <SectionTitle
          style="sm:text-center"
          topText="CUSTOMER FEEDBACK"
          BottomText="What Our Clients Say"
        />
      </div>

      {/* testimonial */}
      <section className="text-center pt-[70px] container mx-auto w-[85%]">
        <div className="grid gap-y-20 sm:grid-cols-2 sm:gap-6 sm:gap-y-16 md:gap-12 md:gap-y-20 lg:gap-20 xl:grid-cols-4 xl:gap-x-12">
          {customerReviewData.map((singleData) => (
            <TestimonialCard
              key={singleData.id}
              customerReviewData={singleData}
            />
          ))}
        </div>
      </section>
    </section>
  );
};

export default Testimonial;
