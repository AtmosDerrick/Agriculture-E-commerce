import React, { useState, useEffect, useRef } from "react";
import { db, storage } from "../../../firebase";
import { set, remove, ref } from "firebase/database";
import { Databasecontext } from "../../../context/DatabaseContext";
import { UserAuth } from "../../../context/AuthContext";

function AdminProductList() {
  const { products } = Databasecontext();
  const { user } = UserAuth();

  const handleDelete = (products) => {
    remove(ref(db, `/${products.uuid}`));
    console.log("delete", products.uuid);
  };
  return (
    <div>
      <table className="table-auto order-separate border-spacing-2 border border-slate-500">
        <tr>
          <th className="border-4 border-slate-700  px-2 text-base">Name</th>
          <th className="border-4 border-slate-700  px-2 text-base">
            Product Name
          </th>
          <th className="border-4 border-slate-700  px-2 text-base">Price</th>
          <th className="border-4 border-slate-700  px-2 text-base">Date</th>
          <th className="border-4 border-slate-700  px-2 text-base">Contact</th>
          <th className="border-4 border-slate-700  px-2 text-base">Email</th>
          <th className="border-4 border-slate-700  px-2 text-base">
            Location
          </th>
          <th className="border-4 border-slate-700  px-2 text-base">
            Category
          </th>
        </tr>

        {products.map((product) => (
          <tr>
            <td className="border-4 border-slate-700  px-2 text-base">
              {product.name}
            </td>
            <td className="border-4 border-slate-700  px-2 text-base">
              {product.productName}
            </td>

            <td className="border-4 border-slate-700  px-2 text-base">
              {product.price}
            </td>
            <td className="border-4 border-slate-700  px-2 text-base">
              {product.date}
            </td>
            <td className="border-4 border-slate-700  px-2 text-base">
              {product.contact}
            </td>
            <td className="border-4 border-slate-700  px-2 text-base">
              {product.email}
            </td>
            <td className="border-4 border-slate-700  px-2 text-base">
              {product.location}
            </td>
            <td className="border-4 border-slate-700  px-2 text-base">
              {product.category}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default AdminProductList;
