import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'





const Welcome = () => {


useEffect(() => {
    document.body.style.backgroundColor = '#4a5f6b'
    
})




    return (

        <Layout>
<div style={{
display:"flex",
justifyContent:"center",

}}>
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
</div>

        </Layout>
    );
};

export default Welcome;