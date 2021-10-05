import React from "react";

// react router
import { Link, NavLink } from "react-router-dom";

// assets
import menu from "assets/data/basicMenu.json";

const Header = () => {
  return (
    <header className="header-wrapper">
      <div className="header-section">
        <div className="header-contents">
          <Link className="header-logo-section" to="/">
            <img src="/logo192.png" alt="logo" height="20" />
            <span className="header-logo-text"> Basic </span>
          </Link>
          <nav className="header-menu-section">
            {menu.map(item => (
              <NavLink
                key={item.name}
                className="header-menu"
                to={item.path}
                activeClassName="header-active-menu"
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
