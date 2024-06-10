import React, { useState } from "react";
import RestaurantCategoryList from "./RestaurantCategoryList";

const RestaurantCategory = ({ cardData, showItemList, toggleShowIndex }) => {
  // const [showItemList, setShowItemList] = useState(false);
  const handleClick = () => {
    toggleShowIndex();
    // setShowItemList(!showItemList);
  };
  return (
    <div>
      <div className="w-6/12 bg-gray-100 shadow-md p-4 mx-auto my-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {cardData?.title} ({cardData?.itemCards?.length})
          </span>
          {showItemList === true ? <span>🔼</span> : <span>🔽</span>}
        </div>
        {showItemList && <RestaurantCategoryList items={cardData?.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
