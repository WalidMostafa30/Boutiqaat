import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "./HomeSlider.css";
const HomeSlider = () => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="homeSwiper"
      >
        <SwiperSlide>
          <div className="h-[200px] md:h-fit">
            <img
              className="w-full h-full object-cover"
              src="https://images.boutiqaat.com/opticalshrink/v1/image/Main_Banner_daa0a4d0_ffac_4686_b90e_32411a2687d2.webp?resource=page2&type=slider"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[200px] md:h-fit">
            <img
              className="w-full h-full object-cover"
              src="https://images.boutiqaat.com/opticalshrink/v1/image/Main_Banner_4e9a585f_da08_4f64_a8c5_7fab9736659f.webp?resource=page2&type=slider"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[200px] md:h-fit">
            <img
              className="w-full h-full object-cover"
              src="https://images.boutiqaat.com/opticalshrink/v1/image/Main_Banner_45d72ffc_e904_4f8f_ab4e_1ec8fb78aae0.webp?resource=page2&type=slider"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[200px] md:h-fit">
            <img
              className="w-full h-full object-cover"
              src="https://images.boutiqaat.com/opticalshrink/v1/image/Main_Banner_406337ff_9da9_40df_82bf_31327ab0fe9e.webp?resource=page2&type=slider"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeSlider;
