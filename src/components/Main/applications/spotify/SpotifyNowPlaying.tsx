'use client'

import React, { useState, useEffect } from 'react'

const SpotifyNowPlaying = () => {
  const [currentTrack, setCurrentTrack] = useState('')

  useEffect(() => {
    const fetchCurrentTrack = async () => {
      try {
        const response = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET || ''}`,
          },
        })

        if (response.ok) {
          const data = await response.json()
          const trackName = data.item.name
          setCurrentTrack(trackName)
        } else {
          setCurrentTrack('Currently offline')
        }
      } catch (error) {
        console.error('Error:', error)
        setCurrentTrack('Currently offline')
      }
    }

    fetchCurrentTrack()
  }, [])

  return (
    <div className="px-[15px] flex flex-col justify-center">
      <p className="font-['Kanit'] font-normal text-2xl text-white">Now Playing</p>
      <p className="font-['Kanit'] font-normal text-2xl text-white">{currentTrack}</p>
    </div>
  )
}

export default SpotifyNowPlaying



