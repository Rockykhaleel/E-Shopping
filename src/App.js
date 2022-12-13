import React from "react";
import { Route, Routes } from "react-router-dom";
import "./styles.css";
import "./container.less";
import Home from "./Pages/Home";
import Category from "./Pages/Category";
import Checkout from "./Pages/Checkout";
import Na from "./Components/Na";

function App() {
  return (
    <div className="App">
      <Na />

      <Routes>
        <Route exact={true} path="/" element={<Home />} />
        <Route exact={true} path="/Category" element={<Category />} />
        <Route exact={true} path="/Checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
