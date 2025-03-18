import { Link } from "react-router-dom";

const DropDownCategory = () => {
  return (
    <div className="categoryDropDown flex flex-col gap-2 p-2 items-center absolute top-9 right-0 bg-white text-black min-w-[500px] h-[600px] overflow-scroll">
      <nav className="flex gap-4 flex-wrap p-3 justify-center">
        <Link to="/" className="">
          الملابس
        </Link>
        <Link to="/" className="">
          الأحذية
        </Link>
        <Link to="/" className="">
          حقائب رياضية
        </Link>
        <Link to="/" className="">
          اكسسوارات رياضية
        </Link>
        <Link to="/" className="">
          اكسسوارات بادل
        </Link>
      </nav>

      <div className="flex flex-wrap justify-center gap-4">
        <div className="border-b border-gray-300 pb-3">
          <div className="w-30">
            <img
              loading="lazy"
              src="https://v2cdn.boutiqaat.com/media/catalog/category/T-Shirts%20&%20Tanks%20(24388)_2022_10_30_10_48_22_601.jpg"
              alt="banner"
              className="w-full h-30 object-cover"
            />
          </div>
          <p className="text-center">تيشيرتات</p>
        </div>

        <div className="border-b border-gray-300 pb-3">
          <div className="w-30">
            <img
              loading="lazy"
              src="https://v2cdn.boutiqaat.com/media/catalog/category/T-Shirts%20&%20Tanks%20(24388)_2022_10_30_10_48_22_601.jpg"
              alt="banner"
              className="w-full h-30 object-cover"
            />
          </div>
          <p className="text-center">تيشيرتات</p>
        </div>

        <div className="border-b border-gray-300 pb-3">
          <div className="w-30">
            <img
              loading="lazy"
              src="https://v2cdn.boutiqaat.com/media/catalog/category/T-Shirts%20&%20Tanks%20(24388)_2022_10_30_10_48_22_601.jpg"
              alt="banner"
              className="w-full h-30 object-cover"
            />
          </div>
          <p className="text-center">تيشيرتات</p>
        </div>

        <div className="border-b border-gray-300 pb-3">
          <div className="w-30">
            <img
              loading="lazy"
              src="https://v2cdn.boutiqaat.com/media/catalog/category/T-Shirts%20&%20Tanks%20(24388)_2022_10_30_10_48_22_601.jpg"
              alt="banner"
              className="w-full h-30 object-cover"
            />
          </div>
          <p className="text-center">تيشيرتات</p>
        </div>

        <div className="border-b border-gray-300 pb-3">
          <div className="w-30">
            <img
              loading="lazy"
              src="https://v2cdn.boutiqaat.com/media/catalog/category/T-Shirts%20&%20Tanks%20(24388)_2022_10_30_10_48_22_601.jpg"
              alt="banner"
              className="w-full h-30 object-cover"
            />
          </div>
          <p className="text-center">تيشيرتات</p>
        </div>
      </div>
    </div>
  );
};

export default DropDownCategory;
