import React, { useState, useEffect } from "react";
import Chatlist from "./Chatlist";
import { UserAuth } from "../../../context/AuthContext";

function ExpertChat() {
  const { user } = UserAuth();

  if (user.email == "cropexpert@gmail.com") {
    var category = "crop";
    console.log("sg", category);
  } else if (user.email == "animalexpert@gmail.com") {
    var category = "animal";
    console.log("sg", category);
  } else if (user.email == "fishexpert@gmail.com") {
    var category = "fish";
  }

  return (
    <div className="">
      <Chatlist category={category} />
    </div>
  );
}

export default ExpertChat;
