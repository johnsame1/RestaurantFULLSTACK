import React from 'react'
import chef from '../../../assyts/chef.png'
import food1 from '../../../assyts/food1.png'
import food2 from '../../../assyts/food2.png'
import { FaClock } from 'react-icons/fa'
import './Delivery.css'
function Delivery() {
  return (
<>
<div className='Delivery'>
    <div className='container'>

<div className='photo'>
<img src={chef}alt='chef' className='chef'/>
<div className='photos' >
<img src={food1}alt='chef' className='food1'/>
<img src={food2}alt='chef' className='food2'/>

</div>
</div>
<div className='text'>
<h1>Fastest Food Delivery in City</h1>
    <p>Our visual designer lets you quickly and of drag a down your way to customapps for both keep desktop. </p>
    <span className='align'><FaClock className='icon'/> Delivery within 30 minutes </span>
    <span className='align'><FaClock className='icon'/> Delivery within 30 minutes </span>
    <span className='align'><FaClock className='icon'/> Delivery within 30 minutes </span>
</div>

    </div>
</div>






</>  )
}

export default Delivery