import React from 'react'
import './Services.css'
import service from '../../../assyts/assyts';
function Services() {
  return (
    <>
        <div className="services">
        <h1>We also offer unique services for your events</h1>
      <div className="servicesContainer">

        {service.services.map((dish) => (
          <div key={dish.id} className="menuItem">
              <img src={dish.img} alt={dish.main_dish} className="seviceImage" />
            <h2 className="dishTitle">{dish.main_dish}</h2>
            <p className="dishDescription">{dish.description}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Services