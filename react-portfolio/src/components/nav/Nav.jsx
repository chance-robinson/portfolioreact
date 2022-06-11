import React from 'react'
import './nav.css'
import {HiOutlineHome} from 'react-icons/hi'
import {FiUser} from 'react-icons/fi'
import {AiOutlineBook} from 'react-icons/ai'
import {BsBriefcase} from 'react-icons/bs'
import {AiOutlineContacts} from 'react-icons/ai'
import { useEffect, useState } from 'react'

const Nav = () => {

  const [sectionsList, setSections] = useState([]);
  const [navList, setNavList] = useState([]);

  useEffect(() => {
    setSections(document.querySelectorAll("section"));
    setNavList(document.querySelectorAll("nav a"));
   }, [])

  useEffect(() => {

    const options = {
        threshold: ".5",
    };

    const observer = new IntersectionObserver(entries => {

        entries.forEach( e => {
            if (e.isIntersecting) {
                //SECTION INDICATOR
                navList.forEach(link => {
                    if (e.target.id === link.dataset.nav) {
                      link.classList.add("active");
                    }else {
                      link.classList.remove("active");
                    }
                });
            }
        });

    }, options);

    sectionsList.forEach(section => {
      observer.observe(section);
  })
    }, [sectionsList,navList]);

  return (
    <nav>
        <a data-nav="home" href="#home"><HiOutlineHome/></a>
        <a data-nav="about" href="#about"><FiUser/></a>
        <a data-nav="experience" href="#experience"><AiOutlineBook/></a>
        <a data-nav="portfolio" href="#portfolio"><BsBriefcase/></a>
        <a data-nav="contact" href="#contact"><AiOutlineContacts/></a>
    </nav>
  )
}

export default Nav