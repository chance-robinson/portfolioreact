import React from 'react'
import './about.css'
import AboutMe from '../../assets/About_Me_Image.jpg'
import {TbStars} from 'react-icons/tb'
import {AiOutlineFolder} from 'react-icons/ai'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const About = () => {
  return (
    <section id='about'>
        <h5>Get to know</h5>
        <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <LazyLoadImage src={AboutMe}/>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <TbStars className='about__icon'></TbStars>
              <h5>Experience</h5>
              <small>3+ Years in College</small>
            </article>
            <article className='about__card'>
              <AiOutlineFolder className='about__icon'></AiOutlineFolder>
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit similique earum quae cum nesciunt animi obcaecati consequatur modi sequi adipisci ipsum, libero laudantium totam! Recusandae, fugit voluptas? Ratione, quos architecto.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About