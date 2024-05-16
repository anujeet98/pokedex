import { router } from '../trpc';
import { pokemonRouter } from './pokemon';

export const appRouter = router({
    pokemon: pokemonRouter,
});

export type AppRouter = typeof appRouter;