import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import BoutiqaatPicks from "../../components/BoutiqaatPicks/BoutiqaatPicks";
import Celebrities from "../../components/Celebrities/Celebrities";
import FeaturedBrands from "../../components/FeaturedBrands/FeaturedBrands";
import Footer from "../../components/Footer/Footer";
import HomeSlider from "../../components/HomeSlider/HomeSlider";
import LandingOffers from "../../components/landingOffers/landingOffers";
import loader from "../../assets/loader/loader.gif";

const MenPage = () => {
  const [componentsList, setComponentsList] = useState([
    "LandingOffers",
    "FeaturedBrands",
    "LandingOffers",
  ]);
  const maxComponents = 10;
  const hasMore = componentsList.length < maxComponents;

  const fetchMoreData = () => {
    if (!hasMore) return;

    setTimeout(() => {
      setComponentsList((prev) => [
        ...prev,
        "LandingOffers",
        "FeaturedBrands",
        "LandingOffers",
      ]);
    }, 1500);
  };

  return (
    <section className="pb-14 md:pb-0">
      <HomeSlider />
      <Celebrities />
      <BoutiqaatPicks />

      <InfiniteScroll
        dataLength={componentsList.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={
          <div className="flex justify-center items-center w-full py-4">
            <img src={loader} className="w-20 lg:w-28" loading="lazy" />
          </div>
        }
      >
        {componentsList.map((item, index) =>
          item === "LandingOffers" ? (
            <LandingOffers key={index} />
          ) : (
            <FeaturedBrands key={index} />
          )
        )}
      </InfiniteScroll>

      <Footer />
    </section>
  );
};

export default MenPage;
