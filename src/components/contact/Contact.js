import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

export const Contact = () => {
const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();
  emailjs
    .sendForm('service_li8v9dc', 'template_9zvazfm', form.current, {
      publicKey:'Dk4zYlsTrkFuDeU-1',
      })
    .then(
      () => {
        console.log('SUCCESS!');
        alert("Email has been sent!");
        e.target.reset();
        form.current.reset();
      },
      (error) => {
        console.log('FAILED...', error.text);
        alert('Unable to send email. Please try again!');
        e.target.reset();
        form.current.reset();
      },
    );
  };

  return (

    <section className='contactPage'>
        <div id='contact'>
          <h1 className='contactPageTitle'>
            Contact Me
          </h1>
          <span className='contactDesc'>
            Please fill out the form below to discuss any work opportunities.
          </span>
          <form className='contactForm' ref={form} onSubmit={sendEmail}>
            <input type='text ' className='name' placeholder='Your name' name='from_name'/>
            <input type='email' className='email' placeholder='Your email address' name='your_email'/>
            <textarea className='msg' name='message' rows='6' placeholder='Your Message'></textarea>
            <button type='submit' value='send'className='submitBtn'> Submit </button>
          </form>
        </div>
    </section>

  )
}
