import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { RiTwitterXFill } from "react-icons/ri";
import { SlSocialFacebook } from "react-icons/sl";
import { Link } from "react-router-dom";
import SelectCountries from "./SelectCountries";
import { BsSnapchat } from "react-icons/bs";

const HeaderTop = () => {
  return (
    <div className="border-b border-myGold bg-white  hidden xl:block">
      <div className="container mx-auto p-3 flex justify-between items-center">
        <div className="flex items-center gap-4 text-2xl">
          <Link className="textHvr" to="/">
            <FaInstagram />
          </Link>
          <Link className="textHvr" to="/">
            <SlSocialFacebook />
          </Link>
          <Link className="textHvr" to="/">
            <RiTwitterXFill />
          </Link>
          <Link className="textHvr" to="/">
            <FiYoutube />
          </Link>
          <Link className="textHvr" to="/">
            <BsSnapchat />
          </Link>
        </div>

        <div className="flex justify-between items-center gap-4 text-xl font-light">
          <Link className="textHvr font-light" to="/">
            تسجيل الدخول
          </Link>
          <SelectCountries />
          <button className="textHvr underline cursor-pointer font-light">
            English
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
