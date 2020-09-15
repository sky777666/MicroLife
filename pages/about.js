import React from 'react';
import  { useRouter } from 'next/router'
import Navbar from '../components/navbar'
import Layout from '../components/Layout'
import ReactPlayer from 'react-player/lazy'
import styles from '../styles/Home.module.css'
import CardSmall from '../components/cardSmall'
import Head from 'next/head'






const About = () => {
    const router = useRouter();


    return (
        <Layout>

        <Head>
        <title>Micro Life | Learn about Microscopic Life</title>
        <link rel="icon" href="/favicon.ico" />
        <script src='https://www.google.com/recaptcha/api.js'></script>
        <meta charset="UTF-8" />
         <meta name="description" content="Microscopic Life, learn about microscopic life on earth and on microbes on Mars." /> 
         <meta name="keywords" content="Germs, germ, teach kids microbiology, protozoa, virus, bacteria, microcosm, microbiology, diatoms, life on mars, mars life, microscopic life," />
         <meta name="author" content="Luke Myers" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>


            <div className={styles.about}>
            
            

            <div style={{ 
                 position: 'absolute',
                 width: "100%",
                 left: "50%",
                 top:"50%",
                 height: "100%",
                 objectFit: "cover",
                 transform: "translate(-50%, -50%)",
                 opacity: '90%',
                 zIndex: '-1',
            }}>
            <ReactPlayer url="https://www.youtube.com/watch?v=nF4SUQU_7cU " controls={true} loop ={true} muted={true} autoplay={true} background={true} playing={true} width='100%' height='100%' left='20%'
            />
            </div>
            <section>
            <div style={{
                display: "flex",
                alignContent:"center",
                padding:"20px",
                flexWrap:"wrap",
            }}>
                <div style={{
                    padding:"60px"}}>
                <h1> We are here to inspire a new geniration of Microbiologist. </h1>
                </div>
                <div>
                <CardSmall />
                </div>
            </div>

               

            </section>


        </div>
        </Layout>
    );
};

export default About;