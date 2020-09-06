import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout'
import Axios from "axios";





const Welcome = () => {

const [ news, setNews] = useState([])

//fetch news

const fetchNews = () => {
    fetch("http://hn.algolia.com/api/v1/search?query=diatoms")
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
        <div style={{
            display: 'flex',
            justifyContent: "center",
            textAlign:"center",
            flexDirection: "column",

        }}>
            <h1>Welcome Page </h1>
            {news.map((n,i) => (<p key={i} > {n.title}</p>
            
            ))}

               
        </div>
        </Layout>
    );
};

export default Welcome;