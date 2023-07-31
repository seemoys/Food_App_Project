import React from "react";
import useOnline from "../utils/useOnline";
import Intoxic from "../assets/Intoxicant.png"

const Intoxicant = () => {
  const isOnline=useOnline()
  if (!isOnline) {
    return <h1 className="text-center text-5xl">Please Check Your Internet Connection</h1>;
  }
  return (
    <div className="flex flex-col items-center gap-2  ">
      <h1 className="font-[cursive] font-extrabold text-5xl text-center mt-7 text-fuchsia-300">Coming Soon...</h1>
      <h1 className="font-[cursive] font-bold text-xl text-center mt-7 text-fuchsia-950">Intoxicant - Product Of Bite's @ Burp Bengaluru</h1>
      <img className="h-72 w-72 border rounded-full shadow-2xl shadow-pink-400" src={Intoxic} alt=""/>
    </div>
  );
};


export default Intoxicant;
