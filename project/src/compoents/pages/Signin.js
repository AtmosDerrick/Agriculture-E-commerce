import React, { useEffect } from "react";

import GoogleButton from "react-google-button";
import { UserAuth } from "../../context/AuthContext";

const Signin = () => {
  const { googleSignIn } = UserAuth();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center">
      <GoogleButton onClick={handleGoogleSignIn} />
    </div>
  );
};

export default Signin;
