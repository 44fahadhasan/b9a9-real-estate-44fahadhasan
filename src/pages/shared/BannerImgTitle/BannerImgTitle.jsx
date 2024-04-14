import PropTypes from "prop-types";
import { ParallaxBanner } from "react-scroll-parallax";

const BannerImgTitle = ({ img, title }) => {
  return (
    <div>
      <ParallaxBanner
        layers={[{ image: img, speed: 25 }]}
        className="aspect-[2/1] h-[280px] sm:h-[540px] object-cover"
      >
        <div className="absolute inset-0 flex items-center justify-center sm:justify-start sm:ml-[9%]">
          <h1 className="oswald text-[44px] sm:text-[90px]  text-secondary font-medium">
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
