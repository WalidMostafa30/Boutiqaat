import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import "./SelectCountries.css";

const SelectCountries = () => {
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleSelection = () => setIsOpen((prev) => !prev);

  const changeIndex = (i) => setIndex(i);

  const countriesArray = [
    {
      name: "الكويت",
      img: "https://v2cdn.boutiqaat.com/media/flags/Kuwait.png",
    },
    { name: "قطر", img: "https://v2cdn.boutiqaat.com/media/flags/Qatar.png" },
    {
      name: "الامارات",
      img: "https://v2cdn.boutiqaat.com/media/flags/Emirates.png",
    },
    {
      name: "البحرين",
      img: "https://v2cdn.boutiqaat.com/media/flags/Bahrain.png",
    },
    {
      name: "السعوديه",
      img: "https://v2cdn.boutiqaat.com/media/flags/Saudi.png",
    },
    { name: "العراق", img: "https://v2cdn.boutiqaat.com/media/flags/Iraq.png" },
    {
      name: "الأردن",
      img: "https://v2cdn.boutiqaat.com/media/brandmanagement/J/o/Jordan_2024_05_19_14_28_52_928.jpg",
    },
  ];
  return (
    <div
      onClick={handleToggleSelection}
      className="flex items-center gap-1 cursor-pointer relative"
    >
      <img
        loading="lazy"
        src={countriesArray[index].img}
        alt={countriesArray[index].name}
        className="w-8"
      />
      <p className="textHvr">{countriesArray[index].name}</p>
      <IoIosArrowDown />

      <div
        className={`dropdown ${
          isOpen ? "open" : ""
        } absolute top-9 right-0 text-white bg-black p-2 w-40`}
      >
        {countriesArray.map((country, i) => (
          <div
            key={i}
            className="flex items-center gap-1 m-2 cursor-pointer textHvr"
            onClick={() => changeIndex(i)}
          >
            <img
              loading="lazy"
              src={country.img}
              alt={country.name}
              className="w-8"
            />
            <p>{country.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectCountries;
