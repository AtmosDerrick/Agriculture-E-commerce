import React from "react";
import { useContext, createContext, useEffect, useState } from "react";
import { db } from "../firebase";
import { uid } from "uid";
import { set, ref, onValue } from "firebase/database";

const DatabaseContext = createContext();

export const DatabaseContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

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

  return (
    <DatabaseContext.Provider value={{ products }}>
      {children}
    </DatabaseContext.Provider>
  );
};

export const Databasecontext = () => {
  return useContext(DatabaseContext);
};
