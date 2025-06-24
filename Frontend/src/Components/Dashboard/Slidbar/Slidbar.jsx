import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { RxDashboard } from 'react-icons/rx';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { LiaHamburgerSolid, LiaUserSolid } from 'react-icons/lia';
import { IoMenu } from 'react-icons/io5';
import './Slidbar.css';
import { TbLogout } from 'react-icons/tb';

const BREAKPOINT = 1130;

function Slidbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : BREAKPOINT + 1
  );

  const popupRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen && windowWidth <= BREAKPOINT) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen, windowWidth]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const menuLinks = (
    <>
      <NavLink
        to="dashboardcontainer"
        onClick={toggleMenu}
        className={({ isActive }) => (isActive ? 'btn active' : 'btn')}
      >
        <RxDashboard /> Dashboard
      </NavLink>
      <NavLink
        to="blogsdashboard"
        onClick={toggleMenu}
        className={({ isActive }) => (isActive ? 'btn active' : 'btn')}
      >
        <FaRegCalendarAlt /> Blogs
      </NavLink>
      <NavLink
        to="UsersDashboard"
        onClick={toggleMenu}
        className={({ isActive }) => (isActive ? 'btn active' : 'btn')}
      >
        <LiaUserSolid /> Users
      </NavLink>
      <NavLink
        to="tableDashboard"
        onClick={toggleMenu}
        className={({ isActive }) => (isActive ? 'btn active' : 'btn')}
      >
        <LiaUserSolid /> Tables
      </NavLink>
      <NavLink
        to="menu"
        onClick={toggleMenu}
        className={({ isActive }) => (isActive ? 'btn active' : 'btn')}
      >
        <LiaHamburgerSolid /> Menu
      </NavLink>

      <NavLink
        to="/"
        onClick={(e) => {
          e.preventDefault();
          handleLogout();
          toggleMenu();
        }}
        className="btn"
        style={{ color: 'red' }}
      >
        <TbLogout />
        Logout
      </NavLink>
    </>
  );

  return (
    <>
      <div className="All-Menu">
        <h3 onClick={toggleMenu}>
          <IoMenu /> {isMenuOpen ? 'Close' : 'Menu'}
        </h3>
      </div>

      {isMenuOpen && windowWidth <= BREAKPOINT && (
        <div className="popup-menu" ref={popupRef}>
          {menuLinks}
        </div>
      )}

      {!(isMenuOpen && windowWidth <= BREAKPOINT) && (
        <div className="slidbar">{menuLinks}</div>
      )}
    </>
  );
}

export default Slidbar;
