import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdZoomOutMap } from "react-icons/md";
import { SlBag } from "react-icons/sl";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = ({ product }) => {
  return (
    <div className="product text-sm lg:text-xl">
      <div className="cardImg">
        <div className="actions lg:flex justify-between p-4 hidden">
          <Link to={product.link} className="textHvr flex items-center gap-1">
            اشترى الان
            <SlBag />
          </Link>
          <div className="flex items-center gap-1 xl:text-3xl">
            <Link to={product.link} className="textHvr">
              <MdZoomOutMap />
            </Link>
            <Link to={product.link} className="textHvr">
              <IoMdHeartEmpty />
            </Link>
          </div>
        </div>
        <img loading="lazy" src={product.imgSrc} />
      </div>

      <div className="flex flex-col justify-between mt-auto flex-grow">
        <h2 className="font-semibold">{product.title}</h2>
        <p className="font-semibold line-clamp-1">{product.description}</p>

        <div className="flex justify-between items-start my-4 min-h-10 lg:min-h-16">
          <div>
            <p
              className={`${
                product.discount ? "text-red-500 line-through" : ""
              }`}
            >
              {product.price.toLocaleString()} KWD
            </p>
            {product.discount && (
              <p>
                {(
                  product.price -
                  (product.price * product.discount) / 100
                ).toLocaleString() + " KWD"}
              </p>
            )}
          </div>
          {product.discount && (
            <span className="bg-red-500 text-white p-1 md:p-2 content-center">
              {product.discount}%
            </span>
          )}
        </div>

        <div className="flex gap-1 items-center lg:hidden">
          <button className="grow bg-black p-2 text-white rounded-md">
            اشترى الان
          </button>
          <button className="text-2xl">
            <IoMdHeartEmpty />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
