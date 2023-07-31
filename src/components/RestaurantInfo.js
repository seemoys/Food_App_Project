import { useParams } from "react-router-dom";
import { RESTAURANT_IMG_CDN_URL } from "../config";
import {InfoShimmer} from "./Shimmer";
import useRestaurantInfo from "../utils/useRestaurantInfo";

const RestaurantInfo = () => {
  const { restaurantID } = useParams();
  const restaurantInfo = useRestaurantInfo(restaurantID);
  return !restaurantInfo  ? (
    <InfoShimmer />
  ) : (
    <div className="flex h-72 justify-center items-center bg-slate-500 gap-7 mb-5">
      <div className="">
        <img
          className="shadow-lg shadow-zinc-200 h-48 w-44 md:w-60  ml-2  md:h-64 rounded-2xl"
          src={RESTAURANT_IMG_CDN_URL + restaurantInfo?.cloudinaryImageId}
          alt="Restaurant-Cover"
        />
      </div>
      <div className="">
        <div className="">
          {/* <h3>Restaurant ID : {restaurantID}</h3> */}
          <h1 className="pr-1 md:mb-2 font-semibold text-2xl md:font-extrabold md:text-4xl ">
            {restaurantInfo?.name}
          </h1>
          <h4 className="md:mb-2 font-semibold text-lg md:font-bold md:text-2xl font-serif">
            {restaurantInfo?.city}
          </h4>
          <h4 className="pr-1 md:mb-2 font-md text-lg md:font-semibold md:text-xl  ">
            {restaurantInfo?.areaName}, {restaurantInfo?.locality}
          </h4>
          <h4 className="pr-1 md:mb-2 md:font-medium md:text-xl font-mono">
            {restaurantInfo?.cuisines?.join(", ")}
          </h4>
        </div>
        <div className="flex gap-5 ">
          <h4
            className={`shadow-md shadow-zinc-200 text-sm md:text-lg h-6 w-16 md:h-7 italic text-white md:pl-1 md:font-semibold text-center rounded-md ${
              restaurantInfo?.avgRatingString >= 4
                ? "bg-green-600"
                : "bg-red-600"
            }`}>
            {restaurantInfo?.avgRatingString} ⭐
          </h4>
          
          <h4 className="text-sm md:text-lg md:pl-3 md:pr-3  italic  text-white md:font-semibold text-center">
            Delivery in {restaurantInfo?.sla?.slaString}
          </h4>
          
          <h4 className="text-sm md:text-lg pr-2 italic text-white md:font-semibold">
            {restaurantInfo?.costForTwoMessage}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default RestaurantInfo;
