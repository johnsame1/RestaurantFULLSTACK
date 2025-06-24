import React from 'react';
import './Provide.css';
import imge from '../../../assyts/Image.png';
import { Link } from 'react-router-dom';
function Provide() {
  return (
    <>
      <div className="provide">
     <div className="container">
     <div className="container1">
          <img className='imge' src={imge} alt="imge" />
          <div className="over">
            <p>Come and visit us</p>
            <p>(414) 857 - 0107</p>
            <p>happytummy@restaurant.com</p>
            <p>837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles</p>
          </div>
        </div>
        <div className="container2">
            <h1 className='text'>We provide healthy food for your family.</h1>
            <p className='text1'>Our story began with a vision to create a unique dining experience that merges fine dining,
                 exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture,
                 we aim to honor our local roots while infusing a global palate.</p>
            <p>Our story began with a vision to create a unique dining experience that merges fine dining,
                 exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture,
                 we aim to honor our local roots while infusing a global palate.</p>
        
        <Link to={'/about'}>
        <button className="btnBook2">More About Us</button>
        </Link>
        </div>


     </div>
      </div>
    </>
  );
}

export default Provide;
