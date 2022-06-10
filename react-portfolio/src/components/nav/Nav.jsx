import React from 'react'
import './nav.css'
import {HiOutlineHome} from 'react-icons/hi'
import {FiUser} from 'react-icons/fi'
import {AiOutlineBook} from 'react-icons/ai'
import {BsBriefcase} from 'react-icons/bs'
import {AiOutlineContacts} from 'react-icons/ai'
import { useEffect } from 'react'

const Nav = () => {

  const sections = document.querySelectorAll("section");
  const nav = document.querySelector("nav");
  // const navList = document.querySelectorAll("nav");

  const options = {
      threshold: "0.6",
  };

  const observer = new IntersectionObserver(entries => {

      entries.forEach( e => {
          if (e.isIntersecting) {
            console.log(e.target.id);
              if (e.target.id !== "#") {
                  nav.classList.add("active");
              }else {
                  nav.classList.remove("active");
              }

              // //SECTION INDICATOR
              // navList.forEach(link => {
              //     if (e.target.id === link.dataset.nav) {
              //         link.classList.add("active");
              //     }
              // });
          }
      });

  }, options);

  useEffect(() => {
    sections.forEach(section => {
      console.log("Hi");
      observer.observe(section);
  })
    }, []);

  return (
    <nav>
        <a data-nav="#" href="#"><HiOutlineHome/></a>
        <a data-nav="about" href="#about"><FiUser/></a>
        <a data-nav="experience" href="#experience"><AiOutlineBook/></a>
        <a data-nav="portfolio" href="#portfolio"><BsBriefcase/></a>
        <a data-nav="contact" href="#contact"><AiOutlineContacts/></a>
    </nav>
  )
}

export default Nav