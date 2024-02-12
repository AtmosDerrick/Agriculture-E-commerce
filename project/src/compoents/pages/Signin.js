import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import GoogleButton from "react-google-button";
import { UserAuth } from "../../context/AuthContext";

const Signin = () => {
  let navigate = useNavigate();
  const { googleSignIn } = UserAuth();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center mr-8 ">
      <GoogleButton onClick={handleGoogleSignIn} />
    </div>
  );
};

export default Signin;
