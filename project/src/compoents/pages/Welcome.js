import React from "react";
import "./style/welcome.css";
import Signin from "./Signin";
import Signup from "./Signup";
import Category from "./Category";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="w-3/4 mx-auto welcome py-0 flex justify-around px-4 bg-gray-50">
      <div className="flex items-center justify-center h-3/4 uppercase w-full text-xl text-center font-bold mx-12">
        <div className="text-gray-900">
          Let provide you with the solutions you need <br /> to boost your
          agricultural productivity
          <div className="w-3/4 mx-auto bg-green-600 text-white mt-8 rounded-xl text-lg font-medium shadow-md p-2">
            <Link to="/signin">
              <button>Log In</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="landingimg bg-yellow-500 w-full rounded-lg"></div>
    </div>
  );
}

export default Welcome;
