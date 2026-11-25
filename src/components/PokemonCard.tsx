import type { Pokemon } from "../interfaces/Pokemon";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";

export default function PokemonCard({ image, name, id, types }: Pokemon) {
  return (
    <Paper
      sx={{
        p: 2,
        textAlign: "center",
      }}
    >
      <Box
        component="img"
        src={image}
        alt={name}
        loading="lazy"
        sx={{
          width: 120,
          height: 120,
          objectFit: "contain",
        }}
      />
      <Typography
        variant="h6"
        component="h2"
        sx={{
          textTransform: "capitalize",
        }}
      >
        {name}
      </Typography>
      <Typography> #{id} </Typography>
      <Stack
        direction="row"
        spacing={1}
        sx={{
          mt: 1,
          justifyContent: "center",
        }}
      >
        {types.map((type) => (
          <Chip
            key={type}
            label={type}
            size="small"
            sx={{
              textTransform: "capitalize",
            }}
          />
        ))}
      </Stack>
    </Paper>
  );
}
