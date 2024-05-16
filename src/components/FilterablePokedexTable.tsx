import React from 'react'
import PokedexTable from './PokedexTable'
import PokemonRow from './PokemonRow'
import { pokemon } from '@/utils/typedef';


// let pokemonData = [
//   {
//     id: 1,
//     name: 'bulbasaur',
//     types: ['grass'],
//     sprite: "https://img.pokemondb.net/artwork/large/bulbasaur.jpg",
//   },
//   {
//     id: 2,
//     name: 'pikachu',
//     types: ['electric'],
//     sprite: "https://img.pokemondb.net/artwork/large/pikachu.jpg",
//   },
//   {
//     id: 3,
//     name: 'charmander',
//     types: ['fire'],
//     sprite: "https://img.pokemondb.net/artwork/large/charmander.jpg",
//   }
// ]
function FilterablePokedexTable({pokemonData}: {pokemonData: pokemon[]}) {
  return (
    <div>
        <h2>Search Results</h2>
        <PokedexTable pokemons={pokemonData} />
    </div>
  )
}

export default FilterablePokedexTable