import { useState } from "react";
import coffeMenuBanerImg from "../../assets/images/service3-overlay.jpg";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useDataLoader from "../../hooks/useDataLoader";
import BannerImgTitle from "../shared/BannerImgTitle/BannerImgTitle";
import CoffeeBrand from "../shared/CoffeeBrand/CoffeeBrand";
import CoffeCard from "../shared/CoffeeCard/CoffeCard";

const CoffeMenus = () => {
  const [filterCoffee, setFilterCoffee] = useState([]);

  const allCoffeeData = useDataLoader("/public/coffeeData.json");

  const handleFilter = (value) => {
    if (value === "hotCoffee") {
      const hotCoffee = [...allCoffeeData].filter((value) => value.price >= 15);
      setFilterCoffee(hotCoffee);
      return;
    } else if (value === "dessert") {
      const dessertCoffee = [...allCoffeeData].filter(
        (value) => value.rating >= 50
      );
      setFilterCoffee(dessertCoffee);
      return;
    }
    setFilterCoffee(allCoffeeData);
  };

  return (
    <div>
      <BannerImgTitle img={coffeMenuBanerImg} title="Coffee Menu" />

      <section className="bg-base-100 my-[130px] container mx-auto w-[85%]">
        {/* section title */}
        <div>
          <SectionTitle
            style="sm:text-center"
            topText="CHOOSE BEST OF"
            BottomText="Kaffen Coffee Menu"
          />
        </div>

        {/* filter button */}
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="150"
          className="roboto flex gap-8 justify-center mt-[70px]"
        >
          <button
            onClick={() => handleFilter("all")}
            className="btn text-secondary uppercase bg-base-200 hover:bg-primary transition-all duration-200"
          >
            All
          </button>
          <button
            onClick={() => handleFilter("hotCoffee")}
            className="btn text-secondary uppercase bg-base-200 hover:bg-primary transition-all duration-200"
          >
            Hot Coffee
          </button>
          <button
            onClick={() => handleFilter("dessert")}
            className="btn text-secondary uppercase bg-base-200 hover:bg-primary transition-all duration-200"
          >
            Dessert
          </button>
        </div>

        {/* coffee menu */}
        <div className="bg-base-200 mt-[50px]">
          <div className="bg-[url('https://i.ibb.co/QryQhNt/menu-logo.png')] bg-no-repeat bg-center  bg-[length:45%_auto] grid gap-12 sm:gap-[30px] sm:grid-cols-2 py-[60px]  sm:py-[70px] sm:px-[45px]">
            {filterCoffee.length === 0
              ? allCoffeeData.map((data) => (
                  <CoffeCard key={data.id} coffeeData={data} />
                ))
              : filterCoffee.map((data) => (
                  <CoffeCard key={data.id} coffeeData={data} />
                ))}
          </div>
        </div>
      </section>

      <CoffeeBrand />
    </div>
  );
};

export default CoffeMenus;
