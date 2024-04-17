import PropTypes from "prop-types";

const SectionTitle = ({ style, topText, BottomText }) => {
  return (
    <div className={`${style} container mx-auto`}>
      <h4
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="50"
        className="roboto text-primary text-base uppercase"
      >
        {topText}
      </h4>
      <h1
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"
        className="oswald text-secondary text-[32px] sm:text-[42px] mt-2"
      >
        {BottomText}
      </h1>
    </div>
  );
};

SectionTitle.propTypes = {
  topText: PropTypes.string,
  BottomText: PropTypes.string,
  style: PropTypes.string,
};

export default SectionTitle;
