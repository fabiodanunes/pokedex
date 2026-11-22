import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Header() {
  return (
    <Box>
      <AppBar sx={{ bgcolor: '#262626' }}>
        <Toolbar>
          <Typography variant='h5'>
            POKEDEX
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}