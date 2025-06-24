import React, { useContext } from 'react';
import './Blogs.css';
import {BlogsContext} from '../context/BlogsContext'
import { Link } from 'react-router-dom';

const Blogs = () => {
  const {blog} =useContext(BlogsContext)
  
  return (
    <div className="blogsSections">
      <div className="container">
        <div className="topic"> 
          <h1>Our Blogs</h1>
          <p>We consider all the drivers of change and give you the components you need to create something truly special.</p>
        </div>

        <div className="blogs">
          {blog.map((blogsItem) => (
              <div key={blogsItem.id} className="blogItem">
                  <Link to={`/blog/${blogsItem._id}`}>
              <img src={blogsItem.image.url} alt={blogsItem.name} />
              <div className="blogsTobic">
                <h4 className='blogdate'>{blogsItem.date}</h4>
                <p className='blogDescription'>{blogsItem.title}</p>
              </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
          </div>
  );
};

export default Blogs;
