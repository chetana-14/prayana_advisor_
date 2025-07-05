import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@mui/material';
import Rating from '@mui/material/Rating';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';




import useStyles from './styles';

const Map = ({ setCoordinates,setBounds,coordinates}) => {
    const classes= useStyles();
    const isMobile=useMediaQuery('(min-width:600px)');

    const hasValidCoords = coordinates?.lat && coordinates?.lng;

    return (
        <div className ={classes.mapContainer}>
            <GoogleMapReact 
                bootstrapURLKeys={{key:'AIzaSyCwieweW51fnwGnhED-SXz1l0svyuB6WqE'}}
                //defaultCenter={hasValidCoords ? coordinates : { lat: 0, lng: 0 }}
                center={hasValidCoords ? coordinates : { lat: 0, lng: 0 }}
                defaultZoom={14}
                margin={[50,50,50,50]}
                options={''}
                onChange={(e) => {
                    console.log(e);

                    setCoordinates?.({ lat :e.center.lat ,lng : e.center.lng});
                    setBounds?.({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
                }}
                //onChildClick={''}
            >
            </GoogleMapReact>
        </div>
           
    );
};
export default Map;