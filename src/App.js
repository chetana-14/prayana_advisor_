import React,{useState,useEffect} from 'react';
import { CssBaseline, Grid } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles'; // ✅

import { getPlacesData } from './api';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';

const theme = createTheme(); 

const App = () => {
  const [places, setPlaces] = useState([]);

  const [ coordinates, setCoordinates] = useState({lat: 0,lng:0});
  const [bounds, setBounds] = useState(null);

  useEffect(() => {
    const id =navigator.geolocation.watchPosition(
      ({ coords: { latitude, longitude } }) => {
         setCoordinates({ lat: latitude, lng: longitude });
    },
    (err) => console.error(err),
    {enableHighAccuracy: true}
  );
    return () => navigator.geolocation.clearWatch(id);
  },[]);

  useEffect(() => {
     getPlacesData(bounds.sw,bounds.ne)
       .then((data) => {
         console.log(data);
        setPlaces(data);
     })

   },[coordinates,bounds]);

  return (
    <ThemeProvider theme={theme}> 
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
             coordinates={coordinates} 
             setCoordinates={setCoordinates}
             setBounds={setBounds}
          />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default App;
