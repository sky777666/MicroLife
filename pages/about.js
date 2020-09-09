import React from 'react';
import  { useRouter } from 'next/router'
import Navbar from '../components/navbar'
import Layout from '../components/Layout'
import ReactPlayer from 'react-player/lazy'
import styles from '../styles/Home.module.css'
import CardSmall from '../components/cardSmall'
// import { createClient } from 'pexels';






const About = () => {
    const router = useRouter();


    return (
        <Layout>
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
            <ReactPlayer url="https://player.vimeo.com/external/269971860.hd.mp4?s=eae965838585cc8342bb5d5253d06a52b2415570&profile_id=174&oauth2_token_id=57447761 " controls={true} loop ={true} muted={true} autoplay={true} background={true} playing={true} width='100%' height='100%' left='20%'
            />
            </div>
            <section>
            <div style={{
                display: "flex",
                alignContent:"center",
                padding:"20px",
                flexWrap:"wrap",
            }}>
                <CardSmall />
                <h1> We are here to inspire a new geniration of Microbiologist. </h1>
            </div>
            </section>


        </div>
        </Layout>
    );
};

export default About;