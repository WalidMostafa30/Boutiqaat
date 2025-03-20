import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-200 hidden md:block">
      <div className="container m-auto p-3">
        <div className="flex flex-wrap justify-between gap-5 py-5">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold">احدث الصيحات</h2>
            <Link to={"/"} className="hover:underline duration-200">
              الأحذيه
            </Link>
            <Link to={"/"} className="hover:underline duration-200">
              الملابس
            </Link>
            <Link to={"/"} className="hover:underline duration-200">
              الرياضه
            </Link>
            <Link to={"/"} className="hover:underline duration-200">
              عطور نيش
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold">معلومات الشركة</h2>
            <Link to={"/"} className="hover:underline duration-200">
              نبذة عن بوتيكات
            </Link>
            <Link to={"/"} className="hover:underline duration-200">
              سياسة الخصوصية
            </Link>
            <Link to={"/"} className="hover:underline duration-200">
              شروط التوصيل
            </Link>
            <Link to={"/"} className="hover:underline duration-200">
              الشروط والاحكام
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold">مركز المساعدة</h2>
            <Link to={"/"} className="hover:underline duration-200">
              تواصل مع الدعم الفني
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold">حمل تطبيق بوتيكات على هاتفك</h2>
            <Link to={"/"} className="hover:underline duration-200">
              <img
                loading="lazy"
                src="https://www.boutiqaat.com/assets/images/icon-img/app-1.png"
              />
            </Link>
            <Link to={"/"} className="hover:underline duration-200">
              <img
                loading="lazy"
                src="https://www.boutiqaat.com/assets/images/icon-img/app-2.png"
              />
            </Link>
            <Link to={"/"} className="hover:underline duration-200">
              <img
                loading="lazy"
                src="https://www.boutiqaat.com/assets/images/icon-img/app-3.png"
              />
            </Link>
          </div>
        </div>

        <div className="border-t border-myGold py-5">
          <p>Copyright © 2025 Boutiqaat</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
