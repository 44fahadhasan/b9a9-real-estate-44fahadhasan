import NeedTable from "../shared/NeedTable/NeedTable";
import PopularCoffee from "./PopularCoffee/PopularCoffee";
import Slider from "./Slider/Slider";

const Home = () => {
  return (
    <div>
      <section className="overflow-hidden block">
        <Slider />
      </section>

      <section className="bg-[url('https://i.ibb.co/SsbwvS9/category-bg.jpg')] bg-cover	bg-no-repeat bg-center py-[130px] bg-fixed">
        <PopularCoffee />
      </section>

      <NeedTable />
    </div>
  );
};

export default Home;
