import React, { useEffect, useRef } from "react";
import "./Navbar.css";
import { FaSearch, FaBell, FaCaretDown, FaUser } from "react-icons/fa";
import { logout } from "../../firebase";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (!navRef.current) return;

      if (window.scrollY >= 80) {
        navRef.current.classList.add("nav-dark");
      } else {
        navRef.current.classList.remove("nav-dark");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={navRef} className="navbar">
      <div className="navbar-left">
        <div className="navbar-center">
          <div className="demogorgon-face">
            <div className="petal p1"></div>
            <div className="petal p2"></div>
            <div className="petal p3"></div>
            <div className="petal p4"></div>
            <div className="petal p5"></div>
          </div>
        </div>

        <h1 className="logo-text">NetFlix</h1>

        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>

      <div className="navbar-right">
        <FaSearch className="icons" />
        <p>Children</p>
        <FaBell className="icons" />

        <div className="navbar-profile">
          <FaUser className="user-icon" />
          <FaCaretDown className="user-icon" />

          <div className="fropdown">
            <p
              onClick={async () => {
                await logout();
                navigate("/login");
              }}
            >
              Sign Out of Netflix
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;