import { useEffect, useState } from "react";
import type { ChangeEvent } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Pagination from "@mui/material/Pagination";
import { theme } from "./theme";
import Header from "./components/Header";
import PokemonGrid from "./components/PokemonGrid";
import type { GridContent } from "./interfaces/GridContent";
import { getPokemonFromAPI } from "./api/PokemonAPI";

const pokemonPerPage: number = 15;

export default function App() {
  const [page, setPage] = useState<number>(1);
  const [gridContent, setGridContent] = useState<GridContent | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const startIndex: number = pokemonPerPage*(page - 1);
  const lastPage: number = Math.ceil((gridContent?.totalPokemons ?? 0)/pokemonPerPage);

  useEffect(() => {
    let cancelled = false;

    getPokemonFromAPI(pokemonPerPage, startIndex).then((content) => {
      if (!cancelled) {
        setLoading(false);
        setGridContent(content);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [startIndex]);

  const handlePageChange = (_: ChangeEvent<unknown>, newPage: number) => {
    if(newPage === page) return;
    
    setLoading(true);
    setPage(newPage);

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container sx={{ p: 3 }}>
        <PokemonGrid 
          pokemons={gridContent?.slicedPokedex ?? []} 
          loading={loading} 
          pokemonsPerPage={pokemonPerPage}
        />
        <Pagination
          count={lastPage}
          page={page}
          onChange={handlePageChange}
          showFirstButton
          showLastButton
          sx={{ 
            display: "flex", 
            justifyContent: "center", 
            mt: 3,
          }}
        />
      </Container>
    </ThemeProvider>
  );
}
