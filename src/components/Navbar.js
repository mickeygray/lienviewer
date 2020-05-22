import React from "react";
import logo from "../images/logo.png";

const Navbar = () => {
 return (
  <nav className='navbar bg-primary'>
   <h1 style={{ margin: "0", padding: "0" }}>
    <img src={logo} style={{ width: "75px", height: "75px" }} /> Tax Group Lien
    Viewer
   </h1>
  </nav>
 );
};

export default Navbar;
