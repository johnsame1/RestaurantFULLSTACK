import './Blogs.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import axiosInstance from '../../../axiosInstance/axiosInstance';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const Token = localStorage.getItem('token');
  const getPosts = async () => {
    try {
      const responce = await axiosInstance.get('/api/Blog', {
        headers: { Authorization: `Bearer ${Token}` },
      });

      setBlogs(responce.data.blog);
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to get blog');
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  const [openDropdownId, setOpenDropdownId] = useState(null);

  const toggleDropdown = (_id) => {
    setOpenDropdownId(openDropdownId === _id ? null : _id);
  };

  const handleDelete = async (_id) => {
    try {
      await axiosInstance.delete(`/api/Blog/${_id}`, {
        headers: { Authorization: `Bearer ${Token}` },
      });
      await getPosts();
      toast.success('Blog deleted successfully 🗑️');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to delete blog');
    }
  };

  return (
    <div className="blogsSection">
      <div className="container">
        <div className="topicWithButton">
          <h1>Our Blogs</h1>
        </div>
        <div className="blogs">
          {Array.isArray(blogs) &&
            blogs.map((blogsItem) => (
              <div key={blogsItem._id} className="blogItem">
                <img src={blogsItem.image?.url || 'img'} alt={blogsItem.name} />
                <div className="blogsTobic">
                  <div className="price"></div>
                  <p className="blogDescription">{blogsItem.title}</p>
                </div>
                <div className="dropdownWrapper">
                  <button
                    className="menuBtn"
                    onClick={() => toggleDropdown(blogsItem._id)}
                  >
                    <BsThreeDotsVertical />
                  </button>

                  {openDropdownId === blogsItem._id && (
                    <div className="dropdownMenu">
                      <button
                        className="dropdownItem"
                        onClick={() => {
                          handleDelete(blogsItem._id);
                          setOpenDropdownId(null);
                        }}
                      >
                        Delete Blog
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
