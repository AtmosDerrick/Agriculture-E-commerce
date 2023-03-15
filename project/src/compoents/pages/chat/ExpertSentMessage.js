import React, { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { UserAuth } from "../../../context/AuthContext";

import { auth, store } from "../../../firebase";

function ExpertSentMessage({ scroll, category, receiver }) {
  const { user } = UserAuth();
  const [input, setInput] = useState("");
  console.log("sentmessage", category);

  console.log("inputtt", receiver);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (input === "") {
      alert("Please enter a valid message");
      return;
    }
    const { uid, displayName } = auth.currentUser;
    await addDoc(collection(store, category), {
      text: input,
      name: displayName,
      uid,
      email: receiver,
      recieve: receiver,

      timestamp: serverTimestamp(),
    });

    setInput("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <form
        onSubmit={sendMessage}
        className="h-14 w-full max-w-[728px] flex text-xl absolute bottom-0"
      >
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          className="w-full text-xl text-white  p-3 bg-gray-900 text-white-outline-none border-none"
          type="text"
          placeholder="message"
        />
        <button className="w-[20%] bg-green-500" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}

export default ExpertSentMessage;
