import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Card from '../components/card'
import Form from '../components/Form';
import Weather from '../components/Weather';
import Fetch from 'isomorphic-unfetch';
import Footer from '../components/Footer'
import YouTubePlayList from '../components/YoutubePlayList'
import NewForm from '../components/NewForm'
import ReactPlayer from 'react-player/'
import Card3 from '../components/Card3'
import Section from '../components/Section'

// const image = require('./assets/vercel.svg')
const image = "https://4.bp.blogspot.com/-eLvl0BSs_bs/Vx-c5A6qQ7I/AAAAAAAAVyI/6VgSC-iwvpED3eNtR7UIJ9KW9gz8CMOGQCLcB/s1600/diatom.jpg"

const card1 = require('../components/Card3')

export default function Home() {

  useEffect(() => {
    document.body.style.backgroundColor = '#4a5f6b'
    })


  return (
<Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div style ={{
      display: "flex",
      alignContent: "center",
      position: "relative",
      left: '20%',
      width: "100%",
      padding:"70px",
    }}>
    <ReactPlayer url="https://www.youtube.com/watch?v=JZjzQhFG6Ec&t=132s" controls={true} loop ={true} muted={false} autoplay={false} background={true} playing={false} width='700px' height='500px'  />
    </div>
         {/* <div className={styles.wrapper}>
            <link href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Display&display=swap" rel="stylesheet" />
               <div className={styles.container}> */}
               <main style={{
                 textAlign:"center",
               }}>
                <h2>Welcome to Micro Life </h2>
                <p>Click on the video above to get started learning about the 5 types of Microscopic life. Feel free to explore this application and learn about the wonders of this microcosmic kingdom. </p>


     <div><Card />  </div>
<hr></hr>

 <div>
<Card3 
    image={image}
    name="Diatoms like Props"
    info="Diatoms get PROPS ad their energy from from sun. Diatoms are a type of algae but they have shells of glass"
    />
</div>
      </main>
{/* </div> */}
<Section 
card={card1}
name="Props come in here "
/>
<Footer />
  {/* </div> */}
  </Layout>

  );

}   
