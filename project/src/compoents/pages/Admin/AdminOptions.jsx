import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminProductList from "./AdminProductList";
import AdminOrders from "./AdminOrders";

function AdminOptions() {
  const [page, setPage] = useState("adminOrder");
  const navigate = useNavigate();
  //view main page from click
  const mainPage = (type) => {
    if (type === "adminOrder") {
      setPage("adminOrder");
    } else if (type === "adminExperts") {
      setPage("adminExpert");
    } else if (type === "adminUsers") {
      setPage("adminUsers");
    } else if (type === "adminProducts") {
      setPage("adminProducts");
    }
  };

  //   useEffect(() => {
  //     mainPage();
  //   }, [page]);

  return (
    <div className="w-full flex justify-between ">
      <div className="w-1/4 mt-2 h-[50rem]">
        <div
          onClick={() => {
            mainPage("adminOrder");
          }}
          className="w-full hover:cursor-pointer text-center text-lg uppercase py-4 my-2 text-white font-bold bg-gradient-to-r from-green-800 via-green-500 to-green-800 shadow-md hover:opacity-75 "
        >
          Orders
        </div>
        <div
          onClick={() => {
            mainPage("adminExperts");
          }}
          className="w-full hover:cursor-pointer text-center text-lg uppercase py-4 my-2 text-white font-bold bg-gradient-to-r from-green-800 via-green-500 to-green-800 shadow-md hover:opacity-75 "
        >
          Experts
        </div>

        <div
          onClick={() => {
            mainPage("adminProducts");
          }}
          className="w-full hover:cursor-pointer text-center text-lg uppercase py-4 my-2 text-white font-bold bg-gradient-to-r from-green-800 via-green-500 to-green-800 shadow-md hover:opacity-75 "
        >
          Product
        </div>
      </div>

      <div className="w-full ml-4">
        {page === "adminOrder" ? <AdminOrders /> : " "}
        {page === "adminProducts" ? <AdminProductList /> : " "}
      </div>
    </div>
  );
}

export default AdminOptions;
