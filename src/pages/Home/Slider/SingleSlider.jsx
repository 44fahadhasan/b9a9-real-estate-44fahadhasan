import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ParallaxBanner } from "react-scroll-parallax";

const SingleSlider = ({ img, textTop, textBottom }) => {
  return (
    <ParallaxBanner
      layers={[
        {
          image: img,
          speed: 20,
        },
      ]}
      className="aspect-[2/1]"
    >
      <div className="absolute inset-0 flex flex-col items-center sm:items-start justify-center container mx-auto w-[85%]">
        <div className="flex items-center space-x-1">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="50"
            className="flex-1 h-[2px] sm:w-8 bg-primary"
          ></div>
          <p
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="text-sm sm:text-base text-secondary uppercase"
          >
            Welcome to the Kaffen
          </p>
        </div>
        <h1
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="150"
          className="oswald text-[40px] leading-[50px]  sm:text-[90px] sm:leading-[100px] lg:text-[120px] lg:leading-[144px] font-medium text-secondary mt-5"
        >
          {textTop} <br /> {textBottom}
        </h1>
        <div className="hidden sm:block space-x-4 mt-9">
          <Link
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="150"
            to="coffe-menu"
            className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium uppercase transition-all bg-primary rounded hover:bg-base-100 group"
          >
            <span className="w-48 h-48 rounded rotate-[-40deg] bg-secondary absolute bottom-0 left-0 -translate-x-full ease-out duration-700 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span className="relative w-full text-sm text-left text-secondary transition-colors duration-300 ease-in-out group-hover:text-primary">
              explore more
            </span>
            <svg
              className="w-4 h-4 ml-2 text-secondary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </Link>
          <Link
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="250"
            to="reservation"
            className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium uppercase transition-all bg-base-100 rounded hover:bg-primary group"
          >
            <span className="w-48 h-48 rounded rotate-[-40deg] bg-secondary absolute bottom-0 left-0 -translate-x-full ease-out duration-700 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span className="relative w-full text-sm text-left text-secondary transition-colors duration-300 ease-in-out group-hover:text-primary">
              get delivery
            </span>
            <svg
              className="w-4 h-4 ml-2 text-secondary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </ParallaxBanner>
  );
};

SingleSlider.propTypes = {
  img: PropTypes.any,
  textTop: PropTypes.string,
  textBottom: PropTypes.string,
};

export default SingleSlider;
