import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'





const Welcome = () => {

const [ news, setNews] = useState([])

//fetch news

const fetchNews = () => {
    fetch("http://hn.algolia.com/api/v1/search?query=diatoms")
    // fetch("http://hn.algolia.com/api/v1/search?query=foo&tags=story")
    .then(result => result.json())
     .then(data => setNews(data.hits))
    //  .then(data => console.log(data));
    // .catch(error => console.log(error));
};
useEffect(() => {
    fetchNews()
})
useEffect(() => {
    document.body.style.backgroundColor = '#4a5f6b'
    
})




    return (

        <Layout>

<div className="body">
        <section>
            <div className={styles.container}>
                <div className={styles.backgroundImg}> 
                <div className={styles.box}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <div className={styles.content}>
                        <h2>Welcome to: </h2>
                        <h3>Micro Life</h3>
                        <h4>Login or Sign up and See the MicroCosm today. </h4>
                        </div>
                </div>
                </div>
            </div> 
        </section> 
    </div>


        </Layout>
    );
};

export default Welcome;