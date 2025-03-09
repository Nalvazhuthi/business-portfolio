import React from 'react';


const Contact = () => {
  return (
    <div className='contact section' id='contact'>
      <h1 className="contact__title">Contact Me</h1>
      <form className="contact__form">
        <div className="contact__form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" />
        </div>
        <div className="contact__form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" />
        </div>
        <div className="contact__form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Enter your message"></textarea>
        </div>
        <button type="submit" className="contact__form-button">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;