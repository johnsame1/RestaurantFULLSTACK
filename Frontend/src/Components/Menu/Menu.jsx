import React, { useContext, useState } from 'react';
import './menu.css';
import { MenuContext } from '../context/Menucontext';

const Menu = () => {
  const { menu, categories, handleDelete, handleUpdate } =
    useContext(MenuContext);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [editId, setEditId] = useState(null);
  const [updatedData, setUpdatedData] = useState({
    name: '',
    price: '',
    description: '',
  });

  const user = JSON.parse(localStorage.getItem('User'));
  const currentUserRole = user?.role;
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredDishes =
    selectedCategory === 'All'
      ? menu
      : menu.filter((menuItem) => menuItem.category === selectedCategory);

  return (
    <div className="menuSection">
      <div className="container">
        <div className="topic">
          <h1>Our Menu</h1>
          <p className="desc">
            We consider all the drivers of change and give you the components
            you need to create something truly special.
          </p>
        </div>

        <div className="filter">
          <button
            className={`btnCategory ${
              selectedCategory === 'All' ? 'active' : ''
            }`}
            onClick={() => handleCategoryClick('All')}
          >
            All
          </button>

          {Array.isArray(categories) &&
            categories.map((category) => (
              <button
                key={category}
                className={`btnCategory ${
                  selectedCategory === category ? 'active' : ''
                }`}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </button>
            ))}
        </div>
        <div className="menuDishes">
          {filteredDishes.map((menuItem) => (
            <div key={menuItem._id} className="dishItem">
              <img src={menuItem.image.url} alt={menuItem.name} />
              <div className="dishTobic">
                <h4 className="dishPrice">${menuItem.price}</h4>
                <h5>{menuItem.name}</h5>
                <p className="dishDescription">{menuItem.description}</p>

                {currentUserRole === 'Admin' && (
                  <>
                    {editId === menuItem._id ? (
                      <>
                        <input
                          type="text"
                          value={updatedData.name}
                          onChange={(e) =>
                            setUpdatedData({
                              ...updatedData,
                              name: e.target.value,
                            })
                          }
                          placeholder="Name"
                        />
                        <input
                          type="number"
                          value={updatedData.price}
                          onChange={(e) =>
                            setUpdatedData({
                              ...updatedData,
                              price: e.target.value,
                            })
                          }
                          placeholder="Price"
                        />
                        <input
                          type="text"
                          value={updatedData.description}
                          onChange={(e) =>
                            setUpdatedData({
                              ...updatedData,
                              description: e.target.value,
                            })
                          }
                          placeholder="Description"
                        />
                        <button
                          className="saveBtn"
                          onClick={() => {
                            handleUpdate(menuItem._id, updatedData);
                            setEditId(null);
                          }}
                        >
                          Save
                        </button>
                        <button
                          className="cancelBtn"
                          onClick={() => setEditId(null)}
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          className="editBtn"
                          onClick={() => {
                            setEditId(menuItem._id);
                            setUpdatedData({
                              name: menuItem.name,
                              price: menuItem.price,
                              description: menuItem.description,
                            });
                          }}
                        >
                          Edit
                        </button>
                        <button
                          className="deleteBtn"
                          onClick={() => handleDelete(menuItem._id)}
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
