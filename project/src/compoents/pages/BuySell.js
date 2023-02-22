import React from "react";
import { Link } from "react-router-dom";

function BuySell() {
  return (
    <div className="w-3/4 mx-auto">
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

      <div className="grid grid-cols-4 gap-4 mt-8">
        <div className="w-full pb-4 bg-gray-200 rounded-lg">
          <img
            src="https://images.pexels.com/photos/3658482/pexels-photo-3658482.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            srcset=""
            className="rounded-lg h-44 w-full"
          />

          <div className="pt-2">
            <div className="flex justify-between px-4 ">
              <div className="w-1/2 text-base">Item Name</div>
              <div className="w-full text-base font-bold text-right text-green-500">
                Maize Corn
              </div>
            </div>

            <div className="flex justify-between px-4 ">
              <div className="w-1/2 text-base">Price</div>
              <div className="w-full text-base font-bold text-right text-green-500">
                Ghc 12
              </div>
            </div>

            <div className="flex justify-between px-4">
              <div className="w-1/2 text-base">Location</div>
              <div className="w-full text-base font-bold text-right text-green-500">
                Kpando
              </div>
            </div>

            <div className=" px-4 py-1">
              <div className="w-1/2 text-base text-green-500">Description</div>
              <div className="w-full text-base  text-left text-black">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Numquam, mollitia.
              </div>
            </div>
          </div>
          <div className="flex justify-around w-full mt-4">
            <div className="bg-white text-green-500 font-medium w-full mx-4 text-center p-2 rounded">
              <button>Buy</button>
            </div>
            <div className="bg-green-500 font-medium w-full mx-4 p-2 text-center  rounded">
              Contact
            </div>
          </div>
        </div>

        <div className="w-full pb-4 bg-gray-200 rounded-lg">
          <img
            src="https://images.pexels.com/photos/12974496/pexels-photo-12974496.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            srcset=""
            className="rounded-lg h-44 w-full"
          />

          <div className="pt-2">
            <div className="flex justify-between px-4 ">
              <div className="w-1/2 text-base">Item Name</div>
              <div className="w-full text-base font-bold text-right text-green-500">
                Tractor Hiring
              </div>
            </div>

            <div className="flex justify-between px-4 ">
              <div className="w-1/2 text-base">Price</div>
              <div className="w-full text-base font-bold text-right text-green-500">
                Ghc 60/day
              </div>
            </div>

            <div className="flex justify-between px-4">
              <div className="w-1/2 text-base">Location</div>
              <div className="w-full text-base font-bold text-right text-green-500">
                Jaupong
              </div>
            </div>

            <div className=" px-4 py-1">
              <div className="w-1/2 text-base text-green-500">Description</div>
              <div className="w-full text-base  text-left text-black">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Numquam, mollitia.
              </div>
            </div>
          </div>
          <div className="flex justify-around w-full mt-4">
            <div className="bg-white text-green-500 font-medium w-full mx-4 text-center p-2 rounded">
              <button>Buy</button>
            </div>
            <div className="bg-green-500 font-medium w-full mx-4 p-2 text-center  rounded">
              Contact
            </div>
          </div>
        </div>

        <div className="w-full pb-4 bg-gray-200 rounded-lg">
          <img
            src="https://5.imimg.com/data5/AM/TC/MY-5720948/agro-chemicals-1000x1000.jpg"
            alt=""
            srcset=""
            className="rounded-lg h-44 w-full"
          />

          <div className="pt-2">
            <div className="flex justify-between px-4 ">
              <div className="w-1/2 text-base">Item Name</div>
              <div className="w-full text-base font-bold text-right text-green-500">
                Agro-chemical
              </div>
            </div>

            <div className="flex justify-between px-4 ">
              <div className="w-1/2 text-base">Price</div>
              <div className="w-full text-base font-bold text-right text-green-500">
                call for price
              </div>
            </div>

            <div className="flex justify-between px-4">
              <div className="w-1/2 text-base">Location</div>
              <div className="w-full text-base font-bold text-right text-green-500">
                Accra
              </div>
            </div>

            <div className=" px-4 py-1">
              <div className="w-1/2 text-base text-green-500">Description</div>
              <div className="w-full text-base  text-left text-black">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Numquam, mollitia.
              </div>
            </div>
          </div>
          <div className="flex justify-around w-full mt-4">
            <div className="bg-white text-green-500 font-medium w-full mx-4 text-center p-2 rounded">
              <button>Buy</button>
            </div>
            <div className="bg-green-500 font-medium w-full mx-4 p-2 text-center  rounded">
              Contact
            </div>
          </div>
        </div>

        <div className="w-full pb-4 bg-gray-200 rounded-lg">
          <img
            src="https://www.ghanayello.com/img/gh/d/1512147626-82-oil-palm-seedings-ghana-ltd.jpg"
            alt=""
            srcset=""
            className="rounded-lg h-44 w-full"
          />

          <div className="pt-2">
            <div className="flex justify-between px-4 ">
              <div className="w-1/2 text-base">Item Name</div>
              <div className="w-full text-base font-bold text-right text-green-500">
                Palm seedling
              </div>
            </div>

            <div className="flex justify-between px-4 ">
              <div className="w-1/2 text-base">Price</div>
              <div className="w-full text-base font-bold text-right text-green-500">
                Ghc 50
              </div>
            </div>

            <div className="flex justify-between px-4">
              <div className="w-1/2 text-base">Location</div>
              <div className="w-full text-base font-bold text-right text-green-500">
                Kpando
              </div>
            </div>

            <div className=" px-4 py-1">
              <div className="w-1/2 text-base text-green-500">Description</div>
              <div className="w-full text-base  text-left text-black">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Numquam, mollitia.
              </div>
              <div className="flex justify-around w-full mt-4">
                <div className="bg-white text-green-500 font-medium w-full mx-4 text-center p-2 rounded">
                  <button>Buy</button>
                </div>
                <div className="bg-green-500 font-medium w-full mx-4 p-2 text-center  rounded">
                  Contact
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuySell;
