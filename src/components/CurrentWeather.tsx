import { useEffect, useState } from 'react';
import { getWeatherByCoords } from '../api/weather';
import { WeatherDto } from '../interface/WeatherInterface';
import { CircularProgress } from '@mui/material';


interface WeatherCardProps {
    weather: WeatherDto | null;
}

export const CurrentWeather = ({
    weather
  }: WeatherCardProps) => {

    if (weather == null) return (
        <div className='flex flex-1 justify-center items-center h-full'>
            <CircularProgress />
        </div>
    )

    const { temp, temp_max, feels_like, humidity, temp_min } = weather.main;
    const [{ main, description, icon }] = weather.weather;

    return (
        <div className='h-full'>
            <header className='flex flex-col items-center flex-wrap py-8'>
                <h1 className='text-3xl text-center '>{weather.name}</h1>
                <p className='text-5xl mt-4'>{Math.floor(temp)}&#176;</p>
                <img
                    src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
                    style={{
                        width: '120px',
                        height: '120px',
                        objectFit: 'cover',
                        filter: 'drop-shadow(5px 5px 5px #666)',
                    }}
                />
                <p className='text-xl'>{description}</p>
            </header>

            <section style={{ flex: '1 170px' }}>
                <div className='flex justify-around'>
                    <div className='flex flex-col text-center'>
                        <label className='text-sm'>Humidity</label>
                        <span className='text-xl font-semibold'>{humidity}%</span>
                    </div>
                    <div className='flex flex-col text-center'>
                        <label className='text-sm'>Temp max.</label>
                        <span className='text-xl font-semibold'>{temp_max}</span>
                    </div>
                    <div className='flex flex-col text-center'>
                        <label className='text-sm'>Feels Like</label>
                        <span className='text-xl font-semibold'>{feels_like}</span>

                    </div>
                </div>
            </section>

        </div>
    )
}
