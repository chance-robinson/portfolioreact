import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import Modal from 'react-modal/lib/components/Modal'
import { useState } from 'react'

Modal.setAppElement('#root')
const Contact = () => {
  const [modalSuccess, setModalSuccess] = useState(false);
  const [modalError, setModalError] = useState(false);
  
  const submitSuccess = event => {
    setModalSuccess(true);
  }

  const submitError = event => {
    setModalError(true);
  }

  const handleSubmit = event => {
    event.preventDefault();

    var nameData = document.querySelector('#name').value;
    var emailData = document.querySelector('#email').value;
    var messageData = document.querySelector('#message').value;
    let formData = new FormData();

    const formActual = document.getElementById('passContact');

    formData.append('name', nameData);
    formData.append('email', emailData);
    formData.append('message', messageData);

    fetch('/api', {
      method: "post",
      body: formData
    })
      .then(response => {
        formActual.reset();
        submitSuccess();
    })
      .catch((error) => {
        console.log(error);
        submitError();
    });
  };


  return (
    <section id='contact'>
      <h5>Let's get in touch</h5>
      <h2>Contact Me</h2>
      <Modal isOpen={modalSuccess} onRequestClose={() => setModalSuccess(false)} className="Modal" overlayClassName="Modal__Overlay">
        <p>Your form was submitted</p>
        <button className='btn btn-primary' onClick={() => setModalSuccess(false)}>Close</button>
      </Modal>
      <Modal isOpen={modalError} onRequestClose={() => setModalError(false)} className="Modal" overlayClassName="Modal__Overlay">
        <p>Form not submitted, try again.</p>
        <button className='btn btn-primary' onClick={() => setModalError(false)}>Close</button>
      </Modal>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <AiOutlineMail className='contact__icons'></AiOutlineMail>
            <h4>Email</h4>
            <h5>brighamyoung2@gmail.com</h5>
            <a href="mailto:brighamyoung2@gmail.com" target='_blank' rel='noopener noreferrer'>
              Send a message</a>
          </article>
        </div>
        <form onSubmit={handleSubmit} id='passContact' name="passContact" action=''>
          <input type="text" id='name' name='name' placeholder='Full Name' required/>
          <input id='email' name='email' placeholder='Email' required/>
          <textarea id='message' name="message" rows="10" placeholder='Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact