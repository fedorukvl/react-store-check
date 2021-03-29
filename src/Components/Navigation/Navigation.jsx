import React from "react";
import { NavLink } from "react-router-dom";
import "../../media/css/Navigation.css";

function Navigation() {
  return (
    <div className="navigation">
      <ul className="navigation__links">
        <NavLink
          activeClassName="navigation__link_active"
          to="/store"
          className="navigation__link"
        >
          What's in store
        </NavLink>
        <NavLink
          activeClassName="navigation__link_active"
          to="/about"
          className="navigation__link"
        >
          About
        </NavLink>
        <NavLink
          activeClassName="navigation__link_active"
          to="/route"
          className="navigation__link"
        >
          What's in route
        </NavLink>
      </ul>
    </div>
  );
}

export default Navigation;
