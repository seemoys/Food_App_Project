import { RESTAURANT_IMG_CDN_URL } from "../config";

const CartItems = ({ name, category, description, imageId, price }) => {
  return (
    <div className="h-auto w-auto flex flex-col items-center  bg-pink-200 rounded-2xl shadow-2xl hover:shadow-none p-5">
    
      <div className="flex flex-col md:flex md:flex-row gap-5 w-9/12">
        <div className="">
          <img
            className="rounded-2xl shadow-2xl shadow-cyan-100"
            src={RESTAURANT_IMG_CDN_URL + imageId}
            alt="Restaurant-Cover"
          />
        </div>
        <div className="flex flex-col gap-5 justify-center text-center">
          <h3>{name}</h3>
          <h4>{category}</h4>
          <h4>{description}</h4>
          <h4>
            {price / 100} <span>&#8377;</span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
