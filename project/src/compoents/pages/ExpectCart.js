import React from "react";
import { Link } from "react-router-dom";

function ExpectCart() {
  return (
    <div>
      <div className="w-full bg-green-200 mx-auto rounded-lg py-4 mt-4 ">
        <div className="w-full flex justify-around">
          <div className=" flex justify-center mt-2 ">
            <button className="w-full font-medium  text-lg rounded-lg bg-white text-green-500 py-2 px-8 shadow-lg hover:opacity-80">
              <i class="fa-solid fa-plant-wilt text-green-800"></i> Crop Farming
            </button>
          </div>

          <div className=" flex justify-center mt-2 ">
            <button className="w-full font-medium  text-lg rounded-lg bg-white text-green-500 py-2 px-8 shadow-lg hover:opacity-80">
              <i class="fa-solid fa-cow text-green-800"></i> Animal Farming
            </button>
          </div>

          <div className=" flex justify-center mt-2 ">
            <button className="w-full font-medium  text-lg rounded-lg bg-white text-green-500 py-2 px-8 shadow-lg hover:opacity-80">
              <i class="fa-solid fa-fish text-green-800"></i> Fish Farming
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpectCart;
