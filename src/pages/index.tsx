import React, { ChangeEvent, useState } from 'react';
import classes from '../styles/home.module.css'
import FilterablePokedexTable from '../components/FilterablePokedexTable';
import { trpc } from "@/utils/trpc";
import { pokemon } from '@/utils/typedef';

function Home() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchArray, setSearchArray] = useState<string[]>([]);
    const [searchResult, setSearchResult] = useState<pokemon[]>([]);
    const getPokemon = trpc.pokemon.getPokemonByName.useQuery(searchQuery,{
        enabled: false,
    });

    const getPokemons = trpc.pokemon.getPokemonsByNames.useQuery(searchArray,{
        enabled: false,
    });

    const searchHandler = async(e: React.FormEvent)=>{
        e.preventDefault();
        try{
            if(searchArray.length===1){
                const {data} = await getPokemon.refetch();
                if(data)
                {
                    const { id, name, types, sprite } = data;
                    const newPokemon: pokemon = { id, name, types, sprite };
                    setSearchResult([newPokemon]);
                }
                else{
                    alert('Searched pokemon not found.');
                }
            }
            else if(searchArray.length>1){
                const { data } = await getPokemons.refetch();
                if (data)
                    setSearchResult(data); 
                else{
                    alert('Searched pokemons not found.');
                }
            }
        }
        catch(err){
            console.log(err);
            alert('something went wrong while searching pokemon data');    
        }
    }
    const inputHandler = (e: ChangeEvent<HTMLInputElement>)=>{
        const input = e.target.value.toLowerCase();
        setSearchQuery(input);

        //for maintianing comma separated search query array
        const search: string[] = input.split(',').map(elem=>elem.trim()).filter(elem=>elem.length!=0);
        setSearchArray(search);
    }
  return (
    <div className={classes.container}>
        <h1><span>POKE</span>DEX</h1>
        <div>
            <form className={classes['input-form']}>
                <input type='text' value={searchQuery} onChange={(e)=>inputHandler(e)} placeholder='Enter the pokemon name(s) here...'></input>
                <button type='submit' onClick={searchHandler}>Search</button>
            </form>
            <FilterablePokedexTable pokemonData={searchResult} />
        </div> 
    </div>
  )
}

export default Home;