import { IoIosSearch } from "react-icons/io";
import { SlBag } from "react-icons/sl";
import { Link, NavLink } from "react-router-dom";
import "./SmallHeader.css";

const SmallHeader = () => {
  return (
    <>
      <div className="container mx-auto p-3 flex justify-center items-center sticky top-0 left-0 right-0 z-50 bg-white md:hidden">
        <Link to="/">
          <img
            src="https://www.boutiqaat.com/assets/images/logo/logo-1.webp"
            alt="logo"
            loading="lazy"
            width={120}
          />
        </Link>

        <div className="absolute left-3 flex items-center gap-2 text-xl">
          <Link to="/" className="textHvr">
            <IoIosSearch />
          </Link>
          <Link to="/" className="textHvr relative">
            <SlBag />
            <span className="absolute bg-myGold text-white flex items-center justify-center w-5 h-5 rounded-full top-[-10px] left-[-10px] text-base">
              0
            </span>
          </Link>
        </div>
      </div>

      <div className="container mx-auto pb-2 flex justify-evenly items-center text-2xl font-semibold md:hidden">
        <NavLink
          to="/men"
          className="navLink border-b border-myGold rounded-lg p-2"
        >
          رجال
        </NavLink>

        <NavLink
          to="/"
          className="navLink border-b border-myGold rounded-lg p-2"
        >
          النساء
        </NavLink>
      </div>
    </>
  );
};

export default SmallHeader;
