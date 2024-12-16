import search_icon from '../src/assets/search.png'
import humidity_icon from '../src/assets/humidity.png'
import windspeed_icon from '../src/assets/storm.png'
import { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'

export default function Weather() {

  const [weather,setWeather] = useState({})
  const [city,setCity] = useState("Nairobi")

  const inputRef = useRef(null)

  const search = async (city) => {
    if(city === ""){
      alert("Please enter a city")
      return
    }
    try{
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`

      const response = await fetch(url)
      const data = await response.json()
      if (!response.ok) {
        alert(`${data.message}`)
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      console.log(data)
      setWeather({
        humidity: data.main.humidity,
        windspeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        description: data.weather[0].description,
        location: data.name,
        icon: data.weather[0].icon
      })
    } catch(error){
      console.log(error)
    }
  }

  useEffect(() => { 
    search("Nairobi")
  },[])


  return (
    <>
      <div className="weather-app">
        <div className="search">
          <input ref={inputRef} type="text" placeholder={`${city}...`} onChange={(e)=>setCity(e.target.value)} required/>
          <div className="search-icon" onClick={()=> {search(inputRef.current.value); inputRef.current.value=''}} >
            <img src={search_icon} alt="search icon" className="search-image"/>
          </div>
        </div>

        <img src={`../src/assets/${weather.icon}_2x.png`} alt="search icon" className="weather"/>

        <div className="results">
          <h1>{weather.temperature} ℃</h1>
          <p style={{fontFamily: "'Nothing You Could Do', cursive"}}>{weather.location}</p>
        </div>

        <p className="description">{weather.description}</p>

        <div className="details">
          <div className="col">
            <img src={humidity_icon} alt="" />
            <p>{weather.humidity}%</p>
            <p>Humidity</p>
          </div>
          <div className="col">
            <img src={windspeed_icon} alt="" />
            <p>{weather.windspeed} Km/h</p>
            <p>Wind speed</p>
          </div>
        </div>
      </div>
    </>
  )
}
