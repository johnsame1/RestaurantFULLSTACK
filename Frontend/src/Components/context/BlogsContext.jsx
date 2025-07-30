import React, { createContext, useEffect, useState } from 'react';
import axiosInstance from '../../axiosInstance/axiosInstance';
const BlogsContext = createContext();

const BlogsProvider = ({ children }) => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const responce = await axiosInstance.get('/api/Blog');

        setBlog(responce.data.blog);
      } catch (error) {
        console.error('🟩 element: ', error.responce);
      }
    };
    getBlogs();
  }, []);
  return (
    <BlogsContext.Provider
      value={{
        blog,
      }}
    >
      {children}
    </BlogsContext.Provider>
  );
};

export { BlogsContext, BlogsProvider };
