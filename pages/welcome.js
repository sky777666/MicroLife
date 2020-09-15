import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import Head from 'next/head'




const Welcome = () => {


useEffect(() => {
    document.body.style.backgroundColor = '#4a5f6b'
    
})




    return (

        <Layout>

    {/* <Head>
        <title>Micro Life | Learn about Microscopic Life</title>
        <link rel="icon" href="/favicon.ico" />
        <script src='https://www.google.com/recaptcha/api.js'></script>
        <meta charset="UTF-8" />
      <meta name="description" content="Microscopic Life, learn about microscopic life on earth and on microbes on Mars." /> 
      <meta name="keywords" content="Germs, germ, teach kids microbiology, protozoa, virus, bacteria, microcosm, microbiology, diatoms, life on mars, mars life, microscopic life," />
      <meta name="author" content="Luke Myers" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head> */}

{/* <div style={{display:"flex",justifyContent:"center",}}>
<div className={styles.body}>
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
                        <br></br>
                        <h4>Login or Sign up</h4>
                        <h4> See the MicroCosm today. </h4>
                        </div>
                </div>
                </div>  
            </div> 
        </section> 
        
    </div>
</div> */}

        </Layout>
    );
};

export default Welcome;