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
    <div className="space-y-5">
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
    <section className="border-b border-terminal-green/20 pb-5">
      <form onSubmit={handleSubmit}>
        <label htmlFor="weather-city" className="font-mono text-[11px] uppercase tracking-[0.22em] text-terminal-text/60">
          Location query
        </label>
        <div className="mt-2 flex gap-2 sm:gap-3">
          <Input
            id="weather-city"
            type="text"
            placeholder="ENTER CITY"
            required
            autoComplete="off"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="h-10 min-w-0 flex-1 rounded-none border-x-0 border-b border-t-0 border-terminal-green/35 bg-transparent px-0 font-mono text-sm text-terminal-text placeholder:text-terminal-text/60 focus-visible:border-terminal-green focus-visible:ring-0"
          />
          <Button
            type="submit"
            disabled={status === 'SCANNING'}
            className="h-10 rounded-none border border-terminal-green/55 bg-transparent px-4 font-mono text-[12px] uppercase tracking-[0.16em] text-terminal-green hover:bg-terminal-green hover:text-black disabled:opacity-60"
          >
            {status === 'SCANNING' ? 'Scanning…' : 'Scan'}
          </Button>
        </div>
      </form>
      {status === 'ERROR' && (
        <p role="alert" className="mt-2 font-mono text-[12px] uppercase tracking-wide text-terminal-danger">
          Location not found. Check the city name and try again.
        </p>
      )}
    </section>
  )
}

interface ResultProps {
  weatherData: WeatherData | null
  isLoading: boolean
}

const Result = ({ weatherData, isLoading }: ResultProps) => {
  if (isLoading) {
    return (
      <div className="flex min-h-48 flex-col items-center justify-center">
        <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-terminal-text/70">Scanning atmosphere</p>
        <div className="mt-3 flex gap-1" aria-hidden="true">
          <span className="animate-pulse text-terminal-green">█</span>
          <span className="animate-pulse delay-100 text-terminal-green">█</span>
          <span className="animate-pulse delay-200 text-terminal-green">█</span>
        </div>
      </div>
    )
  }

  if (!weatherData) {
    return (
      <p className="py-12 text-center font-mono text-[12px] uppercase tracking-[0.2em] text-terminal-text/70">
        No weather data available
      </p>
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

  return (
    <section aria-live="polite">
      <header className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-terminal-text/60">Current signal</p>
          <h2 className="mt-1 font-mono text-2xl uppercase tracking-wide text-terminal-green md:text-3xl">
            {weatherData.name}, {weatherData.sys.country}
          </h2>
          <p className="mt-1 font-mono text-[13px] uppercase tracking-wide text-terminal-text/80">
            {capitalizedDescription}
          </p>
        </div>
        <div className="sm:text-right">
          <p className="font-mono text-5xl tabular-nums text-terminal-green md:text-6xl">{temp}°C</p>
          <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-terminal-text/60">
            Observed {formattedTime} · {month} {dayDate}
          </p>
        </div>
      </header>

      <dl className="mt-6 grid grid-cols-2 border-y border-terminal-green/20 sm:grid-cols-5">
        {[
          ['FEELS LIKE', `${feelsLike}°C`],
          ['HUMIDITY', `${weatherData.main.humidity}%`],
          ['PRESSURE', `${weatherData.main.pressure} hPa`],
          ['WIND', `${wind} m/s`],
          ['VISIBILITY', `${visibility.toFixed(1)} km`],
        ].map(([label, value], index) => (
          <div
            key={label}
            className={`py-3 ${index > 0 && index < 4 ? 'border-l border-terminal-green/15 pl-3' : ''} ${index === 4 ? 'col-span-2 border-t border-terminal-green/15 sm:col-span-1 sm:border-l sm:border-t-0 sm:pl-3' : ''}`}
          >
            <dt className="font-mono text-[11px] uppercase tracking-wider text-terminal-text/60">{label}</dt>
            <dd className="mt-1 font-mono text-lg tabular-nums text-terminal-text md:text-xl">{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

export default Weather
