import React, { useState } from "react";
import "./style/clientchat.css";
import Chat from "./chat/Chat";

function CropChat() {
  const messagesChatCategory = "crop";
  const expertLocationEmail = "cropexpert@gmail.com";

  return (
    <div className="w-3/4 mx-auto border-4 bg-gray-50 h-auto">
      <Chat
        messagesChatCategory={messagesChatCategory}
        expertLocationEmail={expertLocationEmail}
      />
    </div>
  );
}

export default CropChat;
