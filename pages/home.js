import React from 'react';
import  { useRouter } from 'next/router'
import Navbar from '../components/navbar'
import Layout from '../components/Layout'
import ReactPlayer from 'react-player/'

const Home = () => {
    const router = useRouter();

    return (
       
        <Layout>
             <div style={{
                 textAlign:'center'
             }}>
            <h1>Home Page </h1>
           
            <div style={{ 
                 position: 'absolute',
                 width: "100%",
                 left: "50%",
                 top:"50%",
                 height: "100%",
                 objectFit: "cover",
                 transform: "translate(-50%, -50%)",
                 opacity: '99%',
                 zIndex: '-1',
            }}>
            <ReactPlayer url="https://vimeo.com/454185142" controls={true} loop ={true} muted={true} autoplay={true} background={true} playing={true} width='100%' height='100%' left='20%'/>
            </div>
            </div>
            </Layout>
      
    );
};

export default Home;