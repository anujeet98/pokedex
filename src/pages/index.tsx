import React, { ChangeEvent, useState } from 'react';
import classes from '../styles/home.module.css'
import FilterablePokedexTable from '../components/FilterablePokedexTable';
import { trpc } from "@/utils/trpc";
import { pokemon } from '@/utils/typedef';
import { skip } from 'node:test';

function Home() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResult, setSearchResult] = useState<pokemon[]>([]);
    const getPokemon = trpc.pokemon.getPokemonByName.useQuery({skip: true});

    



    const searchHandler = async(e: React.FormEvent)=>{
        e.preventDefault();
        const search: string[] = searchQuery.split(',').map(elem=>elem.trim()).filter(elem=>elem.length!=0);
        console.log(search);
        const searchInput = search.length===1 ? search[0] : search;
        if(search.length===1){
            const data = getPokemon(searchInput);
            if(data)
                searchResult(data);
        }
        else if(search.length>1){
        }
    }
    const inputHandler = (e: ChangeEvent<HTMLInputElement>)=>{
        setSearchQuery(e.target.value);
    }
  return (
    <div className={classes.container}>
        <h1>POKEDEX</h1>
        <div>
            <form>
                <input type='text' value={searchQuery} onChange={(e)=>inputHandler(e)} placeholder='Enter the pokemon name(s) here...'></input>
                <button type='submit' onClick={searchHandler}>Search</button>
            </form>
            <FilterablePokedexTable pokemonData={searchResult} />
        </div> 
    </div>
  )
}

export default Home