import { CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import countriesJson from '../api/countries.json';
import { getWeatherByCoords } from '../api/weather';
import AutoComplete from '../components/Autocomplete';
import { WeatherMiniCard } from '../components/WeatherMiniCard';
import { WeatherDto } from '../interface/WeatherInterface';

const SearchView = () => {

    const defaultCountries = countriesJson.countries.slice(0, 4);
    const [weathers, setWeahers] = useState([] as WeatherDto[]);
    const [search, setSearch] = useState('');

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


    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(evt.target.value)
    }


    return (
        <div className='flex flex-col p-4 items-center w-full'>
            <h1 className='text-xl text-center my-4'>Elegir ubicación</h1>
            <AutoComplete
                elements={countriesList}
                value={search}
                onChange={handleChange}
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

const countriesList = countriesJson.countries.map(({ name }, index) => (
    <li
        key={`${name}-${index}`}
        className='h-10 flex cursor-default hover:bg-neutral-600'
    >
        <Link to={`/country/${name}`} className='w-full h-full flex items-center px-2'>{name}</Link>
    </li>
))

export default SearchView;
