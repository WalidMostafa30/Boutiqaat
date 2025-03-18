import BoutiqaatPicks from "../../components/BoutiqaatPicks/BoutiqaatPicks";
import Celebrities from "../../components/Celebrities/Celebrities";
import FeaturedBrands from "../../components/FeaturedBrands/FeaturedBrands";
import Footer from "../../components/Footer/Footer";
import HomeSlider from "../../components/HomeSlider/HomeSlider";
import Offers from "../../components/Offers/Offers";

const MenPage = () => {
  return (
    <section className="pb-14 md:pb-0">
      <HomeSlider />
      <Celebrities />
      <BoutiqaatPicks />
      <Offers />
      <FeaturedBrands />
      <Offers />
      <Footer />
    </section>
  );
};

export default MenPage;
