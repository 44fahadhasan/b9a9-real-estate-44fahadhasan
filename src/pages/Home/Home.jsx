import CoffeeGallery from "../shared/CoffeeGallery/CoffeeGallery";
import NeedTable from "../shared/NeedTable/NeedTable";
import Testimonial from "../shared/Testimonial/Testimonial";
import AboutUs from "./AboutUs/AboutUs";
import PopularCoffee from "./PopularCoffee/PopularCoffee";
import Slider from "./Slider/Slider";

const Home = () => {
  return (
    <div>
      <section className="overflow-hidden block">
        <Slider />
      </section>

      <section className="py-[130px] bg-base-200">
        <AboutUs />
      </section>

      <section className="bg-[url('https://i.ibb.co/SsbwvS9/category-bg.jpg')] bg-cover	bg-no-repeat bg-center py-[130px] bg-fixed">
        <PopularCoffee />
      </section>

      <CoffeeGallery />

      <Testimonial />

      <NeedTable />
    </div>
  );
};

export default Home;
