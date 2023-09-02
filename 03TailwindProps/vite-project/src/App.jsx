import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/cards'
import Cards from './components/cards'

function App() {
  

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'> hii</h1>
      <Cards userName ="gaurav" btn ="click me"/>
      <Cards userName ="cricket" btn ="visit me"/>

    </>
  )
}

export default App
