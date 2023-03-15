import React, { useState, useEffect, useRef } from "react";
import { db, storage } from "../../firebase";
import { uid } from "uid";
import { set, remove, ref } from "firebase/database";
import "./style/sell.css";
import { Databasecontext } from "../../context/DatabaseContext";
import { UserAuth } from "../../context/AuthContext";

import { uploadBytes, getDownloadURL } from "firebase/storage";
import { ref as storageRef } from "firebase/storage";

function Sell() {
  const { products } = Databasecontext();
  const { user } = UserAuth();
  const current = new Date();

  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  const time =
    current.getHours() +
    ":" +
    current.getMinutes() +
    ":" +
    current.getSeconds();

  console.log("dsfdfad", date);
  console.log("dsfdfad", time);

  const [name, setName] = useState("");
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [contact, setContact] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState(null);

  let userEmail = user.email;

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  console.log("image", image);

  const submitForm = (e) => {
    console.log("am workinf");
    //uploading image to firebase store
    const imageRef = storageRef(storage, image.name);
    uploadBytes(imageRef, image)
      .then(() => {
        getDownloadURL(imageRef)
          .then((url) => {
            setUrl(url);
            console.log("urlfff", url);

            //write
            const uuid = uid();
            set(ref(db, `/${uuid}`), {
              name,
              email: userEmail,
              productName,
              category,
              price,
              location,
              contact,
              description,
              uuid,
              date,
              time,
              url,
            });
          })
          .catch((error) => {
            console.log(error.message, "error getting image url");
          });
        setImage(null);
      })
      .catch((error) => {
        console.log(error.message, "error getting image url");
      });
    console.log("url", url);

    setName("");
    setProductName("");
    setPrice("");
    setLocation("");
    setContact("");
    setDescription("");
  };
  // useEffect(() => {
  //   products.filter((product) => {
  //     if (product.email === user.email) {
  //       return console.log("dfd", product);
  //     }
  //   });
  // }, [products]);

  let specificProduct = products.filter(
    (product) => product.email === user.email
  );

  const handleDelete = (products) => {
    remove(ref(db, `/${products.uuid}`));
    console.log("delete", products.uuid);
  };

  return (
    <div className="w-full mx-auto flex justify-between gap-2 sell py-2">
      <form class="bg-white w-full  mr-4 mx-auto rounded-lg  px-8 pt-6 pb-2 mb-4 shadow-lg">
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-0"
            for="username"
          >
            Name
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            maxlength="20"
            type="text"
            placeholder="Osei Mavis"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold" for="username">
            Product Name
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            maxlength="20"
            type="text"
            placeholder="Farm Produce"
            value={productName}
            onChange={(e) => {
              setProductName(e.target.value);
            }}
          />
        </div>
        <div className="mb-4">
          <label class="block text-gray-700 text-sm font-bold " for="username">
            Category
          </label>
          <select
            id="buytype"
            name="buytype"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
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

        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold " for="username">
            Price{" "}
            <span className="text-sm text-gray-500 font-normal">(In Ghc)</span>
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            maxlength="10"
            type="number"
            placeholder="Ghc 00.00"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold " for="username">
            Location
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            maxlength="20"
            type="text"
            placeholder="Accra"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold " for="phone">
            Contact
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            type="tel"
            name="phone"
            maxLength="10"
            placeholder="0247777777"
            value={contact}
            onChange={(e) => {
              setContact(e.target.value);
            }}
          />
        </div>

        <div class="flex items-center justify-left">
          <div>
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Description
            </label>

            <textarea
              className=" border-gray-500 border-2"
              name="description"
              maxlength="30"
              id="sellTextArea"
              cols="25"
              rows="2"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            ></textarea>
          </div>
          <div>
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Upload Product Image
            </label>
            <input
              type="file"
              class=" text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              accept=".jpg,.png"
              onChange={handleImageChange}
            />
            {image ? (
              <div className="inline-block text-sm ml-4">{image.name}</div>
            ) : null}
          </div>

          <div class="flex items-center justify-between">
            <button
              class="bg-green-800 hover:bg-green-800 text-white font-bold py-2 px-8 ml-8 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={submitForm}
            >
              Submit
            </button>
          </div>
        </div>
      </form>

      <div className=" bg-gray-100 w-3/4 right-0 relative mr-4">
        <div className="w-full text-center py-2 italic text-lg bg-green-800 mb-4 text-white">
          List of Products Available for sale
        </div>
        {specificProduct.map((product) => (
          <div className="flex justify-between px-8 py-2 shadow-md font-medium">
            <div className="text-lg">
              <br></br>
              {product.productName}
            </div>
            <div className="text-red-500 flex justify-between">
              <div className="mr-8 text-lg">
                {" "}
                <span className="text-gray-500 text-sm italic">
                  {product.date}
                </span>
                <br></br>
                GHc {product.price}
              </div>
              <button
                className="text-lg text-white bg-green-800 font-semibold shadow-md p-2"
                onClick={() => handleDelete(product)}
              >
                X
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sell;
