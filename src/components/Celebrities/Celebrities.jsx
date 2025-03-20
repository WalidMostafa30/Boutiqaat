import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import "./Celebrities.css";
import LandingTitle from "../LandingTitle/LandingTitle";

const Celebrities = () => {
  const celebritiesArray = [
    {
      id: 1,
      name: "مشاري الخزيم",
      imgSrc:
        "https://v2cdn.boutiqaat.com/cdn-cgi/image/width=200,height=400,quality=80/https://v2cdn.boutiqaat.com/media/boutiqaat_celebrity/m/e/meshari-alkhuziam-celeb-icons.jpg",
    },
    {
      id: 2,
      name: "نواف الجامع بوتيك",
      imgSrc:
        "https://v2cdn.boutiqaat.com/cdn-cgi/image/width=200,height=400,quality=80/https://v2cdn.boutiqaat.com/media/boutiqaat_celebrity/c/e/celeb-icons_1__92.jpg",
    },
    {
      id: 3,
      name: "سلطان بن نايف",
      imgSrc:
        "https://v2cdn.boutiqaat.com/cdn-cgi/image/width=200,height=400,quality=80/https://v2cdn.boutiqaat.com/media/boutiqaat_celebrity/c/e/celeb-icons_1240.jpg",
    },
    {
      id: 4,
      name: "امين اللورد بوتيك",
      imgSrc:
        "https://v2cdn.boutiqaat.com/cdn-cgi/image/width=200,height=400,quality=80/https://v2cdn.boutiqaat.com/media/boutiqaat_celebrity/c/e/celeb-icons_1__123.jpg",
    },
    {
      id: 5,
      name: "مساعد الفوزان بوتيك",
      imgSrc:
        "https://v2cdn.boutiqaat.com/cdn-cgi/image/width=200,height=400,quality=80/https://v2cdn.boutiqaat.com/media/boutiqaat_celebrity/c/e/celeb-icons_1308.jpg",
    },
    {
      id: 6,
      name: "يعقوب بوشهري بوتيك",
      imgSrc:
        "https://v2cdn.boutiqaat.com/cdn-cgi/image/width=200,height=400,quality=80/https://v2cdn.boutiqaat.com/media/boutiqaat_celebrity/c/e/celeb-icons_33__3.jpg",
    },
    {
      id: 7,
      name: "وليد يري بوتيك",
      imgSrc:
        "https://v2cdn.boutiqaat.com/cdn-cgi/image/width=200,height=400,quality=80/https://v2cdn.boutiqaat.com/media/boutiqaat_celebrity/c/e/celeb-icons_137.jpg",
    },
    {
      id: 8,
      name: "عقيل بوتيك",
      imgSrc:
        "https://v2cdn.boutiqaat.com/cdn-cgi/image/width=200,height=400,quality=80/https://v2cdn.boutiqaat.com/media/boutiqaat_celebrity/c/e/celeb-icons_1__109.jpg",
    },
    {
      id: 9,
      name: "عبدالمحسن الكوت بوتيك",
      imgSrc:
        "https://v2cdn.boutiqaat.com/cdn-cgi/image/width=200,height=400,quality=80/https://v2cdn.boutiqaat.com/media/boutiqaat_celebrity/a/b/abdulmohsen-alkout-celeb-icons_1.jpg",
    },
    {
      id: 10,
      name: "دايلر بوتيك",
      imgSrc:
        "https://v2cdn.boutiqaat.com/cdn-cgi/image/width=200,height=400,quality=80/https://v2cdn.boutiqaat.com/media/boutiqaat_celebrity/c/e/celeb-icons_2481.jpg",
    },
  ];
  return (
    <div className="container mx-auto p-3">
      <LandingTitle title="المشاهير" link="/" />

      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        loop={true}
        navigation={true}
        breakpoints={{
          768: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        modules={[Navigation]}
        className="celebritiesSwiper my-3"
      >
        {celebritiesArray.slice(0, 5).map((celebrity) => (
          <SwiperSlide key={celebrity.id}>
            <div className="celebritiesCard">
              <div className="cardImg">
                <img loading="lazy" src={celebrity.imgSrc} />
              </div>
              <p className="text-center lg:text-xl py-3 px-1">
                {celebrity.name}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        loop={true}
        navigation={true}
        breakpoints={{
          768: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        modules={[Navigation]}
        className="celebritiesSwiper my-3"
      >
        {celebritiesArray.slice(5).map((celebrity) => (
          <SwiperSlide key={celebrity.id}>
            <div className="celebritiesCard">
              <div className="cardImg">
                <img loading="lazy" src={celebrity.imgSrc} />
              </div>
              <p className="text-center lg:text-xl py-3 px-1">
                {celebrity.name}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Celebrities;
