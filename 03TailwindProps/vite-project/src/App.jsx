import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/cards'
import Cards from './components/cards'
import Name from './components/Name'

function App() {
   const [number ,setNUmber] = useState(0);
   const addNo =()=>{
    setNUmber(number+1);
   }

  return (
    <>
      {/* <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'> hii</h1>
      <Cards userName ="gaurav" btn ="click me"/>
      <Cards userName ="cricket" btn ="visit me"/> */}
      <Name name ="gaurav" clas ="btech" rollno="12"/>
      
      <div>
        <button onClick={addNo}
        > add {number}</button>
      </div>
</>
  
  )
}

export default App
