import React from 'react';
import styles from '../styles/Home.module.css'


const Footer = () => {
    return (
        <div>
            <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          &#169; Luke Myers 2020{' '}
          {/* <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />  */}
          <div><p></p></div>
          <div className={styles.reactLogo}><span class="react-logo"><span class="nucleo"></span></span></div>            
        </a>
      </footer>
    </div>
   
    
    );
};

export default Footer;