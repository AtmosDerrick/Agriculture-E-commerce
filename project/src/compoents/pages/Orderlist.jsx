import React, { useEffect } from "react";
import { Databasecontext } from "../../context/DatabaseContext";
import { UserAuth } from "../../context/AuthContext";

import "firebase/firestore";

import { db } from "../../firebase";
// import { collection, doc } from "firebase/firestore";

function Orderlist() {
  const { user } = UserAuth();
  const { orders } = Databasecontext();
  console.log("orderlist");

  const filterOrder = orders.filter((order) => {
    return order.email === user.email;
  });

  const limitedOrder = filterOrder.slice(-7);

  return (
    <div className="w-full pr-4">
      <div className="w-full text-lg text-center font-semibold">
        List of Items you ordered
      </div>
      <ol>
        <li>
          {limitedOrder.map((order) => (
            <div className="w-full border-b-4 shadow-md my-2 py-2 px-2">
              <div className="text-base font-medium text-right">{order.id}</div>
              <div className="w-full grid grid-cols-3">
                <div className="text-base font-semibold text-black text-left">
                  Product
                </div>
                <div className="text-base font-semibold text-black text-left">
                  Price
                </div>
                <div className="text-base font-semibold text-black text-left">
                  Quantity
                </div>
              </div>
              <div className="w-full grid grid-cols-3">
                <div className="w-full text-base ">
                  {order.productName.toUpperCase()}
                </div>
                <div className="w-full text-base ">Ghc {order.price}</div>
                <div className="w-full text-base ">{order.quantity}</div>
              </div>
            </div>
          ))}
        </li>
      </ol>
    </div>
  );
}

export default Orderlist;
