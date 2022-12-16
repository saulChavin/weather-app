import React, { useEffect } from 'react'
import { getWeatherByCoords } from '../api/weather';
import App from '../App';
import { useState } from 'react';
import { WeatherCard } from '../components/WeatherCard';

export const CurrentWeather = () => {

    const [weather, setWeather] = useState<any>(null);

    const success = ({ coords }: any) => {
        getWeatherByCoords(coords.latitude, coords.longitude)
            .then(setWeather);
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(success, console.log);
    }, [])

    if (weather == null) return <>Loading...</>

    return (
        <WeatherCard weather={weather} />
    )
}
