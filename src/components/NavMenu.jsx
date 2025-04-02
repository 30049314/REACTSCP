import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import scpData from "../data/scpdata.json";

function NavMenu() {
  return (
    <nav className="navmenu">
      <NavLink to="/home" className={({ isActive }) => (isActive ? "active" : "")}>HOME</NavLink>
      {scpData.map((scp) => (
        <NavLink 
        key={scp.item} 
        to={`/${scp.item}`} 
        className={({ isActive }) => (isActive ? "active" : "")}>
          {scp.item}
        </NavLink>
      ))}
    </nav>
  );
}

export default NavMenu;
