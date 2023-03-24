import React, { useState, useEffect } from "react";
import Chatlist from "./Chatlist";
import { UserAuth } from "../../../context/AuthContext";

function ExpertChat() {
  const { user } = UserAuth();

  return <div className="">{<Chatlist />}</div>;
}

export default ExpertChat;
