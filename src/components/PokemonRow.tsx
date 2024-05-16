import React from 'react';
import classes from '../styles/pokemonRow.module.css';

type pokemon = {
  id: number
  name: string
  types: string[],
  sprite: string,
}

function PokemonRow ({pokemonData}: {pokemonData: pokemon}) {
  return (
    <div className={classes.item}>
      <img src={pokemonData.sprite} alt={`img_${pokemonData.name}`}></img>
      <div className={classes.info}>
          <span>Id: {pokemonData.id}</span>
          <span>Name: {pokemonData.name}</span>
          <span>Types: {pokemonData.types}</span>
      </div>
    </div>
  )
}

export default PokemonRow 