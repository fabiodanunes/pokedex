import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "./theme.tsx";
import Header from "./components/Header.tsx";
import PokemonGrid from "./components/PokemonGrid.tsx"



import type { Pokemon } from "./interfaces/Pokemon.tsx";

const testPokemons: Pokemon[] = Array.from({ length: 20 }, (_, index) => {
  const id = index + 1;
  return {
    id,
    name: `Pokemon ${id}`,
    types: index % 2 === 0 ? ["Fire"] : ["Grass", "Poison"],
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
  };
});



export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <PokemonGrid pokemons={testPokemons} />
    </ThemeProvider>
  );
}
