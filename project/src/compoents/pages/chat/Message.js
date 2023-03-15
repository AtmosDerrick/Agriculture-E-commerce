import React from "react";
import { auth } from "../../../firebase";

const style = {
  message: `flex item-center shadow-xl py-2 px-3 rounded-tl-full rounded-tr-full`,
  sent: `bg-[#395dff] text-black float-row-reverse text-end float-right rounded-bl-full`,
  recieved: `bg-[#e5e5ea] text-black float-left rounded-br-full`,
};

function Message({ message }) {
  const messageClass =
    message.uid === auth.currentUser.uid
      ? `${style.sent}`
      : `${style.recieved}`;
  return (
    <div>
      <div className={`${style.message} ${messageClass}`}>
        <p className="absolute mt-[-10px] text-gray-600 text-xs">
          {message.name}
        </p>
        <p>{message.text}</p>
      </div>
    </div>
  );
}

export default Message;
