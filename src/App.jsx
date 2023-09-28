import { useState } from 'react'
import monstersJSON from './assets/monsters'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const monstersURL = 'https://botw-compendium.herokuapp.com/api/v3/compendium/category/monsters'
  //https://gadhagod.github.io/Hyrule-Compendium-API/#/compendium-api
  const monsters = 'monstersJSON'
  let monsterIndex = 74
  let monsterHealth = 100

  console.log(monsters.data[0].name)

  function randomNumber() {

  }

  return (
    <>
      <section>
        <h1>{monsters.data[monsterIndex].name.toUpperCase()}</h1>
        <img src={monsters.data[monsterIndex].image} alt="" />
        <h2>{monsterHealth}</h2>
      </section>
      <section>
        <div className="buttons">
          <button>Attack</button>
          <button>Attack</button>
          <button>Attack</button>
          <button>Attack</button>
        </div>
      </section>
    </>
  )
}

export default App
