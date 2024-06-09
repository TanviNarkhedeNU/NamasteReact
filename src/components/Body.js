import RestoCard, { RestaurantCardsOffer } from "./RestaurantCards";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";
const Body = () => {
  const [resList, setResList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const onlineStatus = useOnlineStatus();
  const RestoCardsOffer = RestaurantCardsOffer(RestoCard);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4594965&lng=77.0266383&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonData = await data.json();

    setResList(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredList(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  if (resList?.length === 0) {
    return <Shimmer />;
  }

  if (onlineStatus === false) {
    return <h1>You are offline!! Please check your internet connection...</h1>;
  }
  return (
    <div className="body">
      <div className="flex m-3">
        <div className="search-container">
          <input
            className="border-solid border-[1px] border-black px-2 py-2 rounded-md"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-3 py-2 bg-purple-200 ml-2 shadow-md rounded-md"
            onClick={() => {
              const filteredRestaurant = resList?.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredList(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="px-5 py-2 bg-blue-100 ml-3 rounded-md shadow-md">
          <button
            onClick={() => {
              const filtered = resList?.filter(
                (res) => res?.info?.avgRating > 4
              );
              console.log("filtered", filtered);
              setFilteredList(filtered);
            }}
          >
            Top Rate Resto
          </button>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap">
        {/* Resto card component to handle multiple cards */}
        {filteredList?.map((res) => {
          const resData = res.info;
          return (
            <Link to={"/restaurants/" + resData.id}>
              {Object.keys(resData?.aggregatedDiscountInfoV3 || {}).length !==
              0 ? (
                <RestoCardsOffer key={resData.id} resData={resData} />
              ) : (
                <RestoCard key={resData.id} resData={resData} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
