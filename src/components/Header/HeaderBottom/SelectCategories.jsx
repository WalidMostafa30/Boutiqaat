import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const SelectCategories = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleSelection = () => setIsOpen((prev) => !prev);

  const categoriesArray = [
    {
      title: "الملابس",
    },
    {
      title: "الأحذية",
    },
    {
      title: "الرياضة",
    },
    {
      title: "العطور العربية",
    },
    {
      title: "العطور العالمية",
    },
    {
      title: "النظارات والعدسات",
    },
    {
      title: "مختارات تيك توك",
    },
  ];
  return (
    <div
      onClick={handleToggleSelection}
      className="flex items-center gap-1 cursor-pointer relative"
    >
      <p>جميع الأقسام</p>
      <IoIosArrowDown />

      <div
        className={`dropdown cat ${
          isOpen ? "open" : ""
        } absolute top-8 left-0 text-black bg-white p-2 w-50`}
      >
        {categoriesArray.map((country, i) => (
          <div
            key={i}
            className="flex items-center gap-1 m-2 py-2 border-b cursor-pointer textHvr"
          >
            <p>{country.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectCategories;
