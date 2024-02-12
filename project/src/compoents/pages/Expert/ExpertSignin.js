import React from "react";
import { useNavigate } from "react-router-dom";

function ExpertSignin() {
  let navigate = useNavigate();

  const siginPage = () => {
    navigate("/experts");
  };
  return (
    <div>
      <button
        className=" border-4 text-white    py-2 px-2 font-bold tracking-normal text-lg "
        onClick={siginPage}>
        Experts
      </button>
    </div>
  );
}

export default ExpertSignin;
