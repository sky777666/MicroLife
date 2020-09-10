import React, { useState } from 'react'



const Weather = ({description, city, country, error, temperature}) => {

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



    if(description) {
        const weatherDescription = description.split(' ')
        const keyWords = ['cloudy','clouds', 'cloud', 'overcast']
        for(let i = 0; i < weatherDescription.length; i++) {
            if(keyWords.includes(weatherDescription[i])) {
                console.log(weatherDescription[i], ': we have a match')
            }
        }
        console.log(keyWords)
        console.log(weatherDescription)

    }

    return (
<>
        <div>
            {city && country && <p>{city}, {country}</p>}
            {temperature && <p>{temperature}  °F</p>}
            {description && <p> Conditions: {description}</p>}
            {error && <p>{error}</p>}
        </div>


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
    </>
    )
}

export default Weather; 