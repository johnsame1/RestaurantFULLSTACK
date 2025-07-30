import React from 'react';
import './Information.css';
import handd from '../../../assyts/handd.png';
function Information() {
  return (
    <>
      <div className="information">
        <div className="container">
          <div className="rightContainer">
            <div className="tobic">
              <h2>A little information for our valuable guest</h2>
              <p>
                At place, we believe that dining is not just about food, but
                also about the overall experience. Our staff, renowned for their
                warmth and dedication, strives to make every visit an
                unforgettable event.
              </p>
            </div>
            <div className="counter">
              <div className="count">
                <h3>3</h3>
                <h4>location</h4>
              </div>
              <div className="count">
                <h3>1995</h3>
                <h4>Founded</h4>
              </div>
              <div className="count">
                <h3>65+</h3>
                <h4 className="Satisfied">Staff Members</h4>
              </div>
              <div className="count">
                <h3>100%</h3>
                <h4 className="Satisfied">Satisfied Customers</h4>
              </div>
            </div>
          </div>
          <div className="leftContainer">
            <img src={handd} alt="handd" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Information;
