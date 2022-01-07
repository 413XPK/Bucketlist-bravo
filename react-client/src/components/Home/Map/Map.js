import React from 'react';
import {Container, Grid, Paper, Typography, useMediaQuery} from '@material-ui/core'
import useStyles from './styles'
import GoogleMapReact from 'google-map-react';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';


const Map = () => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)')
    const coordinates = {lat: 0, lng: 0}
    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact 
                bootsrapURLKeys={{key: 'AIzaSyC6lXeO5929Da3Gbw2b7Yb7NsRct-dCEJc'}} 
                defaultCenter={} 
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