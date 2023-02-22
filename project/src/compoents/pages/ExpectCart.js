import React from "react";
import { Link } from "react-router-dom";

function ExpectCart() {
  return (
    <div>
      <div className="w-full bg-green-700 mx-auto rounded-lg py-4 mt-4 ">
        <div className="text-white text-center font-medium text-lg pt-4">
          <span className="text-base">Kindly Select your type of farming</span>
        </div>

        <div className=" flex justify-center mt-4 ">
          <button className="w-1/2 font-medium  text-lg rounded-lg bg-white text-green-500 p-2 shadow-lg">
            Crop Farming
          </button>
        </div>

        <div className=" flex justify-center mt-4 ">
          <button className="w-1/2 font-medium  text-lg rounded-lg bg-white text-green-500 p-2 shadow-lg">
            Animal Farming
          </button>
        </div>

        <div className=" flex justify-center mt-4 ">
          <button className="w-1/2 font-medium  text-lg rounded-lg bg-white text-green-500 p-2 shadow-lg">
            Fish Farming
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExpectCart;
