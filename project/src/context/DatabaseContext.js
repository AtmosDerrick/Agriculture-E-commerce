import React from "react";
import { useContext, createContext, useEffect, useState } from "react";
import { db } from "../firebase";
import { uid } from "uid";
import { set, ref, onValue } from "firebase/database";
import { store } from "../firebase";
import { query, collection, onSnapshot, orderBy } from "firebase/firestore";

const DatabaseContext = createContext();

export const DatabaseContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [messages, setMessages] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      setProducts([]);
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((product) => {
          console.log(product);
          setProducts((oldArray) => [...oldArray, product]);
        });
      }
    });
  }, []);

  useEffect(() => {
    const q = query(collection(store, "order"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setOrders(messages);
    });
    return () => unsubscribe();
  }, []);

  return (
    <DatabaseContext.Provider value={{ products, orders }}>
      {children}
    </DatabaseContext.Provider>
  );
};

export const Databasecontext = () => {
  return useContext(DatabaseContext);
};
