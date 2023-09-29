import './Play.css'
//import Hand from './Hand'

function Play(items) {
  //https://gadhagod.github.io/Hyrule-Compendium-API/#/compendium-api
  //https://deckofcardsapi.com
  //https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1
  //https://pokeapi.co/api/v2/pokemon/
  const pokemonUrl = 'https://pokeapi.co/api/v2/pokemon/'
  let pokemons = []

  async function setup() {
    console.log('Before')
    await fetchPokemon(1)
    await fetchPokemon(4)
    await fetchPokemon(7)
    console.log(pokemons)
  }

  async function fetchPokemon(id) {
    await fetch(pokemonUrl + id).then(res => res.json())
      .then(result => {
        const pokemon = {
          name: result.name,
          moves: result.moves,
          sprite: result.sprites
        }
        pokemons.push(pokemon)
      }).catch(err => {
        console.log(err)
      })
  }
  setup()

  return (
    <>

    </>
  )
}

export default Play
