import React from 'react'
import reviews from '../../../assyts/assyts';
import './OurCustomer.css'

function OurCustomer() {
  return (
<>

<div className="OurCustomer">
        <h1>What Our Customers Say</h1>
      <div className="customerContainer">

        {reviews.reviews.map((dish) => (
          <div key={dish.id} className="CustomerItem">
            <h2 className="CustomerTitle">" {dish.title} "</h2>
            <p className="CustomerDescription">{dish.content}</p>
            <div className="customerInfo">
              <img src={dish.img} alt={dish.customer_name} className="customerImage" />
    <div className="customerShape">
    <h3 className="customerName">{dish.author}</h3>
    <p className="customerReview">{dish.location}</p>
    </div>
            </div>
          </div>
        ))}
      </div>
    </div>











</>  )
}

export default OurCustomer