import "./App.css";
import NavBar from "./compoents/pages/NavBar";
import Welcome from "./compoents/pages/Welcome";
import Signin from "./compoents/pages/Signin";
import Signup from "./compoents/pages/Signup";
import Category from "./compoents/pages/Category";
import BuySell from "./compoents/pages/BuySell";
import Sell from "./compoents/pages/Sell";
import Experts from "./compoents/pages/Experts";
import ExpectCart from "./compoents/pages/ExpectCart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import ExpertChat from "./compoents/pages/ExpertChat";
import CropChat from "./compoents/pages/CropChat";

function App() {
  const [username, setUsername] = useState(" ");

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar title={username} />
        <Routes>
          <Route index element={<Welcome />} />

          <Route
            path="/signin"
            element={
              <Signin fetchUsername={(username) => setUsername(username)} />
            }
          />

          <Route path="/signup" element={<Signup />} />
          <Route path="/category" element={<Category title={username} />} />
          <Route path="/buyandsell" element={<BuySell />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/experts" element={<Experts />} />
          <Route path="/expertchat" element={<ExpertChat />} />
          <Route path="/cropchat" element={<CropChat />} />

          <Route path="*" element={<Welcome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
