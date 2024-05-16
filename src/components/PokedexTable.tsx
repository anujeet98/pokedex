import React from 'react'
import PokemonRow from './PokemonRow'
import classes from '../styles/pokedexTable.module.css';
import { pokemonArr } from '../utils/typedef';

function PokedexTable(props: pokemonArr) {

  return (
    <div>
      {
        props.pokemons.map(pokemon=><PokemonRow key={pokemon.id} pokemonData={pokemon} />)
      }
    </div>
  )
}

export default PokedexTable