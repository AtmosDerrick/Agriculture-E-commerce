import React, { useState, useEffect } from "react";
import Signin from "./Signin";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { UserAuth } from "../../context/AuthContext";

function Signupnew() {
  const [email, setEmail] = useState("");
  const [displayName, setdisplayName] = useState("");
  const [error, setError] = useState("");
  const [login, setLogin] = useState(false);

  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  let navigate = useNavigate();

  const { user } = UserAuth();

  const signInUser = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      setIsLoading(true);
      console.log(displayName, "displayname1");

      await createUserWithEmailAndPassword(auth, email, password);
      await user.updateProfile({
        displayName,
      });
      setLogin(true);
      setTimeout(() => {
        setLogin(false);
        console.log("set time out");
      }, 1000);

      setIsLoading(false);
    } catch (error) {
      setError(true);
      setTimeout(() => {
        setError(false);
        console.log("set time out");
      }, 4000);
      setIsLoading(false);
    }
  };

  return (
    <div className="w-2/4 mx-auto">
      <div className="w-full flex items-center justify-center signin-height mt-24">
        <div className="w-full">
          <div className="text-center text-xl mb-8 font-bold  text-green-600">
            AGRO SOLUTIONS
          </div>
          {error ? (
            <div className="bg-red-500 text-center text-lg text-white py-2">
              Signup not successful
            </div>
          ) : (
            ""
          )}

          {login ? (
            <div className="bg-green-500 text-center text-lg text-white py-2">
              Signup successful
            </div>
          ) : (
            ""
          )}

          <form className="bg-white  rounded-lg shadow-lg px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="Name">
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="user@example.com"
                value={displayName}
                onChange={(e) => {
                  setdisplayName(e.target.value);
                }}
              />
            </div>
            <div class="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="username">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="user@example.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="password">
                Password
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <div
                className="w-full font-bold text-sm text-blue-500 hover:text-blue-800 mb-4"
                href="#">
                <Signin />
              </div>
            </div>

            <div class="flex justify-center">
              <button
                className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={signInUser}>
                {isLoading ? <span>Loading...</span> : <span>Sign up</span>}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signupnew;
