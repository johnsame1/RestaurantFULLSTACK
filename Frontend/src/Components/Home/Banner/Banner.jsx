import React from 'react';
import './banner.css';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <>
      <div className="banner">
        <div className="containers">
          <div className="bgContainer">
            <div className="text">
              <h1 className="text1">
              Best food for
              your taste</h1>
              
              <p className="text2">
              Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.              </p>
              <div className='buttons'>
              <Link to={'/booktable'}>
                <button className="btnBook">Book A Table</button>
              </Link>
              <Link to={'/menu'}>
                <button className="btnBook2">Explore Menu</button>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
