import brandTwo from "../../../assets/images/brand1.png";
import brandOne from "../../../assets/images/brand2.png";
import brandThree from "../../../assets/images/brand3.png";
import brandFour from "../../../assets/images/brand4.png";
import brandFive from "../../../assets/images/brand5.png";
import brandSix from "../../../assets/images/brand6.png";

const CoffeeBrand = () => {
  return (
    <section className="bg-base-100 py-[70px]">
      <div className="grid gap-8 grid-cols-2 sm:grid-cols-6 sm:gap-10 lg:gap-5 container mx-auto w-[85%]">
        <div className="flex justify-center items-center">
          <img
            src={brandOne}
            className="object-cover opacity-20 hover:opacity-100 transition-all duration-500  w-[50%] h-full sm:w-full  lg:w-[50%]  xl:w-[50%] xl:h-[75%] 2xl:h-full"
            alt="coffee-brand"
          />
        </div>
        <div className="flex justify-center items-center">
          <img
            src={brandTwo}
            className="object-cover opacity-20 hover:opacity-100 transition-all duration-500  w-[50%] h-full sm:w-full  lg:w-[50%]  xl:w-[50%] xl:h-[75%] 2xl:h-full"
            alt="coffee-brand"
          />
        </div>
        <div className="flex justify-center items-center">
          <img
            src={brandThree}
            className="object-cover opacity-20 hover:opacity-100 transition-all duration-500  w-[50%] h-full sm:w-full lg:w-[50%]  xl:w-[50%] xl:h-[75%] 2xl:h-full"
            alt="coffee-brand"
          />
        </div>
        <div className="flex justify-center items-center">
          <img
            src={brandFour}
            className="object-cover opacity-20 hover:opacity-100 transition-all duration-500  w-[50%] h-full sm:w-full lg:w-[50%]  xl:w-[50%] xl:h-[75%] 2xl:h-full"
            alt="coffee-brand"
          />
        </div>
        <div className="flex justify-center items-center">
          <img
            src={brandFive}
            className="object-cover opacity-20 hover:opacity-100 transition-all duration-500  w-[50%] h-full sm:w-full lg:w-[50%]  xl:w-[50%] xl:h-[75%] 2xl:h-full"
            alt="coffee-brand"
          />
        </div>
        <div className="flex justify-center items-center">
          <img
            src={brandSix}
            className="object-cover opacity-20 hover:opacity-100 transition-all duration-500  w-[50%] h-full sm:w-full lg:w-[50%]  xl:w-[50%] xl:h-[75%] 2xl:h-full"
            alt="coffee-brand"
          />
        </div>
      </div>
    </section>
  );
};

export default CoffeeBrand;
