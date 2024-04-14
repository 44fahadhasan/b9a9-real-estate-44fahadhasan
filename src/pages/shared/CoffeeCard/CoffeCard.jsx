import PropTypes from "prop-types";
import "react-medium-image-zoom/dist/styles.css";
import { Link } from "react-router-dom";

const CoffeCard = ({ coffeeData = {} }) => {
  const { id, image, title, description, price, status } = coffeeData;

  return (
    <div className="flex flex-col items-center sm:flex-row sm:items-start gap-3 sm:gap-[45px]">
      <div className="w-[50%] sm:w-[150px] h-[160px]">
        <img
          src={image}
          alt={`${title}`}
          className="object-cover w-full h-full rounded-lg "
        />
      </div>
      <div className="self-center mt-3 sm:mt-0">
        <div className="space-y-3">
          <h2 className="oswald text-center sm:text-left text-2xl text-secondary">
            {title}
          </h2>
          <p className="roboto text-base text-secondary-content">
            {`${description.slice(0, 30)} ...`}
          </p>
        </div>
        <div className="merienda text-xl sm:text-2xl flex gap-2 items-center mt-2">
          <div className="border-t border-dashed border-primary w-[50%]"></div>
          <div className="text-primary">${price}</div>
        </div>
        <div className="text-secondary text-base font-medium flex justify-around lg:justify-start lg:gap-10 mt-4 ">
          <span className="merienda bg-primary px-3 rounded-full">
            {status}
          </span>
          <Link
            to={`/coffee-details/${id}`}
            className="roboto text-primary bg-base-100 px-3 rounded-full"
          >
            view
          </Link>
        </div>
      </div>
    </div>
  );
};

CoffeCard.propTypes = {
  coffeeData: PropTypes.object,
};

export default CoffeCard;
