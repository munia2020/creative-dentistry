import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../../firebase.init";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div className="container">
      <div className="header-container">
        <div>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : "link")}
          >
            <h3 className="brand-name">Creative Dentistry</h3>
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : "link")}
          >
            Home
          </NavLink>
          <NavLink
            to="/aboutme"
            className={({ isActive }) => (isActive ? "active-link" : "link")}
          >
            About Me
          </NavLink>
          <NavLink
            to="/blogs"
            className={({ isActive }) => (isActive ? "active-link" : "link")}
          >
            Blogs
          </NavLink>
          {/* <NavLink to='/login' className={({ isActive }) => (isActive ? "active-link" : "link")}>Login</NavLink> */}
          {user ? (
            <button
              className="sign-out-button"
              onClick={handleSignOut}
            >
              sign out
            </button>
          ) : (
            <NavLink as={Link} to="login" className={({ isActive }) => (isActive ? "active-link" : "link")}>
              Login
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
