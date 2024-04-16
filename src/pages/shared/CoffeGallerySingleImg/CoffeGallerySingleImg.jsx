import PropTypes from "prop-types";

const CoffeGallerySingleImg = ({ img, text }) => {
  return (
    <div className="flex justify-center items-center group relative overflow-hidden h-[360px] md:h-[480px]">
      <img
        src={img}
        alt="coffe img"
        className="hover:opacity-20 absolute inset-0 h-full w-full object-cover object-center transition-all duration-700 group-hover:scale-105"
      />

      <span className="absolute inline-block text-2xl oswald text-secondary  hover:text-warning ">
        {text}
      </span>

      <div className="size-[90%] rounded-md border-2 border-primary"></div>
    </div>
  );
};

CoffeGallerySingleImg.propTypes = {
  img: PropTypes.any,
  text: PropTypes.string,
};

export default CoffeGallerySingleImg;
