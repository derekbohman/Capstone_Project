import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <div className="brand">
        <Link to="/" style={{ textDecoration: "none", color: "#fffef2" }}>
          <p>Caitlynn Didlick, DACM, LAc</p>
        </Link>
      </div>
      <div className="links">
        <ul className="linksList">
          <li>
            <div className="navLink">
              <Link to="/about">About</Link>
            </div>
            <div className="navLink">
              <Link to="/appointments">Appointments</Link>
            </div>
            {/* <div className="navLink">
              <Link to="/login">Login</Link>
            </div> */}
            <div className="navLink">
              <Link to="/newsletter">Newsletter</Link>
            </div>
            <div className="navLink">
              <Link to="/register">Register</Link>
            </div>
            <div className="navLink">
              <Link to="/treatments">Treatments</Link>
            </div>
            {/* <div className="navLink">
              <Link to="/user">User</Link>
            </div> */}
          </li>
        </ul>
      </div>
      <div className="loginButton">
        {user ? (
          <button onClick={logoutUser}>Logout</button>
        ) : (
          <button onClick={() => navigate("/login")}>Login</button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
