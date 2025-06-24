import React, { useEffect, useState } from 'react';
import './navbar.css';
import logo from '../../assyts/Logo.jpg';
import { Link } from 'react-router-dom';
import {
  FaBoxOpen,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaPhone,
  FaTwitter,
} from 'react-icons/fa';
import { MdAdminPanelSettings } from 'react-icons/md';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
const [userRole, setUserRole] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

useEffect(() => {
  const checkLoginStatus = () => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);

    const user = JSON.parse(localStorage.getItem('User'));
    setUserRole(user?.role || null);
  };

  checkLoginStatus();

  window.addEventListener('storageChange', checkLoginStatus);

  return () => {
    window.removeEventListener('storageChange', checkLoginStatus);
  };
}, []);



  const handleLogout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('User');
  setIsLoggedIn(false);
  window.dispatchEvent(new Event('storageChange'));
};

 return (
  <div className="navbarLine">
    <div className="navbarLine-container">
      <div className="nav-items">
        <FaPhone /> +1 234 567 890
        <FaBoxOpen /> yummy@bistrobliss
      </div>
      <div className="nav-links">
        <FaTwitter />
        <FaFacebook />
        <FaInstagram />
        <FaGithub />
      </div>
    </div>
    <div className="NavBar">
      <div className="container">
        <div className="logos">
          <Link to={'/'} className="logo">
            <img src={logo} alt="Logo" className="logo-img" />
            <h2>Bistro Bliss</h2>
          </Link>
        </div>

        <button className="menu" onClick={toggleMenu} aria-label="Toggle Menu">
          ☰
        </button>

        <div className={`links ${isOpen ? 'open' : ''}`}>
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/about" onClick={closeMenu}>About</Link>
          <Link to="/menu" onClick={closeMenu}>Menu</Link>
          <Link to="/blogs" onClick={closeMenu}>Blogs</Link>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>

          {userRole === 'Admin' && (
            <Link to="/dashboardadmin" onClick={closeMenu} className="admin-link">
              <MdAdminPanelSettings style={{ marginRight: '6px', verticalAlign: 'middle' }} />
              Dashboard Admin
            </Link>
          )}

          <div className="Btn">
            <Link to="/booktable" onClick={closeMenu}>
              <button className="log">Book Table</button>
            </Link>
          </div>

          {isLoggedIn ? (
            <Link to="/login" className="log" onClick={handleLogout}>
              Logout
            </Link>
          ) : (
            <Link to="/login" className="log" onClick={closeMenu}>
              Login
            </Link>
          )}
        </div>

        <div className="Btns">
          <Link to="/booktable">
            <button className="btnCreate">Book A Table</button>
          </Link>
          {isLoggedIn ? (
            <Link to="/login" style={{ color: 'red', borderColor: 'red' }} className="btnCreate" onClick={handleLogout}>
              Logout
            </Link>
          ) : (
            <Link to="/login" className="btnCreate" onClick={closeMenu}>
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  </div>
);

};

export default NavBar;
