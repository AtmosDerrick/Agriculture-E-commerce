import React from "react";
import { Link } from "react-router-dom";
import "./style/signup.css";

function Signup() {
  return (
    <div className=" w-3/4 mx-auto   flex justify-between ">
      <div className="w-full flex items-center justify-center signin-height mt-24">
        <div class="w-full">
          <div className="text-center text-lg font-bold  text-green-600">
            Welcome to Agro-Solution.
            <div className="text-black">Kindly signup with your details</div>
          </div>
          <form class="bg-white  rounded-lg shadow-lg px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Name
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Osei Mavis"
              />
            </div>

            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Contact
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="024 234 2321"
              />
            </div>

            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Email
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="user@example.com"
              />
            </div>

            <div class="mb-6">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="password"
              >
                Password
              </label>
              <input
                class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
              />
              <p class="text-red-500 text-xs italic">
                I don't have an account{" "}
                <span className="text-green-600 font-bold text-sm">
                  <Link to="/signin">Sigin</Link>
                </span>
              </p>
            </div>
            <div class="flex items-center justify-between">
              <button
                class="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Sign up
              </button>
              <p
                class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Forgot Password?
              </p>
            </div>
          </form>
        </div>
      </div>

      <div className="w-full signinimg"></div>
    </div>
  );
}

export default Signup;
