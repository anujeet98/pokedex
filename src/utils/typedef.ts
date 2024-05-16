export type pokemon = {
    id: number
    name: string
    types: string[],
    sprite: string,
  }
  
export type pokemonArr = {
    pokemons: pokemon[];
  }