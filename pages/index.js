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



export default function Home({ data }) {


  // console.log('data', data);
// export default function Home() {

  useEffect(() => {
    document.body.style.backgroundColor = '#4a5f6b'
    
})



// WEATHER API 
const [weather,setWeather] = useState([])
  // const APIKEY = `${APIKEY}`
  const  APIKEY = '0b19f325bc0d435df2d6ef551d0c5e32'

  async function fetchData(e) {
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
      e.preventDefault()
      const apiData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${APIKEY}`)
    //const apiData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${APIKEY}`)
      .then( res => res.json())
      .then(data => data)
      if(city && country) {
      setWeather({
        data: apiData,
        city: apiData.city,
        country: apiData.sys.country,
        description: apiData.weather[0].description,
        temperature: apiData.main.temp,
        error:""
      }
      )} else {
        setWeather({
          data: '',
          city: '',
          country: '',
          description: '',
          temperature: '',
          error:"Please Type A City And Country"
      }
      )}
  }

  return (
<Layout>
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



    <div className={styles.wrapper}>
      
            <link href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Display&display=swap" rel="stylesheet" />
            {/* <Navbar /> */}
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
   
     <div>
       <Card />
     </div>

    
  
<hr></hr>

 <div className={styles.weatherApp}>
      <h3>WEATHER APP</h3>
      <div className={styles.weatherForm}>
      <Form getWeather={fetchData} />
      </div>
      <div className={styles.weatherData}>
      <Weather
      city={weather.city}
      country={weather.country}
      description={weather.description}
      temperature={weather.temperature}
      error={weather.error}
      /></div>
      {console.log(weather.data)}
    </div> 

    
      </main>
</div>

<Footer />
  </div>
  </Layout>

  );

}   
