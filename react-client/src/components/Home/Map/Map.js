import React from 'react';
import {Container, Grid, Paper, Typography, useMediaQuery} from '@material-ui/core'
import useStyles from './styles'
import GoogleMapReact from 'google-map-react';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';


const Map = () => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)')
    const coordinates = {lat: 43.6532, lng: -79.3832}
    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact 
                bootstrapURLKeys={{key: 'AIzaSyC6lXeO5929Da3Gbw2b7Yb7NsRct-dCEJc'}} 
                defaultCenter={coordinates} 
                center={coordinates} 
                defaultZoom={14} 
                margin={[50,50,50,50]} 
                options={''} 
                onChange={''}
                onChildClick={''}>

            </GoogleMapReact>
        </div>
      
    )
}

export default Map