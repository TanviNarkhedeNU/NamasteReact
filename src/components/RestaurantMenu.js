import Shimmer from "./Shimmer";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
  const resId = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showItemList, setShowItemList] = useState(false);
  const [showIndex, setShowIndex] = useState(0);
  if (resInfo === null) {
    return <Shimmer />;
  }

  const { text } = resInfo?.cards[0]?.card?.card;
  const { cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (i) =>
        i?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  const toggleShowIndex = (index) => {
    setShowIndex((prevIndex) => (index === prevIndex ? null : index));
  };
  return (
    <div className="text-center">
      <>
        <h1 className="font-bold my-6 text-2xl">{text}</h1>
        <p className="font-bold text-lg">
          {cuisines?.join(", ")} - {costForTwoMessage}
        </p>
        {categories?.map((category, index) => {
          return (
            <RestaurantCategory
              key={category?.card?.card?.title}
              cardData={category?.card?.card}
              showItemList={index === showIndex ? true : false}
              setShowIndex={() => setShowIndex(index)}
              toggleShowIndex={() => toggleShowIndex(index)}
            />
          );
        })}
      </>
    </div>
  );
};
export default RestaurantMenu;
