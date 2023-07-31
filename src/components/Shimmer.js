import React from "react";

const CardShimmer = () => {
  return (
    <>
      <div className="md:mt-16 h-72 p-2 flex flex-col gap-2 items-left w-64 bg-white border border-gray-400 rounded-md duration-300 m-2 shadow-2xl shadow-gray-950 animate-pulse">
        <div className="rounded-xl h-52 w-60 bg-gray-400"></div>
        <div className=" rounded-md h-8 w-48 bg-gray-400"></div>
        <div className="rounded-md h-7 w-36 bg-gray-400"></div>
        <div className="rounded-md h-5 w-28 bg-gray-400"></div>
        <div className="rounded-md h-4 w-10 bg-gray-400"></div>
      </div>
    </>
  );
};
export const InfoShimmer = () => {
  return (
    <>
      <div className="w-auto md:h-56 h-44 bg-gray-300 md:ml-24 md:mr-24 ml-5 mr-5 rounded-lg flex justify-center items-center gap-10 animate-pulse p-2">
        <div className="bg-gray-400 w-32 md:w-60 h-24 md:h-48 rounded-xl border"></div>
        <div className="bg-transparent w-48 h-48 rounded-xl flex flex-col gap-2 justify-evenly">
          <div className="bg-gray-400 md:w-60 w-36 h-5 rounded-md border"></div>
          <div className="bg-gray-400 md:w-48 w-32 h-5 rounded-md border"></div>
          <div className="bg-gray-400 md:w-36 w-24 h-5 rounded-md border"></div>
          <div className="bg-gray-400 md:w-24 w-20 h-5 rounded-md border"></div>
        </div>
      </div>
    </>
  );
};
export const MenuShimmer = () => {
  return (
    <>
      <div className="mt-10 mb-24 bg-gray-300 md:ml-48 md:mr-48 rounded-md  h-32 flex gap-10 justify-center  animate-pulse ml-5 mr-5">
        <div className="flex flex-col bg-transparent  gap-5 items-center mt-7">
          <div className="bg-gray-500 border rounded-md w-24 md:w-96 h-6 ml-5 "></div>
          <div className="bg-gray-500  border rounded-md w-24 md:w-96 h-6 ml-5 "></div>
        </div>
        <div className="bg-gray-500 border rounded-md  w-32 h-20 mt-5"></div>
      </div>
    </>
  );
};

const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center gap-10 mt-2 mb-28 ml-20 mr-20">
      {Array(10)
        .fill("")
        .map((index) => {
          return <CardShimmer key={Math.random(index * 1000)} />;
        })}
    </div>
  );
};

export default Shimmer;
