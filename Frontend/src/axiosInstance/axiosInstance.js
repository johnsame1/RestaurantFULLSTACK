import axios from 'axios';
// Create an Axios instance with a base URL and default headers

const axiosInstance = axios.create({
baseURL: 'https://restaurantfullstack-production.up.railway.app',
  headers: {
    'Content-Type': 'application/json',
  },

});

export default axiosInstance;
