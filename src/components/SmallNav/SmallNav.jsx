import { BiCategory } from "react-icons/bi";
import { GiCurlyWing } from "react-icons/gi";
import { IoPerson } from "react-icons/io5";
import { MdOutlineSell } from "react-icons/md";
import { PiFlowerLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import "./SmallNav.css";

const SmallNav = () => {
  return (
    <nav className="flex items-center justify-between fixed bottom-0 left-0 w-screen p-3 bg-white z-50 md:hidden">
      <Link
        to="/"
        className="smallNavLink px-2 flex flex-col items-center gap-1 active"
      >
        <span className="text-xl">
          <GiCurlyWing />
        </span>
        <p className="text-xs">بوتيكات</p>
      </Link>
      <Link to="/" className="smallNavLink px-2 flex flex-col items-center">
        <span className="text-xl">
          <MdOutlineSell />
        </span>
        <p className="text-xs">ماركات</p>
      </Link>
      <Link to="/" className="smallNavLink px-2 flex flex-col items-center">
        <span className="text-xl">
          <PiFlowerLight />
        </span>
        <p className="text-xs">المشاهير</p>
      </Link>
      <Link to="/" className="smallNavLink px-2 flex flex-col items-center">
        <span className="text-xl">
          <BiCategory />
        </span>
        <p className="text-xs">الأقسام</p>
      </Link>
      <Link to="/" className="smallNavLink px-2 flex flex-col items-center">
        <span className="text-xl">
          <IoPerson />
        </span>
        <p className="text-xs">حسابى</p>
      </Link>
    </nav>
  );
};

export default SmallNav;
