import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getWeatherByCity } from '../api/weather';
import { WeatherDto } from '../interface/WeatherInterface';
import { CurrentWeather } from '../components/CurrentWeather';

const CountryWeather = () => {

    const [weather, setWeather] = useState<WeatherDto | null>(null)
    const { name = '' } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getWeatherByCity(name)
            .then(setWeather)
    }, [])

    return (
        <>
            <button
                className='bg-cyan-900 rounded-full w-11 h-11 mx-4 mt-4'
                onClick={() => navigate('/search', { replace: true })}
            >
                Back
            </button>
            <CurrentWeather weather={weather} />
        </>
    )
}

export default CountryWeather;
