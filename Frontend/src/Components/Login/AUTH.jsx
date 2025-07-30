import React, { useState } from 'react';
import axiosInstance from '../../axiosInstance/axiosInstance';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const AUTH = () => {
  const navigate = useNavigate();
  const [isSign, setIsSign] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = isSign ? '/api/Users/register' : '/api/Users/login';

    const dataToSend = isSign
      ? formData
      : { email: formData.email, password: formData.password };

    try {
      const res = await axiosInstance.post(url, dataToSend);
      toast.success(` successful Welcome:${res.data.data.name}✌️`);

      if (res.data.data.token) {
        localStorage.setItem('token', res.data.data.token);
        localStorage.setItem('User', JSON.stringify(res.data.data));
        window.dispatchEvent(new Event('storageChange'));
        navigate('/');
      }
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message);
    }
  };
  const toglesign = () => setIsSign(!isSign);
  return (
    <div className="Contact" style={{ height: '80vh' }}>
      <div className="BookTobic">
        <h1 className="BookHeader" style={{ 'margin-top': '2rem' }}>
          {isSign ? 'Sign UP' : 'Login'}
        </h1>
      </div>

      <div className="BookContent" style={{ top: '100px' }}>
        <div className="BookContainer">
          <form className="BookContainer" onSubmit={handleSubmit}>
            {isSign && (
              <div className="datee">
                <h1>Name</h1>
                <input
                  name="name"
                  className="input"
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  required
                  onChange={handleChange}
                />
              </div>
            )}
            <div className="datee">
              <h1>Email</h1>
              <input
                className="input"
                type="email"
                name="email"
                placeholder="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="datee">
              <h1>Passwod</h1>
              <input
                className="input"
                type="password"
                name="password"
                placeholder="Write your Password"
                onChange={handleChange}
                required
                value={formData.password}
              />
            </div>
            <button className="BookButton" type="submit">
              {isSign ? 'SignUP' : 'Login'}
            </button>
            <p style={{ marginTop: '1rem' }}>
              {isSign ? 'Already have an account?' : "Don't have an account?"}{' '}
              <span
                onClick={toglesign}
                style={{
                  color: '#ad343e',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                }}
              >
                {isSign ? 'Login' : 'Sign Up'}
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AUTH;
