import React from "react";
import { Route, Routes } from "react-router-dom";
import { Bodypage } from "../Pages/Bodypage.jsx";
import { App } from "../App.jsx";
import { Buy } from "../Pages/Buy.jsx";
import { Rent } from "../Pages/Rent.jsx";
import { Sell } from "../Pages/Sell.jsx";
import { Signin } from "../Pages/Signin.jsx";
import { Signup } from "../Pages/Signup.jsx";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Bodypage />} />
        <Route path="buy" element={<Buy />} />
        <Route path="sell" element={<Sell />} />
        <Route path="rent" element={<Rent />} />
      </Route>
    </Routes>
  );
}

export default Router;
