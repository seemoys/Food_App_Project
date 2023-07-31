import React from "react";
import useOnline from "../utils/useOnline";
import { useDispatch, useSelector } from "react-redux";
import CartItems from "./CartItems";
import { clearItems, removeItems } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);
  const cartPrice = cartItems.map(
    (item) => (item.price || item.defaultPrice) / 100
  );
  const totalAmount = cartPrice.reduce((acc, item) => acc + item, 0);
  // console.log(totalAmount);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearItems());
  };
  const handleRemoveItems = () => {
    dispatch(removeItems());
  };
  const isOnline = useOnline();
  if (!isOnline) {
    return (
      <h1 className="text-center text-5xl">
        Please Check Your Internet Connection
      </h1>
    );
  }
  if (cartItems.length === 0) {
    return (
      <>
        <div className="font-[cursive] font-extrabold text-3xl md:text-5xl text-center mt-7 text-fuchsia-100">
          Please Add Some Item's
        </div>
        <div className="font-[cursive] font-extrabold text-3xl md:text-5xl text-center mt-7 text-green-200">
          Please Add Some Item's
        </div>
        <div className="font-[cursive] font-extrabold text-3xl md:text-5xl text-center mt-7 text-yellow-300">
          Please Add Some Item's
        </div>
        <div className="font-[cursive] font-extrabold text-3xl md:text-5xl text-center mt-7 text-orange-400">
          Please Add Some Item's
        </div>
        <div className="font-[cursive] font-extrabold text-3xl md:text-5xl text-center mt-7 text-blue-400">
          Please Add Some Item's
        </div>
      </>
    );
  }
  return (
    <div className="flex mb-28 flex-col items-center p-5">
      <h1 className="text-3xl font-bold">
        Cart Item's -<span>{cartItems.length}</span>
      </h1>
      <p className="text-3xl font-bold font-mono text-cyan-500">
        Total Amount-{totalAmount} <span>&#8377;</span>
      </p>
      <div className="flex gap-5 p-5 ml-2 mr-2">
        <button
          className="bg-red-400 rounded-md md:w-52 h-7 text-white font-extralight text-xl hover:text-red-400 hover:bg-cyan-100 border border-yellow-300"
          onClick={() => {
            handleClearCart();
          }}>
          Clear Cart
        </button>
        <button
          className="bg-red-400 rounded-md md:w-52 h-7 text-white font-extralight text-xl hover:text-red-400 hover:bg-cyan-100 border border-yellow-300"
          onClick={() => {
            handleRemoveItems();
          }}>
          Remove
        </button>
      </div>
      <div className="flex flex-col gap-10">
        {cartItems.map((item) => (
          <CartItems key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
