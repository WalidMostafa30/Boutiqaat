import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import LandingTitle from "../LandingTitle/LandingTitle";
import Product from "../Product/Product";
import "./BoutiqaatPicks.css";

const BoutiqaatPicks = () => {
  const products = [
    {
      id: 1,
      title: "ايغنايت",
      description: "مبخر الكتروني - اسود",
      imgSrc:
        "https://www.boutiqaat.com/_next/image/?url=https%3A%2F%2Fv2cdn.boutiqaat.com%2Fcdn-cgi%2Fimage%2Fwidth%3D400%2Cheight%3D400%2Cquality%3D80%2Fhttps%3A%2F%2Fv2cdn.boutiqaat.com%2Fmedia%2Fcatalog%2Fproduct%2FO%2FR%2FORL-00005640-1.jpg&w=828&q=75",
      link: "/",
      price: 28000,
      discount: 20,
    },
    {
      id: 2,
      title: "ذا نورث فيس",
      description: "جاكيت بومبر مكموردو - اسود",
      imgSrc:
        "https://www.boutiqaat.com/_next/image/?url=https%3A%2F%2Fv2cdn.boutiqaat.com%2Fcdn-cgi%2Fimage%2Fwidth%3D400%2Cheight%3D400%2Cquality%3D80%2Fhttps%3A%2F%2Fv2cdn.boutiqaat.com%2Fmedia%2Fcatalog%2Fproduct%2FC%2Fo%2FConf-580293-1.jpg&w=828&q=75",
      link: "/",
      price: 142000,
      discount: 20,
    },
    {
      id: 3,
      title: "جيفنشي",
      description: "عطر جنتل مان بوازيه المركز - 100 مل",
      imgSrc:
        "https://www.boutiqaat.com/_next/image/?url=https%3A%2F%2Fv2cdn.boutiqaat.com%2Fcdn-cgi%2Fimage%2Fwidth%3D400%2Cheight%3D400%2Cquality%3D80%2Fhttps%3A%2F%2Fv2cdn.boutiqaat.com%2Fmedia%2Fcatalog%2Fproduct%2FF%2FR%2FFR-00002761-1.jpg&w=828&q=75",
      link: "/",
      price: 44250,
      discount: null,
    },
    {
      id: 4,
      title: "زيرجوف",
      description: "عطر اربا بورا المركز - 100 مل",
      imgSrc:
        "https://www.boutiqaat.com/_next/image/?url=https%3A%2F%2Fv2cdn.boutiqaat.com%2Fcdn-cgi%2Fimage%2Fwidth%3D400%2Cheight%3D400%2Cquality%3D80%2Fhttps%3A%2F%2Fv2cdn.boutiqaat.com%2Fmedia%2Fcatalog%2Fproduct%2FF%2FR%2FFR-00003925-1.jpg&w=828&q=75",
      link: "/",
      price: 88000,
      discount: null,
    },
    {
      id: 5,
      title: "اورو",
      description: "مجموعة هومي كراميلو ايدشن - 5 حبات",
      imgSrc:
        "https://www.boutiqaat.com/_next/image/?url=https%3A%2F%2Fv2cdn.boutiqaat.com%2Fcdn-cgi%2Fimage%2Fwidth%3D400%2Cheight%3D400%2Cquality%3D80%2Fhttps%3A%2F%2Fv2cdn.boutiqaat.com%2Fmedia%2Fcatalog%2Fproduct%2FI%2F-%2FI-00000172649-R-11.jpg&w=828&q=75",
      link: "/",
      price: 34000,
      discount: 50,
    },
  ];

  return (
    <div className="container mx-auto p-3">
      <LandingTitle title="مختارات بوتيكات" link="/" />

      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        loop={true}
        navigation={true}
        breakpoints={{
          768: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        modules={[Navigation]}
        className="boutiqaatPicksSwiper my-3"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <Product product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BoutiqaatPicks;
