import React from 'react';
import Navbar from './navbar'
import Head from 'next/head'
import Footer from '../components/Footer'

const Layout = (props) => (
    

        <div>
            <Head>
                <title>MicroCosim</title>
                <link rel="stylesheet"
                href="https://bootswatch.com/4/cerulean/bootstrap.min.css" />
            </Head>
            <Navbar />
            {props.children}
          
        </div>
    );


export default Layout;