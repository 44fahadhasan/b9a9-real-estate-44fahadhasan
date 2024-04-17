import CoffeeGallery from "../shared/CoffeeGallery/CoffeeGallery";
import NeedTable from "../shared/NeedTable/NeedTable";
import Testimonial from "../shared/Testimonial/Testimonial";
import AboutUs from "./AboutUs/AboutUs";
import PopularCoffee from "./PopularCoffee/PopularCoffee";
import Slider from "./Slider/Slider";
import WhyChoose from "./WhyChoose/WhyChoose";

const Home = () => {
  return (
    <div>
      <section className="overflow-hidden block">
        <Slider />
      </section>

      <section className="py-[130px] bg-base-200">
        <AboutUs />
      </section>

      <section className="bg-base-100 py-[70px] drop-shadow-sm border-b-2 border-base-200">
        <div className="grid justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-9 container mx-auto w-[85%]">
          <div className="flex gap-6 mt-8">
            <div className="basis-[20%]">
              <h1 className="oswald text-[50px] sm:text-[60px] text-primary font-light">
                256+
              </h1>
            </div>
            <div className="basis-[80%]">
              <h2 className="text-secondary text-2xl oswald">
                Premium Clients
              </h2>
              <p className="roboto text-secondary-content mt-3">
                Exceptional service, and a premium experience.
              </p>
            </div>
          </div>
          <div className="flex gap-6 mt-8">
            <div className="basis-[20%]">
              <h1 className="oswald text-[50px] sm:text-[60px] text-primary font-light">
                362+
              </h1>
            </div>
            <div className="basis-[80%]">
              <h2 className="text-secondary text-2xl oswald">Expert Members</h2>
              <p className="roboto text-secondary-content mt-3">
                Expert members in a coffee shop are the backbone of the
                establishment
              </p>
            </div>
          </div>
          <div className="flex gap-6 mt-8">
            <div className="basis-[20%]">
              <h1 className="oswald text-[50px] sm:text-[60px] text-primary font-light">
                753+
              </h1>
            </div>
            <div className="basis-[80%]">
              <h2 className="text-secondary text-2xl oswald">Winning Awards</h2>
              <p className="roboto text-secondary-content mt-3">
                Dedication to providing for exceptional customer experience
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[url('https://i.ibb.co/SsbwvS9/category-bg.jpg')] bg-cover	bg-no-repeat bg-center py-[130px] bg-fixed">
        <PopularCoffee />
      </section>

      <section className="bg-base-200 py-[130px]">
        <WhyChoose />
      </section>

      <CoffeeGallery />

      <Testimonial />

      <NeedTable />
    </div>
  );
};

export default Home;
