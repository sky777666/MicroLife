import React from 'react'

const Weather = ({description, city, country, error, temperature}) => {

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

        <div>
            {city && country && <p>{city}, {country}</p>}
            {temperature && <p>{temperature}  °F</p>}
            {description && <p> Conditions: {description}</p>}
            {error && <p>{error}</p>}
        </div>
    )
}

export default Weather; 