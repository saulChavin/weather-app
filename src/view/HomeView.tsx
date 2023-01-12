import { CurrentWeather } from '../components/CurrentWeather';
import { useEffect, useState } from 'react';
import { WeatherDto } from '../interface/WeatherInterface';
import { getWeatherByCoords } from '../api/weather';

const HomeView = () => {

    const [weather, setWeather] = useState<WeatherDto | null>(null);

    const success = ({ coords }: any) => {
        getWeatherByCoords(coords.latitude, coords.longitude)
            .then(setWeather);
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(success, console.log);
    }, [])

    return (
        <CurrentWeather weather={weather} />
    )
}

export default HomeView