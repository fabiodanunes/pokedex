import Grid from "@mui/material/Grid";
import PokemonCard from "./PokemonCard";
import PokemonCardSkeleton from "./PokemonCardSkeleton";
import type { Pokemon } from "../interfaces/Pokemon";

interface PokemonGridProps {
  pokemons: Pokemon[];
  loading: boolean;
  pokemonsPerPage: number;
}

export default function PokemonGrid({ pokemons, loading, pokemonsPerPage }: PokemonGridProps) {
  return (
    <Grid
      container
      spacing={{
        xs: 2,
        md: 3,
      }}
      columns={{
        xs: 4,
        sm: 8,
        md: 12,
      }}
    >
      {loading 
        ? Array.from({ length: pokemonsPerPage }, (_, i) => (
        <Grid 
          key={i} 
          size={{ 
            xs: 2, 
            sm: 4, 
            md: 4 
          }}>
          <PokemonCardSkeleton />
        </Grid>
        ))
        : pokemons.map((pokemon) => (
        <Grid
          key={pokemon.id}
          size={{
            xs: 2,
            sm: 4,
            md: 4,
          }}
        >
          <PokemonCard
            image={pokemon.image}
            name={pokemon.name}
            id={pokemon.id}
            types={pokemon.types}
          />
        </Grid>
      ))}
    </Grid>
  );
}
