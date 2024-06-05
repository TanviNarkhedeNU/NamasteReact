import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const resId = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);

  var fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4594965&lng=77.0266383&restaurantId=" +
        { resId } +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const jsonData = await data.json();
    setResInfo(jsonData?.data);
  };

  const itemCard =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  if (resInfo === null) {
    return <Shimmer />;
  }
  return (
    <div className="menu">
      <>
        <h1>{resInfo?.cards[0]?.card?.card?.text}</h1>
        <h2>Menu</h2>
        <ul>
          {itemCard?.map((item) => {
            return (
              <li key={item?.card?.info?.id}>
                {item?.card?.info?.name} - Rs.
                {item?.card?.info?.defaultPrice / 100}
              </li>
            );
          })}
        </ul>
      </>
    </div>
  );
};
export default RestaurantMenu;
