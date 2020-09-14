import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Card from '../components/card'
import Form from '../components/Form';
import Weather from '../components/Weather';
import Fetch from 'isomorphic-unfetch';
import Footer from '../components/Footer'
import ReactPlayer from 'react-player/'
import VideoPlayer from '../components/VideoPlayer'
import Card3 from '../components/Card3'
import Section from '../components/Section'

// const image = require('./assets/vercel.svg')
const image = "https://4.bp.blogspot.com/-eLvl0BSs_bs/Vx-c5A6qQ7I/AAAAAAAAVyI/6VgSC-iwvpED3eNtR7UIJ9KW9gz8CMOGQCLcB/s1600/diatom.jpg"
const image2 = "https://i.pinimg.com/564x/9d/44/2c/9d442c33a98984eeec352a3da1e52655.jpg"
const image3 = "https://i.pinimg.com/564x/28/65/b7/2865b768eb9804dd2b4b69ece5cf34a4.jpg "
const image4 = " https://i.pinimg.com/564x/a8/d5/b3/a8d5b36fe881bd76e188094c1985cf18.jpg"
const image5 = "https://i.pinimg.com/564x/4a/7a/00/4a7a00eb8a7502e6c9993a6ee7db33bd.jpg "
const video = "https://www.youtube.com/watch?v=zoNQWg6T81M"

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
      <main style={{
                 textAlign:"center",
               }}>
      <section>
    <div style ={{
      display: "flex",
      alignContent: "center",
      position: "relative",
      left: '15%',
      width: "100%",
      padding:"70px",}}>
    <ReactPlayer url="https://www.youtube.com/watch?v=JZjzQhFG6Ec&t=132s" controls={true} loop ={true} muted={false} autoplay={false} background={true} playing={false} width='60vw' height='550px'  />
    </div>
    </section>
      <section>
              
                <h2>There are "5" Five Types of Micro Life. </h2>
                <div style={{
                        padding:"50px",
                        fontSize: "25px",
                    }}>
                <p>Click on the video above to get started learning about the 5 types of Microscopic life. Feel free to explore this application and learn about the wonders of this microcosmic kingdom. </p>
                    </div>
        </section>
<section style={{
  display:"flex",justifyContent:"center",flexWrap:"wrap",textAlign:"center"}}>

<div style={{
                    display:"flex",
                    justifyContent:"center",
                    width:"100%", paddingTop:"45px",}}> <h2>Algae and Diatoms</h2></div>
 <div style={{
  display:"flex",
  justifyContent:"center",}}>
  <Card3 
    image={image}
    name="Diatoms / Algae "
    info="Diatoms get PROPS ad their energy from from sun. Diatoms are a type of algae but they have shells of glass"
    />
</div>
                  <div style={{
                    display:"flex",
                    justifyContent:"center",
                    width:"100%", paddingTop:"45px",}}> <h2>Protozoa "Little Animal"</h2></div>

<div style={{
  display:"flex",
  justifyContent:"center",}}>
<Card3 
    image={image2}
    name="Protozoa"
    info=""/>
</div>

<div style={{
                    display:"flex",
                    justifyContent:"center",
                    width:"100%", paddingTop:"45px",}}> <h2>Fungi</h2></div>
<div style={{
  display:"flex",
  justifyContent:"center",}}>
<Card3 
    image={image3}
    name="Fungi"
    info=""
    />
</div>


<div style={{
                    display:"flex",
                    justifyContent:"center",
                    width:"100%", paddingTop:"45px",}}> <h2>Virus</h2></div>
<div style={{
  display:"flex",
  justifyContent:"center",
  
}}>
<Card3 
    image={image4}
    name="Virus"
    info=""
    />
</div>
<div style={{
                    display:"flex",
                    justifyContent:"center",
                    width:"100%", paddingTop:"45px",}}> <h2>Bacteria</h2></div>
<div style={{
  display:"flex",
  justifyContent:"center",}}>
<Card3 
    image={image5}
    name="Bacteria"
    info=""
    />
</div>
</section>
      </main>
    
{/* </div> */}
<div>
            <section style={{
                width: "100%",
                height:"90vh",
                display:"flex",
                justifyContent:"center",
                backgroundColor: "blue",
            }}>
                <div style={{
                    height:"90vh",
                    width: "100%",
                }}>
                    <VideoPlayer video={video}  card={card1} name="Props come in here "/>
                </div>
            </section>
            </div>

<Footer />
  {/* </div> */}
  </Layout>

  );

}   
