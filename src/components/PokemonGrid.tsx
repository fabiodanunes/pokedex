import type { Pokemon } from "../interfaces/Pokemon";
import Grid from "@mui/material/Grid";
import PokemonCard from "./PokemonCard";

export interface MultiplePokemon {
  pokemons: Pokemon[];
}

export default function PokemonGrid({ pokemons }: MultiplePokemon) {
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
      sx={{
        m: 2,
      }}
    >
      {pokemons.map((pokemon) => (
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
