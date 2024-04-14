import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useDataLoader from "../../../hooks/useDataLoader";
import CoffeCard from "../../shared/CoffeeCard/CoffeCard";

const PopularCoffee = () => {
  const allCoffeeData = useDataLoader("/public/coffeeData.json");

  return (
    <section className="min-h-screen container mx-auto w-[85%]">
      {/* section title */}
      <div>
        <SectionTitle
          style="sm:text-center"
          topText="CHOOSE BEST COFFEE"
          BottomText="Kaffen Popular Coffee Menu"
        />
      </div>

      {/* popular coffee */}
      <div className="rounded-md bg-base-200 mt-[70px]">
        <div className="bg-[url('https://i.ibb.co/QryQhNt/menu-logo.png')] bg-no-repeat bg-center  bg-[length:45%_auto] grid gap-12 sm:gap-[30px] sm:grid-cols-2 py-[60px]  sm:py-[70px] sm:px-[45px] rounded-md ">
          {allCoffeeData.map((data) => (
            <CoffeCard key={data.id} coffeeData={data} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCoffee;
