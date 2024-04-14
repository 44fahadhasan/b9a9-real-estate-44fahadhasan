import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SingleCoffeOpen = ({ coffeeData = {} }) => {
  const { image, title, description, price, status, rating } = coffeeData;
  return (
    <div className="grid sm:grid-cols-2">
      <div className="p-4 relative">
        <img
          src={image}
          alt={`${title}`}
          className="object-cover mx-auto w-full h-[290px] sm:h-[330px] md:h-[390px]  lg:h-[450px]  xl:h-[500px]   2xl:h-[575px]  rounded-lg "
        />
        <span className="bg-primary px-3 py-1 text-base-200 merienda absolute top-[4%] left-[4%] rounded-lg font-bold">
          {status}
        </span>
      </div>
      <div className="oswald space-y-3 sm:space-y-4 p-4">
        <h2 className="text-3xl sm:text-4xl text-secondary">{title}</h2>
        <p className="merienda text-xl sm:text-2xl text-primary ">${price}</p>

        <div className="rating merienda text-secondary-content">
          <input className="mask mask-star-2 bg-warning w-5" />
          <input className="mask mask-star-2 bg-warning w-5" />
          <input className="mask mask-star-2 bg-warning w-5" />
          <input className="mask mask-star-2 bg-warning w-5" />
          <span className="text-base">{`(${rating} customer review)`}</span>
        </div>

        <p className="roboto text-base text-secondary-content pb-11">
          <span className="uppercase text-secondary border-b border-secondary border-dashed text-sm sm:text-base">
            description:
          </span>{" "}
          {description}
        </p>

        <div className="roboto">
          <Link
            to="/reservation"
            className="relative px-6 py-3 font-bold text-base-200 rounded-lg group"
          >
            <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-primary ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-warning ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
            <span className="relative">Book Now</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

SingleCoffeOpen.propTypes = {
  coffeeData: PropTypes.object,
};

export default SingleCoffeOpen;
