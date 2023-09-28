import { useState } from 'react'
import equipmentJSON from '../assets/equipment'
import './Equipment.css'

function Equipment() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ul>
    {equipmentJSON.data.map((equipment, index) => 
        <li>
            <button>
                <img src={equipment.image} alt="" />
                <p>Attack: {equipment.properties.attack} Defence: {equipment.properties.defense}</p>
            </button>
        </li>
    )}
    </ul>
    </>
  )
}

export default Equipment
