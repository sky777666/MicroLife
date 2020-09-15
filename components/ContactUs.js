
import React from 'react';
import emailjs from 'emailjs-com';
import ReactPlayer from 'react-player/lazy'
import Head from 'next/head'

// import './ContactUs.css';

export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_x16e72g','template_vltyi8r', e.target,'user_Q9yusgnJFQkEpLnVqINWt')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

  return (
    
    <div>
        <h1> Contact us ! </h1>
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="name" />
      <label>Email</label>
      <input type="email" name="email" />
      <br></br>
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>

    <div style={{  position: 'absolute',width: "100%", left: "50%", top:"50%", height: "100%", objectFit: "cover", transform: "translate(-50%, -50%)", opacity: '70%', zIndex: '-1',}}>
    <ReactPlayer url="https://player.vimeo.com/external/291648067.sd.mp4?s=7f9ee1f8ec1e5376027e4a6d1d05d5738b2fbb29&profile_id=164&oauth2_token_id=57447761" controls={true} loop ={true} muted={true} autoplay={true} background={true} playing={true} width='100%' height='100%' left='20%'/>
</div>
    </div>
  );
}





     

