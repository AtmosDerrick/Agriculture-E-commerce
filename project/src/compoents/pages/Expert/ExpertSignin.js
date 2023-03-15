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
        className=" text-white border-4 rounded-md py-2 px-4 font-bold tracking-normal text-lg "
        onClick={siginPage}
      >
        Sign in as Expert
      </button>
    </div>
  );
}

export default ExpertSignin;
