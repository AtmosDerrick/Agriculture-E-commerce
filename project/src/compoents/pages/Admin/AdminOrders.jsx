import React, { useEffect } from "react";
import { Databasecontext } from "../../../context/DatabaseContext";
import { UserAuth } from "../../../context/AuthContext";

import "firebase/firestore";

import { db } from "../../../firebase";

function AdminOrders() {
  const { user } = UserAuth();
  const { orders } = Databasecontext();
  console.log("orderlist");

  return (
    <div className="w-full pr-4">
      <div className="w-full text-lg text-center font-semibold">
        List of Items you ordered
      </div>
      <table className="table-auto order-separate border-spacing-2 border border-slate-500">
        <tr>
          <th className="border border-slate-700  px-2">Id</th>
          <th className="border border-slate-700  px-2">To Email</th>
          <th className="border border-slate-700  px-2">To city</th>
          <th className="border border-slate-700  px-2">Frm Email</th>
          <th className="border border-slate-700  px-2">Frm City</th>
          <th className="border border-slate-700  px-2">Product</th>
          <th className="border border-slate-700  px-2">Price</th>
          <th className="border border-slate-700  px-2">Qty</th>
          <th className="border border-slate-700  px-2">Total Price</th>
        </tr>

        {orders.map((order) => (
          <tr className="w-full text-base">
            <td className="border border-slate-700  px-2">{order.id}</td>
            <td className="border border-slate-700  px-2">{order.email}</td>
            <td className="border border-slate-700  px-2">{order.fcity}</td>
            <td className="border border-slate-700  px-2">{order.tname}</td>
            <td className="border border-slate-700  px-2">{order.location}</td>

            <td className="border border-slate-700  px-2">
              {order.productName}
            </td>
            <td className="border border-slate-700  px-2">GHc {order.price}</td>
            <td className="border border-slate-700  px-2">{order.quantity}</td>
            <td className="border border-slate-700  px-2">
              GHc {order.price * order.quantity}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default AdminOrders;
