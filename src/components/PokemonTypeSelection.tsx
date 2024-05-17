import React from 'react'
import classes from '../styles/pokemonTypeSelection.module.css'

type PokemonTypeSelectionProps = {
  selectedType: string | undefined;
  selectType: (type: string | undefined) => void;
}
const types = ['ALL', 'WATER', 'FIRE', 'ICE', 'GRASS', 'POISON', 'GHOST', 'GROUND', 'ROCK', 'STEEL', 'FLYING', 'FIGHTING', 'ELECTRIC', 'BUG', 'NORMAL', 'PHSYCHIC']
function PokemonTypeSelection(props: PokemonTypeSelectionProps) {
  return (
    <div className={classes.container}>
      <span className={classes.label}>Select Type: </span>
      <select onChange={(e)=>props.selectType(e.target.value)} value={props.selectedType}>
        {types.map(type=><option>{type}</option>)}
      </select>
    </div>
  )
}

export default PokemonTypeSelection