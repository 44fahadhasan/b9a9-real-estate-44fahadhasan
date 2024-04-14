import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import bannerImg from "../../assets/images/single-coffee-banner-title-img.jpg";
import useDataLoader from "../../hooks/useDataLoader";
import BannerImgTitle from "../shared/BannerImgTitle/BannerImgTitle";
import SingleCoffeOpen from "../shared/SingleCoffeOpen/SingleCoffeOpen";

const CoffeeDetails = () => {
  const [singleCoffeeData, setSingleCoffeeData] = useState([]);

  const allCoffeeData = useDataLoader("/public/coffeeData.json");

  const { id } = useParams();

  useEffect(() => {
    const coffeData = allCoffeeData.filter((data) => data.id === Number(id));
    setSingleCoffeeData(coffeData);
  }, [allCoffeeData, id]);

  return (
    <div>
      <BannerImgTitle img={bannerImg} title="Coffee Details" />

      <div className="container mx-auto w-[85%] bg-base-100 py-[130px]">
        {singleCoffeeData.map((data) => (
          <SingleCoffeOpen key={data.id} coffeeData={data} />
        ))}
      </div>
    </div>
  );
};

export default CoffeeDetails;
