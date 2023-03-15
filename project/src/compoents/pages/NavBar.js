import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

import Signin from "./Signin";
import ExpertSignin from "./Expert/ExpertSignin";

export default function Navbar() {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  const expertEmail = "atmosderrick@gmail.com";

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
      if (user.email === "atmosderrick2@gmail.com") {
        navigate("/expertchat");
      } else {
        navigate("/category");
        console.log("man", user);
      }
    } else {
      navigate("/");
    }
  }, [user]);
  return (
    <div className="w-full  flex justify-between h-[-20vh] p-4 bg-green-800">
      <div className="uppercase font-bold italic text-white text-xls">
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
              onClick={handleSignOut}
            >
              Logout
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-between">
          <Signin />
          <ExpertSignin />
        </div>
      )}
    </div>
  );
}
