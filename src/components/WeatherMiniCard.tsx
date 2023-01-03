import { WeatherDto } from '../interface/WeatherInterface'

interface WeatherMiniCardProps {
  weather: WeatherDto;
}

export const WeatherMiniCard = ({ weather }: WeatherMiniCardProps) => {
  return (
    <div className='flex flex-col justify-around px-4 h-36 rounded-3xl shadow-xl p-3 relative dark: bg-gradient-to-b from-zinc-800 via-zinc-800 '>

      <div className='flex justify-between items-center'>
        <span>
          <p className='text-lg font-bold'>{weather.main.temp}</p>
          <p className='text-xs'>{weather.weather[0].main}</p>
        </span>

        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
          style={{
            width: '62px',
            height: '62px',
            objectFit: 'cover',
            filter: 'drop-shadow(5px 5px 5px #666)',
          }}
        />
      </div>
      <p className='text-sm font-medium'>{weather.name}</p>
    </div>
  )
}
