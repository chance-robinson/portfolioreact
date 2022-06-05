import React from 'react'
import './nav.css'
import {HiOutlineHome} from 'react-icons/hi'
import {FiUser} from 'react-icons/fi'
import {AiOutlineBook} from 'react-icons/ai'
import {BsBriefcase} from 'react-icons/bs'
import {AiOutlineContacts} from 'react-icons/ai'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
        <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><HiOutlineHome/></a>
        <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FiUser/></a>
        <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><AiOutlineBook/></a>
        <a href="#portfolio" onClick={()=> setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><BsBriefcase/></a>
        <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlineContacts/></a>
    </nav>
  )
}

export default Nav