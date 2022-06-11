import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
// import { useState, useEffect } from 'react'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Let's get in touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <AiOutlineMail className='contact__icons'></AiOutlineMail>
            <h4>Email</h4>
            <h5>brighamyoung2@gmail.com</h5>
            <a href="mailto:brighamyoung2@gmail.com" target='_blank' rel='noopener noreferrer'>Send a message</a>
          </article>
        </div>
        <form name="passContact" action="." method='POST'>
          <input type="text" name='name' placeholder='Full Name' required/>
          <input type="email" name='email' placeholder='Email' required/>
          <textarea name="message" rows="10" placeholder='Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact