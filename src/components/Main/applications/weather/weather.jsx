import React, { useEffect, useState } from "react";
import styles from "./weather.module.scss"; 
import axios from 'axios';


const BASE_URL = 'https://api.openweathermap.org';
const API_KEY = 'b8cdefe33c7dc142f0fe3da4ae1bf5e8';
const tempUnit = "metric"


// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// https://api.openweathermap.org/data/2.5/weather?q=London&appid={API key}

// https://api.openweathermap.org/data/2.5/weather?q=London&appid=b8cdefe33c7dc142f0fe3da4ae1bf5e8&units=metric

const Weather = () => {
    
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `${BASE_URL}/data/2.5/weather?q=Vienna&appid=${API_KEY}&units=${tempUnit}`
            );
            const data = await response.json();
            setWeatherData(data);
        };
        fetchData();
    }, []);
    
    
    return (
            <div className={styles.weather}>
                <Search weatherData={setWeatherData}/>
                <Result weatherData={weatherData}/>
            </div> 
    )
}


const Search = (props) => {

    const [city, setCity] = useState ("");
    const {weatherData: setWeatherData} = props;

    const handleSubmit = async (event) => {
        event.preventDefault();
        try{ 
            const response = await fetch (
                `${BASE_URL}/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${tempUnit}`
            );
            if (!response.ok){
                throw new Error("City not found!");
            }
            const data = await response.json();
            console.log(data);
            setWeatherData(data);
            setCity("");
        } catch (error) {
            console.error(error.message);
            setCity("");
            alert("City not found. Please try again with a different city.");
        }
    }

    const handleChange = (event) => {
        setCity(event.target.value);
    };

    return (
        <div className={styles.search_form}>
        <form className={styles.form} onSubmit={handleSubmit}>
                    <input 
                    className={styles.input}
                    type='text' 
                    placeholder="Search By Loaction" 
                    required
                    autoComplete="off"
                    value={city}
                    onChange={handleChange}
                    />
                    <button className={styles.search} type="submit">
                        Find
                    </button>
                </form>
        </div>
    )
}


const Result = (props) => {

    const {weatherData} = props;
    
    if (!weatherData) {
        return <div>Loading...</div>;
    }

    const wind = Math.round(weatherData.wind.speed);
    const temp = Math.round(weatherData.main.temp);
    const feelsLike = Math.round(weatherData.main.feels_like);
    const description = weatherData.weather[0].description;
    const capitalizedDescription = description.charAt(0).toUpperCase() + description.slice(1);
    const visibility = weatherData.visibility / 1000;
    const unixTimestamp = weatherData.dt;
    const date = new Date(unixTimestamp * 1000);
    const formattedTime = date.toLocaleString("en-US", {
        hour: "2-digit",
        minute: "2-digit"
      });
    const month = date.toLocaleString("en-US", { month: "long", language: "english" });
    const dayDate = date.getDate();

    return (
        <div className={styles.main}>
            <div className={styles.top}>
            <div className={styles.left}>
            <div className={styles.time}>{formattedTime}</div>
            <div className={styles.date}>{month} {dayDate}</div>
            <div className={styles.location}> {weatherData.name}, {weatherData.sys.country} </div>
            </div>

            <div className={styles.right}>
            <div className={styles.temp}>{temp}°C</div>
            <div className={styles.feelsLike}> Feels like {feelsLike}°C.<br/>{capitalizedDescription}</div> 
            </div>
            </div>
                <div className={styles.bot}>
                <div className={styles.additional}>
                    <div id='humidity'>
                        Humidity: {weatherData.main.humidity}%
                    </div>
                    <div id='wind'>
                        Wind: {wind}km/h
                    </div>
                </div> 
                <div className={styles.additional}>
                    <div id='pressure'>
                        Pressure: {weatherData.main.pressure}hPa
                    </div>
                    <div id='visibility'>
                        Visibility: {visibility}km
                    </div>
                </div> 
                </div>
        </div>
    )
}







export default Weather 
