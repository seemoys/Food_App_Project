import React from "react";
import RestaurantInfo from "./RestaurantInfo";
import RestaurantMenu from "./RestaurantMenu";
import useOnline from "../utils/useOnline";

const RestaurantDetails = () => {
  const isOnline = useOnline();
  if (!isOnline) {
    return (
      <h1 className="text-center text-5xl">
        Please Check Your Internet Connection
      </h1>
    );
  }
  return (
    <div className="mt-7">
      <RestaurantInfo />
      <RestaurantMenu />
    </div>
  );
};

export default RestaurantDetails;
