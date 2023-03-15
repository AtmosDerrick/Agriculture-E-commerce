import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/signin.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  function signInExpert(e) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const expertUser = userCredential.user;
        navigate("/expertchat");
        console.log(expertUser, "expert user working");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  return (
    <div className=" w-full mx-auto   flex justify-between ">
      <div className="w-3/4 mr-4 flex items-center justify-center signin-height mt-12">
        <div className="w-full">
          <div className="text-center text-lg font-bold mb-12  text-green-600">
            For only Experts
            <div className="text-black">
              Kindly signin with your email and password
            </div>
          </div>

          <form className="bg-white  rounded-lg shadow-lg px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
              <label
                className="block text-gray-700 text-lg font-bold mb-2"
                for="username"
              >
                Email
              </label>
              <input
                className="shadow-sm text-lg appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                className="block text-gray-700 text-lg font-bold mb-2"
                for="password"
              >
                Password
              </label>
              <input
                className="shadow-sm appearance-none border text-lg border-red-500 rounded w-full py-4 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
          </form>
          <button
            type="submit"
            className="bg-green-800 py-2 px-4 text-lg font-bold text-white"
            onClick={signInExpert}
          >
            Signin
          </button>
        </div>
      </div>

      <div className="w-full signinimg"></div>
    </div>
  );
}

export default Signin;
