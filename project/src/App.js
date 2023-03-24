import "./App.css";
import NavBar from "./compoents/pages/NavBar";

import Category from "./compoents/pages/Category";
import BuySell from "./compoents/pages/BuySell";
import Sell from "./compoents/pages/Sell";
import Experts from "./compoents/pages/Expert/Experts";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import ExpertChat from "./compoents/pages/Expert/ExpertChat";
import CropChat from "./compoents/pages/CropChat";
import { AuthContextProvider } from "./context/AuthContext";
import LandingP from "./compoents/pages/LandingP";
import Protected from "./compoents/pages/Protected";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { DatabaseContextProvider } from "./context/DatabaseContext";
import AnimalChat from "./compoents/pages/AnimalChat";
import Admin from "./compoents/pages/Admin/Admin";

function App() {
  const [username, setUsername] = useState(" ");

  return (
    <div className="App w-3/4 mx-auto">
      <AuthContextProvider>
        <DatabaseContextProvider>
          <BrowserRouter>
            <NavBar />

            <Routes>
              <Route path="/" element={<LandingP />} />
              <Route
                path="/category"
                element={
                  <Protected>
                    <Category />
                  </Protected>
                }
              />
              <Route path="/buyandsell" element={<BuySell />} />
              <Route path="/sell" element={<Sell />} />
              <Route path="/experts" element={<Experts />} />
              <Route path="/experts" element={<Experts />} />
              <Route path="/expertchat" element={<ExpertChat />} />
              <Route path="/cropchat" element={<CropChat />} />
              <Route path="/animalchat" element={<AnimalChat />} />
              <Route path="admin" element={<Admin />} />
            </Routes>
          </BrowserRouter>
        </DatabaseContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
