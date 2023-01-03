import { WeatherDto } from "../interface/WeatherInterface";

const API_URL = 'https://api.openweathermap.org';
const PATH = '/data/2.5/weather'
const KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const getWeatherByCity = async (city: string, units: string = 'metric'): Promise<WeatherDto> => {
    const res = await fetch(`${API_URL}${PATH}?q=${city}appid=${KEY}&units=${units}`)
    const data = await res.json();
    return data;
}

export const getWeatherByCoords = async (lat: string, lon: string, units: string = 'metric'): Promise<WeatherDto> => {
    const res = await fetch(`${API_URL}${PATH}?lat=${lat}&lon=${lon}&appid=${KEY}&units=${units}`)
    const data = await res.json();
    return data;
}