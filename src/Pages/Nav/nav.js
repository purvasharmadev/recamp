import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import logo from "../../Assets/images/landing.svg";
// Context
import { useAuth } from "../../Auth/auth-context";

function Nav() {
  const { isLoggedIn, signInWithGoogle, signOut } = useAuth();

  // function to toggle on small screen
  function ClickHandler() {
    const navList = document.getElementsByClassName("navbar-list")[0];
    return navList.classList.toggle("toggle-active");
  }

  return (
    <nav className="color-white nav-resp bg-primary">
      {/* Logo */}
      <h2 className="nav-brand">
        <img
          src="https://www.buythelogo.com/wp-content/uploads/2019/03/Retro-fire-camp-logo-vector.jpg"
          className="nav-logo img-responsive img-rounded"
          alt=""
          srcset=""
        />
        <Link to="/" className="nav-link link">
          Recamp
        </Link>
      </h2>
      {/* Toggle */}
      <span onClick={ClickHandler} className="nav-toggle nav-link">
        &#9776;
      </span>

      {/* Navbar-list */}

      <ul className="navbar-list">
        {/* Explore */}
        <li className="nav-item">
          {isLoggedIn ? (
            <span onClick={signOut} className="nav-link link cursor-pointer">
              Log Out
            </span>
          ) : (
            <span onClick={signInWithGoogle} className="nav-link link cursor-pointer">
              Log In
            </span>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
