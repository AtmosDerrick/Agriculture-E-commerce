import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import SignButton from "./SignButton";

import ExpertSignin from "./Expert/ExpertSignin";

export default function Navbar() {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  console.log("expert userrrrrrr", user);

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      if (user.email === "admin@gmail.com") {
        navigate("admin");
      } else if (
        user.email === "cropexpert@gmail.com" ||
        user.email === "animalexpert@gmail.com" ||
        user.email === "fishexpert@gmail.com"
      ) {
        navigate("/expertchat");
      } else {
        navigate("/category");
        console.log("man2222", user);
      }
    } else {
      navigate("/");
      console.log("u are disctub 5555555");
    }
  }, [user]);
  return (
    <div className="w-full  flex justify-between h-[-20vh] p-4 bg-gradient-to-r from-green-800 via-green-500 to-green-800">
      <div className="uppercase font-bold italic text-white text-xl">
        Agro-Solution
      </div>
      {console.log("nav", user)}
      {user?.email ? (
        <div className="w-auto  flex justify-between">
          <div className="uppercase text-base font-semibold text-white pt-2 pr-8">
            {user?.displayName}
          </div>
          <div>
            <button
              className="text-lg bg-red-500 py-2 px-4 text-white font-bold"
              onClick={handleSignOut}>
              Logout
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-between">
          <SignButton />
          <ExpertSignin />
        </div>
      )}
    </div>
  );
}
