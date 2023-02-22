import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style/signin.css";

function Signin({ fetchUsername }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  let navigate = useNavigate();

  function handleForm(e) {
    e.preventDefault();

    if (email === "derrick" && password === "1234") {
      setLogin(true);
      console.log("successful");
      navigate("/category");
      return fetchUsername(email);
    } else {
      console.log("wrong password");
    }
  }

  return (
    <div className=" w-3/4 mx-auto   flex justify-between ">
      <div className="w-full flex items-center justify-center signin-height mt-24">
        <div className="w-full">
          <div className="text-center text-lg font-bold  text-green-600">
            Welcome to Agro-Solution.
            <div className="text-black">
              Signin with your email and password
            </div>
          </div>

          <form className="bg-white  rounded-lg shadow-lg px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
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
                for="password"
              >
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
              <p className="text-red-500 text-xs italic">
                I don't have an account{" "}
                <span className="text-green-600 font-bold text-sm">SignUp</span>
              </p>
            </div>
            <div class="flex items-center justify-between">
              <button
                className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handleForm}
              >
                Sign In
              </button>

              <p
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
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

export default Signin;
