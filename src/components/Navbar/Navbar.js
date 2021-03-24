import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
 
  const location = useLocation();

  return (
    <div id="nav">
    <ul className="nav justify-content-end">
      
      <li id="nav" className="nav-item">
        <Link id="nav" to="/" className={location.pathname === "/aboutme" ? "nav-link active" : "nav-link"}>
          About Me
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/portfolio"
          className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contactme"
          className={location.pathname === "/contactme" ? "nav-link active" : "nav-link"}
        >
          Contact Me
        </Link>
      </li>
     
    </ul>
    </div>
  );
}

export default Navbar;