import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "./theme.tsx";
import Header from "./components/Header.tsx";
import PokemonCard from "./components/PokemonCard.tsx";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <PokemonCard
        image="/images/0001Bulbasaur.png"
        name="bulbasaur"
        id={1}
        types={["grass", "poison"]}
      />
    </ThemeProvider>
  );
}
