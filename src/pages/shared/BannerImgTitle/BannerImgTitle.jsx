import PropTypes from "prop-types";
import { ParallaxBanner } from "react-scroll-parallax";

const BannerImgTitle = ({ img, title }) => {
  return (
    <div>
      <ParallaxBanner
        layers={[{ image: img, speed: 25 }]}
        className="aspect-[2/1] h-[280px] sm:h-[540px] object-cover"
      >
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="200"
          className="absolute inset-0 flex items-center "
        >
          <h1 className="oswald text-[44px] sm:text-[90px]  text-secondary font-medium container mx-auto w-[85%]">
            {title}
          </h1>
        </div>
      </ParallaxBanner>
    </div>
  );
};

BannerImgTitle.propTypes = {
  img: PropTypes.any,
  title: PropTypes.string,
};

export default BannerImgTitle;
