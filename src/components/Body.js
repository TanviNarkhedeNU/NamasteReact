import RestoCard from "./RestaurantCards";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4594965&lng=77.0266383&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    // console.log(data);
    const jsonData = await data.json();
    // console.log(
    //   jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
    //     ?.restaurants
    // );
    setResList(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredList(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    // console.log(https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4594965&lng=77.0266383&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING);
  };

  if (resList?.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="search-container">
        <input
          className="search-text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
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
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filtered = resList.filter((res) => res.info.avgRating > 4);
            setResList(filtered);
          }}
        >
          Top Rate Resto
        </button>
      </div>
      <div className="res-container">
        {/* Resto card component to handle multiple cards */}
        {filteredList?.map((res) => {
          const resData = res.info;
          return <RestoCard key={resData.id} resData={resData} />;
        })}
      </div>
    </div>
  );
};

export default Body;
