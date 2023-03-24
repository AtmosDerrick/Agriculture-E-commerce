import { query, collection, onSnapshot, orderBy } from "firebase/firestore";
import { store } from "../../../firebase";
import React, { useState, useEffect, useRef } from "react";
import Message from "./Message";
import SentMessage from "./SentMessage";
import { UserAuth } from "../../../context/AuthContext";

function Chat({ messagesChatCategory, expertLocationEmail }) {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();
  const { user } = UserAuth();

  console.log("messagecart", messagesChatCategory);
  const category = messagesChatCategory;

  useEffect(() => {
    const q = query(
      collection(store, messagesChatCategory),
      orderBy("timestamp")
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe();
  }, []);

  const fetchMessage = messages.filter((message) => {
    return (
      message.email === user.email || message.email === expertLocationEmail
    );
  });

  console.log("fetch message", fetchMessage);

  return (
    <div>
      <main className="flex flex-col p-[50px] relative">
        {console.log(messages)}
        {messages &&
          fetchMessage.map((message) => (
            <Message key={message.id} message={message} />
          ))}
      </main>
      <SentMessage scroll={scroll} category={category} />
      {/*send message component*/}
      <span ref={scroll}></span>
    </div>
  );
}

export default Chat;
