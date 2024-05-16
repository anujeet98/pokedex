import React from 'react'

type PokemonTypeSelectionProps = {
  selectedType: string | undefined;
  selectType: (type: string | undefined) => void;
}

function PokemonTypeSelection(props: PokemonTypeSelectionProps) {
  return (
    <div style={{marginBottom: '1rem'}}>Select Type: 
      <select onChange={(e)=>props.selectType(e.target.value)}>
        <option>all</option>
        <option>fire</option>
        <option>water</option>
        <option>flying</option>
        <option>grass</option>
        <option>poison</option>
        <option>electric</option>
      </select>
    </div>
  )
}

export default PokemonTypeSelection