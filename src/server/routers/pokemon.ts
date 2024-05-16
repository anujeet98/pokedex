import { publicProcedure, router } from "../trpc";
import { z } from 'zod';
import { PrismaClient } from "@prisma/client";
import { pokemon, pokemonResultSet } from "@/utils/typedef";

const prisma = new PrismaClient();

export const pokemonRouter = router({

    getPokemonByName: publicProcedure.input(z.string()).query(async (opts)=>{
        try{
            const name = opts.input.trim().toLowerCase();
            const pokemon = await prisma.pokemons.findUnique({where: {name: name}});
            if(pokemon!==null && pokemon!==undefined){
                const pokemonData:pokemon = {
                    id: pokemon.id,
                    name: pokemon.name,
                    sprite: pokemon.sprite,
                    types: [pokemon.type1, pokemon.type2],
                };
                return pokemonData;
            }
            return null;            
        }
        catch(err){
            console.error(err);
            throw err;
        }
    }),
    getPokemonsByNames: publicProcedure.input(z.array(z.string())).query(async (opts)=>{
        try{
            const names: string[] = opts.input.map(elem=>elem.trim().toLowerCase()).filter(elem=>elem.length!=0);
            const pokemons:pokemonResultSet[] | null | undefined = await prisma.pokemons.findMany({where: { name: { in: names}}});
            if(pokemons!==null && pokemons!==undefined){
                const pokemonData = pokemons.map(elem => ({
                    id: elem.id,
                    name: elem.name,
                    sprite: elem.sprite,
                    types: [elem.type1, elem.type2],
                }));
                return pokemonData;
            }
            return null;
        }
        catch(err){
            console.error(err);
            throw err;
        }
    }),
});

export type PokemonRouter = typeof pokemonRouter;