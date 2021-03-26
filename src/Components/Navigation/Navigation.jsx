import React from "react";
import { Link } from "react-router-dom";
import "../../media/css/Navigation.css";

function Navigation() {
  return (
    <div className="navigation">
      <ul className="navigation__links">
        <Link to="/store" className="navigation__link">
          What's in store
        </Link>
        <Link to="/about" className="navigation__link">
          About
        </Link>
        <Link to="/route" className="navigation__link">
          What's in route
        </Link>
      </ul>
    </div>
  );
}

export default Navigation;
