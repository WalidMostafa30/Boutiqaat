import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import "./BoutiqaatPicks.css";
import { SlBag } from "react-icons/sl";
import { MdZoomOutMap } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";

const BoutiqaatPicks = () => {
  return (
    <div className="container mx-auto p-3">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">مختارات بوتيكات</h1>
        <Link to="/" className="text-myGold underline text-xl">
          عرض الكل
        </Link>
      </div>

      <Swiper
        slidesPerView={2}
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
        className="boutiqaatPicksSwiper my-3"
      >
        <SwiperSlide>
          <div className="boutiqaatPicksCard font-bold lg:text-2xl">
            <div className="cardImg">
              <div className="actions flex justify-between p-4">
                <Link to={"/"} className="textHvr flex items-center gap-1">
                  اشترى الان
                  <SlBag />
                </Link>
                <div className="flex items-center gap-1">
                  <Link to={"/"} className="textHvr">
                    <MdZoomOutMap />
                  </Link>

                  <Link to={"/"} className="textHvr">
                    <IoMdHeartEmpty />
                  </Link>
                </div>
              </div>
              <img src="https://www.boutiqaat.com/_next/image/?url=https%3A%2F%2Fv2cdn.boutiqaat.com%2Fcdn-cgi%2Fimage%2Fwidth%3D400%2Cheight%3D400%2Cquality%3D80%2Fhttps%3A%2F%2Fv2cdn.boutiqaat.com%2Fmedia%2Fcatalog%2Fproduct%2FC%2Fo%2FConf-580293-1.jpg&w=828&q=75" />
            </div>
            <h2>ايغنايت</h2>
            <p>مبخر الكتروني - اسود</p>

            <div className="flex justify-between my-4">
              <div>
                <p className="text-red-500 line-through">28,000 KWD</p>
                <p>22,400 KWD</p>
              </div>
              <span className="bg-red-500 text-white p-2">20%</span>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="boutiqaatPicksCard font-bold lg:text-2xl">
            <div className="cardImg">
              <div className="actions flex justify-between p-4">
                <Link to={"/"} className="textHvr flex items-center gap-1">
                  اشترى الان
                  <SlBag />
                </Link>
                <div className="flex items-center gap-1">
                  <Link to={"/"} className="textHvr">
                    <MdZoomOutMap />
                  </Link>

                  <Link to={"/"} className="textHvr">
                    <IoMdHeartEmpty />
                  </Link>
                </div>
              </div>
              <img src="https://www.boutiqaat.com/_next/image/?url=https%3A%2F%2Fv2cdn.boutiqaat.com%2Fcdn-cgi%2Fimage%2Fwidth%3D400%2Cheight%3D400%2Cquality%3D80%2Fhttps%3A%2F%2Fv2cdn.boutiqaat.com%2Fmedia%2Fcatalog%2Fproduct%2FF%2FR%2FFR-00002761-1.jpg&w=828&q=75" />
            </div>
            <h2>ايغنايت</h2>
            <p>مبخر الكتروني - اسود</p>

            <div className="flex justify-between my-4">
              <div>
                <p className="text-red-500 line-through">28,000 KWD</p>
                <p>22,400 KWD</p>
              </div>
              <span className="bg-red-500 text-white p-2">20%</span>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="boutiqaatPicksCard font-bold lg:text-2xl">
            <div className="cardImg">
              <div className="actions flex justify-between p-4">
                <Link to={"/"} className="textHvr flex items-center gap-1">
                  اشترى الان
                  <SlBag />
                </Link>
                <div className="flex items-center gap-1">
                  <Link to={"/"} className="textHvr">
                    <MdZoomOutMap />
                  </Link>

                  <Link to={"/"} className="textHvr">
                    <IoMdHeartEmpty />
                  </Link>
                </div>
              </div>
              <img src="https://www.boutiqaat.com/_next/image/?url=https%3A%2F%2Fv2cdn.boutiqaat.com%2Fcdn-cgi%2Fimage%2Fwidth%3D400%2Cheight%3D400%2Cquality%3D80%2Fhttps%3A%2F%2Fv2cdn.boutiqaat.com%2Fmedia%2Fcatalog%2Fproduct%2FF%2FR%2FFR-00003925-1.jpg&w=828&q=75" />
            </div>
            <h2>ايغنايت</h2>
            <p>مبخر الكتروني - اسود</p>

            <div className="flex justify-between my-4">
              <div>
                <p className="text-red-500 line-through">28,000 KWD</p>
                <p>22,400 KWD</p>
              </div>
              <span className="bg-red-500 text-white p-2">20%</span>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="boutiqaatPicksCard font-bold lg:text-2xl">
            <div className="cardImg">
              <div className="actions flex justify-between p-4">
                <Link to={"/"} className="textHvr flex items-center gap-1">
                  اشترى الان
                  <SlBag />
                </Link>
                <div className="flex items-center gap-1">
                  <Link to={"/"} className="textHvr">
                    <MdZoomOutMap />
                  </Link>

                  <Link to={"/"} className="textHvr">
                    <IoMdHeartEmpty />
                  </Link>
                </div>
              </div>
              <img src="https://www.boutiqaat.com/_next/image/?url=https%3A%2F%2Fv2cdn.boutiqaat.com%2Fcdn-cgi%2Fimage%2Fwidth%3D400%2Cheight%3D400%2Cquality%3D80%2Fhttps%3A%2F%2Fv2cdn.boutiqaat.com%2Fmedia%2Fcatalog%2Fproduct%2FI%2F-%2FI-00000172649-R-11.jpg&w=828&q=75" />
            </div>
            <h2>ايغنايت</h2>
            <p>مبخر الكتروني - اسود</p>

            <div className="flex justify-between my-4">
              <div>
                <p className="text-red-500 line-through">28,000 KWD</p>
                <p>22,400 KWD</p>
              </div>
              <span className="bg-red-500 text-white p-2">20%</span>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="boutiqaatPicksCard font-bold lg:text-2xl">
            <div className="cardImg">
              <div className="actions flex justify-between p-4">
                <Link to={"/"} className="textHvr flex items-center gap-1">
                  اشترى الان
                  <SlBag />
                </Link>
                <div className="flex items-center gap-1">
                  <Link to={"/"} className="textHvr">
                    <MdZoomOutMap />
                  </Link>

                  <Link to={"/"} className="textHvr">
                    <IoMdHeartEmpty />
                  </Link>
                </div>
              </div>
              <img src="https://www.boutiqaat.com/_next/image/?url=https%3A%2F%2Fv2cdn.boutiqaat.com%2Fcdn-cgi%2Fimage%2Fwidth%3D400%2Cheight%3D400%2Cquality%3D80%2Fhttps%3A%2F%2Fv2cdn.boutiqaat.com%2Fmedia%2Fcatalog%2Fproduct%2FO%2FR%2FORL-00005640-1.jpg&w=828&q=75" />
            </div>
            <h2>ايغنايت</h2>
            <p>مبخر الكتروني - اسود</p>

            <div className="flex justify-between my-4">
              <div>
                <p className="text-red-500 line-through">28,000 KWD</p>
                <p>22,400 KWD</p>
              </div>
              <span className="bg-red-500 text-white p-2">20%</span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BoutiqaatPicks;
