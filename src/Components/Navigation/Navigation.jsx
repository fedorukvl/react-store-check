import React from "react";
import "../../media/css/Navigation.css";

function Navigation() {
  return (
    <div className="navigation">
      <ul className="navigation__links">
        <li className="navigation__link">What's in store</li>
        <li className="navigation__link">About</li>
        <li className="navigation__link">What's in route</li>
      </ul>
    </div>
  );
}

export default Navigation;
