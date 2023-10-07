import React, { useContext } from "react";
import "./navbar.style.scss";
import BookWormLogo from "../bookWormLogo/bookWormLogo";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  const user = {};
  return (
    <nav>
      <ul className="nav-container container">
        <BookWormLogo />
        <div className="navbar-optinos">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
          <li>
            <Link to="/shops">Shops</Link>
          </li>
          <li>
            <Link href="/pages">Pages</Link>
          </li>
          <li>
            <Link href="/blogs">Blogs</Link>
          </li>
          <li>
            <Link href="/others">Others</Link>
          </li>
          {user?.email ? (
            <li>
              <button
                className="logout-btn"
                onClick={() => {
                  console.log("logout......");
                  // logOutUser();
                }}
              >
                Log Out
              </button>
            </li>
          ) : (
            <li>
              <button
                className="login-btn"
                onClick={() => {
                  console.log("login......");
                  // logInUser();
                }}
              >
                Log In
              </button>
            </li>
          )}
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
