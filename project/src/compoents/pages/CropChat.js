import React, { useState } from "react";
import "./style/clientchat.css";

function CropChat() {
  const [clientChat, setClientChat] = useState([
    "Hello my name is John",
    "i need help with my cocoa farm",
  ]);

  const [expertChat, setExpertChat] = useState(["Hello", "How can help you"]);
  return (
    <div className="w-3/4 mx-auto border-4 bg-gray-50 h-auto">
      <div className="w-full  border-b-4 border-green-600 ">
        <div className="py-4 px-2 flex justify-between">
          <div className="profile flex">
            <div className="w-24 h-24  bg-gray-500 expertProfilePic"></div>
            <div className="pl-4 text-base font-medium">
              Expert's Name <br></br>Expert's Qualification
              <br></br>Expert's Location
            </div>
          </div>

          <div className="text-lg text-green-600 font-bold mr-8">
            Crop Farming Expert
          </div>
        </div>
      </div>

      <div className=" bg-gray-100 w-full " id="chatingbox">
        <div className="w-full text-right px-4 mt-4">
          <div className="italic text-sm">You</div>
          <div className="italic text-sm">01/02/2023</div>

          <div>{clientChat[0]}</div>
        </div>
        <div className="pl-4">
          <div className="italic text-sm">Expert</div>
          <div className="italic text-sm">01/02/2023</div>

          <div className="text-green-500">{expertChat[0]}</div>
        </div>
      </div>

      <div className="w-3/4 mx-auto mt-8 px-4 " id="chattext">
        <form>
          <input
            type="text"
            placeholder="Hello"
            className="w-3/4 h-12 border-4 border-gray-900 px-4 text-base font-medium"
          />

          <button className="inline-block ml-4 text-base bg-green-600 font-semibold shadow-lg font-sans py-2 px-8 mb-2">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default CropChat;
