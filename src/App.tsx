import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Header from './components/header.tsx'
// import Grid from './components/grid.tsx'
// import Card from './components/card.tsx'

function App() {

  return (
    <React.Fragment>
      <CssBaseline/>
      {
        <Box sx={{ bgcolor: '#151515', minHeight: '100vh' }}>
          <Header/>
        </Box>
      }
    </React.Fragment>
  )
}

export default App
