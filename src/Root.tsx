import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { MainContainer } from './view/MainContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='flex justify-center h-full items-center dark:bg-zinc-800 dark:text-gray-200'>
      <MainContainer />
    </main>

  )
}

export default App
