import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Header() {
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "#101010",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          gap: 1,
        }}
      >
        <Typography variant="h5" component="h1">
          POKEDEX
        </Typography>
        <Typography variant="h6" component="h1">
          by Fábio
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
