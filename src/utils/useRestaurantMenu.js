import { useEffect, useState } from "react";
import { FETCH_INFO_and_MENU_URL } from "../config";

const useRestaurantMenu = (restaurantID) => {
  const [restaurantMenu, setRestaurantMenu] = useState(null);
  useEffect(() => {
    getRestaurantMenu();
  }, []);
  async function getRestaurantMenu() {
    try {
      const response = await fetch(FETCH_INFO_and_MENU_URL + restaurantID);
    const responseJson = await response.json();
    // console.log(responseJson);
    const menuArray =
      responseJson?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    // console.log(menuArray);
    const itemCategory =
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
    const menuCard = menuArray?.map((item) => {
      if (item?.card?.card["@type"] === itemCategory) {
        return item?.card?.card;
      }
    });
    // console.log(menuCard);
    const filteredMenu = menuCard?.filter((value) => value !== undefined);
    // console.log(filteredMenu);
    const menuInfo = filteredMenu?.map((item) =>
      item?.itemCards?.map((value) => value?.card?.info)
    );
    // console.log(menuInfo);
    const menuList = [].concat(...menuInfo);
    // console.log(menuList);
    const uniqueIdSet = new Set();
    const uniqueMenus = menuList.filter((obj) => {
      if (!uniqueIdSet.has(obj.id)) {
        uniqueIdSet.add(obj.id);
        return true;
      }
      return false;
    });
    // console.log(uniqueMenus);
    setRestaurantMenu(uniqueMenus);
    } catch (error) {
      // console.log(error)
    }
  }
  
  return restaurantMenu;
};
export default useRestaurantMenu;
