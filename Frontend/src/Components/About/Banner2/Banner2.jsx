import React from 'react';
import './Banner2.css';
import {FaRegStickyNote } from 'react-icons/fa';
import video from '../../../assyts/www.mp4';

function Banner2() {
  return (
    <>
      <div className="banner2">
        <video className="background-video" autoPlay loop muted playsInline>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="overlay">
          <h1>Feel the authentic & original taste from us</h1>
        </div>
      </div>

      <div className="Banner2Container">
        {[...Array(3)].map((_, i) => (
          <div className="item" key={i}>
            <FaRegStickyNote className="itemNote" />
            <div className="ss">
              <p>Multi Cuisine</p>
              <p>
                In the new era of technology we look in the future with
                certainty life.
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Banner2;
