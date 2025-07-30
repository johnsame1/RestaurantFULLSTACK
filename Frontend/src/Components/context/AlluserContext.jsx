import React, { createContext, useEffect, useState } from 'react';
import axiosInstance from '../../axiosInstance/axiosInstance';

export const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const TOKEN = localStorage.getItem('token');

  const getUsers = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get('/api/dashboard/stats', {
        headers: { Authorization: `Bearer ${TOKEN}` },
      });

      setUsers(response.data.data.users);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <UsersContext.Provider value={{ users, loading, getUsers }}>
      {children}
    </UsersContext.Provider>
  );
};
