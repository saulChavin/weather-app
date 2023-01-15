import { CurrentWeather } from '../components/CurrentWeather';
import { useEffect, useState } from 'react';
import { WeatherDto } from '../interface/WeatherInterface';
import { getWeatherByCoords } from '../api/weather';
import { ErrorLocationView } from './error/ErrorLocationView';

const HomeView = () => {

    const [weather, setWeather] = useState<WeatherDto | null>(null);
    const [isError, setIsError] = useState(false);

    const success = ({ coords }: any) => {
        getWeatherByCoords(coords.latitude, coords.longitude)
            .then(setWeather);
    }

    const error = (error: any) => {
        setIsError(true);
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(success, error);
    }, [])

    if (isError) return <ErrorLocationView />

    return (
        <CurrentWeather weather={weather} />
    )
}

export default HomeView