import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
// import { restaurantList } from "../config";
import Shimmer from "./Shimmer";
import { FETCH_RESTAURANTS_LIST_URL } from "../config";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);
  async function getRestaurants() {
    try {
      const response = await fetch(FETCH_RESTAURANTS_LIST_URL);
      const responseData_json = await response.json();
      // setAllRestaurants(responseData_json?.data?.cards[2]?.data?.data?.cards);
      // setFilteredRestaurants(
      //   responseData_json?.data?.cards[2]?.data?.data?.cards
      // );
      // const restaurantData =
      //   responseData_json?.data?.cards[2]?.card?.card?.gridElements
      //     ?.infoWithStyle?.restaurants;
      // console.log(restaurantData)
      // const restaurant = restaurantData?.map((item) => item.info);
      // // console.log(restaurant)
      // const restaurants = [].concat(...restaurant);
      // const restaurantsInfo = Object.values(restaurants);
      // console.log(restaurants);
      setAllRestaurants(
        responseData_json.data?.cards[2]?.card?.card?.gridElements
          ?.infoWithStyle?.restaurants
      );
      setFilteredRestaurants(
        responseData_json.data?.cards[2]?.card?.card?.gridElements
          ?.infoWithStyle?.restaurants
      );
    } catch (error) {
      console.log(error);
    }
  }
  const isOnline = useOnline();
  if (!isOnline) {
    return (
      <h1 className="text-center text-5xl">
        Please Check Your Internet Connection
      </h1>
    );
  }
  if (!allRestaurants) {
    return null;
  }
  return (
    <>
      <div className="">
        <div className="flex justify-center items-center p-2 mt-5 mb-5">
          <input
            className="shadow-md shadow-cyan-500 h-7 border rounded-lg mr-2 w-64 border-none bg-pink-50 text-center hover:bg-yellow-200"
            type="text"
            placeholder="Search 🔍"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onChangeCapture={() => {
              const data = filterData(searchText, allRestaurants);
              setFilteredRestaurants(data);
            }}
          />
          <button
            className="shadow-md shadow-cyan-500 h-7 border bg-violet-300 rounded-lg ml-2 w-20 hover:bg-yellow-200"
            type="submit"
            onClick={() => {
              const data = filterData(searchText, allRestaurants);
              setFilteredRestaurants(data);
            }}>
            Search
          </button>
        </div>
        {/* <div className="flex flex-wrap justify-center gap-7 mt-2 mb-28">
          {filteredRestaurants.map((restaurant) => {
            return (
              <Link to={"/restaurant/" + restaurant?.data?.id} key={restaurant?.data?.id}>
                <RestaurantCard {...restaurant?.data} />
              </Link>
            );
          })}
          </div> */}
        {allRestaurants?.length === 0 ? (
          <Shimmer />
        ) : (
          <div className="border-l-2 border-r-2 rounded-2xl flex flex-wrap justify-center gap-10 mt-2 mb-28 md:ml-20 md:mr-20">
            {filteredRestaurants.map((restaurant) => {
              return (
                <Link
                  to={"/restaurant/" + restaurant.info?.id}
                  key={restaurant.info?.id}>
                  <RestaurantCard {...restaurant.info} />
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Body;
