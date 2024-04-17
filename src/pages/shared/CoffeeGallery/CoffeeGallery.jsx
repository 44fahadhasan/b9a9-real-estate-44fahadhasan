import { Autoplay, FreeMode, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import useDataLoader from "../../../hooks/useDataLoader";
import CoffeGallerySingleImg from "../CoffeGallerySingleImg/CoffeGallerySingleImg";

const CoffeeGallery = () => {
  const galleryDatas = useDataLoader("/public/galleryImgData.json");

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
          {galleryDatas.map((galleryData) => (
            <SwiperSlide
              key={galleryData.id}
              className={`${galleryData.id % 2 === 0 ? "mt-0" : "mt-12"}`}
            >
              <CoffeGallerySingleImg
                img={galleryData.image}
                text={galleryData.coffeeName}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CoffeeGallery;
