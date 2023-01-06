import { CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import countriesJson from '../api/countries.json';
import { getWeatherByCoords } from '../api/weather';
import { WeatherMiniCard } from '../components/WeatherMiniCard';
import { WeatherDto } from '../interface/WeatherInterface';

export const SearchView = () => {

    const defaultCountries = countriesJson.countries.slice(0, 4);
    const [weathers, setWeahers] = useState([] as WeatherDto[]);

    useEffect(() => {
        let requestCountries: Promise<WeatherDto>[] = [];
        defaultCountries.forEach(({ lat, lon }) => {
            requestCountries.push(getWeatherByCoords(lat, lon))
        });

        Promise.all(requestCountries)
            .then((res) => {
                console.log('res', res);
                setWeahers(res);
            });
    }, []);


    return (
        <div className='flex flex-col justify-around p-4 items-center'>
            <h1 className='text-xl text-center my-4'>Elegir ubicación</h1>
            <input
                placeholder='Search'
                type='text'
                className='border-transparent border-2 rounded-xl p-2 bg-neutral-800/90 w-full'
            />

            {!weathers.length
                ? <CircularProgress sx={{ mt: 2 }} />
                : <div className=' grid grid-cols-2 gap-2 mt-8 w-full'>

                    {weathers.map((weather, index) => (
                        <div key={weather.name} className={index % 2 !== 0 ? 'mt-4' : ''}>
                            <WeatherMiniCard weather={weather} />
                        </div>

                    ))}
                </div>
            }

        </div>
    )
}

const SkelletonCard = () => {
    return (
        <div className="animate-pulse">

        </div>
    )
}
