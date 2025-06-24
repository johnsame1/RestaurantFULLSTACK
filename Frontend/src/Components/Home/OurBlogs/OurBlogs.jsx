import React, { useContext } from 'react';
import './OurBlogs.css';
import { BlogsContext } from '../../context/BlogsContext';
import { Link } from 'react-router-dom';

function OurBlogs() {
  const { blog } = useContext(BlogsContext);
  const firstblog = blog[0];
  const otherBlogs = blog.slice(1);

  return (
    <div className="OurBlogs">
      <div className="header">
        <h1>Our Blog & Articles</h1>
        <Link to={'/blogs'}>
          <button className="readButton">Read All Articles</button>
        </Link>
      </div>

      <div className="Blogscontainer">
        {firstblog && (
          <div key={firstblog._id} className="firstblog">
            <Link to={`/blog/${firstblog._id}`}>
              <img src={firstblog.image?.url || "img"} alt={firstblog.blog_name} />
              <div className="blogContent">
                <p className="blogDate">{firstblog.date}</p>
                <h2 className="blogTitle">{firstblog.title}</h2>
                <p className="blogDescription">{firstblog.description.slice(0, 145)}</p>
              </div>
            </Link>
          </div>
        )}

        <div className="blogContainer">
          {otherBlogs.slice(0, 4).map((blog) => (
            <div key={blog._id} className="blogItem">
              <Link to={`/blog/${blog._id}`}>
                <img src={blog.image?.url || "img"} alt={blog.blog_name} className="blogImage" />
                <div className='blogText'>
                  <p className="blogDate">{blog.date}</p>
                  <h2 className="blogTitle">{blog.title}</h2>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurBlogs;
