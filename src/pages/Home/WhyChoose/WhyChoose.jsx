import iconOne from "../../../assets/images/choose_icon1.png";
import iconTwo from "../../../assets/images/choose_icon2.png";
import chooseImg from "../../../assets/images/choose_img.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const WhyChoose = () => {
  return (
    <div className="container mx-auto w-[85%] grid gap-16  lg:gap-0 lg:grid-cols-2">
      {/* img area */}
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
        <img
          src={chooseImg}
          alt="about-us-img"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="roboto lg:ml-[100px]">
        {/* section title */}
        <div>
          <SectionTitle
            style="sm:text-left"
            topText="WHY CHOOSE US"
            BottomText="New London Coffee Founded For Extraordinary Test"
          />
        </div>
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="150"
          className="mt-4 text-secondary-content"
        >
          We source only the finest beans from around the world, ensuring that
          every sip you take is a masterpiece of flavor and aroma. Your
          satisfaction is our top priority. Whether youre a seasoned coffee
          aficionado
        </p>

        <div className="flex gap-6 mt-8">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="150"
            className="basis-[20%]"
          >
            <img src={iconOne} alt="coffee-icon" />
          </div>
          <div className="basis-[80%]">
            <h2
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="150"
              className="text-secondary text-2xl oswald"
            >
              Natural Coffee Beans
            </h2>
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="150"
              className="roboto text-secondary-content mt-3"
            >
              The natural process imparts complex flavor notes that are often
              more pronounced than those of washed coffees.
            </p>
          </div>
        </div>
        <div className="flex gap-6 mt-6">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="150"
            className="basis-[20%]"
          >
            <img src={iconTwo} alt="coffee-icon" />
          </div>
          <div className="basis-[80%]">
            <h2
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="150"
              className="text-secondary text-2xl oswald"
            >
              100% ISO Certification
            </h2>
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="150"
              className="roboto text-secondary-conten mt-3"
            >
              ISO certification is a testament to our commitment to excellence
              in every cup and our dedication to sustainable and ethical
              practices throughout our supply chain.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
