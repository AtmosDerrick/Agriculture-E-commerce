import React, { useEffect } from "react";
import { Databasecontext } from "../../context/DatabaseContext";
import { UserAuth } from "../../context/AuthContext";

import "firebase/firestore";

import { db } from "../../firebase";
// import { collection, doc } from "firebase/firestore";

function OrdersRecieve() {
  const { user } = UserAuth();
  const { orders } = Databasecontext();

  const filterOrder = orders.filter((order) => {
    return order.tname === user.email;
  });

  console.log(orders, "ddfsgggg");

  const limitedOrder = filterOrder.slice(-10);

  return (
    <div className="w-full pr-4">
      <div className="w-full text-lg text-center font-semibold">
        Customer Orders
      </div>
      <ol>
        <li>
          {limitedOrder.map((order) => (
            <div className="w-full border-b-4 shadow-md bg-gray-900  my-2 py-2 px-2">
              <div className="text-base font-medium text-left text-yellow-300">
                {order.id}
              </div>
              <div className="w-full grid grid-cols-4">
                <div className="text-base font-normal text-gray-400 text-left">
                  Product
                </div>
                <div className="w-full text-base font-semibold text-white  ">
                  {order.productName.toUpperCase()}
                </div>
                <div></div>
                <div></div>
                <div className="text-base font-normal text-gray-400 text-left">
                  Price
                </div>
                <div className="w-full text-base font-semibold  text-white ">
                  Ghc {order.price}
                </div>

                <div className="text-base font-normal text-gray-400 text-left">
                  Quantity
                </div>
                <div className="w-full text-base font-semibold text-white  ">
                  {order.quantity}
                </div>

                <div className="text-base font-normal text-gray-400 text-left">
                  Location
                </div>
                <div className="w-full text-base font-semibold  text-white ">
                  {order.fregion}
                  <span className="inline-block">({order.fcity})</span>
                </div>
              </div>
            </div>
          ))}
        </li>
      </ol>
    </div>
  );
}

export default OrdersRecieve;
