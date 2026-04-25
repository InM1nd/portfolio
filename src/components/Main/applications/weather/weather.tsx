'use client'

import React, { useEffect, useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const BASE_URL = 'https://api.openweathermap.org'
const API_KEY = 'b8cdefe33c7dc142f0fe3da4ae1bf5e8'
const tempUnit = 'metric'

interface WeatherData {
  name: string
  sys: { country: string }
  main: {
    temp: number
    feels_like: number
    humidity: number
    pressure: number
  }
  wind: { speed: number }
  weather: Array<{ description: string }>
  visibility: number
  dt: number
}

const Weather = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/data/2.5/weather?q=Vienna&appid=${API_KEY}&units=${tempUnit}`
        )
        const data = await response.json()
        setWeatherData(data)
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="space-y-4">
      <Search setWeatherData={setWeatherData} setIsLoading={setIsLoading} />
      <Result weatherData={weatherData} isLoading={isLoading} />
    </div>
  )
}

interface SearchProps {
  setWeatherData: (data: WeatherData) => void
  setIsLoading: (loading: boolean) => void
}

const Search = ({ setWeatherData, setIsLoading }: SearchProps) => {
  const [city, setCity] = useState('')
  const [status, setStatus] = useState<'READY' | 'SCANNING' | 'ERROR'>('READY')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('SCANNING')
    setIsLoading(true)
    
    try {
      const response = await fetch(
        `${BASE_URL}/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${tempUnit}`
      )
      if (!response.ok) {
        throw new Error('City not found!')
      }
      const data = await response.json()
      setWeatherData(data)
      setCity('')
      setStatus('READY')
    } catch (error) {
      console.error(error)
      setStatus('ERROR')
      setTimeout(() => setStatus('READY'), 2000)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="border border-terminal-green/50 bg-terminal-dark/20 p-4">
      <div className="font-mono text-xs text-terminal-green/70 mb-3 uppercase tracking-wider">
        INPUT_LOCATION:
      </div>
      <form onSubmit={handleSubmit} className="flex items-center gap-3">
        <Input
          type="text"
          placeholder="ENTER CITY"
          required
          autoComplete="off"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="flex-1 rounded-none bg-terminal-dark/20 border border-terminal-green/30 text-terminal-green font-mono text-sm px-4 py-2 focus:border-terminal-green/70 focus:bg-terminal-green/5 focus:outline-none focus:ring-0 transition-all placeholder:text-terminal-green/20"
        />
        <Button
          type="submit"
          disabled={status === 'SCANNING'}
          className="px-4 py-2 border border-terminal-green bg-terminal-dark/50 font-mono text-xs uppercase tracking-wider text-terminal-green hover:bg-terminal-green hover:text-black transition-all duration-300 disabled:opacity-50"
        >
          {status === 'SCANNING' ? '[⚡] SCANNING...' : '[⚡] SCAN'}
        </Button>
      </form>
      {status === 'ERROR' && (
        <div className="mt-2 font-mono text-xs text-terminal-danger">
          [✗] ERROR: LOCATION NOT FOUND
        </div>
      )}
    </div>
  )
}

interface ResultProps {
  weatherData: WeatherData | null
  isLoading: boolean
}

const Result = ({ weatherData, isLoading }: ResultProps) => {
  if (isLoading) {
    return (
      <div className="border border-terminal-green/50 bg-terminal-dark/20 p-4">
        <div className="font-mono text-sm text-terminal-green/70 uppercase tracking-wider">
          SCANNING...
        </div>
        <div className="mt-2 flex gap-1">
          <span className="animate-pulse text-terminal-green">█</span>
          <span className="animate-pulse delay-100 text-terminal-green">█</span>
          <span className="animate-pulse delay-200 text-terminal-green">█</span>
        </div>
      </div>
    )
  }

  if (!weatherData) {
    return (
      <div className="border border-terminal-green/50 bg-terminal-dark/20 p-4">
        <div className="font-mono text-sm text-terminal-green/70 uppercase tracking-wider">
          NO DATA AVAILABLE
        </div>
      </div>
    )
  }

  const wind = Math.round(weatherData.wind.speed)
  const temp = Math.round(weatherData.main.temp)
  const feelsLike = Math.round(weatherData.main.feels_like)
  const description = weatherData.weather[0].description
  const capitalizedDescription = description.charAt(0).toUpperCase() + description.slice(1)
  const visibility = weatherData.visibility / 1000
  const unixTimestamp = weatherData.dt
  const date = new Date(unixTimestamp * 1000)
  const formattedTime = date.toLocaleString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  })
  const month = date.toLocaleString('en-US', { month: 'long' })
  const dayDate = date.getDate()

  // Calculate percentages for progress bars
  const tempPercent = Math.min(100, ((temp + 20) / 50) * 100) // -20 to 30°C range
  const humidityPercent = weatherData.main.humidity
  const pressurePercent = ((weatherData.main.pressure - 950) / 100) * 100 // 950-1050 range

  return (
    <div className="space-y-4">
      {/* Location and Time */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border border-terminal-green bg-terminal-dark/20 p-4">
          <div className="font-mono text-xs text-terminal-green/70 mb-2 uppercase tracking-wider">
            LOCATION
          </div>
          <div className="font-mono text-lg text-terminal-green">
            {weatherData.name}, {weatherData.sys.country}
          </div>
        </div>
        <div className="border border-terminal-green bg-terminal-dark/20 p-4">
          <div className="font-mono text-xs text-terminal-green/70 mb-2 uppercase tracking-wider">
            DATE_TIME
          </div>
          <div className="font-mono text-sm text-terminal-green">
            {formattedTime}
          </div>
          <div className="font-mono text-sm text-terminal-green/80">
            {month} {dayDate}
          </div>
        </div>
      </div>

      {/* Temperature */}
      <div className="border border-terminal-green bg-terminal-dark/20 p-4">
        <div className="font-mono text-xs text-terminal-green/70 mb-2 uppercase tracking-wider">
          TEMPERATURE
        </div>
        <div className="font-mono text-4xl text-terminal-green mb-2">
          {temp}°C
        </div>
        <div className="font-mono text-sm text-terminal-green/80 mb-2">
          FEELS LIKE: {feelsLike}°C
        </div>
        <div className="font-mono text-xs text-terminal-green/70 uppercase">
          {capitalizedDescription}
        </div>
        <div className="mt-2 h-2 border border-terminal-green bg-terminal-dark">
          <div 
            className="h-full bg-terminal-green transition-all duration-300"
            style={{ width: `${tempPercent}%` }}
          />
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 gap-4">
        <div className="border border-terminal-green bg-terminal-dark/20 p-4">
          <div className="font-mono text-xs text-terminal-green/70 mb-2 uppercase tracking-wider">
            HUMIDITY
          </div>
          <div className="font-mono text-2xl text-terminal-green mb-2">
            {weatherData.main.humidity}%
          </div>
          <div className="h-1 border border-terminal-green bg-terminal-dark">
            <div 
              className="h-full bg-terminal-green transition-all duration-300"
              style={{ width: `${humidityPercent}%` }}
            />
          </div>
        </div>

        <div className="border border-terminal-green bg-terminal-dark/20 p-4">
          <div className="font-mono text-xs text-terminal-green/70 mb-2 uppercase tracking-wider">
            PRESSURE
          </div>
          <div className="font-mono text-2xl text-terminal-green mb-2">
            {weatherData.main.pressure} hPa
          </div>
          <div className="h-1 border border-terminal-green bg-terminal-dark">
            <div 
              className="h-full bg-terminal-green transition-all duration-300"
              style={{ width: `${pressurePercent}%` }}
            />
          </div>
        </div>

        <div className="border border-terminal-green bg-terminal-dark/20 p-4">
          <div className="font-mono text-xs text-terminal-green/70 mb-2 uppercase tracking-wider">
            WIND SPEED
          </div>
          <div className="font-mono text-2xl text-terminal-green">
            {wind} km/h
          </div>
        </div>

        <div className="border border-terminal-green bg-terminal-dark/20 p-4">
          <div className="font-mono text-xs text-terminal-green/70 mb-2 uppercase tracking-wider">
            VISIBILITY
          </div>
          <div className="font-mono text-2xl text-terminal-green">
            {visibility.toFixed(1)} km
          </div>
        </div>
      </div>
    </div>
  )
}

export default Weather
