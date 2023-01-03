import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { MainContainer } from './view/MainContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='h-full flex justify-center items-center dark: bg-zinc-800 text-gray-200'>
      <MainContainer />
    </main>

  )
}

export default App
