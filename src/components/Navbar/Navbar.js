import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
 
  const location = useLocation();

  return (
    <ul className="nav justify-content-end">
      
      <li className="nav-item">
        <Link to="/" className={location.pathname === "/aboutme" ? "nav-link active" : "nav-link"}>
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
  );
}

export default Navbar;