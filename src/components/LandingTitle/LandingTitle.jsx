import { Link } from "react-router-dom";

const LandingTitle = ({ title, link }) => {
  return (
    <div className="flex justify-between">
      <h1 className="text-lg lg:text-3xl font-bold">{title}</h1>
      <Link to={link} className="text-myGold underline text-sm lg:text-xl">
        عرض الكل
      </Link>
    </div>
  );
};

export default LandingTitle;
