import React, { useEffect, useState } from "react";
import {Main, SearchBox, Form, Input, SeachImg, Button, Container, Card, LongCard, VerticalCard } from "./weather.module.jsx"; 
import SearchIcon from '../../../../img/other/Search.png'
const BASE_URL = 'https://api.openweathermap.org';
const API_KEY = 'b8cdefe33c7dc142f0fe3da4ae1bf5e8';
const tempUnit = "metric"




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
            <Main>
                <Search setWeatherData={setWeatherData}/>
                <Result weatherData={weatherData}/>
            </Main> 
    )
}


const Search = ({setWeatherData}) => {
    const [city, setCity] = useState ("");

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
        <SearchBox>
            <Form onSubmit={handleSubmit}>
                    <Input 
                    type='text' 
                    placeholder="Search By Loaction" 
                    required
                    autoComplete="off"
                    value={city}
                    onChange={handleChange}
                    />
                    <Button type="submit">
                        <SeachImg src={SearchIcon}/>
                    </Button>
            </Form>
        </SearchBox>
    )
}


const Result = ({weatherData}) => {
    
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
        <Container>
           
            <VerticalCard >
                <div >{formattedTime}</div>
                <div >{month} {dayDate}</div>
                <div > {weatherData.name}, {weatherData.sys.country} </div>
            </VerticalCard>
            <VerticalCard >
            <div >{temp}°C</div>
            <div > Feels like {feelsLike}°C.<br/>{capitalizedDescription}</div> 
            </VerticalCard>
            
 
            <LongCard >
                <div id='humidity'>
                    Humidity: {weatherData.main.humidity}%
                </div>
                <div id='wind'>
                    Wind: {wind}km/h
                </div>
            </LongCard> 
            <LongCard >
                <div id='pressure'>
                    Pressure: {weatherData.main.pressure}hPa
                </div>
                <div id='visibility'>
                    Visibility: {visibility}km
                </div>
            </LongCard> 
                
        </Container>
    )
}







export default Weather 
