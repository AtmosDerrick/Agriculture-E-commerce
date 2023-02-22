import React, { useState } from "react";
import ExpectCart from "./ExpectCart";
import { Link } from "react-router-dom";

function Category({ title }) {
  const [expertCartShow, setExpertCartShow] = useState(false);
  return (
    <div>
      <div className="w-1/2 bg-green-700 mx-auto rounded-lg py-12 mt-12 shadow-xl">
        {
          <div>
            <div className="text-white text-center font-medium text-lg pt-4">
              Welcome Back <span>{title}</span>
              <br />
              <span className="text-base">
                Kindly Select how we can help you
              </span>
            </div>

            {!expertCartShow && (
              <div className=" flex justify-center mt-4 ">
                <Link to="/buyandsell" className="w-1/2 mx-auto">
                  <button className="w-full font-medium  text-lg rounded-lg bg-white text-green-500 p-2 shadow-lg">
                    Buy and Sell
                  </button>
                </Link>
              </div>
            )}

            <div className=" flex justify-center mt-4 ">
              <button
                className="w-1/2 font-medium  text-lg rounded-lg bg-white text-green-500 p-2 shadow-lg"
                onClick={() => setExpertCartShow(!expertCartShow)}
              >
                Education and Expect Service
              </button>
            </div>
          </div>
        }

        {expertCartShow && <ExpectCart />}
      </div>
    </div>
  );
}

export default Category;
