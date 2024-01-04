import React from 'react';
import './Navbar.scss';

import { images } from '../../constant-imports';

function Navbar() {
  const menuItems = ['Home', 'About', 'Footer', 'Header', 'Personal Projects', 'Skills'];

  return (
    <nav className='app__navbar'>
      <div className = "app__navbar-logo">
        <img src={images.logo}  alt="logo" />
      </div>

    
    <ul className='app__navbar-links'> {(() => {
      const listItems = [];

      for (let i = 0; i < menuItems.length; i++) {
        const item = menuItems[i];
        listItems.push(
          <li className='app__flex p-text' key={`link-${item}`}>
            <a href={`#${item}`}>{item}</a>
          </li>
      );
    }

    return listItems;
  })()}
</ul>












    </nav>
  );
}

export default Navbar;
