export type pokemon = {
    id: number,
    name: string,
    types: string[],
    sprite: string,
  }
  
export type pokemonArr = {
    pokemons: pokemon[];
  }


  export type pokemonResultSet = {
    id: number,
    name: string,
    sprite: string,
    type1: string,
    type2: string,
  }