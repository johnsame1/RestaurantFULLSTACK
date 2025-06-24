import React, { useContext } from 'react';
import './OurMenu.css';
import { MenuContext } from '../../context/Menucontext';

function OurMenu() {
  const { menu } = useContext(MenuContext);

  return (
    <div className="OurMenu">
      <h1>Browse Our Menu</h1>
      <div className="menuContainer">
        {menu.slice(0, 4).map((dish) => (
          <div key={dish._id} className="menuItem">
            <div className="image">
              <img src={dish.image?.url||"img"} alt={dish.main_dish} className="dishImage" />
            </div>
            <h2 className="dishTitle">{dish.main_dish}</h2>
            <p className="dishDescription">{dish.description.slice(0, 40)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurMenu;
