import { Link } from "react-router-dom";
import SelectCategories from "./SelectCategories";
import DropDownCategory from "./DropDownCategory";
import "./HeaderBottom.css";

const HeaderBottom = () => {
  return (
    <div className="bg-black text-white hidden 2xl:block">
      <div className="container mx-auto p-3 flex items-center justify-between">
        <div className="flex items-center gap-4 text-lg">
          <Link to="/" className="categoryLink relative">
            الملابس
            <DropDownCategory />
          </Link>
          <Link to="/" className="categoryLink relative">
            الأحذية
            <DropDownCategory />
          </Link>
          <Link to="/" className="categoryLink relative">
            الرياضة
            <DropDownCategory />
          </Link>
          <Link to="/" className="categoryLink relative">
            العطور العربية
            <DropDownCategory />
          </Link>
          <Link to="/" className="categoryLink relative">
            عطور نيش
            <DropDownCategory />
          </Link>
          <Link to="/" className="categoryLink relative">
            العطور العالمية
            <DropDownCategory />
          </Link>
          <Link to="/" className="categoryLink relative">
            النظارات والعدسات
            <DropDownCategory />
          </Link>
          <Link to="/" className="categoryLink relative">
            مختارات تيك توك
            <DropDownCategory />
          </Link>
          <Link to="/" className="categoryLink relative">
            الحلاقة والعناية الشخصية
            <DropDownCategory />
          </Link>
        </div>

        <SelectCategories />
      </div>
    </div>
  );
};

export default HeaderBottom;
