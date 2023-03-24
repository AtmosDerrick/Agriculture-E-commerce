import React, { useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../firebase";
import { Databasecontext } from "../../context/DatabaseContext";
import { useNavigate } from "react-router-dom";
import Order from "./Order";
import Orderlist from "./Orderlist";
import { useSpring, animated } from "react-spring";

function BuySell() {
  const navigate = useNavigate();
  const { products, orders } = Databasecontext();
  const [activeOrder, setActiveOrder] = useState(false);
  const [pname, setPname] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [email, setEmail] = useState("");
  const [clickOrder, setClickOrder] = useState(false);
  const [contact, setContact] = useState("");

  const fade = useSpring({
    opacity: clickOrder ? 1 : 0,
    marginTop: clickOrder ? "-500px" : "50px",
  });

  const order = (
    productName,
    price,
    location,
    description,
    url,
    email,
    contact
  ) => {
    setActiveOrder(true);
    setPname(productName);
    setPrice(price);
    setLocation(location);
    setDescription(description);
    setUrl(url);
    setEmail(email);
    setContact(contact);
    // navigate("/order");
  };

  return (
    <div className="w-full mx-auto">
      {activeOrder ? (
        <div>
          <button
            onClick={() => {
              setActiveOrder(!activeOrder);
            }}
            className="text-xl bg-red-600 py-2 px-8 uppercase  mt-2 font-semibold text-white"
          >
            <span className="text-white">
              <i class="fa-solid fa-left-long"></i>
            </span>
            Back
          </button>
        </div>
      ) : (
        ""
      )}
      {!activeOrder ? (
        <div className={clickOrder ? "flex justify-between" : ""}>
          <div className="w-full">
            <div className=" bg-gray-100 flex between mx-auto  py-4 px-2 ">
              <div className="w-full pl-4">
                <Link to="/sell">
                  <button className="w-1/4 py-2 px-4  text-lg font-medium bg-white shadow-md  text-green-600  ">
                    <i class="fa-sharp fa-solid fa-tag  text-orange-500 "></i>

                    <span>Sell</span>
                  </button>
                </Link>
              </div>
              <div className="w-1/2 mr-4 ">
                <select
                  id="buytype"
                  name="buytype"
                  className="p-2 text-green-500"
                >
                  <option value="machinery" disabled>
                    Select Product type and service
                  </option>
                  <option value="machinery">Machinery Rentals</option>
                  <option value="agro-chemicals">Agro-Chemicals</option>
                  <option value="farm-produce">Farm Produce</option>
                  <option value="seedling">Seedlings</option>
                </select>
              </div>
              <div className="w-full flex justify-center">
                <div>
                  <button
                    className=" text-green-600 p-2 w-full px-4    text-lg bg-white font-medium shadow-md"
                    onClick={() => {
                      setClickOrder(!clickOrder);
                      console.log("click order");
                    }}
                  >
                    <i class="fa-solid fa-cart-shopping text-orange-500 uppercase"></i>{" "}
                    <span>Orders</span>
                  </button>
                </div>
              </div>
            </div>

            <div
              className={
                !clickOrder
                  ? "grid grid-cols-5 gap-4 mt-8"
                  : "grid grid-cols-3 gap-4 mt-8"
              }
            >
              {products.map((product) => (
                <div
                  key={product.uuid}
                  className="w-full pb-4  shadow-md pt-2  rounded-lg"
                >
                  <img
                    src={product.url}
                    alt=""
                    srcset=""
                    className="rounded-lg h-44 w-full px-2"
                  />

                  <div className="pt-2">
                    <div className="px-4 text-gray-600">
                      <div className="w-full text-lg text-left font-medium py-2">
                        {product.productName.toString().toUpperCase()} (
                        {product.location})
                      </div>
                    </div>

                    <div className="px-4 ">
                      <div className="w-full text-lg font-bold  text-gray-900">
                        Ghc {product.price}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-around w-full mt-4">
                    <button
                      className="bg-gradient-to-r from-orange-500 via-orange-600  to-orange-500 text-lg text-white px-4 font-medium w-full mx-2 p-2 text-center  rounded"
                      onClick={() => {
                        order(
                          product.productName,
                          product.price,
                          product.location,
                          product.description,
                          product.url,
                          product.email,
                          product.contact
                        );
                      }}
                    >
                      Order
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {clickOrder && (
            <animated.div
              className="w-2/4 bg-white ml-4 mt-2 h-[50rem] pt-12"
              style={fade}
            >
              <Orderlist />
            </animated.div>
          )}
        </div>
      ) : (
        <div>
          <Order
            productName={pname}
            price={price}
            location={location}
            description={description}
            url={url}
            email={email}
            activeOrder={activeOrder}
            contact={contact}
          />
        </div>
      )}
    </div>
  );
}

export default BuySell;
