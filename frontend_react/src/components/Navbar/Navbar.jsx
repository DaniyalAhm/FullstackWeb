import React, { useState } from 'react';
import './Navbar.scss';

import { images } from '../../constant-imports';
import { easeInOut, motion } from 'framer-motion';

function Navbar() {
  const menuItems = ['Home', 'About', 'Footer', 'Header', 'Personal Projects', 'Skills'];
  const [toggle, setToggle] = useState(false);
  
  // Use map to create the listItems array
  const listItems = menuItems.map((item) => (
    <li className='app__flex p-text' key={`link-${item}`}>
      <a href={`#${item}`}>{item}</a>
    </li>
  ));
  
  return (
    <nav className='app__navbar'>
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>

      <div>
        <ul className='app__navbar-links'>
          {listItems} {/* Render the list items here */}
        </ul>

        <div className='app__navbar-hamburger'>
          <img src={images.logo} onClick={() => setToggle(true)} className='app__navbar-hamburger-logo' />

          {toggle && (
  <motion.div
    whileInView={{ x: [300, 0] }}
    initial={{ opacity: 0, x: -100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
    className="app__navbar-hamburger-menu"
  >
    <ul>
      {/* Render menu items inside the motion.div */}
     
      {menuItems.map((item) => (
        <li key={item} className='app__navbar-hamburger-items'>
          <a href={`#${item}`} onClick={() => { setToggle(false)}}>{item}</a>
        </li>
      ))}
    </ul>
  </motion.div>
)}
        </div>
      </div>
    </nav>
  );
}
export default Navbar; 