import React, { createContext, useEffect, useState } from 'react';
import axiosInstance from '../../axiosInstance/axiosInstance';
import { toast } from 'react-toastify';
const MenuContext = createContext();
const MenuProvider = ({ children }) => {
  const [menu, setMenu] = useState([]);
  const [categories, setCategories] = useState([]);
  const Token = localStorage.getItem('token');
  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axiosInstance.get('/api/Menu/category');
        setCategories(response.data.data);
      } catch (err) {
        console.error('Error fetching categories:', err);
      }
    };
    getCategories();
  }, []);
  const getMenu = async () => {
    try {
      const response = await axiosInstance.get('/api/Menu');
      setMenu(response.data.data);
    } catch (error) {
      console.error('Menu fetch error:', error.response?.data || error.message);
    }
  };

  useEffect(() => {
    getMenu();
  }, []);

  const handleDelete = async (_id) => {
    try {
      await axiosInstance.delete(`/api/Menu/${_id}`, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      });
      getMenu();
      toast.success('Menu deleted successfully 🗑️');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to delete menu');
    }
  };

  const handleUpdate = async (_id, updatedData) => {
    try {
      await axiosInstance.patch(`/api/Menu/${_id}`, updatedData, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      });
      toast.success('Updated successfully!');
      getMenu();
    } catch (error) {
      console.error('Update error:', error);
      toast.error('Failed to update');
    }
  };

  return (
    <MenuContext.Provider
      value={{
        menu,
        categories,
        handleDelete,
        handleUpdate,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export { MenuContext, MenuProvider };
