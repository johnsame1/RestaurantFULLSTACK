import React, { useEffect, useState } from 'react';
import './BookTable.css';
import axiosInstance from '../../axiosInstance/axiosInstance';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function BookTable() {
  const [userid, setUserId] = useState(null);

  const [formData, setFormData] = useState({
    Number_Of_Persons: '',
    Number_Of_Table: '',
    Booking_Date: '',
    UserId: '',
    Phone_Number: '',
    Booking_Time: '',
    Name: '',
  });
  const token = localStorage.getItem('token');

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('User'));
    setUserId(userData?.iD);
  }, []);

  useEffect(() => {
    if (userid) {
      setFormData((prevData) => ({
        ...prevData,
        UserId: userid,
      }));
    }
  }, [userid]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post(
        '/api/Table/bookTable',
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success(
        `Table booked successfully! Thanks ${response.data.data.newTable.Name}`
      );
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };
  return (
    <>
      <div className="Book">
        <div className="BookTobic">
          <h1 className="BookHeader">Book A Table</h1>
          <p className="BookPara">
            We consider all the drivers of change gives you the components you
            need to change to create a truly happens.
          </p>
        </div>

        <div className="BookContent">
          <div className="BookContainer">
            <form className="BookContainer">
              <div className="date">
                <h1>Date</h1>
                <input
                  className="input"
                  type="date"
                  placeholder="Date"
                  name="Booking_Date"
                  onChange={handleChange}
                  required
                  value={formData.Booking_Date}
                />
              </div>
              <div className="date">
                <h1>Time</h1>
                <input
                  className="input"
                  type="time"
                  name="Booking_Time"
                  placeholder="Time"
                  onChange={handleChange}
                  value={formData.Booking_Time}
                  required
                />
              </div>
              <div className="date">
                {' '}
                <h1>Name</h1>
                <input
                  className="input"
                  type="text"
                  onChange={handleChange}
                  value={formData.Name}
                  name="Name"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="date">
                {' '}
                <h1>Number of table</h1>
                <input
                  onChange={handleChange}
                  value={formData.Number_Of_Table}
                  className="input"
                  name="Number_Of_Table"
                  type="text"
                  placeholder="Number of table"
                  required
                />
              </div>
              <div className="date">
                <h1>Phone </h1>
                <input
                  onChange={handleChange}
                  className="input"
                  value={formData.Phone_Number}
                  name="Phone_Number"
                  type="tel"
                  placeholder="Phone Number"
                  required
                />
              </div>
              <div className="date">
                <h1>Total person</h1>
                <input
                  onChange={handleChange}
                  className="input"
                  type="number"
                  value={formData.Number_Of_Persons}
                  name="Number_Of_Persons"
                  placeholder="total person"
                  required
                />
              </div>
              <button className="BookButton" onClick={handleSubmit}>
                Book A Table
              </button>
            </form>
          </div>
        </div>
        <div className="BookMap"></div>
      </div>
    </>
  );
}

export default BookTable;
