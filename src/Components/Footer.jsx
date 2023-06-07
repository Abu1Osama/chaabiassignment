import React from "react";
import "../Styles/Footer.css";

function Footer() {
  return (
    <div id="footer-main">
      <div className="footer-top">
        <div>
          {" "}
          <ul>
            <li>About us</li>
            <li>Privacy & Terms</li>
            <li>FAQ</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className="footer-icon">
          <select name="" id="">
            <option value="">English</option>
            <option value="">Hindi</option>
          </select>

          <div className="footer-icon-bottom">
            <i class="fa-brands fa-instagram" style={{ color: "#e8eaee" }}></i>

            <i class="fa-brands fa-facebook" style={{ color: "#e8eaee" }}></i>

            <i class="fa-brands fa-twitter" style={{ color: "#e8eaee" }}></i>
          </div>
        </div>
      </div>
      <div className="footer-mid"></div>
      <div className="footer-bottom">
        <p>
          © 2023 Typing world — Free Online Typing Tutor | No © copyright issues
          | Designed and Developed by Abu Osama
        </p>
      </div>
    </div>
  );
}

export default Footer;
