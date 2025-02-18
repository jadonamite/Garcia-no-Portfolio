import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
   return (
      <div className="navbar">
         <p className="logo">Robert Garcia</p>
         <ul className="nav-links">
            <li className="nav-link">
               <Link to="/">Work</Link>
            </li>
            <li className="nav-link">
               <Link to="/">About</Link>
            </li>
            <li className="nav-link">
               <Link to="/">Contact</Link>
            </li>
         </ul>
      </div>
   );
}
