import React from "react";
import { query, collection, onSnapshot, orderBy } from "firebase/firestore";
import { store } from "../../../firebase";
import { useState, useEffect, useRef } from "react";
import Message from "../chat/Message";

import { UserAuth } from "../../../context/AuthContext";
import ExpertSentMessage from "../chat/ExpertSentMessage";

function Chatlist({ category }) {
  const scroll = useRef();
  const { user } = UserAuth();
  const [messages, setMessages] = useState([]);
  const [userEmail, setUserEmail] = useState("");

  console.log("cat in workinf", category);

  //use effect to determin which category of expert

  useEffect(() => {
    console.log("sgq", category);
    const q = query(collection(store, category), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe();
  }, []);

  // Find the unique values for the "name" property
  const uniqueColors = [
    ...new Set(Object.values(messages).map((message) => message.name)),
  ];
  console.log("unnique", uniqueColors);
  console.log("textmessage", messages);

  // Find the object with the highest index for each unique color
  const filteredObj = uniqueColors.reduce((acc, name) => {
    const index = Math.max(
      ...Object.keys(messages)
        .filter((key) => messages[key].name === name)
        .map((key) => Number(key))
    );
    const highestObj = messages[String(index)];
    return highestObj ? { ...acc, [index]: highestObj } : acc;
  }, {});

  console.log("filtered", filteredObj);

  const [expertEmail, setExpertEmail] = useState(user.email);

  const fetchMessage = messages.filter((message) => {
    return message.email == expertEmail || message.email == userEmail;
  });

  // seet email to current email to view only that chat

  const viewChat = (particularEmail) => {
    setUserEmail(particularEmail);
    console.log("userEmailllll", particularEmail);

    const onlyexpertmessage = fetchMessage.filter((message) => {
      return message.receiver === userEmail || message.email == expertEmail;
    });
  };

  return (
    <div className="w-full flex justify-between">
      <div className=" h-screen w-1/2  mt-4 pt-4 border-r-4 border-green-800 ">
        {Object.entries(filteredObj).map(([key, message]) =>
          //filter out element with no name
          message.name ? (
            <div>
              <div
                key={message.uid}
                className="bg-gray-100 br-4-green-800 mb-4 font-mono py-4 px-6 hover:cursor-pointer hover:shadow-lg"
                onClick={() => {
                  viewChat(message.email);
                }}>
                <div className="text-lg font-semibold text-green-700">
                  {message.name}
                </div>
                <div className="text-black font-normal">{message.text}</div>
              </div>
            </div>
          ) : (
            ""
          )
        )}
      </div>

      <div className="w-full">
        <main className="flex flex-col p-[50px] relative">
          {console.log(messages)}
          {messages &&
            fetchMessage.map((message) => (
              <Message key={message.id} message={message} />
            ))}
        </main>
        <ExpertSentMessage
          scroll={scroll}
          category={category}
          receiver={userEmail}
        />

        {/*send message component*/}
        <span ref={scroll}></span>
      </div>
    </div>
  );
}

export default Chatlist;
