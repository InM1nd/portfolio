import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Text = styled.p`
  font-family: "Kanit", sans-serif;
  font-weight: 400;
  font-size: 24px;
  color: #fff;
`

const SpotifyNowPlaying = () => {
  const [currentTrack, setCurrentTrack] = useState('');

  useEffect(() => {
    const fetchCurrentTrack = async () => {
      try {
        // Запрос к Spotify Web API для получения информации о текущем треке
        const response = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
          headers: {
            'Authorization': 'Bearer ${process.env.SPOTIFY_CLIENT_SECRET}' // Замените YOUR_ACCESS_TOKEN на ваш токен доступа
          }
        });

        if (response.ok) {
          const data = await response.json();
          // Извлекаем название трека
          const trackName = data.item.name;
          setCurrentTrack(trackName);
        } else {
          // Если трек не найден или возникла другая ошибка
          setCurrentTrack('Currently offline');
        }
      } catch (error) {
        console.error('Error :', error);
      }
    };

    fetchCurrentTrack();
  }, []);

  return (
    <Container>
      <Text>Now Playing</Text>
      <Text>{currentTrack}</Text>
    </Container>
  );
};

export default SpotifyNowPlaying;