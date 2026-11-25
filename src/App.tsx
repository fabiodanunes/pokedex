import { useState } from "react";
import type { ChangeEvent } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Pagination from "@mui/material/Pagination";
import { theme } from "./theme";
import Header from "./components/Header";
import PokemonGrid from "./components/PokemonGrid";
import type { Pokemon } from "./interfaces/Pokemon";




// isto so ta aqui para testar enquanto nao trago a API

const placeholderPokedex: Pokemon[] = Array.from({ length: 151 }, (_, index) => {
  const id = index + 1;
  return {
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
    name: `Pokemon ${id}`,
    id,
    types: index % 2 === 0 ? ["Fire"] : ["Grass", "Poison"],
  };
});




export default function App() {
  const [page, setPage] = useState<number>(1);

  const handlePageChange = (_: ChangeEvent<unknown>, value: number) => {
    setPage(value);

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  const pokemonPerPage: number = 15;
  const totalPokemons: number = placeholderPokedex.length; // trocar placeholder quando tiver a API
  const lastPage: number = Math.ceil(totalPokemons / pokemonPerPage);

  const startIndex: number = pokemonPerPage*(page - 1);
  const slicedPokedex: Pokemon[] = placeholderPokedex.slice(startIndex, startIndex + pokemonPerPage);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container sx={{ p: 3 }}>
        <PokemonGrid pokemons={slicedPokedex} />
        <Pagination
          count={lastPage}
          page={page}
          onChange={handlePageChange}
          showFirstButton
          showLastButton
          sx={{ 
            display: "flex", 
            justifyContent: "center", 
            mt: 3 
          }}
        />
      </Container>
    </ThemeProvider>
  );
}
