import { useState } from 'react'
import Play from './components/Play'
import './App.css'
//https://www.w3schools.com/html/html5_draganddrop.asp

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Play />
    </>
  )
}

export default App
