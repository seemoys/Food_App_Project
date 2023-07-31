import { useEffect, useState } from "react";
import { FETCH_INFO_and_MENU_URL } from "../config";

const useRestaurantInfo = (restaurantID) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  useEffect(() => {
    getRestaurantInfo();
  }, []);
  async function getRestaurantInfo() {
    try {
      const response = await fetch(FETCH_INFO_and_MENU_URL + restaurantID);
      const responseJson = await response.json();
      // console.log(responseJson);
      const restaurantData = responseJson?.data?.cards[0]?.card?.card?.info;
      // console.log(restaurantData)
      setRestaurantInfo(restaurantData);
    } catch (error) {
      // console.log(error)
    }
  }
  return restaurantInfo;
};
export default useRestaurantInfo;
