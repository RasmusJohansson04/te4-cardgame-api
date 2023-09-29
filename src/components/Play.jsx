import { useEffect, useState } from 'react'
import './Play.css'
//import Hand from './Hand'
let hasSetup = false

function Play(items) {
  //https://gadhagod.github.io/Hyrule-Compendium-API/#/compendium-api
  //https://deckofcardsapi.com
  //https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1
  //https://pokeapi.co/api/v2/pokemon/
  const [pokemons, setPokemons] = useState([])
  const pokemonUrl = 'https://pokeapi.co/api/v2/pokemon/'

  useEffect(() => {
    async function setup() {
      alert(hasSetup)
      if (!hasSetup) {
        await fetchPokemon(1)
        await fetchPokemon(4)
        await fetchPokemon(7)
        console.log(pokemons)
        console.log('Finished Loading')
        hasSetup = true
      }
    }

    async function fetchPokemon(id) {
      await fetch(pokemonUrl + id).then(res => res.json())
        .then(result => {
          const pokemon = {
            name: result.name,
            moves: result.moves,
            sprite: result.sprites
          }
          setPokemons([...pokemons, pokemon])
        }).catch(err => {
          console.log(err)
        })
    }
    setup()
  }, [pokemons])

  return (
    <>
      {pokemons.length > 1 ? (<p>Loaded</p>) : (<p>Loading...</p>)}
    </>
  )
}

export default Play
