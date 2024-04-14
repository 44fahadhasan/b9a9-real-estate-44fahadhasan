// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import {
  Autoplay,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper/modules";

import SingleSlider from "./SingleSlider";

// slider images
import sliderImgThree from "../../../assets/images/started_img_n3-overlay.jpg";
import sliderImgTwo from "../../../assets/images/started_img_n5.jpg";
import sliderImgOne from "../../../assets/images/started_img_n6.jpg";

const Slider = () => {
  return (
    <div className="roboto w-full h-screen">
      <Swiper
        style={{
          "--swiper-navigation-color": "#b99272",
          "--swiper-pagination-color": "#b99272",
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="flex">
          <SingleSlider
            img={sliderImgOne}
            textTop="The London"
            textBottom="Coffee House"
          />
        </SwiperSlide>

        <SwiperSlide>
          <SingleSlider
            img={sliderImgTwo}
            textTop="The Paris"
            textBottom="Coffee House"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SingleSlider
            img={sliderImgThree}
            textTop="Great Coffee"
            textBottom="Good Vibes"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
