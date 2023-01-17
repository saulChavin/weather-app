import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getWeatherByCity } from '../api/weather';
import { WeatherDto } from '../interface/WeatherInterface';
import { CurrentWeather } from '../components/CurrentWeather';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const CountryWeather = () => {

    const [weather, setWeather] = useState<WeatherDto | null>(null)
    const { name = '' } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getWeatherByCity(name)
            .then(setWeather)
    }, [])

    return (
        <section className='w-full'>
            <button
                className='bg-blue-300 dark:bg-cyan-700 rounded-full w-11 h-11 mx-4 mt-4'
                onClick={() => navigate('/search', { replace: true })}
            >
                <ArrowBackIcon />
            </button>
            <CurrentWeather weather={weather} />
        </section>
    )
}

export default CountryWeather;
