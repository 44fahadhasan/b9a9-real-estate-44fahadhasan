import { Autoplay, FreeMode, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CoffeGallerySingleImg from "../CoffeGallerySingleImg/CoffeGallerySingleImg";

import imgOne from "../../../assets/images/grid_gal1.jpg";
import imgTwo from "../../../assets/images/grid_gal2.jpg";
import imgThree from "../../../assets/images/grid_gal3.jpg";
import imgFour from "../../../assets/images/grid_gal4.jpg";
import imgFive from "../../../assets/images/grid_gal5.jpg";

const CoffeeGallery = () => {
  return (
    <div className="bg-base-100 py-[130px]">
      <div className="container mx-auto w-[85%] ">
        {/* Swiper start */}
        <Swiper
          keyboard={true}
          slidesPerView={2}
          spaceBetween={30}
          freeMode={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          modules={[Autoplay, FreeMode, Keyboard]}
        >
          {/* single card */}
          <SwiperSlide className="mt-10">
            <CoffeGallerySingleImg img={imgOne} text="Black Coffee" />
          </SwiperSlide>
          <SwiperSlide>
            <CoffeGallerySingleImg img={imgTwo} text="Espresso" />
          </SwiperSlide>
          <SwiperSlide className="self-end">
            <CoffeGallerySingleImg img={imgThree} text="Iced Coffee" />
          </SwiperSlide>
          <SwiperSlide>
            <CoffeGallerySingleImg img={imgFour} text="Latte" />
          </SwiperSlide>
          <SwiperSlide className="self-end">
            <CoffeGallerySingleImg img={imgFive} text="Cappuccino" />
          </SwiperSlide>
          {/* single card */}
        </Swiper>
        {/* Swiper end */}
      </div>
    </div>
  );
};

export default CoffeeGallery;
