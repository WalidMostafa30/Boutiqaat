import { IoPerson } from "react-icons/io5";
import { Link } from "react-router-dom";

const SmallNav = () => {
  return (
    <nav className="flex items-center justify-between fixed bottom-0 left-0 w-screen p-3 bg-white z-50 md:hidden">
      <Link to="/" className="px-2 flex flex-col items-center">
        <p className="text-xl"><IoPerson /></p>
        بوتيكات
      </Link>
      <Link to="/" className="px-2 flex flex-col items-center">
        <p className="text-xl"><IoPerson /></p>
        ماركات
      </Link>
      <Link to="/" className="px-2 flex flex-col items-center">
        <p className="text-xl"><IoPerson /></p>
        المشاهير
      </Link>
      <Link to="/" className="px-2 flex flex-col items-center">
        <p className="text-xl"><IoPerson /></p>
        الأقسام
      </Link>
      <Link to="/" className="px-2 flex flex-col items-center">
        <p className="text-xl"><IoPerson /></p>
        حسابى
      </Link>
    </nav>
  );
};

export default SmallNav;
