import React, { useState } from "react";
import "./style/expertChat.css";

function ExpertChat() {
  const [chatContacts, setchatContacts] = useState([
    { id: 1, name: "Osei Derrick", lastChat: "how can i grow a maize" },
    {
      id: 2,
      name: "Stella Kwame",
      lastChat: "My cassava not doing well",
    },
    { id: 3, name: "Cedric", lastChat: "Thank you" },
    { id: 4, name: "jons", lastChat: "Thank you" },
    { id: 5, name: "Mathew", lastChat: "Thank you" },
  ]);

  return (
    <div className="w-3/4 mx-auto border-4 bg-gray-50    ">
      <div className="w-full  border-b-4 border-green-600 ">
        <div className="py-4 px-2">
          <div className="profile flex">
            <div className="w-24 h-24  bg-gray-500 expertProfilePic"></div>
            <div className="pl-4 text-base font-medium">
              Expert's Name <br></br>Expert's Qualification
              <br></br>Expert's Location
            </div>
          </div>
        </div>
      </div>

      <div className="w-3/4 mx-auto">
        {chatContacts.map((chatContact) => (
          <div
            key={chatContact.id}
            className="flex justify-between my-2 bg-gray-100 p-4 rounded-lg shadow-md cursor-pointer"
          >
            <div className="flex">
              <div>
                <div className="pl-4 font-semibold text-lg">
                  {chatContact.name}
                </div>
                <div className="pl-4">{chatContact.lastChat}</div>
              </div>
            </div>
            <div>01/01/23</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExpertChat;
