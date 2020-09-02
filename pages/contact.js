import React, { useEffect } from 'react';
import  { useRouter } from 'next/router'
import Navbar from '../components/navbar'
import Layout from '../components/Layout'
import ContactUs from '../components/ContactUs'
import styles from '../styles/Home.module.css'
import{ init } from 'emailjs-com';


const Contact = () => {
    const router = useRouter();

    useEffect(() => {
        document.body.style.backgroundColor = '#4a5f6b'
        
    })

    // code fragment
var data = {
    service_id: 'service_x16e72g',
    template_id: 'template_vltyi8r',
    user_id: 'YOUR_USER_ID',
    template_params: {
        'username': 'James',
        'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
    }
};
 
// .ajax('https://api.emailjs.com/api/v1.0/email/send', {
//     type: 'POST',
//     data: JSON.stringify(data),
//     contentType: 'application/json'
// }).done(function() {
//     alert('Your mail is sent!');
// }).fail(function(error) {
//     alert('Oops... ' + JSON.stringify(error));
// });





    return (
        <Layout>
        <div className={styles.contactForm}>
            <ContactUs />
        </div>
        </Layout>
    );
};

export default Contact;