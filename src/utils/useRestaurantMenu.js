import { useEffect, useState } from "react";
import { MENU_URL } from "./constant";
const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId?.resId);
    const jsonData = await data.json();

    setResInfo(jsonData?.data);
  };
  return resInfo;
};
export default useRestaurantMenu;
