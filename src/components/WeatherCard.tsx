import { WeatherDto } from '../interface/WeatherInterface';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';


interface WeatherCardProps {
    weather: WeatherDto;
}

export const WeatherCard = ({ weather }: WeatherCardProps) => {

    const { temp, temp_max, feels_like, humidity, temp_min } = weather.main;
    const [{ main, description, icon }] = weather.weather;

    return (
        <div className='max-w-[320px] w-full h-full max-h-[620px] shadow-2xl rounded-3xl  flex flex-col '>
            <header className='flex flex-col items-center flex-wrap py-8'>
                <h1 className='text-3xl text-center '>{weather.name}</h1>
                <p className='text-5xl mt-4'>{temp}</p>
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

            <div className='flex justify-around items-center' style={{ flex: 1 }}>
                <button><HomeRoundedIcon fontSize='medium' /></button>
                <button><SearchOutlinedIcon fontSize='medium' /></button>
                <button><SettingsOutlinedIcon fontSize='medium' /></button>
        </div>

        </div >
    )
}
