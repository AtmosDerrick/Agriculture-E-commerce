import React, { useState } from "react";
import "./style/clientchat.css";
import Chat from "./chat/Chat";

function FishChat() {
  const messagesChatCategory = "fish";
  const expertLocationEmail = "fishexpert@gmail.com";
  return (
    <div className="w-3/4 mx-auto border-4 bg-gray-50 h-auto">
      {console.log("mesaagechatchat", messagesChatCategory)}
      <Chat
        messagesChatCategory={messagesChatCategory}
        expertLocationEmail={expertLocationEmail}
      />
    </div>
  );
}

export default FishChat;
