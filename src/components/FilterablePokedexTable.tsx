import React, { useEffect, useState } from 'react'
import PokedexTable from './PokedexTable'
import { pokemon } from '@/utils/typedef';
import classes from '../styles/filterablePokedexTable.module.css';
import PokemonTypeSelection from './PokemonTypeSelection';

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
  const [filteredData, setFilteredData] = useState<pokemon[]>([]);
  const [type, setType] = useState('All');
  const selectHandler = (type: string | undefined) =>{
    if(type==='all')
      setFilteredData(pokemonData);
    else if(type){
      setFilteredData(pokemonData.filter(pokemon => pokemon.types.includes(type)));
    }
      
  }

  useEffect(()=>{
    setFilteredData(pokemonData);
  },[pokemonData]);
  return (
    <div className={classes['result-container']}>
        <h2>Search Results</h2>
        <PokemonTypeSelection selectedType={type} selectType={selectHandler} />
        <PokedexTable pokemons={filteredData} />
    </div>
  )
}

export default FilterablePokedexTable