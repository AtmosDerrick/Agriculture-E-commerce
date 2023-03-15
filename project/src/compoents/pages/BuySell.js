import React from "react";
import { Link } from "react-router-dom";
import { db } from "../../firebase";
import { Databasecontext } from "../../context/DatabaseContext";

function BuySell() {
  const { products } = Databasecontext();

  return (
    <div className="w-full mx-auto">
      <div className=" bg-green-500 flex between mx-auto  py-4 px-2">
        <div className="w-full pl-4">
          <Link to="/sell">
            <button className="w-1/4 text-base font-medium bg-gray-100 text-green-600 p-2">
              Sell
            </button>
          </Link>
        </div>
        <div className="w-full ">
          <select id="buytype" name="buytype" className="p-2 text-green-500">
            <option value="machinery" disabled>
              Select Product type and service
            </option>
            <option value="machinery">Machinery Rentals</option>
            <option value="agro-chemicals">Agro-Chemicals</option>
            <option value="farm-produce">Farm Produce</option>
            <option value="seedling">Seedlings</option>
          </select>
        </div>
        <div className="w-full">
          <input type="text" placeholder="Search...." className="p-2" />
          <button className="bg-gray-100 text-green-600 p-2 w-1/4 mt-2 text-base font-medium">
            Search
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mt-8 ">
        {products.map((product) => (
          <div
            key={product.uuid}
            className="w-full pb-4 bg-gray-200 rounded-lg"
          >
            <img
              src={product.url}
              alt=""
              srcset=""
              className="rounded-lg h-44 w-full"
            />

            <div className="pt-2">
              <div className="px-4 bg-green-800 text-white">
                <div className="w-full text-lg text-center font-bold  text-green-white py-2">
                  {product.productName.toString().toUpperCase()}
                </div>
              </div>

              <div className="px-4 ">
                <div className="w-full text-lg font-bold text-right text-green-500">
                  Ghc {product.price}
                </div>
              </div>

              <div className="flex justify-between px-4">
                <div className="w-1/2 text-base">Location</div>
                <div className="w-full text-base font-bold text-right text-green-500">
                  {product.location.toString().toUpperCase()}
                </div>
              </div>

              <div className="flex justify-between px-4">
                <div className="w-1/2 text-base">Contact</div>
                <div className="w-full text-base font-bold text-right text-green-500">
                  {product.contact.toString().toUpperCase()}
                </div>
              </div>

              <div className=" px-4 py-1">
                <div className="w-1/2 text-base text-black underline ">
                  Description
                </div>
                <div className="w-full text-base   text-left text-black">
                  {product.description}
                </div>
              </div>
            </div>
            <div className="flex justify-around w-full mt-4">
              <button className="bg-green-500 text-lg text-white px-4 font-medium w-full mx-2 p-2 text-center  rounded">
                Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BuySell;
