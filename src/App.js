import React from 'react';
import { CssBaseline, Grid } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles'; // ✅

import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';

const theme = createTheme(); // ✅ use default theme (you can customize later)

const App = () => {
  console.log("App component loaded");

  return (
    <ThemeProvider theme={theme}> {/* ✅ wrap app in ThemeProvider */}
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default App;
