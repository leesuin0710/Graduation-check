// Navbar.js
import React from 'react';
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

const Navbar = ({ isLoggedIn, toggleLogin }) => {
  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">HOSEO</h1>

      <ul className="nav-menu">
        {MenuItems.map((item, index) => {
          if (
            (item.title === "마이 페이지" || item.title === "로그아웃") &&
            !isLoggedIn
          ) {
            return null;
          }
          return (
            <li key={index}>
              <Link className={item.cName} to={item.url}>
                {item.title}
              </Link>
            </li>
          );
        })}
        <li>
          {isLoggedIn ? (
            <button onClick={toggleLogin}>로그아웃</button>
          ) : (
            <Link to="/login">
              <button>로그인</button>
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;














