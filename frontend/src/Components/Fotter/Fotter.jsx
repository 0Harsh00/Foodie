import React from "react";
import "./Fotter.css";
import logo from "../../assets/logo.png";
import fbLogo from "../../assets/facebook_icon.png";
import linkedinlogo from "../../assets/linkedin_icon.png";
import twiterLogo from "../../assets/twitter_icon.png";
function Fotter() {
  return (
    <div className="footer" id="footer">
      <div className="footer-element">
        <div className="left-side">
          
            <img className="logof" src={logo} alt="" />
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
                harum explicabo repellat cumque facere! Voluptates fuga quia sit
                nihil, voluptatem omnis non sint adipisci, sequi, vero ad sed ea
                culpa?
              </p>
            <div className="socaillogo">
              <img src={fbLogo} alt="" className="scsites1" />
              <img src={linkedinlogo} alt="" className="scsites2" />
              <img src={twiterLogo} alt="" className="scsites3" />
            </div>
          
        </div>
        <div className="center">
          <h1>COMPANY</h1>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="right-side">
          <h1>Get in Touch</h1>
          <ul>
            <li>+91-628786xxxx</li>
            <li>help@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="hr">Copyright @ 2024 All rights reserved</p>
    </div>
  );
}

export default Fotter;
