import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './SingleBlogs.css';
import axiosInstance from '../../axiosInstance/axiosInstance';
import { BlogsContext } from '../context/BlogsContext';

const SingleBlogs = () => {
  const { blog } = useContext(BlogsContext);

  const { id } = useParams();
  const [blogs, setBlog] = useState('');
  const token = localStorage.getItem('token');
  useEffect(() => {
    const getID = async () => {
      try {
        const response = await axiosInstance.get(`api/Blog/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setBlog(response.data.data.blog);
      } catch (error) {
        console.error('🟩 Er:', error);
      }
    };

    getID();
  }, [id]);

  return (
    <>
      <div className="SingleBlogs">
        <div className="container">
          <div className="Tobic">
            <h1>
              The secret tips & tricks to prepare a perfect burger & pizza for
              our customers
            </h1>
          </div>
          <img
            className="SingleImg"
            src={blogs.image?.url || 'url'}
            alt={'img'}
          />
          <div className="SingleContent">
            <h1 className="SingleTitle">{blogs.title}</h1>
            <p className="SingleContent">{blogs.description}</p>
          </div>
        </div>
      </div>
      <div className="blogsSection">
        <div className="container">
          <div className="topic">
            <h1>Read More Articles</h1>
          </div>

          <div className="blogs">
            {blog.slice(0, 4).map((blogsItem) => (
              <div key={blogsItem.id} className="blogItem">
                <Link to={`/blog/${blogsItem._id}`}>
                  <img
                    src={blogsItem.image?.url || 'img'}
                    alt={blogsItem.name}
                  />
                  <div className="blogsTobic">
                    <h4 className="blogdate">{blogsItem.date}</h4>
                    <p className="blogDescription">{blogsItem.title}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlogs;
