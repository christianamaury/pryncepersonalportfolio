import React from 'react';
import './contact.css';

export const Contact = () => {
  return (
    <section className='contactPage'>
        <div id='contact'>
          <h1 className='contactPageTitle'>
            Contact Me
          </h1>

          <span className='contactDesc'>
            Please fill out the form below to discuss any work opportunities.
          </span>
          <form className='contactForm'>
            <input type='text ' className='name' placeholder='Your name' />
            <input type='email' className='email' placeholder='Your email address'/>
            <textarea className='msg' name='message' rows='6' placeholder='Your Message'></textarea>
            <button type='submit' value='send'className='submitBtn'> Submit </button>


          </form>

        </div>
    </section>

  )

}
