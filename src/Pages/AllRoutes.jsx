import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Components/Login";
import Signup from "../Components/Signup";
import PrivateRoute from "../Components/PrivateRoute";
import Typingmain from "../Components/Typingmain";

import Home from "./Home";

function AllRoutes() {
  return (
    <div className="main">
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/typing"
          element={
            <PrivateRoute>  <Typingmain /></PrivateRoute>
          }
        />
        {/* <Route path="abcd" element={<Typingspeed/>}/> */}
      </Routes>
    </div>
  );
}

export default AllRoutes;
