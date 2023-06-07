import React, { useState } from "react";
import "../Styles/Login.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  login,
  loginFailure,
  loginRequest,
  loginSuccess,
} from "../Redux/AuthReducer/action";
import axios from "axios";
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
    dispatch(loginRequest());

    axios
      .get("https://semi-mock2.onrender.com/users", {
        params: {
          email: email,
          password: password,
        },
      })
      .then((response) => {
        const userData = response.data[0];
        if (userData) {
          dispatch(loginSuccess(userData.name));
          navigate(location.state?.from || "/");
          toast.success("Login successfully 😍 !", {
            style: {
              borderRadius: "50px",
              background: "#989898",
              color:"green",
              padding: "1rem 1.5rem",
              fontWeight: "600",
            },
          });
        } else {
          dispatch(loginFailure());
          toast.error("Wrong credential 👻 !", {
            style: {
              borderRadius: "50px",
              background: "#989898",
              color: "red",
              padding: "1rem 1.5rem",
              fontWeight: "600",
            },
          });
        }
      })
      .catch((error) => {
        dispatch(loginFailure());
      });
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
          {isError && (
            <div className="login-form-child">Invalid email or password</div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Login;
