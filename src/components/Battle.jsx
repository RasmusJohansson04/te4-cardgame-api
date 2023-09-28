import monstersJSON from '../assets/monsters'
import equipmentJSON from '../assets/equipment'
import './Battle.css'

function Battle(items) {
  const monstersURL = 'https://botw-compendium.herokuapp.com/api/v3/compendium/category/monsters'
  //https://gadhagod.github.io/Hyrule-Compendium-API/#/compendium-api
  //https://deckofcardsapi.com
  const deck = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
  const monsters = monstersJSON
  const equipment = equipmentJSON
  let monsterIndex = 74
  let monsterHealth = 100

  let weaponIndex = 3

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
          <button id={weaponIndex}>
            <img src={equipment.data[weaponIndex].image} alt="" />
            <p>Attack: {equipment.data[weaponIndex].properties.attack} Defence: {equipment.data[weaponIndex].properties.defense}</p>
          </button>
          <button>Attack</button>
          <button>Attack</button>
          <button>Attack</button>
        </div>
      </section>
    </>
  )
}

export default Battle
