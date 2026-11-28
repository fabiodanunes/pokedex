import type { Pokemon } from "../interfaces/Pokemon";
import type { GridContent } from "../interfaces/GridContent";

export const placeholderPokedex: Pokemon[] = Array.from({ length: 151 }, (_, index) => {
  const id = index + 1;
  return {
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
    name: `Pokemon ${id}`,
    id,
    types: index % 2 === 0 ? ["Fire"] : ["Grass", "Poison"],
  };
});

export async function getPokemonFromAPI(limit: number, offset: number): Promise<GridContent> {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const results: Pokemon[] = placeholderPokedex.slice(offset, offset + limit);
    const count: number = placeholderPokedex.length;

    return {
        slicedPokedex: results,
        totalPokemons: count,
    };
}
