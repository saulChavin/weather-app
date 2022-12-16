import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { CurrentWeather } from './view/CurrentWeather'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='container h-full flex justify-center items-center'>
      <CurrentWeather />
    </main>

  )
}

export default App
