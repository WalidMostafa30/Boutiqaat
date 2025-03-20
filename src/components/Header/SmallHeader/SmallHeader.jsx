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
            loading="lazy"
            src="https://www.boutiqaat.com/assets/images/logo/logo-1.webp"
            alt="logo"
            width={120}
          />
        </Link>

        <div className="absolute left-4 flex items-center gap-2">
          <Link to="/" className="textHvr text-2xl">
            <IoIosSearch />
          </Link>
          <Link to="/" className="textHvr text-xl flex gap-0.5">
            <span className="text-base">0</span>
            <SlBag />
          </Link>
        </div>
      </div>

      <div className="container mx-auto pb-2 flex justify-evenly items-center font-semibold md:hidden">
        <NavLink to="/men" className="navLink rounded-b pb-2 text-lg">
          رجال
        </NavLink>

        <NavLink to="/" className="navLink rounded-b pb-2 text-lg">
          النساء
        </NavLink>
      </div>
    </>
  );
};

export default SmallHeader;
