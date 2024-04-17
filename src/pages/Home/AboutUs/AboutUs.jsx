import aboutImg from "../../../assets/images/about_img.png";
import quoteImg from "../../../assets/images/quote_img.png";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
const AboutUs = () => {
  return (
    <div className="container mx-auto w-[85%] grid gap-16 items-center lg:gap-0 lg:grid-cols-2">
      <div className="roboto lg:mr-[100px]">
        {/* section title */}
        <div>
          <SectionTitle
            style="sm:text-left"
            topText="ABOUT US"
            BottomText="Organic & Fresh Coffee Provider Center"
          />
        </div>
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
          className="mt-4 text-secondary-content"
        >
          Freshness is crucial for coffee quality. The center might focus on
          sourcing coffee beans directly from farmers or from regions known for
          their coffee production to ensure that the beans are as fresh as
          possible. This could involve regular shipments of newly harvested
          beans to maintain quality and flavor.
        </p>

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
          className="flex items-center gap-4 bg-primary p-5 rounded-lg mt-8"
        >
          <img
            src={quoteImg}
            alt="quote_img"
            className="w-20 h-20 rounded-full object-cover"
          />
          <blockquote className="text-xl text-secondary roboto  ">
            <i>
              “To me, the smell of fresh-made coffee is one of the greatest
              inventions.”
            </i>
          </blockquote>
        </div>
      </div>

      {/* img area */}
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="250">
        <img
          src={aboutImg}
          alt="about-us-img"
          className="object-cover w-full"
        />
      </div>
    </div>
  );
};

export default AboutUs;
