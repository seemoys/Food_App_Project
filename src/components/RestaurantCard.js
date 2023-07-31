import React from "react";
import { RESTAURANT_IMG_CDN_URL } from "../config";

const RestaurantCard = ({
  name,
  areaName,
  cuisines,
  costForTwo,
  avgRating,
  cloudinaryImageId,
  id,
  sla,
}) => {
  return (
    <div className=" h-auto flex flex-col items-center w-72 bg-pink-200 rounded-2xl drop-shadow-xl shadow-2xl hover:shadow-yellow-200 overflow-hidden duration-300">
      <img
        className="shadow-2xl hover:shadow-yellow-100 rounded-xl hover:scale-x-110 duration-300  h-48 w-64"
        src={RESTAURANT_IMG_CDN_URL + cloudinaryImageId}
        alt="Restaurant-Cover"
      />
      <h3 className="text-center text-xl font-semibold">{name}</h3>
      <h4 className="text-center text-xl text-amber-700">{areaName}</h4>
      <h4 className="text-center font-light text-md">
        {cuisines.slice(0, 3).join(", ")}
      </h4>
      <h4 className="text-center text-green-500 font-semibold">
        {costForTwo} 🧑‍🤝‍🧑
      </h4>
      <div className="flex gap-2 justify-between">
        <h4 className="text-center text-red-900 font-semibold mb-1">
          {avgRating}⭐
        </h4>
        <h4 className="text-center text-red-900 font-semibold mb-1">
          Delivery in {sla?.slaString}
        </h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
