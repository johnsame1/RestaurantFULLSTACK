import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <>
      <div className="Contact">
        <div className="BookTobic">
          <h1 className="BookHeader">Contact Us</h1>
          <p className="BookPara">
            We consider all the drivers of change gives you the components you
            need to change to create a truly happens.
          </p>
        </div>

        <div className="BookContent">
          <div className="BookContainer">
            <form className="BookContainer">
              <div className="date">
                <h1>Name</h1>
                <input
                  className="input"
                  type="text"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="date">
                <h1>Email</h1>
                <input
                  className="input"
                  type="email"
                  placeholder="email"
                  required
                />
              </div>

              <div className="datee">
                <h1>Subject</h1>
                <input
                  className="input"
                  type="text"
                  placeholder="Write a subject"
                  required
                />
              </div>
              <div className="dates">
                <h1>Massege</h1>
                <input
                  className="input"
                  type="text"
                  placeholder="write massege"
                  required
                />
              </div>
              <button className="BookButton">send to us</button>
            </form>
          </div>
        </div>
        <div className="BookMap">

            <div className='Detils'>
                <div className='call'>
                    <h1>Call Us :</h1>
                    <p>+91 123 456 7890</p>
                </div>
                <div className='call'>
                    <h1> Hours :</h1>
                    <p>Mon-Fri: 11am - 8pm <br/>Sat, Sun: 9am - 10pm</p>
                </div>
                <div className='call'>
                    <h1>Location :</h1>
                    <p>123 Bridge Street Nowhere Land, LA 12345 United States</p>
                </div>

            </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
