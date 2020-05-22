import React from "react";
import logo from "../images/logo.png";

const Footer = () => {
 return (
  <nav className='navbar bg-dark'>
   <h3 style={{ margin: "0", padding: "0" }}>
    <img src={logo} style={{ width: "75px", height: "75px" }} /> Tax Group
   </h3>
  </nav>
 );
};

export default Footer;
