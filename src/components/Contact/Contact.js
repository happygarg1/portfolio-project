import React, { useRef } from 'react'
import './Contact.css'
import walmart from '../../Assets/walmart.png'
import microsoft from '../../Assets/microsoft.png'
import adobe from '../../Assets/adobe.png'
import facebook from '../../Assets/facebook.png'
import facebookicon from '../../Assets/facebook-icon.png'
import twittericon from '../../Assets/twitter.png'
import youtubeicon from '../../Assets/youtube.png'
import instagramicon from '../../Assets/instagram.png'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_ihvxyfn', 'template_z7ptl65', form.current,{
            publicKey: 'jfLEsCmK5mSLfXned',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
    
  return (
   <section id='contactpage'>
        <div id='clients'>
            <h1 className='contactpagetitle'>My Clients</h1>
            <p className='clientdesc'>I have had the opportunity to work with a diverse group of companies.
                Some of the notable companies I have worked with includes
            </p>
            <div className='clientimgs'>
                <img src={walmart} alt='Client' className='clientimg'/>
                <img src={adobe} alt='Client' className='clientimg'/>
                <img src={microsoft} alt='Client' className='clientimg'/>
                <img src={facebook} alt='Client' className='clientimg'/>
            </div>
        </div>
        <div id='contact'>
            <h1 className='contactpagetitle'>Contact Me</h1>
            <span className='contactdesc'>Please fill out the form below to discuss any work opportunities</span>
            <form className='contactform' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='your name' name='your_name'/>
                <input type='email' className='email' placeholder='enter your email.' name='your_email'/>
                <textarea name='message' rows="5" placeholder='your message' className='msg'></textarea>
                <button className='submitbtn' type='submit' value='send'>Submit</button>
                <div className='links'>
                    <img src={facebookicon} alt='facebookicon' className='link'/>
                    <img src={twittericon} alt='twittericon' className='link'/>
                    <img src={youtubeicon} alt='youtubeicon' className='link'/>
                    <img src={instagramicon} alt='instagramicon' className='link'/>
                    
                </div>
            </form>
        </div>
   </section>
  )
}

export default Contact
