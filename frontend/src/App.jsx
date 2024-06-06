import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Pages/Home/Home";
import Fotter from "./Components/Fotter/Fotter";
// import DownloadApp from "./Components/DownloadApp/DownloadApp";
import { useState } from "react";
import LoginPopup from "./Components/LoginPopup/LoginPopup";
import Cart from "./Pages/Cart/Cart";
import PlaceOrder from "./Pages/Placeorder/PlaceOrder";

function App() {
  const [showLogin,setShowLogin] =useState(false)
  return ( 
    <>
      {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className="app">
        <NavBar setShowLogin={setShowLogin} />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route path="/Cart" element={<Cart/>} />
          <Route path="/order" element={<PlaceOrder/>} />
          <Route path="/verify" element={<PlaceOrder/>}/>
        </Routes>
      </div>
      {/* <DownloadApp/> */}
      <Fotter />
    </>
  );
}

export default App;
