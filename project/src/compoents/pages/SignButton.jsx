import React from "react";
import { useNavigate } from "react-router-dom";

function SignButton() {
  const navigate = useNavigate();

  const siginPage = () => {
    navigate("/usersignin");
  };

  return (
    <div>
      <button
        className=" text-white mr-4 bg-orange-500 italic   py-2 px-4 font-bold tracking-normal text-lg "
        onClick={siginPage}>
        Signin
      </button>
    </div>
  );
}

export default SignButton;
