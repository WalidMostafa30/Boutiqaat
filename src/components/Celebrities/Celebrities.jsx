import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import "./Celebrities.css";

const Celebrities = () => {
  return (
    <div className="container mx-auto p-3">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">المشاهير</h1>
        <Link to="/" className="text-myGold underline text-xl">
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
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        modules={[Navigation]}
        className="celebritiesSwiper my-3"
      >
        <SwiperSlide>
          <div className="celebritiesCard">
            <div className="cardImg">
              <img src="https://v2cdn.boutiqaat.com/cdn-cgi/image/width=200,height=400,quality=80/https://v2cdn.boutiqaat.com/media/boutiqaat_celebrity/m/e/meshari-alkhuziam-celeb-icons.jpg" />
            </div>
            <p className="text-center lg:text-xl py-3 px-1">مشاري الخزيم</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="celebritiesCard">
            <div className="cardImg">
              <img src="https://v2cdn.boutiqaat.com/cdn-cgi/image/width=200,height=400,quality=80/https://v2cdn.boutiqaat.com/media/boutiqaat_celebrity/c/e/celeb-icons_1__92.jpg" />
            </div>
            <p className="text-center lg:text-xl py-3 px-1">
              نواف الجامع بوتيك
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="celebritiesCard">
            <div className="cardImg">
              <img src="https://v2cdn.boutiqaat.com/cdn-cgi/image/width=200,height=400,quality=80/https://v2cdn.boutiqaat.com/media/boutiqaat_celebrity/c/e/celeb-icons_1240.jpg" />
            </div>
            <p className="text-center lg:text-xl py-3 px-1">سلطان بن نايف</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="celebritiesCard">
            <div className="cardImg">
              <img src="https://v2cdn.boutiqaat.com/cdn-cgi/image/width=200,height=400,quality=80/https://v2cdn.boutiqaat.com/media/boutiqaat_celebrity/c/e/celeb-icons_1__123.jpg" />
            </div>
            <p className="text-center lg:text-xl py-3 px-1">
              امين اللورد بوتيك
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="celebritiesCard">
            <div className="cardImg">
              <img src="https://v2cdn.boutiqaat.com/cdn-cgi/image/width=200,height=400,quality=80/https://v2cdn.boutiqaat.com/media/boutiqaat_celebrity/c/e/celeb-icons_1308.jpg" />
            </div>
            <p className="text-center lg:text-xl py-3 px-1">
              مساعد الفوزان بوتيك
            </p>
          </div>
        </SwiperSlide>
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
        <SwiperSlide>
          <div className="celebritiesCard">
            <div className="cardImg">
              <img src="https://v2cdn.boutiqaat.com/cdn-cgi/image/width=200,height=400,quality=80/https://v2cdn.boutiqaat.com/media/boutiqaat_celebrity/c/e/celeb-icons_33__3.jpg" />
            </div>
            <p className="text-center lg:text-xl py-3 px-1">
              يعقوب بوشهري بوتيك
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="celebritiesCard">
            <div className="cardImg">
              <img src="https://v2cdn.boutiqaat.com/cdn-cgi/image/width=200,height=400,quality=80/https://v2cdn.boutiqaat.com/media/boutiqaat_celebrity/c/e/celeb-icons_137.jpg" />
            </div>
            <p className="text-center lg:text-xl py-3 px-1">وليد يري بوتيك</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="celebritiesCard">
            <div className="cardImg">
              <img src="https://v2cdn.boutiqaat.com/cdn-cgi/image/width=200,height=400,quality=80/https://v2cdn.boutiqaat.com/media/boutiqaat_celebrity/c/e/celeb-icons_1__109.jpg" />
            </div>
            <p className="text-center lg:text-xl py-3 px-1">عقيل بوتيك</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="celebritiesCard">
            <div className="cardImg">
              <img src="https://v2cdn.boutiqaat.com/cdn-cgi/image/width=200,height=400,quality=80/https://v2cdn.boutiqaat.com/media/boutiqaat_celebrity/a/b/abdulmohsen-alkout-celeb-icons_1.jpg" />
            </div>
            <p className="text-center lg:text-xl py-3 px-1">
              عبدالمحسن الكوت بوتيك
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="celebritiesCard">
            <div className="cardImg">
              <img src="https://v2cdn.boutiqaat.com/cdn-cgi/image/width=200,height=400,quality=80/https://v2cdn.boutiqaat.com/media/boutiqaat_celebrity/c/e/celeb-icons_2481.jpg" />
            </div>
            <p className="text-center lg:text-xl py-3 px-1">دايلر بوتيك</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Celebrities;
