import { SlBag } from "react-icons/sl";
import { FaRegHeart } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import HeaderBottom from "./HeaderBottom/HeaderBottom";
import HeaderTop from "./HeaderTop/HeaderTop";

const Header = () => {
  return (
    <header className="hidden md:block">
      <HeaderTop />

      <div className="container mx-auto p-3 flex justify-between items-center">
        <Link to="/">
          <img
            src="https://www.boutiqaat.com/assets/images/logo/logo-1.webp"
            alt="logo"
            loading="lazy"
          />
        </Link>

        <nav className="items-center gap-5 text-lg hidden xl:flex">
          <Link to="/" className="p-2">
            رجال
          </Link>
          <Link to="/" className="p-2">
            النساء
          </Link>
          <Link to="/" className="p-2">
            تلفزيون
          </Link>
          <Link to="/" className="p-2">
            المشاهير
          </Link>
          <Link to="/" className="p-2">
            ماركات
          </Link>
          <Link to="/" className="p-2">
            بطاقة الهدايا
          </Link>
        </nav>

        <div className="flex items-center gap-4 text-2xl">
          <Link to="/" className="textHvr">
            <IoIosSearch />
          </Link>
          <Link to="/" className="textHvr">
            <IoPersonOutline />
          </Link>
          <Link to="/" className="textHvr relative">
            <FaRegHeart />
            <span className="absolute bg-myGold text-white flex items-center justify-center w-5 h-5 rounded-full top-[-10px] left-[-10px] text-base">
              0
            </span>
          </Link>
          <Link to="/" className="textHvr relative">
            <SlBag />
            <span className="absolute bg-myGold text-white flex items-center justify-center w-5 h-5 rounded-full top-[-10px] left-[-10px] text-base">
              0
            </span>
          </Link>
        </div>
      </div>

      <HeaderBottom />
    </header>
  );
};

export default Header;
