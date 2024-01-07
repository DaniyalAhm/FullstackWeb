import React from 'react'
import './Header.scss'
import {motion} from 'framer-motion'
import {images} from '../../constant-imports'




function Header() {
  return (
    <div className='Header'>
      <motion.div 
       
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className= "Header__info"

      >

        <div className='Header-badge'>

        <div className='badge-cmp app__flex'>

        <p className='Intro'>  Hello, I am Daniyal</p>
        <h1 className='Header__name'>Daniyal Ahmed</h1>
        

        </div>

        </div>

      </motion.div>
    </div>
  )
}

export default Header
