import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Header() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#101010",
      }}
    >
      <Toolbar>
        <Typography variant="h5" component="h1">
          POKEDEX
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
