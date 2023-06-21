import React, { useState } from "react";
import "../Styles/Login.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest, loginSuccess, loginFailure, loginUser } from "../Redux/AuthReducer/action";
import { toast } from "react-hot-toast";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isLoading = useSelector((state) => state.AuthReducer.isLoading);
  const isError = useSelector((state) => state.AuthReducer.isError);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if email and password are empty
    if (email === "" || password === "") {
      toast.error("Please enter email and password.",{
        style: {
          borderRadius: "50px",
          color: "black",
          padding: "1rem 1.5rem",
          fontWeight: "600",
        },
      });
      return;
    }

    const body = {
      email,
      password,
    };

    dispatch(loginRequest());

    dispatch(loginUser(body, navigate,location)); 

    setEmail(""); 
    setPassword("");
  };

  return (
    <div id="login">
      <div className="login-form">
        <h2>Login Form</h2>
        <form>
          <div className="login-form-child">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              required={true}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="login-form-child">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              required={true}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {isLoading ? (
            <div className="login-form-child">Logging in...</div>
          ) : (
            <div className="login-form-child login-submit-btn">
              <input type="submit" value="Submit" onClick={handleLogin} />
            </div>
          )}
       
        </form>
      </div>
    </div>
  );
}

export default Login;
