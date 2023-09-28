import { useState } from 'react'
import Battle from './components/Battle'
import Equipment from './components/Equipment'
import './App.css'
//https://www.w3schools.com/html/html5_draganddrop.asp

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Battle />
    </>
  )
}

export default App
