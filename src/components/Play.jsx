import { useEffect, useState } from 'react'
import './Play.css'
//import Hand from './Hand'

function Play() {
  //https://gadhagod.github.io/Hyrule-Compendium-API/#/compendium-api
  //https://deckofcardsapi.com
  //https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1
  //https://pokeapi.co/api/v2/pokemon/
  const [pokemons, setPokemons] = useState([])
  const [isLoading, setLoading] = useState(true)
  const pokemonUrl = 'https://pokeapi.co/api/v2/pokemon/'
  let pokeList = []

  async function setup() {
    // await fetchPokemon(1).then(await fetchPokemon(4).then(await fetchPokemon(7))).then(setLoading(false))
    await fetchPokemon(1)
    await fetchPokemon(4)
    await fetchPokemon(7)
    setPokemons(pokeList)
    setLoading(false)
  }

  async function fetchPokemon(id) {
    await fetch(pokemonUrl + id).then(res => res.json())
      .then(result => {
        const pokemon = {
          name: result.name,
          moves: result.moves,
          sprite: result.sprites
        }
        pokeList.push(pokemon)
      }).catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    setup()
  }, [])

  if (isLoading) {
    return (
      <>
        <p>Loading...</p>
      </>
    )
  }
  else {
    return (
      <>
        <h1>Pick a Starter</h1>
        {pokemons.map((pokemon, index) =>
          <button key={index}>
            <p key={index}>{pokemon.name}</p>
            <img src={pokemon.sprite.front_default} alt="" />
          </button>
        )}
      </>
    )
  }
}

export default Play
