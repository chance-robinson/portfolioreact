import React, { useEffect } from 'react'
import './nav.css'
import {HiOutlineHome} from 'react-icons/hi'
import {FiUser} from 'react-icons/fi'
import {AiOutlineBook} from 'react-icons/ai'
import {BsBriefcase} from 'react-icons/bs'
import {AiOutlineContacts} from 'react-icons/ai'
import { useState, useRef, useMemo, } from 'react'

const Nav = () => {
  // const targetRef = useRef(null);
  // const [isVisible, setIsVisible] = useState(false);

  // const callbackFunction = entries => {
  //   const[entry] = entries;
  //   setIsVisible(entry.isIntersecting);
  // };
  
  // const options = useMemo(() => {
  //   return {
  //     root: null,
  //     rootMargin: '0px',
  //     threshold: 0.4
  //   }
  // });

  // useEffect(() => {
  //   const observer = new IntersectionObserver(callbackFunction, options);
  //   const currentTarget = targetRef.current;
  //   if(currentTarget) observer.observe(currentTarget);

  //   return () => {
  //     if(currentTarget) observer.unobserve(currentTarget);
  //   }
  // }, [targetRef, options]);

  const [activeNav, setActiveNav] = useState('#');
  

  return (
    <nav>
        <a href="#" className={activeNav === '#' ? 'active' : ''}><HiOutlineHome/></a>
        <a href="#about"  className={activeNav === '#about' ? 'active' : ''}><FiUser/></a>
        <a href="#experience"  className={activeNav === '#experience' ? 'active' : ''}><AiOutlineBook/></a>
        <a href="#portfolio" className={activeNav === '#portfolio' ? 'active' : ''}><BsBriefcase/></a>
        <a href="#contact"  className={activeNav === '#contact' ? 'active' : ''}><AiOutlineContacts/></a>
    </nav>
    // <nav>
    //     <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><HiOutlineHome/></a>
    //     <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FiUser/></a>
    //     <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><AiOutlineBook/></a>
    //     <a href="#portfolio" onClick={()=> setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><BsBriefcase/></a>
    //     <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlineContacts/></a>
    // </nav>
  )
}

export default Nav