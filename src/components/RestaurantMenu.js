import { useParams } from "react-router-dom";
// import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { RESTAURANT_IMG_CDN_URL } from "../config";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";
import { MenuShimmer } from "./Shimmer";

const RestaurantMenu = () => {
  const { restaurantID } = useParams();
  const restaurantMenu = useRestaurantMenu(restaurantID);
  const lengthOfItems = restaurantMenu?.length;
  const dispatch = useDispatch();
  const handleAddFoodItems = (item) => {
    dispatch(addItems(item));
  };
  return !restaurantMenu ? (
    <MenuShimmer />
  ) : (
    <>
      <h1 className=" font-[cursive] text-center font-bold text-4xl underline mt-2 mb-2 ">
        Recommended Menu's
      </h1>
      <p className="text-center text-gray-500 mt-1 mb-2">
        Total {lengthOfItems} Items
      </p>

      <div className="flex mb-28">
        <ul className="w-full ml-2 mr-2 md:ml-48 md:mr-48">
          {Object.values(restaurantMenu).map((item) => (
            <li
              className="border-b flex justify-between items-center  p-1 "
              key={item?.id}>
              <div className="w-[75%]  border-r-2 ">
                <div>
                  <span className="text-lg font-semibold">{item?.name}🚀</span>
                  <span className="text-lg font-semibold">
                    {item?.price ? item?.price / 100 : item?.defaultPrice / 100}
                    <span>&#8377;</span>
                  </span>
                </div>

                <div className="text-sm italic">{item?.description}</div>
              </div>

              <div className="relative z-10">
                <img
                  className=" z-0 shadow-lg shadow-neutral-800 h-24 w-36 "
                  src={RESTAURANT_IMG_CDN_URL + item.imageId}
                  alt="No Image"
                />
                <button
                  className="bg-white border text-green-500 font-bold w-16 rounded-md ml-10 absolute top-3/4 text-center"
                  onClick={() => handleAddFoodItems(item)}>
                  Add ➕
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default RestaurantMenu;
