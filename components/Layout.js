import React from 'react';
import Navbar from './navbar'
import Head from 'next/head'
import Footer from '../components/Footer'
import NavBar2 from '../components/NavBar2'
const Layout = (props) => (
    

        <div style={{
            display: "flex",
            alignContent: "center",
            flexWrap: " wrap",
            
        }}>
            <Head>
                <title>MicroCosim</title>
                <link rel="stylesheet"
                href="https://bootswatch.com/4/cerulean/bootstrap.min.css" />
            </Head>
            {/* <Navbar /> */}
           <NavBar2 />
            {props.children}
          
        </div>
    );


export default Layout;