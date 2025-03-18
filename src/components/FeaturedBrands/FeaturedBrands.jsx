import "./FeaturedBrands.css";
import { Link } from "react-router-dom";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";

const FeaturedBrands = () => {
  return (
    <div className="container mx-auto p-3">
      <div className="flex justify-between">
        <h1 className="text-lg lg:text-3xl font-bold">أبرز الماركات</h1>
        <Link to="/" className="text-myGold underline text-sm lg:text-lg">
          عرض الكل
        </Link>
      </div>

      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        loop={true}
        navigation={true}
        breakpoints={{
          768: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        modules={[Navigation]}
        className="featuredBrandsSwiper my-3"
      >
        <SwiperSlide>
          <Link to="/">
            <img
              loading="lazy"
              width={"100%"}
              src="https://v2cdn.boutiqaat.com/cdn-cgi/image/width=161,height=117,quality=80/https://images.boutiqaat.com/opticalshrink/v1/image/New___Featured_Brands_fc1fdc44_86b5_421d_a30c_67fc6dfbb983.png?resource=page2&type=banner"
            />
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to="/">
            <img
              loading="lazy"
              width={"100%"}
              src="https://v2cdn.boutiqaat.com/cdn-cgi/image/width=161,height=117,quality=80/https://images.boutiqaat.com/opticalshrink/v1/image/Featured_Brands_ab9fd5e8_c6fc_40ea_9071_9c25a2c3a31a.jpeg?resource=page2&type=banner"
            />
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to="/">
            <img
              loading="lazy"
              width={"100%"}
              src="https://v2cdn.boutiqaat.com/cdn-cgi/image/width=161,height=117,quality=80/https://images.boutiqaat.com/opticalshrink/v1/image/New___Featured_Brands_247d7d92_51de_4d22_a740_41d9f37a48c8.png?resource=page2&type=banner"
            />
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to="/">
            <img
              loading="lazy"
              width={"100%"}
              src="https://v2cdn.boutiqaat.com/cdn-cgi/image/width=161,height=117,quality=80/https://images.boutiqaat.com/opticalshrink/v1/image/Featured_Brands_2c29d81a_7365_4f7f_a933_957d8c9ef05b.png?resource=page2&type=banner"
            />
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to="/">
            <img
              loading="lazy"
              width={"100%"}
              src="https://v2cdn.boutiqaat.com/cdn-cgi/image/width=161,height=117,quality=80/https://images.boutiqaat.com/opticalshrink/v1/image/New___Featured_Brands_d7dd47d4_559d_42c0_8687_9ba2a5f35d72.png?resource=page2&type=banner"
            />
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to="/">
            <img
              loading="lazy"
              width={"100%"}
              src="https://v2cdn.boutiqaat.com/cdn-cgi/image/width=161,height=117,quality=80/https://images.boutiqaat.com/opticalshrink/v1/image/Featured_Brands_ab9fd5e8_c6fc_40ea_9071_9c25a2c3a31a.jpeg?resource=page2&type=banner"
            />
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default FeaturedBrands;
