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
        <div className='flex flex-col justify-around p-4'>
            <input
                placeholder='Search'
                type='text'
                className='border-slate-500 border-2 rounded-md p-2'
            />
            <div className=' grid grid-cols-2 gap-2 mt-4'>
                {weathers.map(weather => (
                    <WeatherMiniCard key={weather.name} weather={weather} />
                ))}
            </div>

        </div>
    )
}
