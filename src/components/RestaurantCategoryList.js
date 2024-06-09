import React from "react";
import { CDN_URL } from "../utils/constant";
const RestaurantCategoryList = ({ items }) => {
  console.log("item", items);
  return (
    <div>
      {items?.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2 border-white border-b-2 text-left flex justify-between"
        >
          <div className="items-center w-9/12">
            <div>
              <span className="font-semibold text-lg text-gray-700">
                {item?.card?.info?.name}
              </span>
              <p className="font-semibold">
                ₹{" "}
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </p>
            </div>

            <p className="text-md text-left">{item?.card?.info?.description}</p>
          </div>

          <div className="w-3/12 h-2/12">
            <img
              className="w-36 h-36 rounded-md"
              src={CDN_URL + item?.card?.info?.imageId}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantCategoryList;
