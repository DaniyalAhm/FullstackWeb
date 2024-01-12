
import React, { useState } from 'react';
import './NavBar.css';

function NavBar() {
  const menuItems = ['Home', 'Analytics'];
  const [toggle, setToggle] = useState(false);
  
  // Use map to create the listItems array
  const listItems = menuItems.map((item) => (
    <li className='app__flex p-text' key={`link-${item}`}>
      <a href={`#${item}`}>{item}</a>
    </li>
  ));

  // Return the listItems inside a ul
  return (
    <ul className='Links'>
      
      {listItems}
    </ul>
  );
}  

export default NavBar;