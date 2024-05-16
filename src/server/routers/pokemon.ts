import { publicProcedure, router } from "../trpc";
import { z } from 'zod';

import { PrismaClient } from "@prisma/client";
import { pokemon } from "@/utils/typedef";

const prisma = new PrismaClient();

export const pokemonRouter = router({
    getPokemonByName: publicProcedure.input(z.string()).query(async (opts)=>{
        try{
            const name = opts.input.trim();
            // return await prisma.pokemons.findUnique({where: {name: name}});
            const pokemon = await prisma.pokemons.findUnique({where: {name: name}});
            if(pokemon){
                const pokemonData = {
                    id: pokemon.id,
                    name: pokemon.name,
                    sprite: pokemon.sprite,
                    types: [pokemon.type1, pokemon.type2],
                };
                return pokemonData;
            }
            else
                throw new Error('pokemon data not found');
            
        }
        catch(err){
            throw err;
        }
    }),
    getPokemonsByNames: publicProcedure.input(z.array(z.string())).query(async (opts)=>{
        try{
            const names: string[] = opts.input.map(elem=>elem.trim()).filter(elem=>elem.length!=0);
            const pokemons = await prisma.pokemons.findMany({where: { name: { in: names}}});
            if(pokemons){
                const pokemonData = pokemons.map(pokemon => ({
                    id: pokemon.id,
                    name: pokemon.name,
                    sprite: pokemon.sprite,
                    types: [pokemon.type1, pokemon.type2],
                }));
                return pokemonData;
            }
            else{
                throw new Error('pokemon data not found');
            }
    
        }
        catch(err){
            throw err;
        }
    }),
});

export type PokemonRouter = typeof pokemonRouter;