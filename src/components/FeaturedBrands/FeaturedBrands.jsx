import "./FeaturedBrands.css";
import { Link } from "react-router-dom";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import LandingTitle from "../LandingTitle/LandingTitle";

const FeaturedBrands = () => {
  const FeaturedArray = [
    {
      id: 1,
      imgSrc:
        "https://v2cdn.boutiqaat.com/cdn-cgi/image/width=161,height=117,quality=80/https://images.boutiqaat.com/opticalshrink/v1/image/New___Featured_Brands_fc1fdc44_86b5_421d_a30c_67fc6dfbb983.png?resource=page2&type=banner",
    },
    {
      id: 2,
      imgSrc:
        "https://v2cdn.boutiqaat.com/cdn-cgi/image/width=161,height=117,quality=80/https://images.boutiqaat.com/opticalshrink/v1/image/Featured_Brands_ab9fd5e8_c6fc_40ea_9071_9c25a2c3a31a.jpeg?resource=page2&type=banner",
    },
    {
      id: 3,
      imgSrc:
        "https://v2cdn.boutiqaat.com/cdn-cgi/image/width=161,height=117,quality=80/https://images.boutiqaat.com/opticalshrink/v1/image/New___Featured_Brands_247d7d92_51de_4d22_a740_41d9f37a48c8.png?resource=page2&type=banner",
    },
    {
      id: 4,
      imgSrc:
        "https://v2cdn.boutiqaat.com/cdn-cgi/image/width=161,height=117,quality=80/https://images.boutiqaat.com/opticalshrink/v1/image/Featured_Brands_2c29d81a_7365_4f7f_a933_957d8c9ef05b.png?resource=page2&type=banner",
    },
    {
      id: 5,
      imgSrc:
        "https://v2cdn.boutiqaat.com/cdn-cgi/image/width=161,height=117,quality=80/https://images.boutiqaat.com/opticalshrink/v1/image/New___Featured_Brands_d7dd47d4_559d_42c0_8687_9ba2a5f35d72.png?resource=page2&type=banner",
    },
    {
      id: 6,
      imgSrc:
        "https://v2cdn.boutiqaat.com/cdn-cgi/image/width=161,height=117,quality=80/https://images.boutiqaat.com/opticalshrink/v1/image/Featured_Brands_d2cf0408_79de_4edb_a033_f10fc4cf515f.jpeg?resource=page2&type=banner",
    },
  ];

  return (
    <div className="container mx-auto p-3">
      <LandingTitle title="أبرز الماركات" link="/" />

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
        {FeaturedArray.map((brand, index) => (
          <SwiperSlide key={index}>
            <Link to="/">
              <img loading="lazy" width={"100%"} src={brand.imgSrc} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeaturedBrands;
