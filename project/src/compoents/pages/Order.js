import React, { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { UserAuth } from "../../context/AuthContext";

import { auth, store } from "../../firebase";
function Order({
  productName,
  price,
  location,
  description,
  url,
  email,
  contact,
}) {
  const { user } = UserAuth();
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [quantity, setQuantity] = useState("");
  const [Alert, setAlert] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
    setSelectedCity("");
  };

  console.log("current user", user.displayName);

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const regions = [
    {
      region: "Greater Accra Region",
      cities: ["Accra", "Tema", "Madina", "Dansoman"],
    },
    {
      region: "Ashanti Region",
      cities: ["Kumasi", "Obuasi", "Bekwai", "Mampong"],
    },
    {
      region: "Central Region",
      cities: ["Cape Coast", "Winneba", "Mankessim", "Elmina"],
    },
    {
      region: "Eastern Region",
      cities: ["Koforidua", "Nkawkaw", "Akosombo", "Begoro"],
    },
    {
      region: "Western Region",
      cities: ["Takoradi", "Sekondi", "Axim", "Tarkwa"],
    },
    {
      region: "Northern Region",
      cities: ["Tamale", "Yendi", "Savelugu", "Bimbila"],
    },
    {
      region: "Upper East Region",
      cities: ["Bolgatanga", "Navrongo", "Bawku", "Zebilla"],
    },
    {
      region: "Upper West Region",
      cities: ["Wa", "Tumu", "Nandom", "Lawra"],
    },
    {
      region: "Volta Region",
      cities: ["Ho", "Keta", "Aflao", "Kpando", "Hohoe"],
    },
    {
      region: "Bono Region",
      cities: ["Sunyani", "Techiman", "Wenchi", "Berekum"],
    },
    {
      region: "Ahafo Region",
      cities: ["Goaso", "Hwidiem", "Kenyasi", "Bechem"],
    },
    {
      region: "Bono East Region",
      cities: ["Kintampo", "Nkoranza", "Atebubu", "Techiman North"],
    },
    {
      region: "Savannah Region",
      cities: ["Damongo", "Buipe", "Yapei", "Sawla"],
    },
    {
      region: "North East Region",
      cities: ["Nalerigu", "Bunkpurugu", "Walewale", "Gambaga"],
    },
    {
      region: "Oti Region",
      cities: ["Dambai", "Kadjebi", "Jasikan", "Kete Krachi"],
    },
    {
      region: "Western North Region",
      cities: ["Sefwi Wiawso", "Enchi", "Bibiani", "Sefwi Bekwai"],
    },
  ];

  const selectedRegionObj = regions.find(
    (region) => region.region === selectedRegion
  );
  const cities = selectedRegionObj ? selectedRegionObj.cities : [];

  const sendOrder = async (e) => {
    e.preventDefault();
    if (quantity === "" || selectedRegion === "" || selectedCity === "") {
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
        console.log("set time out");
      }, 4000);
    } else {
      setIsLoading(true);
      e.preventDefault();
      const { uid } = auth.currentUser;
      await addDoc(collection(store, "order"), {
        fname: user.displayName,
        tname: email,
        productName: productName,
        url: url,
        price: price,
        location: location,
        fregion: selectedRegion,
        fcity: selectedCity,
        uid,
        email: user.email,
        quantity: quantity,

        timestamp: serverTimestamp(),
      });

      setIsLoading(false);
      setQuantity("");
    }
  };

  return (
    <div className="w-2/4  mx-auto rounded-lg h-[30rem] ">
      <div className="">
        {Alert && (
          <div className="w-full bg-red-600 text-white text-lg py-2  text-center mb-2">
            Complete your details
          </div>
        )}
        <div className="w-full  ">
          <div className="w-full mx-auto   flex center ">
            <img src={url} alt={productName} className="w-full h-[15rem]" />
          </div>
        </div>

        <div className="  bg-white ">
          <div className="px-2  text-left text-2xl py-4 text-black font-mono font-medium">
            <div className="uppercase text-xl">
              <div className="w-full flex justify-between">
                <div className="text-3xl text-orange-500 font-bold">
                  {productName}
                </div>
                <div className="uppercase italic text-lg text-black font-bold ">
                  <span className="text-orange-500">
                    <i class="fa-solid fa-money-check-dollar"></i>
                  </span>
                  Ghc {price}
                </div>
                <div>
                  <span className="text-orange-500">
                    <i class="fa-solid fa-location-dot"></i>
                  </span>
                  {location}
                </div>
                <div>
                  <span className="text-orange-500">
                    <i class="fa-solid fa-phone"></i>
                  </span>
                  {contact}
                </div>
              </div>

              <div>
                <span className="">Description: </span> {description}
              </div>
            </div>
          </div>
          <form>
            <div className="w-3/4 mx-auto  h-[10rem] ">
              <div className="w-full flex justify-between">
                <div className="w-1/2">
                  <input
                    type="number"
                    placeholder="Enter Quantity"
                    className="w-3/4 pl-2 h-12 mt-4 border-4 border-black text-lg rounded-lg"
                    onChange={(e) => {
                      setQuantity(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="w-full">
                <div className="w-full h-12  mt-2 border-4 border-black text-lg rounded-lg">
                  <select
                    id="regions"
                    name="regions"
                    value={selectedRegion}
                    onChange={handleRegionChange}>
                    <option value="">Select a Region</option>
                    {regions.map((region) => (
                      <option key={region.region} value={region.region}>
                        {region.region}
                      </option>
                    ))}
                  </select>
                  {cities.length > 0 && (
                    <div className="w-full h-12 mt-8 border-4 border-black text-lg rounded-lg">
                      <label htmlFor="cities">Select City:</label>
                      <select
                        id="cities"
                        name="cities"
                        value={selectedCity}
                        onChange={handleCityChange}>
                        <option value="">Select a City</option>
                        {cities.map((city) => (
                          <option key={city} value={city}>
                            {city}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="w-1/2 mx-auto flex justify-center">
        <button
          onClick={sendOrder}
          className={
            isLoading
              ? "w-full text-lg py-2 mt-12 px-8 bg-gray-500 opacity-50 text-white  rounded-md"
              : "w-full text-lg py-2 mt-12 px-8 bg-orange-500 text-white  rounded-md"
          }
          disabled={isLoading}>
          {isLoading ? <span>Loading...</span> : <span>Order</span>}
        </button>
      </div>
    </div>
  );
}

export default Order;
