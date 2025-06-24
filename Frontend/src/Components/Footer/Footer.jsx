import React from 'react';
import {FaFacebook,FaGithub,FaInstagram,FaTwitterSquare} from 'react-icons/fa';
import './Footer.css';
import logo from '../../assyts/Logo (1).png';
import footer1 from '../../assyts/egg footer.jpg';
import footer2 from '../../assyts/potatos-footer.jpg';
import footer3 from '../../assyts/ella-footer.jpg';
import footer4 from '../../assyts/ash-footer.jpg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerOverlay"></div>
      <div className="container">
        <div className="icons">
          <img src={logo} alt="logo" />
          <p>
            In the new era of technology we look a in the future with certainty
            and pride to for our company and.
          </p>
          <div className="Icon">
            <FaTwitterSquare className="back" />
            <FaFacebook className="back" />
            <FaInstagram className="back" />
            <FaGithub className="back" />
          </div>
        </div>
        <div className="footerColumn">
          <h4 className="tobic">About Us</h4>
          <ul className="about">
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Pricing</li>
            <li>Blog</li>
            <li>Contact</li>
            <li>Delivery</li>
          </ul>
        </div>

        <div className="footerColumn">
          <h4>Utility Pages</h4>
          <ul className="about">
            <li>Start Here</li>
            <li>Password Protected</li>
            <li>Styleguide</li>
            <li>404 Not Found</li>
            <li>Licenses</li>
            <li>Changelog</li>
            <li>View More</li>
          </ul>
        </div>

        <div className="footerColumn">
          <h4>Follow Us On Instagram</h4>
          <div className="photos">
          <img src={footer1} alt="logo" />
          <img src={footer2} alt="logo" />
          <img src={footer3} alt="logo" />
          <img src={footer4} alt="logo" />

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
