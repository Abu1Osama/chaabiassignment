import React from "react";
import "../Styles/Navbar.css";
import logom from "../Assest/ninja.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {  logoutUser } from "../Redux/AuthReducer/action";

function Navbar() {
  const isAuth = useSelector((state) => state.AuthReducer.isAuth);
  const name = useSelector((state) => state.AuthReducer.name);
  console.log(name)
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login");
  };

  return (
    <div id="nav">
      <a href="/" className="logo">
        <img src={logom} alt="" />
      </a>
      <div className="bar">
        <Link to={"/typing"}>
          <span>TYPING TEST</span>
        </Link>
        
       
        {isAuth ? (
          <>
            <span><i class="fa-regular fa-user"></i> {name}</span>
            <button className="logout" onClick={handleLogout}>LOGOUT</button>
          </>
        ) : (
          <>
            <Link to={"/login"}>LOGIN</Link>
            <Link to={"/signup"}>SIGNUP</Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
