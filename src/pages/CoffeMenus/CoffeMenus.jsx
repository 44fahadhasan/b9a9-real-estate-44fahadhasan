import coffeMenuBanerImg from "../../assets/images/service3.jpg";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useDataLoader from "../../hooks/useDataLoader";
import BannerImgTitle from "../shared/BannerImgTitle/BannerImgTitle";
import CoffeCard from "../shared/CoffeeCard/CoffeCard";

const CoffeMenus = () => {
  const allCoffeeData = useDataLoader("/public/coffeeData.json");
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

        {/* coffee menu */}
        <div className="bg-base-200 mt-[70px]">
          <div className="bg-[url('https://i.ibb.co/QryQhNt/menu-logo.png')] bg-no-repeat bg-center  bg-[length:45%_auto] grid gap-12 sm:gap-[30px] sm:grid-cols-2 py-[60px]  sm:py-[70px] sm:px-[45px]">
            {allCoffeeData.map((data) => (
              <CoffeCard
                key={data.id}
                coffeeData={data}
                path="coffee-details"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoffeMenus;
