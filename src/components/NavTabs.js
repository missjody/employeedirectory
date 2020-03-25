import React from "react";
import { NavLink } from "react-router-dom";

function NavTabs() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <NavLink
          to="/"
          className="nav-link"
          activeClassName="active">
          Home
          </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/Directory"
          className="nav-link"
          activeClassName="active">
          Employee Directory
        </NavLink>
      </li>
    </ul>
  )
}

export default NavTabs;