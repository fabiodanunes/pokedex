import Paper from "@mui/material/Paper";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function PokemonCardSkeleton() {
  return (
    <Paper
      sx={{
        p: 2,
        textAlign: "center",
      }}
    >
      <Skeleton
        variant="rounded"
        width={128}
        height={128}
        sx={{
          mx: "auto",
        }}
      />
      <Skeleton
        variant="text"
        width="60%"
        sx={{
          fontSize: "1.25rem",
          mx: "auto",
        }}
      />
      <Skeleton
        variant="text"
        width="30%"
        sx={{
          mx: "auto",
        }}
      />
      <Stack
        direction="row"
        spacing={1}
        sx={{
          mt: 1,
          justifyContent: "center",
        }}
      >
        <Skeleton 
          variant="rounded" 
          width={50} 
          height={24} 
        />
        <Skeleton 
          variant="rounded" 
          width={50} 
          height={24} 
        />
      </Stack>
    </Paper>
  );
}
