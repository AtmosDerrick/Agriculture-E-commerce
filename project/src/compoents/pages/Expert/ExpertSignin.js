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
        className=" text-black bg-gray-100 italic   py-2 px-2 font-bold tracking-normal text-lg "
        onClick={siginPage}
      >
        Expert / Admin
      </button>
    </div>
  );
}

export default ExpertSignin;
