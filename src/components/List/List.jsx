import React,{useState} from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import useStyles from './styles';
import PlaceDetails from '../PlaceDetails/PlaceDetails';
const List = () => {
    const classes = useStyles();
    const [type,setType]=useState('restaurants');
    const [rating,setRating]=useState('');

    const places=[
        {name: 'Cool Place'},
        {name: 'best Beer'},
        {name: 'best Steak'},
        {name: 'Cool Place'},
        {name: 'best Beer'},
        {name: 'best Steak'},
        {name: 'Cool Place'},
        {name: 'best Beer'},
        {name: 'best Steak'},

    ];

    return (
        <div className={classes.container}>
            <Typography variant="h4" > Restarunts,Hotels & Attractions around you </Typography>
            <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e)=> setType(e.target.value)}>
                    <MenuItem value="restaurants">Restaurants</MenuItem>
                    <MenuItem value="hotels">Hotels</MenuItem>
                    <MenuItem value="attractions">Attractions</MenuItem>
                </Select>
             </FormControl>
             <FormControl className={classes.formControl}>
                <InputLabel>Rating</InputLabel>
                <Select value={rating} onChange={(e)=> setRating(e.target.value)}>
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={3}>Above 3.0</MenuItem>
                    <MenuItem value={4}>Above 4</MenuItem>
                    <MenuItem value={4.5}>Above 4.5</MenuItem>
                </Select>
             </FormControl>
             <Grid container spacing={3} className={classes.list}>
                {places ?.map((place, i) => (
                    <Grid item key={i} xs={12}>
                        <PlaceDetails place={place} />
                    </Grid>
                ))}
                </Grid>
        </div>
    );
};
export default List;