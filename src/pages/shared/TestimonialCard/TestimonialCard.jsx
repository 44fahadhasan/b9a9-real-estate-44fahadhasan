import PropTypes from "prop-types";

const TestimonialCard = ({
  customerReviewData: { img, reviewText, customerName, feeling } = {},
}) => {
  return (
    <div className="roboto bg-base-100 rounded-sm px-[30px] pb-[30px]">
      <div className="mx-auto w-[70px] h-[70px] relative -mt-8 rounded-full overflow-hidden">
        <img
          className="object-cover object-center w-full h-full"
          src={img}
          alt="Woman looking front"
        />
      </div>
      <div className="rating mt-4 space-x-1">
        <input className="mask mask-star-2 bg-primary w-4" />
        <input className="mask mask-star-2 bg-primary w-4" />
        <input className="mask mask-star-2 bg-primary w-4" />
        <input className="mask mask-star-2 bg-primary w-4" />
        <input className="mask mask-star-2 bg-primary w-4" />
      </div>
      <p className="mt-4">
        {reviewText?.slice(0, 160)}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 96 960 960"
          className="inline-block w-6"
        >
          <path
            fill="currentColor"
            d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z"
          />
        </svg>
      </p>
      <div className="text-center mt-4">
        <h2 className="font-semibold text-lg text-secondary">{customerName}</h2>
        <p className="text-primary text-sm font-semibold mt-1">{feeling}</p>
      </div>
    </div>
  );
};

TestimonialCard.propTypes = {
  customerReviewData: PropTypes.object,
};

export default TestimonialCard;
