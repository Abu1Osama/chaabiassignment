import React, { useState } from "react";
import "../Styles/Signup.css";
import { useDispatch } from "react-redux";
import { signupUser } from "../Redux/AuthReducer/action";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation tests
    if (!name || !email || !password || !confirmpassword) {
      toast.error("Please fill in all fields.",{
        style: {
          borderRadius: "50px",
          color: "black",
          padding: "1rem 1.5rem",
          fontWeight: "600",
        },
      });
      return;
    }

    if (password !== confirmpassword) {
      toast.error("Password and confirm password do not match.",{
        style: {
          borderRadius: "50px",
          color: "black",
          padding: "1rem 1.5rem",
          fontWeight: "600",
        },
      });
      return;
    }

    const userData = {
      name,
      email,
      password,
      confirmpassword,
    };

    dispatch(signupUser(userData, navigate));
  };
  return (
    <div id="signup">
      <div className="form">
        <h2>Registration Form</h2>
        <form action="">
          <div className="form-child">
            <label htmlFor="">Name:-</label>
            <input
              name="name"
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
              type="text"
            />
          </div>
          <div className="form-child">
            <label htmlFor="">Email:-</label>
            <input
              name="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              type="text"
            />
          </div>
          <div className="form-child">
            <label htmlFor="">Password:-</label>
            <input
              placeholder="Enter your password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
          </div>
          <div className="form-child">
            <label htmlFor="">Confirm Password:-</label>
            <input
              placeholder="Confirm your password"
              name="confirmpassword"
              onChange={(e) => setConfirmpassword(e.target.value)}
              type="password"
            />
          </div>
          <div className="form-child submit-btn">
            <label htmlFor=""></label>
            <input onClick={handleSubmit} type="submit" value={"Submit"} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
