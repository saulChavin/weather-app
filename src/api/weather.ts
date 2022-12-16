
const API_URL = 'http://api.openweathermap.org';
const PATH = '/data/2.5/weather'
const KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const getWeatherByCity = async (city: string) => {
    const res = await fetch(`${API_URL}${PATH}?q=${city}appid=${KEY}`)
    const data = await res.json();
    return data;
}

export const getWeatherByCoords = async (lat: string, lon: string ) => {
    const res = await fetch(`${API_URL}${PATH}?lat=${lat}&lon=${lon}&appid=${KEY}`)
    const data = await res.json();
    return data;
}